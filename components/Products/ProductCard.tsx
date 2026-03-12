"use client";
import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#FF9800] transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center gap-2 text-[#FF9800] hover:text-[#ff9800]/80 font-semibold text-sm sm:text-base transition-colors duration-300 group/link"
        >
          <span>Докладніше</span>
          <svg
            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
