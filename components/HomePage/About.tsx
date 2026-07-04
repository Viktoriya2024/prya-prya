"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="py-20 md:py-28 bg-linear-to-b from-[#FFF8F1] to-white w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* TITLE WITH MODERN STYLING */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-bold mb-3 tracking-tight">
            {t("home.about.title")}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] rounded-full"></div>
        </div>

        {/* MODERN CARD LAYOUT */}
        <div className="bg-white rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_20px_80px_rgba(0,0,0,0.12)] transition-shadow duration-500">
          <div className="flex flex-col md:flex-row items-stretch">
            
            {/* LEFT IMAGE */}
            <div className="w-full md:w-1/2 relative overflow-hidden group">
              <div className="relative h-80 md:h-[500px] lg:h-[550px]">
                <Image
                  src="/about.png"
                  alt={t("home.about.title")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* RIGHT TEXT CONTENT */}
            <div className="w-full md:w-1/2 p-8 md:p-10 lg:p-14 flex flex-col justify-center">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-normal">
                {t("home.about.description1", { slogan: t("home.about.slogan") })}
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 font-light">
                {t("home.about.description2")}
              </p>

              {/* MODERN CTA BUTTON */}
              <div className="flex justify-start">
                <Link
                  href="/about"
                  className="
                    group inline-flex items-center gap-2
                    bg-linear-to-r from-[#ff9800] to-[#ffb74d]
                    hover:from-[#ff9800] hover:to-[#ff9800]
                    text-white px-8 py-4
                    text-base md:text-lg font-semibold
                    rounded-full
                    shadow-[0_6px_24px_rgba(255,152,0,0.3)]
                    hover:shadow-[0_10px_32px_rgba(255,152,0,0.5)]
                    hover:scale-105
                    transition-all duration-300
                    border border-white/20
                  "
                >
                  <span>{t("home.about.cta")}</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DECORATIVE BOTTOM ACCENT */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-300"></div>
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <div className="w-2 h-2 rounded-full bg-orange-300"></div>
        </div>
      </div>
    </section>
  );
}
