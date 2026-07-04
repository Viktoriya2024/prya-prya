"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ProductionHero() {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden pt-16 sm:pt-18 md:pt-20 lg:pt-20">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/HeroProduction.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 shadow-2xl">

          <p className="mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-600 font-semibold">
            {t("productionPage.hero.company")}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-tight">
            {t("productionPage.hero.title")}
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed">
            {t("productionPage.hero.description")}
          </p>

          <div className="mt-6 sm:mt-8">
            <Link
              href="#production-intro"
              className="inline-flex items-center rounded-full bg-orange-500 px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base text-white font-semibold shadow-lg transition hover:bg-orange-600"
            >
              {t("productionPage.hero.cta")}
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}