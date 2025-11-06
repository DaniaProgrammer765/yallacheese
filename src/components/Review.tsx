import Image from "next/image";
import QuoteIcon from "/public/svg/quote.svg"; // أيقونة الاقتباس

interface ReviewProps {
  name: string;
  description: string;
  rating: number;
}

export default function Review({ name, description, rating }: ReviewProps) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
      ★
    </span>
  ));

  return (
    <div className="bg-white shadow-md review-cards flex flex-col justify-between">
      {/* أيقونة الاقتباس */}
      <div className="w-12 h-12 mb-4">
        <Image src={QuoteIcon} alt="quote" />
      </div>

      {/* نص الرأي */}
      <p className="text-[#333931] text-[23px] mb-6">{description}</p>

      {/* الاسم والنجوم */}
      <div className="flex flex-col items-start">
        <span className="text-[#67646A] font-semibold text-[12px] mb-1">{name}</span>
        <div className="flex">{stars}</div>
      </div>
    </div>
  );
}
