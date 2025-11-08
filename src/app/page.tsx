import Card from "@/components/Card";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HomePage() {
  const storiesCards = [
    {
      title: "صور بإطار جاهز",
      description: "حمّل 12 صورة تعبر عن كل شهر واحتفل بلحظاتك الجميلة.",
      image: "/images/frame1.png",
    },
    {
      title: "صور مطبوعة عادية",
      description:
        "صورك كما هي، بجودة عالية وبدون إضافات. مثالية للألبومات أو الإهداءات.",
      image: "/images/normal-photo.png",
    },
    {
      title: "صور مغناطيسية",
      description:
        "صورك تتحوّل إلى مغناطيسات تُلصق على الثلاجة أو أي سطح معدني.",
      image: "/images/magnetic.png",
    },
    {
      title: "الرزنامة السنوية",
      description: "حمّل 12 صورة تعبر عن كل شهر واحتفل بلحظاتك الجميلة.",
      image: "/images/year-calendar.png",
    },
    {
      title: "إطارات صور لاصقة",
      description: "صورك مطبوعة على إطارات تلتصق على الحائط دون مسامير.",
      image: "/images/sticky-frame.png",
    },
    {
      title: "لوحات صور خشبية",
      description:
        "صورك تُطبع على ألواح خشبية سميكة — لمسة ديكور أنيقة ودافئة.",
      image: "/images/wooden-board.png",
    },
    {
      title: "تقويم المكتب",
      description: "تقويم جميل يوضع على المكتب يحتوي على صورك المفضلة لكل شهر.",
      image: "/images/desk-calendar.png",
    },
    {
      title: "الرزنامة الشهرية",
      description:
        "كل شهر بصورة مختلفة — مثالية لتوثيق اللحظات على مدار السنة.",
      image: "/images/monthly-calendar.png",
    },
  ];
  const servicesCards = [
    {
      title: "رضا العملاء أولويتنا",
      description: "نقدّم تجربة مثالية تُرضي جميع العملاء دائمًا.",
      image: "/svg/lotite.svg",
    },
    {
      title: "جودة لا تُضاهى",
      description: "نستخدم أفضل الخامات وأدق تقنيات الطباعة.",
      image: "/svg/quality.svg",
    },
    {
      title: "شحن سريع وموثوق",
      description: "نوصلك بسرعة عالية وبأقصى درجات الأمان.",
      image: "/svg/shipping.svg",
    },
  ];
  const testimonials = [
    {
      id: 1,
      title: "سارة محمود",
      description: "تجربة رائعة! جودة الطباعة كانت ممتازة...",
      image: "/images/user1.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "ريم علي",
      description: "كانت هديتي مثالية! الطباعة أنيقة جدًا...",
      image: "/images/user2.jpg",
      rating: 4,
    },
    {
      id: 3,
      title: "أماني خالد",
      description: "التصميم كان مطابق للصورة تماماً...",
      image: "/images/user3.jpg",
      rating: 5,
    },
    {
      id: 4,
      title: "أماني خالد",
      description: "التصميم كان مطابق للصورة تماماً...",
      image: "/images/user3.jpg",
      rating: 5,
    },
    {
      id: 5,
      title: "أماني خالد",
      description: "التصميم كان مطابق للصورة تماماً...",
      image: "/images/user3.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="text-white relative overflow-hidden">
      {/* ===== خلفية الفيديو ===== */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/images/YallaCheese.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        <section className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            حوِّل ذكرياتك إلى قصة تُروى.
          </h1>
          <p className="max-w-xl mx-auto mb-6 text-style">
            حوّل صورك المميزة إلى مطبوعات أنيقة بجودة عالية وبكل سهولة. ثلاث
            خطوات فقط تفصلك عن الاحتفاظ بذكرياتك بطريقة تليق بها.
          </p>
          <button className="blur-btn-style bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition px-6 py-3 rounded-lg">
            ابدأ رحلتك الآن
          </button>
        </section>
      </div>

      {/* ===== قسم اللوحات ===== */}
      <section className="bg-white py-10 text-center text-gray-800 relative z-20">
        <h2 className="text-xl md:text-3xl text-secondary font-semibold mb-10 flex justify-center items-center">
          ابدأ في سرد قصصك <span className="text-primary mr-2">الآن!</span>
          <img
            src="/icons/letter.svg"
            alt=""
            className="mb-12 relative left-2"
          />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 max-w-6xl mx-auto">
          {storiesCards.map((card, i) => (
            <div
              key={i}
              className="bg-white photos-cards-style overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 p-3 rounded-[6px]"
              />
              <div className="p-4 text-center">
                <h3 className="card-title mb-2">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ===== قسم الخدمات ===== */}
      <section className="bg-white py-10 text-center text-gray-800 relative z-20">
        <h2 className="text-xl md:text-3xl text-secondary font-semibold mb-10 flex justify-center items-center">
          نحن هنا لتلبية{" "}
          <span className="text-primary flex mr-2"> احتياجاتك</span>
          <img
            src="/icons/letter.svg"
            alt=""
            className="mb-12 relative left-2"
          />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 max-w-6xl mx-auto">
          {servicesCards.map((card, i) => (
            <div
              key={i}
              className="bg-white services-cards-style overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 p-3 rounded-[6px]"
              />
              <div className="p-4 text-center">
                <h3 className="card-title mb-2">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ===== قسم الخطوات ===== */}
      <section className="bg-steps py-10 text-center text-gray-800 relative z-20">
        <h2 className="text-lg md:text-3xl text-secondary font-semibold mb-16 flex justify-center items-center">
          خطوات بسيطة... وذكرياتك تصبح{" "}
          <span className="text-primary mr-2">ملموسة!</span>
          <img
            src="/icons/letter.svg"
            alt=""
            className="mb-12 relative left-2"
          />
        </h2>

        <div className="relative max-w-5xl mx-auto px-6">
          <img
            src="/svg/stepsGroup.svg"
            alt="steps line"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full hidden md:block"
          />

          <div className="flex flex-col gap-20 relative">
            {/* الخطوة 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
                <img
                  src="/svg/step1.svg"
                  alt="step 1"
                  className="w-60 md:w-72"
                />
              </div>
              <div className="w-full md:w-1/2 order-2 md:order-1 text-right">
                <h4 className="text-xl text-primary font-bold mb-3">
                  اختر نوع المنتج و الصور
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>اضغط على نوع المنتج.</li>
                  <li>ادخل معرض الصور لاختيار الصور.</li>
                  <li>بعد اختيار الصور يتم توجيهك تلقائيًا للصفحة التالية.</li>
                </ul>
              </div>
            </div>

            {/* الخطوة 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                  src="/svg/step2.svg"
                  alt="step 2"
                  className="w-60 md:w-72"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center md:items-end md:mr-12 text-right">
                <h4 className=" md:self-center md:mr-8 text-xl text-primary font-bold mb-3">
                  تعديل الصور ومعاينتها
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>تظهر لك صفحة المعاينة لتعديل الصور المختارة.</li>
                  <li>يمكنك تحريك الصور أو تغيير الإطارات.</li>
                  <li>اضغط على “إتمام الطلب”.</li>
                </ul>
              </div>
            </div>

            {/* الخطوة 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 order-2 md:order-1 text-right">
                <h4 className="text-xl text-primary font-bold mb-3">
                  الدفع السريع
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>بعد إتمام الطلب، تظهر نافذة الدفع.</li>
                  <li>اختر الطريقة المناسبة وأكد عملية الدفع.</li>
                  <li>استمتع بتجربتك السلسة.</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-8 md:mb-0">
                <img
                  src="/svg/step3.svg"
                  alt="step 3"
                  className="w-60 md:w-72"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* كل صورة حكاية Section */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 hidden md:block">
          {/* --- TOP ROW (5 صور) --- */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="w-1/5 overflow-hidden rounded-2xl">
              <img
                src="/images/photo1.png"
                alt=""
                className="w-full h-40 object-cover object-left-top"
              />
            </div>

            <div className="w-1/5 overflow-hidden rounded-2xl">
              <img
                src="/images/photo2.png"
                alt=""
                className="w-full h-40 object-cover object-center"
              />
            </div>

            <div className="w-1/5 flex items-center justify-center relative">
              {/* كلمة "كل" كبيرة */}
              <h3 className="text-6xl md:text-8xl font-extrabold text-primary pointer-events-none">
                كل
              </h3>
            </div>

            <div className="w-1/5 overflow-hidden rounded-2xl">
              <img
                src="/images/photo3.png"
                alt=""
                className="w-full h-40 object-cover object-center"
              />
            </div>

            <div className="w-1/5 overflow-hidden rounded-2xl">
              {/* -ml لتقطيع اليمين جزئياً */}
              <img
                src="/images/photo4.png"
                alt=""
                className="w-full h-40 object-cover object-right-top"
              />
            </div>
          </div>

          {/* --- MIDDLE ROW (3 صور) --- */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="overflow-hidden rounded-2xl w-44 h-40">
              <img
                src="/images/photo7.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className=" md:text-7xl font-bold text-primary pointer-events-none">
                صورة
              </h3>
            </div>

            <div className="w-1/2 flex items-center justify-center relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl ">
                  <img
                    src="/images/photo6.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full overflow-hidden rounded-2xl">
                  <img
                    src="/images/photo5.png"
                    alt=""
                    className="w-full h-40 object-cover object-right"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- BOTTOM ROW (3 صور) --- */}
          <div className="flex items-center justify-between gap-4 mt-6">
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src="/images/photo8.png"
                alt=""
                className="w-full h-40 object-cover object-right"
              />
            </div>
            <h3 className="text-5xl md:text-7xl font-extrabold text-primary pointer-events-none">
              حكاية
            </h3>
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src="/images/photo9.png"
                alt=""
                className="w-full h-40 object-cover object-left"
              />
            </div>
            {/* كلمة "حكاية" كبيرة على اليسار */}
            {/* صف صغير من الصور وسط */}
            <div className="flex gap-3">
              <div className="overflow-hidden rounded-2xl w-36 h-40">
                <img
                  src="/images/photo10.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl w-36 h-40">
                <img
                  src="/images/photo11.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-grid md:hidden">
          <img src="/images/photo1.png" alt="" />
          <img src="/images/photo2.png" alt="" />
          <h3>كل</h3>
          <img src="/images/photo3.png" alt="" />
          <img src="/images/photo4.png" alt="" />
          <img src="/images/photo5.png" alt="" />
          <h3>صورة</h3>
          <img src="/images/photo6.png" alt="" />
          <img src="/images/photo7.png" alt="" />
          <img src="/images/photo8.png" alt="" />
          <h3>حكاية</h3>
          <img src="/images/photo10.png" alt="" />
          <img src="/images/photo11.png" alt="" />
        </div>
      </section>
      {/* ===== قسم كل ما تحتاج لمعرفته قبل الطلب ===== */}
      <section className="bg-[#FBFBFB] py-10 text-gray-800 relative z-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl md:text-3xl text-secondary font-semibold text-center mb-12 flex justify-center items-center">
            كل ما تحتاج لمعرفته قبل <span className="text-primary">الطلب.</span>
            <img
              src="/icons/letter.svg"
              alt=""
              className="mb-12 relative left-2"
            />
          </h2>

          <div className="space-y-0">
            {/* السؤال 1 */}
            <details className="group shipping-qus-section border border-[#F1F2F9] hover:bg-pink-100 transition cursor-pointer">
              <summary className="flex justify-between items-center p-9 text-lg font-semibold headers">
                <div className="flex items-center gap-3">
                  <img
                    src="/icons/worldwide.svg"
                    alt="worldwide icon"
                    className="w-8 h-8"
                  />
                  <span>كم يستغرق الشحن؟</span>
                </div>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <Image
                    src="/icons/arrow1.svg"
                    alt="arrow pink"
                    width={20}
                    height={20}
                    className="transition-transform duration-300"
                  />
                </span>
              </summary>
              <div className="px-12 pb-4 text-[#6F6C8F]">
                عملية الشحن تستغرق عادة من 3 إلى 5 أيام عمل، حسب المدينة وطريقة
                التوصيل.
              </div>
            </details>

            {/* السؤال 2 */}
            <details className="group bg-white border border-[#F1F2F9] hover:bg-gray-50 transition cursor-pointer">
              <summary className="flex justify-between items-center p-9 text-lg font-semibold headers">
                <div className="flex items-center gap-3">
                  <img
                    src="/icons/user.svg"
                    alt="user icon"
                    className="w-8 h-8"
                  />
                  <span>هل يتم الشحن خارج البلاد؟</span>
                </div>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <Image
                    src="/icons/arrow2.svg"
                    alt="arrow pink"
                    width={20}
                    height={20}
                    className="transition-transform duration-300"
                  />
                </span>{" "}
              </summary>
              <div className="px-12 pb-4 text-[#6F6C8F]">
                نعم، نقوم بالشحن إلى عدد من الدول عبر شركات شحن موثوقة برسوم
                إضافية بسيطة.
              </div>
            </details>

            {/* السؤال 3 */}
            <details className="group border border-[#F1F2F9] bg-white hover:bg-gray-50 transition cursor-pointer">
              <summary className="flex justify-between items-center p-9 text-lg font-semibold headers">
                <div className="flex items-center gap-3">
                  <img
                    src="/icons/user.svg"
                    alt="return icon"
                    className="w-8 h-8"
                  />
                  <span>هل يمكنني استرجاع الطلب؟</span>
                </div>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <Image
                    src="/icons/arrow2.svg"
                    alt="arrow pink"
                    width={20}
                    height={20}
                    className="transition-transform duration-300"
                  />
                </span>{" "}
              </summary>
              <div className="px-12 pb-4 text-[#6F6C8F]">
                يمكن استرجاع الطلب فقط في حال وجود خلل في الطباعة أو تلف أثناء
                الشحن.
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-3xl font-semibold text-center text-secondary mb-12 flex justify-center items-center">
            آراء صادقة من{" "}
            <span className="text-primary mr-2">عملاء سعداء !</span>
            <img
              src="/icons/letter.svg"
              alt=""
              className="mb-12 relative left-2"
            />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {testimonials.map((t) => (
              <Review
                key={t.id}
                name={t.title}
                description={t.description}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 flex justify-center bg-white">
        {/* المستطيل */}
        <div className="relative w-full max-w-5xl rounded-[45px] px-8 py-8 text-center text-white overflow-hidden ready-section">
          <h2 className="text-[86px] font-bold">هل أنت مستعدّ؟</h2>
          <p className="mb-8 text-base max-w-2xl mx-auto">
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

      <Footer />
    </div>
  );
}
