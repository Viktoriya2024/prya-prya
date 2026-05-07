"use client";
import Link from "next/link";

export default function ProductsCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-linear-to-br from-[#FF9800] to-[#FFB74D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg">
          Хочете замовити нашу продукцію?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-10 leading-relaxed font-medium drop-shadow-md">
          Зв'яжіться з нами, щоб дізнатися більше про асортимент, умови
          співпраці та можливості замовлення великих партій для вашого бізнесу.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#FF9800] hover:bg-gray-50 px-8 py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <span>Зв'язатися з нами</span>
            <svg
              className="w-5 h-5"
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

          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FF9800] px-8 py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <span>Дізнатися більше</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
