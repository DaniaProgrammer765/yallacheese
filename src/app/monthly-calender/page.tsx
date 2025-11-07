"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function buildMonthGrid(year: number, monthIndex: number) {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysCount = new Date(year, monthIndex + 1, 0).getDate();
  const cells: Array<number | null> = [];

  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysCount; d++) cells.push(d);
  while (cells.length < 42) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let w = 0; w < 6; w++) {
    weeks.push(cells.slice(w * 7, w * 7 + 7));
  }
  return weeks;
}

export default function MonthlyCalendarPage() {
  const router = useRouter();
  const [showUpload, setShowUpload] = useState(false);
  const [monthImages, setMonthImages] = useState<(string | null)[]>(
    new Array(12).fill(null)
  );
  const [monthFiles, setMonthFiles] = useState<(File | null)[]>(
    new Array(12).fill(null)
  );
  const [selectedEffect, setSelectedEffect] = useState("normal");
  const [selectedSize, setSelectedSize] = useState("wide");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [showEffectsBar, setShowEffectsBar] = useState(false);
  const [showSizesBar, setShowSizesBar] = useState(false);
  const [showColorBar, setShowColorBar] = useState(false);

  const currentYear = new Date().getFullYear();

  // ✅ تحميل صور متعددة
  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const arr = Array.from(files);
    const filledCount = monthImages.filter(Boolean).length;
    if (arr.length + filledCount > 12) {
      alert("الرجاء رفع ما مجموعه 12 صورة كحد أقصى.");
      return;
    }
    const newImgs = [...monthImages];
    const newFiles = [...monthFiles];
    let targetIndex = newImgs.findIndex((v) => v === null);
    for (const f of arr) {
      if (targetIndex === -1) break;
      const url = URL.createObjectURL(f);
      newImgs[targetIndex] = url;
      newFiles[targetIndex] = f;
      targetIndex = newImgs.findIndex((v) => v === null);
    }
    setMonthImages(newImgs);
    setMonthFiles(newFiles);
    setShowUpload(false);
    e.currentTarget.value = "";
  };

  // ✅ استبدال صورة لشهر محدد
  const handleReplaceImage = (index: number, f: File | null) => {
    if (!f) return;
    const newImgs = [...monthImages];
    const newFiles = [...monthFiles];
    const url = URL.createObjectURL(f);
    newImgs[index] = url;
    newFiles[index] = f;
    setMonthImages(newImgs);
    setMonthFiles(newFiles);
  };

  // ✅ حذف صورة
  const removeImage = (index: number) => {
    const newImgs = [...monthImages];
    const newFiles = [...monthFiles];
    if (newImgs[index]) URL.revokeObjectURL(newImgs[index] as string);
    newImgs[index] = null;
    newFiles[index] = null;
    setMonthImages(newImgs);
    setMonthFiles(newFiles);
  };

  const filledCount = monthImages.filter(Boolean).length;
  const allFilled = filledCount === 12;

  // ✅ فلاتر الصور
  const effects = {
    normal: "none",
    bright: "brightness(1.25) contrast(1.1)",
    dark: "brightness(0.6) contrast(1.1)",
    dramatic: "contrast(1.5) saturate(0.8)",
    silver: "grayscale(0.8) contrast(1.2)",
  };

  // ✅ الألوان والقياسات
  const sizes = {
    basic: { width: 280, height: 240 },
    wide: { width: 300, height: 220 },
    tall: { width: 260, height: 300 },
  };

  return (
    <section className="relative bg-white text-gray-800 pt-[100px] px-4 min-h-screen flex flex-col items-center justify-start">
      {/* زر إنشاء الرزنامة */}
      {!monthImages.some(Boolean) && (
        <button
          onClick={() => setShowUpload(true)}
          className="flex flex-col items-center justify-center focus:outline-none mt-20"
        >
          <div className="w-40 h-40 rounded-full bg-gradient-to-b from-pink-300 to-pink-500 flex items-center justify-center shadow-lg transition-transform hover:scale-105">
            <span className="text-white text-6xl font-bold">+</span>
          </div>
          <span className="mt-3 text-gray-700 font-medium">
            ابدأ بإنشاء رزنامة
          </span>
        </button>
      )}
      {/* ✅ شبكة الأشهر */}
      {monthImages.some(Boolean) && (
        <div className="max-w-6xl w-full mx-auto mt-10 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {MONTHS.map((m, idx) => {
              const weeks = buildMonthGrid(currentYear, idx);
              const img = monthImages[idx];
              return (
                <div
                  key={m}
                  className={`relative bg-white border border-[#E2E2E2] shadow-sm p-3 flex flex-col transition-all overflow-hidden`}
                  style={{
                    backgroundColor,
                    color: "#222",
                    width: sizes[selectedSize as keyof typeof sizes].width,
                  }}
                >
                  <div className="w-full h-[220px] bg-gray-200 overflow-hidden">
                    {img ? (
                      <img
                        src={img}
                        alt={`${m}-${currentYear}`}
                        className="w-full h-full object-cover"
                        style={{
                          filter:
                            effects[
                              selectedEffect as keyof typeof effects
                            ],
                        }}
                      />) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        صورة الشهر
                      </div>
                    )}
                  </div>

                  {/* العنوان */}
                  <div className="px-4 pt-4 flex flex-col gap-2 self-end">
                    <div className="flex">
                     <h3 className="text-lg font-medium mt-0.5 ml-1">{m}</h3>
                    <h2 className="text-2xl font-semibold leading-none">{String(idx + 1).padStart(2, "0")}</h2>
                    </div>
                    <div className="w-18 h-[2px] bg-gray-800 mx-auto -mt-2 ml-3 mb-3" />
                  </div>

                  {/* جدول الأيام */}
                  <div className="px-4 pb-3 content-ltr">
                    <div className="grid grid-cols-7 gap-1 text-[11px] text-center text-gray-600 mb-2 font-semibold">
                      {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                        <div
                          key={d}
                          className={`uppercase ${
                            d === "FRI" ? "text-[#3EB489]" : ""
                          }`}
                        >
                          {d}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {weeks.flat().map((day, i) => {
                        const col = i % 7;
                        const isFri = col === 5;
                        return (
                          <div
                            key={i}
                            className={`flex items-center justify-center text-xs ${
                              day
                                ? isFri
                                  ? "text-[#3EB489]"
                                  : "text-gray-800"
                                : "text-gray-300"
                            }`}
                          >
                            {day ?? ""}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* أسفل البطاقة */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between content-ltr text-xs text-gray-500">
                    {/* أزرار اليسار */}
                    <div className="flex gap-3">
                      <label
                        htmlFor={`file-${idx}`}
                        className="cursor-pointer hover:text-pink-500"
                      >
                        تغيير
                      </label>
                      <input
                        id={`file-${idx}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0] ?? null;
                          if (f) handleReplaceImage(idx, f);
                        }}
                      />
                      <button
                        onClick={() => removeImage(idx)}
                        className="hover:text-red-500"
                      >
                        حذف
                      </button>
                    </div>

                    {/* السنة */}
                    <span className="font-semibold text-[16px] text-black">{currentYear}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
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
                htmlFor="fileInputBulk"
                className="flex items-center border-[#DDDDDD] gap-3 border rounded-[12px] px-4 py-3 hover:bg-pink-50 transition cursor-pointer"
              >
                <Image
                  src="/icons/upload-img.svg"
                  alt="upload"
                  width={24}
                  height={24}
                />
                <span className="text-gray-700 font-medium">
                  تحميل الصور (حتى 12)
                </span>
              </label>
              <input
                id="fileInputBulk"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleBulkUpload}
              />
               <button
                onClick={() => alert("سيتم ربطه لاحقًا مع Google Photos")}
                className="flex items-center border-[#DDDDDD] gap-3 border rounded-[12px] px-4 py-3 hover:bg-gray-50 transition"
              >
                <Image
                  src="/icons/google-photos.svg"
                  alt="google photos"
                  width={24}
                  height={24}
                />
                <span className="text-gray-700 font-medium">جوجل صور</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ✅ الشريط السفلي كما في Products */}
      {monthImages.some(Boolean) && (
        <div className="bg-white content-ltr rounded-2xl shadow-lg flex items-center justify-around w-[390px] py-4 px-3 mt-6 mb-4">
          {!showEffectsBar && !showSizesBar && !showColorBar ? (
            <>
              <button
                className="flex flex-col items-center text-pink-500 cursor-pointer"
                onClick={() => setShowUpload(true)}
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
              </button>

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