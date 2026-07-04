"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutQuality() {
  const { t } = useTranslation();
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden bg-linear-to-b  dark:border-gray-800 dark:bg-gray-900">
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          
          {/* TEXT CONTENT */}
          <div className="md:w-1/2 w-full space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight tracking-tight text-center md:text-left">
              {t("about.quality.title")}
            </h2>
            
            <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto md:mx-0"></div>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 leading-relaxed font-semibold whitespace-pre-line text-center md:text-left">
              {t("about.quality.description")}
            </p>
          </div>

          {/* CERTIFICATE CARD */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#FFF3E6] p-8 border-8 border-orange-200 hover:shadow-3xl transition-all duration-500">
              <Image
                src="/Sertificate.png"
                alt="Якість"
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
