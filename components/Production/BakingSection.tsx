"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function BakingSection() {
  const { t } = useTranslation();
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        
        {/* IMAGE */}
        <div className="md:w-1/2 w-full flex justify-center md:order-1">
          
          <div className="relative w-full max-w-[520px] h-[280px] sm:h-80 md:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            
            <Image
              src="/testo4.png"
              alt={t("productionPage.baking.title")}
              fill
              className="object-cover"
            />

          </div>

        </div>

        {/* TEXT */}
        <div className="md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 md:order-2">
          
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-500 font-semibold">
            {t("productionPage.baking.stage")}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B1E16]">
            {t("productionPage.baking.title")}
          </h2>

          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-linear-to-r from-orange-400 to-orange-500 rounded-full"></div>

          <p className="text-base sm:text-lg md:text-xl text-[#4A3A2A] leading-relaxed">
            {t("productionPage.baking.text1")}
          </p>

          <p className="text-lg text-[#4A3A2A] leading-relaxed">
            {t("productionPage.baking.text2")}
          </p>

        </div>

      </div>

    </section>
  );
}