"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
      style={{ 
        backgroundImage: "url(/plakat1.jpg)", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-black/0"></div>

      {/* Content */}
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* TEXT CONTENT */}
          <div className="max-w-3xl bg-white/50 backdrop-blur-md border border-white/20 rounded-3xl px-10 py-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-neutral-900 mb-3 sm:mb-4 leading-tight tracking-tight ">
              Про нас
            </h2>
            
            <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-white to-white/80 rounded-full mx-auto"></div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 leading-relaxed font-semibold whitespace-pre-line ">
              Кондитерська фабрика ТМ «Пря-Пря» — це якість, смак та традиції. Ми створюємо натуральні кондитерські вироби, які радують наших клієнтів вже понад 8 років. Кожен продукт виготовляється з любов'ю та турботою про ваше здоров'я.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
