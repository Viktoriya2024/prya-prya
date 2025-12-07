"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-6 bg-white w-full">
      <div className="w-full lg:w-[75%] max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* TITLE */}
        <h2 className="text-left text-2xl sm:text-3xl lg:text-4xl text-black font-bold mb-2 sm:mb-4 lg:mb-6">
          Про Нас
        </h2>

        {/* CONTENT WRAPPER */}
          <div className="flex flex-col md:flex-row items-start gap-5 md:gap-8 lg:gap-10">
            {/* LEFT IMAGE */}
            <div className="w-full md:w-1/2">
              <Image
                src="/about.png"
                alt="About LOT 40"
                width={500}
                height={400}
                className=" object-cover w-full max-w-[650px] h-[300px] sm:h-[350px] lg:h-[400px]"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="w-full lg:w-1/2 text-left ">
              <p className="text-gray-700 text-base font-semibold sm:text-lg leading-relaxed mb-6">
               Керуючись принципом «Натуральне, тому і смачне!» , Ми з повною відповідальністю підходимо до вирішення поставлених перед колективом підприємства завдань, вважаючи основною стратегією, забезпечення найвищої якості продукції використовуючи тільки натуральні, екологічно чисті інгредієнти.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              Ми використовуємо передові технології у виробництві кондитерських виробів, а також традиційні рецепти приготування домашньої випічки. У рецептурі нашої продукції об'єднані кращі традиції приготування кондитерських виробів України та провідних пекарських рецептур світу.
              </p>

              {/* BUTTON */}
              <div className="flex justify-start">
              <Link
                href="#contact"
                className="inline-block bg-[#ff9800] hover:bg-yellow-700  text-white px-6  py-1  text-base sm:text-lg font-semibold transition-colors "
              >
               Детальніше
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
