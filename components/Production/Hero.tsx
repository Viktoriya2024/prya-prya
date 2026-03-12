import Link from "next/link";

export default function ProductionHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-16 sm:pt-18 md:pt-20">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/HeroProduction.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="max-w-3xl bg-white/50 backdrop-blur-md border border-white/20 rounded-3xl px-10 py-10 shadow-2xl">

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-orange-600 font-semibold">
            Пря-Пря
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-tight">
            Виробництво
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
            Сучасне кондитерське виробництво в Україні з автоматизованими
            лініями, контролем якості та натуральними інгредієнтами.
          </p>

          <div className="mt-8">
            <Link
              href="#production-intro"
              className="inline-flex items-center rounded-full bg-orange-500 px-7 py-3.5 text-white font-semibold shadow-lg transition hover:bg-orange-600"
            >
              Дізнатися більше
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}