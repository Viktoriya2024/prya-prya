"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutProduction() {
  const features = [
    "⚙️ Сучасне обладнання",
    "✔ Контроль якості",
    "🌿 Натуральні інгредієнти"
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden bg-[#F4E8DA]">
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          
          {/* TEXT CONTENT */}
          <div className="md:w-1/2 w-full space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight tracking-tight text-center md:text-left">
              Виробництво
            </h2>
            
            <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto md:mx-0"></div>

            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 leading-relaxed font-semibold whitespace-pre-line text-center md:text-left">
              Наше виробництво оснащене найсучаснішим обладнанням провідних світових виробників. Ми дотримуємось найвищих стандартів якості на всіх етапах виробничого процесу.
            </p>

            {/* Features List */}
            <ul className="space-y-3 list-none">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 text-base sm:text-lg">
                  <span className="text-[#FF9800] text-xl">{feature.split(' ')[0]}</span>
                  <span className="font-medium">{feature.split(' ').slice(1).join(' ')}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start pt-4">
              <Link
                href="/production"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#FF9800] to-[#FFB74D] text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
              >
                Дізнатися більше
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white hover:shadow-3xl transition-all duration-500">
              <Image
                src="/ProductBackery.png"
                alt="Виробництво"
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
