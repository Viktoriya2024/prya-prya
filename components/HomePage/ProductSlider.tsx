import Link from "next/link";

const products = [
  {
    name: "Вівсяне печиво",
    image: "/Cookies2.png",
  },
  {
    name: "Пряники",
    image: "/cookiesProduct.png",
  },
  {
    name: "Фітнес-лінія",
    image: "/Fitness12.png",
  },
];

export default function ProductsSlider() {
  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-[#FFF8F1] via-white to-[#F8F7F5] w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* MODERN SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            ПРОДУКЦІЯ
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-light">
            Відкрийте для себе наші смачні та натуральні кондитерські вироби
          </p>
        </div>

        {/* MODERN PRODUCT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="
                group relative bg-white rounded-3xl 
                shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
                hover:shadow-[0_16px_50px_rgba(255,152,0,0.15)]
                transition-all duration-500 
                overflow-hidden
                hover:-translate-y-2
              "
            >
              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden bg-linear-to-br from-orange-50 to-yellow-50/50 p-8 aspect-square flex items-center justify-center">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-200/20 to-yellow-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="relative z-10 h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#ff9800] transition-colors duration-300">
                  {item.name}
                </h3>
                
                {/* Decorative accent */}
                <div className="w-12 h-1 bg-linear-to-r from-[#ff9800] to-[#ffb74d] rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* HOVER OVERLAY WITH SUBTLE BADGE */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#ff9800] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                Переглянути →
              </div>
            </div>
          ))}
        </div>

        {/* MODERN CTA BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="
            group inline-flex items-center gap-3
            px-10 py-4 md:px-12 md:py-5
            bg-linear-to-r from-[#ff9800] to-[#ffb74d]
            hover:from-[#ff9800] hover:to-[#ff9800]
            text-white font-bold text-base md:text-lg
            rounded-full
            shadow-[0_10px_40px_rgba(255,152,0,0.3)]
            hover:shadow-[0_15px_50px_rgba(255,152,0,0.5)]
            hover:scale-105
            transition-all duration-500
            border-2 border-white/20
          ">
            <span>ПЕРЕЙТИ ДО РОЗДІЛУ ПРОДУКЦІЇ</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
