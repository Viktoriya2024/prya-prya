"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Link href={`/products/${category}/${slug}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col max-w-xs mx-auto">
        {/* Product Image Container - Larger Height */}
        <div className="relative w-full h-80 bg-linear-to-br from-amber-50 via-beige-50 to-yellow-50 overflow-hidden flex items-center justify-center p-6">
          <Image
            src={image}
            alt={name}
            width={320}
            height={320}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
          
          {/* Weight Badge - Positioned Over Image */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <div className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-full shadow-md">
              {weight}
            </div>
          </div>
        </div>

        {/* Product Info - Clean and Balanced */}
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          {/* Product Name - Premium Typography */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
            {name}
          </h3>

          {/* Description - Short Preview Only */}
          <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2 flex-1 leading-relaxed">
            {description}
          </p>

          {/* Details Button - Premium CTA */}
          <button className="mt-auto w-full py-2.5 sm:py-3 px-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform group-hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm">
            {t("productDetail.detailsButton")}
          </button>
        </div>
      </div>
    </Link>
  );
}
