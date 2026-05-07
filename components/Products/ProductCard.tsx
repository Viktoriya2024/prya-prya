"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  weight: string;
  category: string;
  slug: string;
}

export default function ProductCard({
  id,
  name,
  description,
  image,
  weight,
  category,
  slug,
}: ProductCardProps) {
  return (
    <Link href={`/products/${category}/${slug}`}>
      <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
        {/* Product Image Container */}
        <div className="relative w-full h-56 sm:h-64 md:h-72 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col">
          {/* Weight Badge */}
          <div className="inline-flex w-fit mb-3">
            <span className="px-3 py-1 text-xs sm:text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">
              {weight}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 flex-1">
            {description}
          </p>

          {/* Details Button */}
          <button className="mt-auto w-full py-2 sm:py-2.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform group-hover:scale-105 active:scale-95">
            Детальніше
          </button>
        </div>
      </div>
    </Link>
  );
}
