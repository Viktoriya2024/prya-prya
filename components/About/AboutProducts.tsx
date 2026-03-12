"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutProducts() {
  return (
    <section 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden bg-[url('/feautures-patern.jpg')] bg-repeat"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-br from-[#FF9800]/40 to-[#FFB74D]/30"></div>

      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          
          {/* TEXT CONTENT */}
          <div className="md:w-1/2 w-full space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight tracking-tight text-center md:text-left drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              Наша продукція
            </h2>
            
            <div className="w-16 sm:w-20 h-1 bg-white/90 rounded-full mx-auto md:mx-0"></div>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/95 leading-relaxed font-semibold whitespace-pre-line text-center md:text-left drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              Ми пропонуємо широкий асортимент кондитерських виробів: печиво, пряники, вафлі, зефір та багато іншого. Продукція виготовляється на найсучаснішому обладнанні провідних світових виробників. Використовуються лише екологічно чисті інгредієнти (без ГМО).
            </p>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start pt-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FF9800] font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                Переглянути продукцію
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 bg-white hover:shadow-3xl transition-all duration-500">
              <Image
                src="/Plakat2.jpg"
                alt="Наша продукція"
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
