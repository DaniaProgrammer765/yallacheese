import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white shadow-md p-4 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="w-full relative mb-3 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="mb-1">{title}</h3>
      <p className="leading-relaxed">{description}</p>
    </div>
  );
}
