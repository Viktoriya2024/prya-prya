"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface JobPosition {
  icon: string;
  title: string;
  intro: string;
  department: string;
  location: string;
  type: string;
  requirements: string[];
  responsibilities: string[];
}

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export default function VacancyPage() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const positions = t("vacancy.positions.items", {
    returnObjects: true,
  }) as JobPosition[];

  const benefits = t("vacancy.benefits.items", {
    returnObjects: true,
  }) as BenefitItem[];

  const hasPositions =
    Array.isArray(positions) &&
    positions.length > 0 &&
    positions[0]?.title !== "";

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white">

      {/* ════════════════════════════════════════
          SECTION 1 — HERO
          Mobile: Vertical card | Tablet/Desktop: Text over image
          ════════════════════════════════════════ */}

      {/* MOBILE VERSION (<768px) */}
      <section className="md:hidden flex flex-col bg-white w-full mt-16 sm:mt-20">
        {/* Image block - hidden on mobile */}
        <div
          className="hidden sm:block w-full h-[280px] bg-cover bg-center shrink-0"
          style={{
            backgroundImage: "url('/vacancy.png')",
            backgroundPosition: "center top",
          }}
        />

        {/* Content card - ALWAYS VISIBLE */}
        <div className="px-5 sm:px-6 py-6 sm:py-8 bg-[#FFF7EC] w-full shrink-0">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <div className="w-8 sm:w-10 h-1 bg-linear-to-r from-orange-400 to-orange-300 rounded-full" />
            <p className="text-xs uppercase tracking-[0.3em] text-orange-600 font-semibold">
              {t("vacancy.hero.eyebrow")}
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-[1.15] text-gray-900 mb-2 sm:mb-3 text-center">
            {t("vacancy.hero.title")}
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium mb-4 sm:mb-5 text-center">
            {t("vacancy.hero.description")}
          </p>

          {/* Benefits list */}
          <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
            {[
              t("vacancy.hero.benefit1"),
              t("vacancy.hero.benefit2"),
              t("vacancy.hero.benefit3")
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-2.5">
                <div className="shrink-0 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-orange-500 flex items-center justify-center shadow-md mt-0.5">
                  <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button - full width on mobile */}
          <a
            href="#open-positions"
            className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 bg-linear-to-r from-[#ff9800] to-[#ffb74d] hover:from-[#f57c00] hover:to-[#ff9800] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{t("vacancy.hero.cta")}</span>
            <svg
              className="w-3.5 sm:w-4 h-3.5 sm:h-4"
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
          </a>
        </div>
      </section>

      {/* TABLET & DESKTOP VERSION (>=768px) */}
      <section
        className="hidden md:flex relative md:mt-4 lg:mt-20 md:h-[550px] lg:h-[75vh] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/vacancy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto w-full h-full flex flex-row items-center justify-center">
          {/* Left side - Careers messaging */}
          <div className="md:w-1/2 md:px-6 lg:px-8 flex flex-col justify-center">
            {/* Label */}
            <div className="flex items-center gap-2 mb-4 md:mb-5 lg:mb-6">
              <div className="md:w-10 lg:w-12 h-1 bg-linear-to-r from-orange-400 to-orange-300 rounded-full" />
              <p className="text-xs md:text-xs lg:text-sm uppercase tracking-[0.3em] text-orange-300 font-semibold">
                {t("vacancy.hero.eyebrow")}
              </p>
            </div>

            {/* Heading */}
            <h1 className="md:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.2] text-white md:mb-4 lg:mb-7 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              {t("vacancy.hero.title")}
            </h1>

            {/* Description */}
            <p className="md:text-base lg:text-lg text-orange-50 leading-relaxed font-medium max-w-md md:mb-5 lg:mb-9 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {t("vacancy.hero.description")}
            </p>

            {/* Benefits list */}
            <div className="md:space-y-2 lg:space-y-4 md:mb-6 lg:mb-12">
              {[
                t("vacancy.hero.benefit1"),
                t("vacancy.hero.benefit2"),
                t("vacancy.hero.benefit3")
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 md:gap-2.5 lg:gap-3">
                  <div className="shrink-0 md:w-5 lg:w-6 md:h-5 lg:h-6 rounded-full bg-orange-500 flex items-center justify-center shadow-md mt-0.5">
                    <svg className="md:w-3 lg:w-4 md:h-3 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="md:text-sm lg:text-base text-orange-50 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#open-positions"
              className="inline-flex items-center gap-3 bg-linear-to-r from-[#ff9800] to-[#ffb74d] hover:from-[#f57c00] hover:to-[#ff9800] text-white font-bold md:text-sm lg:text-base md:px-8 lg:px-10 md:py-3 lg:py-4 rounded-full shadow-[0_10px_30px_rgba(255,152,0,0.4)] hover:shadow-[0_15px_40px_rgba(255,152,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <span>{t("vacancy.hero.cta")}</span>
              <svg
                className="md:w-4 lg:w-5 md:h-4 lg:h-5"
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
            </a>
          </div>

          {/* Right side - empty space for background image */}
          <div className="md:w-1/2" />
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — OPEN POSITIONS
          Pattern: ProductCategories bg + ProductCard style
          ════════════════════════════════════════ */}
      <section
        id="open-positions"
        className="py-16 sm:py-24 md:py-28 bg-[#F4E8DA]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-600 font-semibold mb-3 sm:mb-4">
              {t("vacancy.positions.eyebrow")}
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#2D241C] mb-4 sm:mb-5 tracking-tight">
              {t("vacancy.positions.title")}
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto mb-7" />
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
              {t("vacancy.positions.description")}
            </p>
          </div>

          {/* Jobs grid or empty state */}
          {hasPositions ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
              {positions.map((job, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-orange-100/50 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(255,152,0,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col"
                >
                  {/* Hover bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="p-6 sm:p-7 flex flex-col flex-1">

                    {/* Icon + department */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-6xl sm:text-6xl md:text-7xl leading-none">{job.icon}</span>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">
                        {job.department}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D241C] mb-4 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                      {job.title}
                    </h3>

                    {/* Location + type pills */}
                    <div className="flex flex-wrap gap-2.5 mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                        <svg
                          className="w-3.5 h-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                        <svg
                          className="w-3.5 h-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {job.type}
                      </span>
                    </div>

                    {/* Intro */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-7 font-medium">
                      {job.intro}
                    </p>

                    {/* Requirements Section */}
                    <div className="mb-7">
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#2D241C] mb-3 flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                        <span>{t("vacancy.positions.requirementsLabel")}</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {Array.isArray(job.requirements) &&
                          job.requirements.map((req, idx) => (
                            <li key={idx} className="flex gap-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                              <span className="text-orange-500 font-semibold mt-0.5 shrink-0">◆</span>
                              <span>{req}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-orange-300 via-orange-200 to-transparent mb-7" />

                    {/* Responsibilities Section */}
                    <div className="mb-8">
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-[#2D241C] mb-3 flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                        <span>{t("vacancy.positions.responsibilitiesLabel")}</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {Array.isArray(job.responsibilities) &&
                          job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                              <span className="text-orange-500 font-semibold mt-0.5 shrink-0">✓</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Apply button — same style as ProductCard CTA */}
                    <Link
                      href="/contact"
                      className="mt-auto w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all duration-300 text-sm sm:text-base"
                    >
                      {t("vacancy.positions.applyButton")}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="max-w-xl mx-auto text-center bg-white rounded-2xl border border-orange-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-8 py-14">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2D241C] mb-3">
                {t("vacancy.positions.noPositions")}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
                {t("vacancy.positions.noPositionsDesc")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base"
              >
                {t("vacancy.positions.contactButton")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — WHY WORK WITH PRYA-PRYA
          Pattern: Features.tsx (homepage)
          ════════════════════════════════════════ */}
      <section className="bg-[url('/feautures-patern.jpg')] bg-repeat py-14 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-600 font-semibold mb-3 sm:mb-4">
              {t("vacancy.benefits.eyebrow")}
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-5 tracking-tight">
              {t("vacancy.benefits.title")}
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-[#ff9800] to-[#ffb74d] rounded-full mx-auto mb-5 sm:mb-7" />
            <p className="text-xs sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
              {t("vacancy.benefits.description")}
            </p>
          </div>

          {/* Benefits grid — 5 columns desktop, compact layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-5">
            {Array.isArray(benefits) &&
              benefits.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(255,152,0,0.12)] transition-all duration-500 hover:-translate-y-1 border border-orange-100/40 overflow-hidden"
                >
                  {/* Decorative hover glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-orange-100/30 to-yellow-100/30 rounded-full blur-2xl -translate-y-8 translate-x-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative mb-5 flex justify-center">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-orange-50 to-yellow-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                      <span className="text-3xl sm:text-4xl leading-none">{item.icon}</span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="text-center relative z-10">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ff9800] transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
          </div>

          {/* Decorative dots */}
          <div className="mt-12 sm:mt-14 flex justify-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-300 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-orange-300 shadow-sm" />
          </div>

        </div>
      </section>

      {/* End of Vacancy Page */}

    </div>
  );
}
