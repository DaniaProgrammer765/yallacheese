"use client";

export default function AddressModal({ isAddressOpen, onCloseAddress }: any) {
  if (!isAddressOpen) return null; // 🔥 أهم سطر.. لعرض/إخفاء المودال

  return (
    <>
      {/* خلفية سوداء */}
      <div
        onClick={onCloseAddress}
        className="fixed inset-0 bg-black/40 z-40"
      ></div>

      {/* المودال */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-[20px] w-full max-w-[500px] p-6 relative shadow-lg overflow-hidden max-h-[90vh]">
          {/* عنوان + زر الإغلاق */}
          <div className="relative flex items-center justify-start mb-4">
            <button onClick={onCloseAddress} className="cursor-pointer">
              <img src="/icons/right-arrow.svg" />
            </button>
            <h2 className="absolute left-1/2 -translate-x-1/2 text-[18px] font-book text-basic-color">
              إضافة العنوان
            </h2>
          </div>
          {/* الخط تحت العنوان */}
          <div className="w-full h-[1px] bg-[#F3F4F6] mb-6"></div>

          {/* الاسم الكامل */}
          <div className="mb-4">
            <label className="block text-[14px] font-book text-basic-color mb-2">
              الاسم الكامل
            </label>
            <input
              type="text"
              placeholder="أدخل اسمك الكامل"
              className="w-full border rounded-[12px] px-4 py-3 text-[14px] input-style"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            />
          </div>

          {/* اختر الدولة */}
          <div className="mb-4">
            <label className="block text-[14px] font-book text-basic-color mb-0">
              اختر الدولة
            </label>
            <select
              className="w-full border rounded-lg px-4 py-3 text-[14px] bg-[#F4F4F6] text-[#73737C] outline-none"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <option>اختر الدولة</option>
            </select>
          </div>

          {/* رقم الهاتف */}
          <div className="mb-4">
            <label className="block text-[14px] font-book text-basic-color mb-2">
              رقم الهاتف
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value="+966"
                readOnly
                className="w-[90px] border rounded-[12px] px-4 py-3 text-[14px] input-style"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              />
              <input
                type="text"
                placeholder="أدخل رقم هاتفك"
                className="flex-1 border  rounded-[12px] px-4 py-3 text-[14px] input-style"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              />
            </div>
          </div>

          {/* اختر المدينة */}
          <div className="mb-4">
            <label className="block text-[14px] font-book text-basic-color mb-2">
              اختر المدينة
            </label>
            <select
              className="w-full border rounded-lg px-4 py-3 outline-none text-[14px] bg-[#F4F4F6] text-[#73737C]"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <option>اختر المدينة</option>
            </select>
          </div>

          {/* العنوان التفصيلي */}
          <div className="mb-5">
            <label className="block text-[14px] font-book text-basic-color mb-2">
              العنوان التفصيلي
            </label>
            <textarea
              placeholder="أدخل عنوانك التفصيلي (الحي، الشارع، رقم المنزل)"
              className="w-full border rounded-lg px-4 py-3 text-[14px] outline-none bg-[#F4F4F6] h-[90px] resize-none"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            ></textarea>
          </div>

          {/* زر الحفظ */}
          <button
            className="w-full text-white font-bold rounded-[12px] py-3 text-[15px]"
            style={{ background: "#FF2B77" }}
          >
            حفظ العنوان
          </button>
        </div>
      </div>
    </>
  );
}
