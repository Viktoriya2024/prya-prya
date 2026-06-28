"use client";
import Image from "next/image";

export default function AboutFactory() {
  return (
    <section className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden  bg-[#F4E8DA]">
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          
          {/* TEXT CONTENT */}
          <div className="md:w-1/2 w-full max-w-xl space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight tracking-tight text-center md:text-left">
              Кондитерська фабрика ТМ «Пря-Пря»
            </h2>
            
            <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto md:mx-0"></div>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 leading-relaxed font-semibold whitespace-pre-line text-center md:text-left">
              Заснована в 2015 році, є одним з найбільш динамічно розвиваються кондитерським підприємством України. Ми використовуємо передові технології у виробництві кондитерських виробів, а також традиційні рецепти приготування домашньої випічки. У рецептурі нашої продукції об'єднані найкращі традиції приготування кондитерських виробів України та провідних пекарських рецептур світу.
            </p>
          </div>

          {/* CIRCULAR IMAGE */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="relative w-[360px] h-[360px] group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-orange-200/20 blur-3xl"></div>
              
              {/* Image */}
              <div className="relative w-full h-full bg-white rounded-full overflow-hidden shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/anim-prya-prya.gif"
                  alt="Кондитерська фабрика ТМ «Пря-Пря»"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
