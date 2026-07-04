"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutStaff() {
  const { t } = useTranslation();
  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-24 xl:py-28 overflow-hidden bg-[#F4E8DA]">
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          
          {/* TEXT CONTENT */}
          <div className="md:w-1/2 w-full space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-black mb-3 sm:mb-4 leading-tight tracking-tight text-center md:text-left">
              {t("about.staff.title")}
            </h2>
            
            <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto md:mx-0"></div>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-black leading-relaxed font-semibold whitespace-pre-line text-center md:text-left">
              {t("about.staff.description")}
            </p>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-orange-100 bg-white hover:shadow-3xl transition-all duration-500">
              <Image
                src="/teamPrya.png"
                alt="Співробітники"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
