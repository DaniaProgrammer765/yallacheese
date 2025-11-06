"use client";

import Footer from "@/components/Footer";

export default function ReturnPolicy() {
  return (
    <div className="bg-white px-4 min-h-screen flex flex-col items-center w-full">
      <section className="text-center py-10 mt-20 privacy-policy">
        <div className="flex justify-center items-center mb-4">
          <span className="flex items-center gap-2 border border-[#FF2B77] text-primary text-sm font-medium px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-[#FF2B77] rounded-full"></span>
            الترجيع
          </span>
        </div>

        {/* 🩷 العنوان الرئيسي */}
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 flex justify-center items-center leading-snug">
          سياسة <span className="text-primary mr-2">الترجيع</span>
          <img
            src="/icons/letter.svg"
            alt="letter"
            className="ml-2 w-6 h-6 relative top-[-5px]"
          />
        </h2>

        {/* ✨ الفقرة التعريفية */}
        <p className="text-[#888C92] max-w-3xl mx-auto mt-5 leading-relaxed text-[15px] md:text-[17px]">
          نحن في Yalla Cheese نحرص على رضا عملائنا بشكل كامل، ونوفر سياسة ترجيع
          مرنة تضمن لكم تجربة تسوق آمنة ومريحة.
        </p>
      </section>

      <section className="bg-white text-secondary font-book text-[20px] w-full ">
        {/* فقرة الشراء بواسطة بطاقة الإعتماد */}
        <div className="mb-8">
          <p className="text-primary font-book text-2xl mb-4">
            عند الشراء بواسطة بطاقة الإعتماد
          </p>

          <div className="space-y-4 text-[20px]font-book leading-8 text-secondary">
            {/* البنود مع الأيقونات */}
            <div className="flex items-start gap-3">
              <img
                src="/icons/tick-square.svg"
                alt="tick"
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <span>
                سياسة الإفاقية لا يستطيع القطب إلا إذا تم النقاش مشترك بين
                العميل وموقع جميعها.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/icons/tick-square.svg"
                alt="tick"
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <span>
                لا يستطيع العميل المستردي في هذه البطاقة. يستطيع العميل استبدال
                المنتجات التي طلبها من واحدة صندوق آخر.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/icons/tick-square.svg"
                alt="tick"
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <span>
                يستطيع العميل استبدال المنتجات التي تستطيع نوع واحدة بنفس المنتج
                عن حال وجود عيوب بالطلب.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/icons/tick-square.svg"
                alt="tick"
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <span>يجب أن يخبر العميل موقع جميعها.</span>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/icons/tick-square.svg"
                alt="tick"
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <span>
                يتضمنه مع استخدامها أو إرفاق الطلب خليل كنشطة من أرقام الطلب
                بالتحليل مباشر.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <img
                src="/icons/tick-square.svg"
                alt="tick"
                className="w-5 h-5 mt-1 flex-shrink-0"
              />
              <span>
                التوصل عند التعلم عملية الدفع يمكن للعميل الوصول إلى المحتوى
                المشتركين مباشره.
              </span>
            </div>
          </div>
        </div>

        {/* فقرة الاتصال */}
        <div className="font-book mb-20">
          <span className="text-primary text-2xl font-book mb-6 text-right">
            إذا كانت لديك أي أسئلة بخصوص سياسة الإرجاع الخاصة بنا، فيرجى الاتصال
            بنا على:
          </span>

          <div className="space-y-4 text-[17px] text-secondary leading-8 text-right">
            {/* نموذج الاتصال */}
            <div className="flex gap-2 mt-4">
              <span> نموذج الاتصال</span>
              <span>:</span>
              <a
                href="/contact-us"
                className="underline hover:text-[#FF2B77] transition-colors duration-200"
              >
                صفحة اتصل بنا
              </a>
            </div>

            {/* البريد الإلكتروني */}
            <div className="flex gap-2">
              <span>البريد الإلكتروني</span>
              <span>:</span>
              <a
                href="mailto:contact@yallacheese.com"
                className=" underline hover:text-[#FF2B77] transition-colors duration-200 mx-1"
              >
                contact@yallacheese.com
              </a>
              .{" "}
            </div>

            {/* رقم الهاتف / واتس اب */}
            <div className="flex gap-2">
              <span>رقم الهاتف / واتس اب</span>
              <span>:</span>

              <a
                href="https://wa.me/962792080441"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline hover:text-[#FF2B77] transition-colors duration-200"
              >
                0792080441
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}
