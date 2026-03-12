"use client";

import { ShieldCheck, Leaf, Star, Award } from "lucide-react";

export default function AboutValues() {
  const values = [
    { icon: Award, title: "Якість" },
    { icon: Leaf, title: "Натуральність" },
    { icon: Star, title: "Смак" },
    { icon: ShieldCheck, title: "Безпека" },
  ];

  return (
    <section
      className="py-16 px-6 bg-[url('/feautures-patern.jpg')] bg-repeat relative"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9800]/40 to-[#FFB74D]/30"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="bg-[#fff3e6] border border-orange-100 rounded-[28px] shadow-xl px-8 py-10 text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-orange-500 font-semibold">
            Наш підхід
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#2b1d12]">
            Наші цінності
          </h2>

          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          {/* ICONS */}
          <div className="flex justify-center flex-wrap gap-8 mt-8">

            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex flex-col items-center gap-2">

                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Icon className="text-orange-500 w-5 h-5" />
                  </div>

                  <span className="text-sm font-semibold text-[#5f4d3f]">
                    {item.title}
                  </span>

                </div>
              );
            })}

          </div>

          <p className="max-w-2xl mx-auto mt-8 text-base text-[#5f4d3f] leading-relaxed">
            Ми з повною відповідальністю підходимо до кожного етапу роботи та
            прагнемо до того, щоб наша продукція дарувала споживачам
            бездоганний смак, стабільну якість і впевненість у безпеці
            кожного виробу.
          </p>

        </div>

      </div>
    </section>
  );
}