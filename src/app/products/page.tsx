"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Products() {
  const [showUpload, setShowUpload] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [captions, setCaptions] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showEffectsBar, setShowEffectsBar] = useState(false);
  const [showSizesBar, setShowSizesBar] = useState(false); // ✅ شريط القياسات
  const [showColorBar, setShowColorBar] = useState(false); // ✅ شريط الألوان
  const [selectedEffect, setSelectedEffect] = useState<string>("normal");
  const [selectedSize, setSelectedSize] = useState<string>("basic"); // ✅ القياس الحالي
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF"); // ✅ لون الخلفية الافتراضي

  const router = useRouter();

  // تحميل الصور
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...urls]);
      setCaptions((prev) => [...prev, ...Array(files.length).fill("")]);
      setShowUpload(false);
    }
  };

  // تحديث النص
  const handleCaptionChange = (index: number, value: string) => {
    const updated = [...captions];
    updated[index] = value;
    setCaptions(updated);
  };

  // ✅ الفلاتر الممكنة
  const effects = {
    normal: "none",
    bright: "brightness(1.25) contrast(1.1)",
    dark: "brightness(0.6) contrast(1.1)",
    dramatic: "contrast(1.5) saturate(0.8)",
    silver: "grayscale(0.8) contrast(1.2)",
  };

  // ✅ القياسات المتاحة
  const sizes = {
    basic: { width: 260, height: 250 },
    wide: { width: 280, height: 230 },
    tall: { width: 240, height: 300 },
    small: { width: 220, height: 180 },
  };
  // ✅ تحديد إن كانت الخلفية غامقة أو فاتحة
  const isDarkBackground = (color: string) => {
    const c = color.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };
  const darkBg = isDarkBackground(backgroundColor);
  const cardBg = backgroundColor; // نفس اللون المختار تمامًا
  const textColor = darkBg ? "#FFFFFF" : "#222222";

  return (
    <section className="relative bg-white text-gray-800 pt-[100px] px-4 min-h-screen flex flex-col items-center justify-start products-background">
      {/* زر الإنشاء الأول */}
      {!images.length && (
        <button
          onClick={() => setShowUpload(true)}
          className="flex flex-col items-center justify-center focus:outline-none mt-40"
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-b from-pink-300 to-pink-500 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
            <span className="text-white text-6xl font-bold">+</span>
          </div>
          <span className="mt-3 text-gray-700 font-medium">ابدأ بالإنشاء</span>
        </button>
      )}
      {/* عرض الصور داخل كروت */}
      {images.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6 mt-10 w-full max-w-8xl mb-16">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative bg-white border border-[#E2E2E2] shadow-sm p-3 flex flex-col items-center transition-all"
              style={{
                width: `${sizes[selectedSize as keyof typeof sizes].width}px`,
                backgroundColor: cardBg,
              }}
            >
              {/* 🔴 زر حذف الصورة */}
              <button
                onClick={() => {
                  const newImages = images.filter((_, index) => index !== i);
                  const newCaptions = captions.filter(
                    (_, index) => index !== i
                  );
                  setImages(newImages);
                  setCaptions(newCaptions);
                }}
                className="absolute top-[-3px] right-[-5px] p-1 hover:scale-110 transition-all duration-200"
                title="حذف الصورة"
              >
                <Image src="/icons/close.svg" alt="" width={14} height={14} />
              </button>

              {/* الصورة */}
              <div
                className="overflow-hidden transition-all duration-300 relative rounded-none"
                style={{
                  width: "100%",
                  height: `${
                    sizes[selectedSize as keyof typeof sizes].height
                  }px`,
                }}
              >
                <Image
                  src={src}
                  alt={`image-${i}`}
                  width={260}
                  height={250}
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{
                    filter: effects[selectedEffect as keyof typeof effects],
                  }}
                />
              </div>

              {/* النص */}
              <input
                type="text"
                placeholder="أضف نصًا هنا"
                value={captions[i] || ""}
                onChange={(e) => handleCaptionChange(i, e.target.value)}
                style={{ color: textColor }}
                className="mt-3 text-center text-sm border-none focus:border-pink-400 outline-none w-full pb-1 placeholder:text-gray-400 bg-transparent"
              />
              {/* ✏️ أيقونة القلم للتعديل */}
              <button
                onClick={() =>
                  router.push(`/crop?img=${encodeURIComponent(src)}`)
                }
                className="absolute bottom-4 right-2 p-1 hover:scale-110 transition-all duration-200"
                title="تعديل الصورة"
              >
                <Image
                  src="/icons/edit.svg"
                  alt="edit"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* مودال تحميل الصور */}
      {showUpload && (
        <div
          onClick={() => setShowUpload(false)}
          className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-t-3xl p-6 w-full max-w-md shadow-2xl animate-slide-up"
          >
            <div className="flex flex-col gap-3">
              <label
                htmlFor="fileInput"
                className="flex items-center border-[#DDDDDD] justify-between border rounded-[12px] px-4 py-3 hover:bg-pink-50 transition cursor-pointer"
              >
                <span className="text-gray-700 font-medium">تحميل الصور</span>
                <Image
                  src="/icons/upload-img.svg"
                  alt="upload"
                  width={24}
                  height={24}
                />
              </label>
              <input
                id="fileInput"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              <button
                onClick={() => alert("سيتم ربطه لاحقًا مع Google Photos")}
                className="flex items-center border-[#DDDDDD] justify-between border rounded-[12px] px-4 py-3 hover:bg-gray-50 transition"
              >
                <span className="text-gray-700 font-medium">جوجل صور</span>
                <Image
                  src="/icons/google-photos.svg"
                  alt="google photos"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ الشريط السفلي */}
      {images.length > 0 && (
        <div className="bg-white content-ltr rounded-2xl shadow-lg flex items-center justify-around w-[390px] py-4 px-3 mt-6 mb-4">
          {/* ✅ الشريط الرئيسي */}
          {!showEffectsBar && !showSizesBar && !showColorBar ? (
            <>
              <label
                className="flex flex-col items-center text-pink-500 cursor-pointer"
                onClick={() => setShowUpload(true)} // ✅ بدل فتح صفحة crop
              >
                <div className="bg-pink-100 p-3 rounded-[16px] mb-2">
                  <Image
                    src="/icons/plus.svg"
                    alt="plus"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-xs">إضافة صور</span>
              </label>

              <button
                className="flex flex-col items-center text-gray-600 cursor-pointer"
                onClick={() => setShowEffectsBar(true)}
              >
                <div className="border border-[#F1F2F9] p-3 rounded-[16px] mb-2">
                  <Image
                    src="/icons/brush.svg"
                    alt="brush"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-xs">تأثيرات</span>
              </button>

              <button
                className="flex flex-col items-center text-gray-600 cursor-pointer"
                onClick={() => setShowSizesBar(true)}
              >
                <div className="border border-[#F1F2F9] p-3 rounded-[16px] mb-2">
                  <Image
                    src="/icons/ruler.svg"
                    alt="ruler"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-xs">القياسات</span>
              </button>

              <button
                className="flex flex-col items-center text-gray-600 cursor-pointer"
                onClick={() => setShowColorBar(true)}
              >
                <div className="border border-[#F1F2F9] p-3 rounded-[16px] mb-2">
                  <Image
                    src="/icons/flag.svg"
                    alt="flag"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-xs">لون المنتج</span>
              </button>
            </>
          ) : showColorBar ? (
            // 🎨 شريط اختيار اللون
            <div className="flex flex-col w-[390px] gap-3">
              <div className="flex justify-between items-center px-2">
                <button
                  onClick={() => setShowColorBar(false)}
                  className="text-xs text-[#FF2B77] font-book px-3 py-1 rounded-[7px] cursor-pointer"
                  style={{ backgroundColor: "rgba(255, 43, 119, 0.25)" }}
                >
                  تم
                </button>
                <span className="text-secondary text-[13px] font-book">
                  اختيار لون المنتج
                </span>
              </div>

              <div className="flex items-center justify-between w-full gap-3 px-4">
                {[
                  { id: "white", color: "#FFFFFF" },
                  { id: "black", color: "#000000" },
                  { id: "pink", color: "#FFA1C3" },
                  { id: "blue", color: "#D6E6FB" },
                  { id: "green", color: "#C4DBDA" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setBackgroundColor(c.color)}
                    className={`w-[50px] h-[50px] rounded-full border-2 cursor-pointer ${
                      backgroundColor === c.color
                        ? "border-pink-500 scale-110"
                        : "border-[#DDD]"
                    } transition-all`}
                    style={{ backgroundColor: c.color }}
                  />
                ))}
              </div>
            </div>
          ) : showEffectsBar ? (
            // ✅ شريط التأثيرات
            <div className="flex flex-col w-full gap-3 px-2">
              <div className="flex justify-between items-center px-2">
                <button
                  onClick={() => setShowEffectsBar(false)}
                  className="text-xs text-[#FF2B77] font-book px-3 py-1 rounded-[7px] cursor-pointer"
                  style={{ backgroundColor: "rgba(255, 43, 119, 0.25)" }}
                >
                  تم
                </button>
                <span className="text-secondary text-[13px] font-book">
                  اختيار الثيم
                </span>
              </div>
              <div className="flex items-center content-ltr justify-between w-full gap-3 px-4">
                {[
                  {
                    id: "normal",
                    label: "طبيعي",
                    icon: "/icons/theme-normal.svg",
                  },
                  {
                    id: "bright",
                    label: "مشرق",
                    icon: "/icons/theme-bright.svg",
                  },
                  { id: "dark", label: "مظلم", icon: "/icons/theme-dark.svg" },
                  {
                    id: "dramatic",
                    label: "درامي",
                    icon: "/icons/theme-dramatic.svg",
                  },
                  {
                    id: "silver",
                    label: "فضي",
                    icon: "/icons/theme-silver.svg",
                  },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedEffect(t.id)}
                    className={`flex flex-col items-center text-xs cursor-pointer ${
                      selectedEffect === t.id
                        ? "text-pink-500"
                        : "text-gray-600"
                    }`}
                  >
                    <div
                      className={`w-[50px] h-[50px] flex items-center justify-center border overflow-hidden ${
                        selectedEffect === t.id
                          ? "border-pink-400 bg-pink-50"
                          : "border-[#F1F2F9]"
                      }`}
                    >
                      <Image
                        src={t.icon}
                        alt={t.label}
                        width={0}
                        height={0}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // ✅ شريط القياسات
            <div className="flex flex-col w-[390px] gap-3">
              <div className="flex justify-between items-center px-2">
                <button
                  onClick={() => setShowSizesBar(false)}
                  className="text-xs text-[#FF2B77] font-book px-3 py-1 rounded-[7px] cursor-pointer"
                  style={{ backgroundColor: "rgba(255, 43, 119, 0.25)" }}
                >
                  تم
                </button>
                <span className="text-secondary text-[13px] font-book">
                  اختيار القياس
                </span>
              </div>

              <div className="flex items-center justify-between content-rtl w-full gap-3 px-2">
                {[
                  {
                    id: "basic",
                    size: "10.5×9 cm",
                    price: "2.25 ريال",
                    label: "أساسي",
                    img: "/icons/size-basic.svg",
                  },
                  {
                    id: "wide",
                    size: "9×10.5 cm",
                    price: "2.25 ريال",
                    label: "واسع",
                    img: "/icons/size-wide.svg",
                  },
                  {
                    id: "tall",
                    size: "11.7×7.7 cm",
                    price: "2.25 ريال",
                    label: "طويل",
                    img: "/icons/size-tall.svg",
                  },
                  {
                    id: "small",
                    size: "9×5.7 cm",
                    price: "2.25 ريال",
                    label: "صغير",
                    img: "/icons/size-small.svg",
                  },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSize(s.id)}
                    className={`flex flex-col items-center text-xs cursor-pointer ${
                      selectedSize === s.id ? "text-pink-500" : "text-gray-600"
                    }`}
                  >
                    <div
                      className={`w-[72px] h-[80px] flex flex-col items-center justify-center border overflow-hidden ${
                        selectedSize === s.id
                          ? "border-pink-400 bg-pink-50"
                          : "border-[#F1F2F9]"
                      }`}
                    >
                      <Image src={s.img} alt={""} width={17} height={17} />
                      <span className="mt-1">{s.size}</span>
                      <div className="px-2 py-0.5">{s.price}</div>
                    </div>
                    <span className="mt-1">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
