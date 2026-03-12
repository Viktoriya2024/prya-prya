import Image from "next/image";

export default function FormingSection() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-[#FFF8F1] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* TEXT */}
        <div className="md:w-1/2 space-y-6">

          <p className="text-sm uppercase tracking-[0.25em] text-orange-500 font-semibold">
            Етап 3
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2B1E16]">
            Цех формування виробів
          </h2>

          <div className="w-20 h-1 bg-linear-to-r from-orange-400 to-orange-500 rounded-full" />

          <p className="text-lg text-[#4A3A2A] leading-relaxed">
            На цьому етапі відбувається формування виробів — печива,
            пряників та інших кондитерських продуктів. Спеціальні
            формувальні машини створюють вироби різної форми та розміру.
          </p>

          <p className="text-lg text-[#4A3A2A] leading-relaxed">
            Завдяки автоматизованим лініям кожен виріб має однакову
            форму, розмір та структуру, що забезпечує стабільну
            якість продукції.
          </p>

        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[520px] h-[360px] rounded-3xl overflow-hidden shadow-xl">

            <Image
              src="/testo3.png"
              alt="Цех формування виробів"
              fill
              className="object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
}