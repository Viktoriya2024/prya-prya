"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ProductCategories() {
  const { t } = useTranslation();
  const categoryNames = t("products.categories.items", { returnObjects: true }) as string[];

interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

  const categories: Category[] = [
    { id: "cookies", name: categoryNames[0], image: "/coockies.png", slug: "cookies" },
    { id: "gingerbread", name: categoryNames[1], image: "/pryaniki.png", slug: "gingerbread" },
    { id: "oriental", name: categoryNames[2], image: "/shidniSolodoshi2.png", slug: "eastern-sweets" },
    { id: "candies", name: categoryNames[3], image: "/smallbox.png", slug: "candies" },
    { id: "new", name: categoryNames[4], image: "/news.png", slug: "new" },
  ];
  return (
    <section
      id="categories"
      className="py-16 sm:py-20 md:py-24 bg-[#F4E8DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 tracking-tight">
            {t("products.categories.title")}
          </h2>

          <div className="w-24 h-1.5 bg-linear-to-b from-[#FF9800] to-[#FFB74D] rounded-full mx-auto mb-5"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("products.categories.description")}
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.slug}`}
              >
                <div className="group flex flex-col items-center cursor-pointer transition-all duration-300">
                  
                  {/* Circle Image */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-5 rounded-full overflow-hidden bg-white shadow-xl border-4 border-orange-100 group-hover:border-orange-300 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center group-hover:text-[#FF9800] transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

