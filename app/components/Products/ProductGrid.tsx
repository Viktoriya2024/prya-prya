"use client";
import ProductCard, { Product } from "./ProductCard";

// Placeholder product data
const products: Product[] = [
  {
    id: "classic-cookies",
    name: "Класичне печиво",
    description:
      "Традиційне печиво з натуральних інгредієнтів. Ідеально до чаю чи кави.",
    image: "/cookie1.png",
    category: "cookies",
  },
  {
    id: "gingerbread-assorted",
    name: "Пряники асорті",
    description:
      "Різноманітні пряники з медом та спеціями. М'які та ароматні.",
    image: "/prya.png",
    category: "gingerbread",
  },
  {
    id: "crispy-waffles",
    name: "Хрусткі вафлі",
    description:
      "Легкі та хрусткі вафлі з різними начинками. Ідеальний перекус.",
    image: "/cookiesProduct.png",
    category: "waffles",
  },
  {
    id: "fitness-cookies",
    name: "Фітнес печиво",
    description:
      "Здорове печиво з цільнозернового борошна. Без цукру.",
    image: "/Fitness01.jpg",
    category: "cookies",
  },
  {
    id: "chocolate-cookies",
    name: "Шоколадне печиво",
    description:
      "Насичене шоколадне печиво з какао та шоколадними крихтами.",
    image: "/Cookies2.png",
    category: "cookies",
  },
  {
    id: "glazed-gingerbread",
    name: "Пряники глазуровані",
    description:
      "Пряники покриті білою або темною глазур'ю. Святкові та смачні.",
    image: "/good.png",
    category: "gingerbread",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Популярні продукти
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Найкращі кондитерські вироби з натуральних інгредієнтів
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
