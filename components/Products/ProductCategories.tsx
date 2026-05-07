"use client";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  { id: "cookies", name: "Печиво", image: "/coockies.png", slug: "cookies" },
  { id: "gingerbread", name: "Пряники", image: "/pryaniki.png", slug: "gingerbread" },
  { id: "oriental", name: "Східні солодощі", image: "/shidniSolodoshi.png", slug: "eastern-sweets" },
  { id: "candies", name: "Цукерки", image: "/smallbox.png", slug: "candies" },
  { id: "new", name: "Новинки", image: "/news.png", slug: "new" },
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
            <Link key={category.id} href={`/products/${category.slug}`}>
              <div className="group flex flex-col items-center cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

