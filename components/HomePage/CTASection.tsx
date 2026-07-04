"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-linear-to-r from-[#d48002] to-[#d3a259] text-white py-16 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* CTA CARD */}
        <div 
          className="
           bg-linear-to-b from-[#FFF8F1] to-white
            rounded-3xl
            shadow-xl
            py-12 sm:py-12 md:py-16 lg:py-20
            px-6 sm:px-8 md:px-10 lg:px-16
            text-center
          "
        >
          {/* Content */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-5 md:mb-6 tracking-tight">
              {t("home.cta.title")}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              {t("home.cta.description")}
            </p>
            
            <Link 
              href="/contact"
              className="
                group inline-flex items-center justify-center gap-3
                bg-[#ff9800] text-white
                hover:bg-[#f57c00]
                font-bold text-base sm:text-lg md:text-xl
                py-4 sm:py-4 md:py-5
                px-8 sm:px-10 md:px-12
                rounded-full
                shadow-lg
                hover:shadow-xl
                hover:scale-105
                active:scale-100
                transition-all duration-300
              "
            >
              <span>{t("home.cta.button")}</span>
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
