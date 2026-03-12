import Image from "next/image";

export default function BakingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          
          <div className="relative w-full max-w-[520px] h-[360px] rounded-3xl overflow-hidden shadow-xl">
            
            <Image
              src="/testo4.png"
              alt="Цех випікання"
              fill
              className="object-cover"
            />

          </div>

        </div>

        {/* TEXT */}
        <div className="md:w-1/2 space-y-6">
          
          <p className="text-sm uppercase tracking-[0.25em] text-orange-500 font-semibold">
            Етап 4
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1E16]">
            Цех випікання
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>

          <p className="text-lg text-[#4A3A2A] leading-relaxed">
            На цьому етапі сформовані вироби надходять до печей, де відбувається
            процес випікання пряників, печива та інших кондитерських виробів.
          </p>

          <p className="text-lg text-[#4A3A2A] leading-relaxed">
            Контроль температури, часу випікання та технологічних параметрів
            дозволяє досягти рівномірної структури, золотистого кольору,
            приємного аромату та стабільної якості кожної партії продукції.
          </p>

        </div>

      </div>

    </section>
  );
}