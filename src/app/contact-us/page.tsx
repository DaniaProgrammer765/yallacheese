"use client";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-white px-4 min-h-screen flex flex-col items-center">
      <section className="text-center py-12 mt-20 privacy-policy">
        <div className="flex justify-center items-center mb-4">
          <span className="flex items-center gap-2 border border-[#FF2B77] text-primary text-sm font-medium px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-[#FF2B77] rounded-full"></span>
            تواصل معنا{" "}
          </span>
        </div>
        <h2 className="text-xl md:text-4xl font-semibold text-gray-800 flex justify-center items-center leading-snug">
          نحن هنا للإجابة على كل{" "}
          <span className="text-primary mr-2">تساؤلاتك.</span>
          <img
            src="/icons/letter.svg"
            alt="letter"
            className="ml-2 w-6 h-6 relative top-[-5px]"
          />
        </h2>
        <p className="text-[#888C92] max-w-2xl mx-auto mt-3 leading-relaxed">
          نحن هنا لنستمع إليك بكل اهتمام، لا تتردد في إرسال رسالة، فريقنا جاهز
          دائماً لتقديم المساعدة والإجابة عن جميع استفساراتك بكل دقة واهتمام.
        </p>
      </section>
      {/* 💌 Contact Info Boxes */}
      <section className="px-6 md:px-20 mb-12 relative z-1">
        <div className="relative flex flex-col md:flex-row justify-between items-center bg-white rounded-2xl overflow-hidden md:divide-none md:divide-x shadow-lg">
          {/* ظل علوي */}
          <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-black/6 to-transparent"></span>
          {/* Email */}
          <div className="flex-1 text-center py-6 px-4 relative">
            <img src="/svg/location.svg" alt="" className="mx-auto mb-3" />
          </div>
          {/* 🔸 الخط لا يظهر على الموبايل */}
          <div className="hidden md:block">
            <img src="/svg/line.svg" alt="" className="mx-auto mb-3" />
          </div>
          {/* Phone */}
          <div className="flex-1 text-center py-6 px-4 relative">
            <img src="/svg/contact.svg" alt="" className="mx-auto mb-3" />
          </div>
          {/* 🔸 الخط لا يظهر على الموبايل */}
          <div className="hidden md:block">
            <img src="/svg/line.svg" alt="" className="mx-auto mb-3" />
          </div>
          {/* Location */}
          <div className="flex-1 text-center py-6 px-4 relative">
            <img src="/svg/email.svg" alt="" className="mx-auto mb-3" />
          </div>
        </div>
      </section>

      {/* 🤝 Contact Us + Form */}
      <section className="relative w-full flex justify-center mb-28">
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl items-start">
          {/* Right Text Section */}
          <div className="space-y-4 text-right">
            <img src="/icons/hand.svg" alt="hand" className="w-22 mb-2" />
            <h3 className="text-xl md:text-2xl font-medium text-secondary">
              تواصل معنا اليوم
            </h3>

            <div className="space-y-1">
              {[
                "نرحب بجميع استفساراتك واستشاراتك بكل سرور",
                "طريق الدعم مفتوح على مدار الساعة",
                "نسعد بمساعدتك لتحسين تجربتك",
                "الفريق هنا دائماً جاهز لخدمتك",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#FEF1F6] rounded-[4px] p-4 pr-4"
                >
                  <img src="/icons/check.svg" alt="صح" className="w-5 h-5" />
                  <p className="text-gray-700 text-right text-sm md:text-base">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Left Form Section */}
          <div className="relative w-full">
            <div className="bg-white shadow-md border border-pink-100 rounded-[12px] p-6 space-y-4 relative z-10">
              <div className="mb-4 text-right">
                <label className="block text-[#1B213E] text-sm font-medium mb-2 text-right mr-1">
                  الاسم الكامل*
                </label>
                <input
                  type="text"
                  placeholder="أدخل الاسم الكامل"
                  className="w-full border border-[#E3E3E3] rounded-[4px] p-3 text-[#7D7581] focus:outline-none focus:ring-2 focus:ring-[#FEF1F6]"
                />
              </div>
              <div className="mb-4 text-right">
                <label className="block text-[#1B213E] text-sm font-medium mb-2 text-right mr-1">
                  البريد الإلكتروني*{" "}
                </label>
                <input
                  type="email"
                  placeholder="أدخل البريد الإلكتروني"
                  className="w-full border border-[#E3E3E3] rounded-[4px] p-3 text-[#7D7581] focus:outline-none focus:ring-2 focus:ring-[#FEF1F6]"
                />
              </div>
              <div className="mb-4 text-right">
                <label className="block text-[#1B213E] text-sm font-medium mb-2 text-right mr-1">
                  رقم الهاتف *{" "}
                </label>
                <input
                  type="text"
                  placeholder="رقم الهاتف"
                  className="w-full border border-[#E3E3E3] rounded-[4px] p-3 text-[#7D7581] focus:outline-none focus:ring-2 focus:ring-[#FEF1F6]"
                />
              </div>
              <div className="mb-4 text-right">
                <label className="block text-[#1B213E] text-sm font-medium mb-2 text-right mr-1">
                  الرسالة *{" "}
                </label>
                <textarea
                  rows={3}
                  placeholder="أدخل الرسالة"
                  className="w-full border border-[#E3E3E3] rounded-[4px] p-3 text-[#7D7581] focus:outline-none focus:ring-2 focus:ring-[#FEF1F6]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF2B77] text-white font-book py-3 rounded-[4px]"
              >
                إرسال
              </button>
            </div>
          </div>
        </div>

        {/* 🌸 الخط الوردي خلف الفورم تمامًا */}
        <div className="absolute bottom-[-80px] inset-x-0 z-0">
          <img
            src="/svg/wide-line.svg"
            alt="wide pink line"
            className="w-screen h-auto object-cover"
          />
        </div>
      </section>

      {/* 🌍 Map Section */}
      <section className="relative text-center bg-white overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 flex justify-center items-center mb-12">
          نصل إليك أينما <span className="text-primary mr-2">كنت!</span>
          <img
            src="/icons/letter.svg"
            alt="letter"
            className="ml-2 w-6 h-6 relative top-[-5px]"
          />
        </h2>
        <div>
          <img src="/svg/world-map.svg" alt="World Map" className="" />
        </div>
      </section>

      {/* 🌸 Ready Section */}
      <section className="mt-10 mb-10 flex justify-center bg-white w-full">
        <div className="relative w-full max-w-6xl rounded-[45px] px-8 py-8 text-center text-white overflow-hidden ready-section">
          <h2 className="text-[42px] md:text-[86px] font-bold">
            هل أنت مستعدّ؟
          </h2>
          <p className="mb-8 text-sm md:text-base max-w-2xl mx-auto">
            لقد أصبح مستعدًّا لتجاربك القادمة! مع YallaCheese، تحوّل صورك
            المميزة إلى لحظات لا تُنسى
          </p>
          <div className="mx-auto w-max cursor-pointer">
            <img
              src="/svg/yesbtn.svg"
              alt="نعم"
              className="transition hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 🌸 Footer */}
      <Footer />
    </div>
  );
}
