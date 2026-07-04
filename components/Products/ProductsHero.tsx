"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ProductsHero() {
  const { t } = useTranslation();
  return (
    <section
      className="relative min-h-[500px] sm:min-h-[550px] md:h-[70vh] md:min-h-[600px] flex items-center justify-center py-12 md:py-0 overflow-hidden pt-16 sm:pt-18 md:pt-20"
      style={{
        backgroundImage: "url(/Plakat3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl bg-white/50 backdrop-blur-md border border-white/20 rounded-3xl px-10 py-10 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-neutral-900 mb-4 sm:mb-6 leading-tight ">
            {t("products.hero.title")}
          </h1>

          <div className="w-20 h-1 bg-linear-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto mb-4 sm:mb-6"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed font-semibold mb-6 sm:mb-8 ">
            {t("products.hero.description")}
          </p>

          <Link
            href="#categories"
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#ff9800] to-[#ffb74d] hover:from-[#ff9800] hover:to-[#ff9800] text-white px-8 py-4 text-base md:text-lg font-semibold rounded-full shadow-[0_4px_16px_rgba(255,152,0,0.25)] hover:shadow-[0_6px_24px_rgba(255,152,0,0.4)] hover:scale-105 transition-all duration-300 border border-white/20"
          >
            <span>{t("products.hero.cta")}</span>
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
