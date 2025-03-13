
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function ProductCard({ imageSrc, title, description }: ProductCardProps) {
  return (
    <div
      className="w-full max-w-[20rem] sm:max-w-sm mx-auto bg-gradient-to-br from-indigo-100 via-white to-blue-100 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative w-full h-40 sm:h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800">
          {title}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-gray-600 text-center">
          {description}
        </p>
        <button
          className="mt-3 sm:mt-4 w-full bg-indigo-500 text-white py-1.5 sm:py-2 rounded-md transition-colors duration-200 hover:bg-indigo-600 hover:scale-102 text-sm sm:text-base"
        >
          View More
        </button>
      </div>
    </div>
  );
}