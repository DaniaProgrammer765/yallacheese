import Image from "next/image";
import QuoteIcon from "/public/svg/quote.svg"; // أيقونة الاقتباس
interface ReviewProps {
  name: string;
  description: string;
  rating: number;
}

export default function Review({ name, description, rating }: ReviewProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
    >
      ★
    </span>
  ));

  return (
    <div className="bg-white shadow-md review-cards flex flex-col justify-between p-6">
      {/* أيقونة الاقتباس في اليسار */}
      <div
        className="flex justify-start ltr:justify-start rtl:justify-start"
        dir="ltr"
      >
        <div className="w-12 h-12">
          <Image src={QuoteIcon} alt="quote" className="block" />
        </div>
      </div>

      {/* نص الرأي مباشرة تحتها بدون مسافة */}
      <p className="text-[#333931] text-[23px] mt-0 mb-6 leading-snug">
        {description}
      </p>

      {/* الاسم والنجوم */}
      <div className="flex flex-col items-end">
        <span className="text-[#67646A] font-semibold text-[12px] mb-1">
          {name}
        </span>
        <div className="flex">{stars}</div>
      </div>
    </div>
  );
}
