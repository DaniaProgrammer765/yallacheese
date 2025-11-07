"use client";

export const dynamic = "force-dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import Cropper from "react-easy-crop";
import { useState, useCallback } from "react";
import Header from "@/components/header";
import type { Area } from "react-easy-crop";
import "@/styles/range.css";

export default function CropPage() {
  const router = useRouter();
  const params = useSearchParams();
  const imageUrl = params.get("img");

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [captions, setCaptions] = useState<string>();

  const onCropComplete = useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleDone = async () => {
    if (!imageUrl || !croppedAreaPixels) return;

    const image = await loadImage(imageUrl);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const { width, height, x, y } = croppedAreaPixels;
    canvas.width = width;
    canvas.height = height;

    ctx?.drawImage(image, x, y, width, height, 0, 0, width, height);
    const croppedDataUrl = canvas.toDataURL("image/jpeg");

    localStorage.setItem("croppedImage", croppedDataUrl);
    router.back();
  };

  const handleCancel = () => router.push("/products");

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-between"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #FFDCE8)",
      }}
    >
      <Header />

      {/* ✅ الكرت */}
      <div className="flex flex-col items-center justify-center w-full px-4 mt-40 mb-20">
        {imageUrl && (
          <>
            <div className="bg-white border border-[#E2E2E2] shadow-sm p-3 w-[280px] flex flex-col items-center">
              {/* منطقة القص */}
              <div className="relative w-[250px] h-[250px] overflow-hidden bg-gray-50">
                <Cropper
                  image={imageUrl}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  cropShape="rect"
                  showGrid={false}
                />
              </div>
                <input
                type="text"
                placeholder="أضف نصًا هنا"
                value={captions || ""}
                onChange={(e) => setCaptions(e.target.value)}
                className="mt-3 text-center text-sm text-gray-700 border-none focus:border-pink-400 outline-none w-full pb-1 placeholder:text-gray-400"
              />
            </div>

            {/* شريط التكبير/التصغير */}
            <div className="w-[280px] mt-4">
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full custom-range"
              />
             <div className="flex justify-between items-center px-2 mt-6">
               <span className="text-secondary text-[13px] font-book">
                اسحب لتعديل الاقتصاص
                </span>
                <button
                  onClick={handleDone}
                  className="text-xs text-[#FF2B77] font-book px-3 py-1 cursor-pointer"
                  style={{ backgroundColor: "rgba(255, 43, 119, 0.25)" }}
                >
                  تم
                </button>
               
              </div>
            </div>
          </>
        )}
      </div>

      {/* ✅ شريط الأدوات السفلي */}
      {/* <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white content-ltr rounded-2xl shadow-lg flex items-center justify-around w-[360px] py-4 px-3">
        <button
          className="flex flex-col items-center text-gray-600"
          onClick={handleCancel}
        >
          <div className="border border-[#F1F2F9] p-3  rounded-[16px] mb-2">
            <Image src="/icons/delete.svg" alt="flag" width={24} height={24} />
          </div>
          <span className="text-xs"> حذف</span>
        </button>
        <button className="flex flex-col items-center text-gray-600">
          <div className="border border-[#F1F2F9] p-3 rounded-[16px] mb-2">
            <Image src="/icons/brush.svg" alt="brush" width={24} height={24} />
          </div>
          <span className="text-xs">تأثيرات</span>
        </button>

        <button className="flex flex-col items-center text-gray-600">
          <div className="border border-[#F1F2F9] p-3  rounded-[16px] mb-2">
            <Image src="/icons/ruler.svg" alt="ruler" width={24} height={24} />
          </div>
          <span className="text-xs">القياسات</span>
        </button>

        <button className="flex flex-col items-center text-gray-600">
          <div className="border border-[#F1F2F9] p-3  rounded-[16px] mb-2">
            <Image src="/icons/flag.svg" alt="flag" width={24} height={24} />
          </div>
          <span className="text-xs">لون المنتج</span>
        </button>
      </div> */}
    </section>
  );
}

async function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = url;
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
  });
}
