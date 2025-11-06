"use client";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-white px-4 min-h-screen flex flex-col items-center">
      <section className="text-center py-10 mt-20 privacy-policy">
        {/* 🩷 وسم من نحن */}
        <div className="flex justify-center items-center mb-4">
          <span className="flex items-center gap-2 border border-[#FF2B77] text-primary text-sm font-medium px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-[#FF2B77] rounded-full"></span>
            من نحن
          </span>
        </div>

        {/* 🩷 العنوان الرئيسي */}
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-800 flex justify-center items-center leading-snug">
          قصتنا تبدأ من <span className="text-primary mr-2">ذكرياتكم.</span>
          <img
            src="/icons/letter.svg"
            alt="letter"
            className="ml-2 w-6 h-6 relative top-[-5px]"
          />
        </h2>

        {/* ✨ الفقرة التعريفية */}
        <p className="text-[#888C92] max-w-3xl mx-auto mt-5 leading-relaxed text-[15px] md:text-[17px]">
          في YallaCheese، لا نطبع صورًا فحسب، بل نخلّد لحظاتكم ونحوّلها إلى تحف
          فنية تنبض بالمشاعر. انطلقت رحلتنا من رغبتنا في جعل طباعة الذكريات
          تجربة يومية سهلة وممتعة، تُعبر عنكم وتبقى قريبة من قلوبكم.
        </p>
      </section>

      {/* 🤝 About Us  */}
      <section className="relative w-full flex justify-center mb-10 p-8 md:ps-12">
        <div className="grid md:grid-cols-2 gap-18 w-full max-w-7xl items-start">
          {/* ✅ النص على اليمين */}
          <div className="text-right order-2 md:order-1 flex flex-col justify-start self-start">
            <h3 className="text-xl md:text-2xl font-medium text-secondary mb-4">
              احتفظ بلحظاتك الثمينة، واطبعها
              <span className="text-primary mr-2">بحب.</span>
            </h3>

            <p className="text-[#666666] leading-[2.2] mb-6">
              تأسست YallaCheese في الأردن عام 2018، لتكون منصّة الطباعة الرقمية
              الممتازة التي تُمكِّنك من تحويل صورك المفضلة إلى قطع فنية ملموسة،
              بخطوات بسيطة وسريعة عبر موقعنا أو تطبيقنا. سواء اخترت طباعة صورك
              على ورق فاخر، تقويمات، مكعبات خشبية، أو مغناطيس للثلاجة، فنحن نضمن
              لك جودة عالية، خصوصية تامة، وتجربة فريدة. ابدأ رحلتك الآن، وسنقوم
              بتوصيل طلبك حتى باب منزلك خلال أربعة أيام عمل كحد أقصى، مع خيار
              الدفع عند الاستلام.
            </p>

            <button className="bg-[#FF2B77] text-white px-8 py-2 rounded-[5px] text-sm font-medium transition hover:bg-primary/80 w-max">
              جرب خدماتنا
            </button>
          </div>

          {/* ✅ الصورة على اليسار */}
          <div className="relative w-full flex justify-center order-1 md:order-2 self-start">
            <img
              src="/images/yallachees-cover.svg"
              alt="YallaCheese cover"
              className="max-w-full md:max-w-[400px] lg:max-w-[480px]"
            />
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative text-center bg-white overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 flex justify-center items-center mb-12">
          التزامنا تجاه <span className="text-primary mr-2">عملائنا </span>
          <img
            src="/icons/letter.svg"
            alt="letter"
            className="ml-2 w-6 h-6 relative top-[-5px]"
          />
        </h2>
        <div>
          <img
            src="/images/about-clients.svg"
            alt="World Map"
            className="object-cover"
          />
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
