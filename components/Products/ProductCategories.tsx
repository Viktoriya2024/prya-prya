"use client";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: "cookies", name: "Печиво", image: "/coockies.png" },
  { id: "gingerbread", name: "Пряники", image: "/pryaniki.png" },
  { id: "waffles", name: "Вафлі", image: "/wafli.png" },
  { id: "oriental", name: "Східні солодощі", image: "/shidniSolodoshi.png" },
  { id: "flowpack", name: "Вироби во Флоупаке", image: "/flowpack.png" },
  { id: "smalbox", name: "Маленьки коробки", image: "/smallbox.png" },
   { id: "new", name: "Новинки", image: "/news.png" },
];

export default function ProductCategories() {
  return (
    <section
      id="categories"
      className="py-12 sm:py-16 md:py-20 bg-linear-to-b from-[#FFF8F1] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Категорії продукції
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#FF9800] to-[#FFB74D] rounded-full mx-auto mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Оберіть категорію, щоб переглянути асортимент
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Circular Image Container */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mb-4 rounded-full overflow-hidden bg-white shadow-lg border-4 border-orange-100 group-hover:border-orange-300 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Category Name */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#FF9800] transition-colors duration-300 text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
