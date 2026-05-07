"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import CategoryBanner from "@/components/Products/CategoryBanner";
import ProductGrid from "@/components/Products/ProductGrid";
import {
  getProductsByCategory,
  Product,
} from "@/data/products";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

type CategoryType = "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new";

const categoryBanners = {
  cookies: {
    title: "Печиво",
    subtitle: "Класичні печива з найкращих інгредієнтів",
    color: "from-amber-100 to-orange-50",
  },
  gingerbread: {
    title: "Пряники",
    subtitle: "Традиційні медові пряники за секретним рецептом",
    color: "from-orange-100 to-amber-50",
  },
  "eastern-sweets": {
    title: "Східні солодощі",
    subtitle: "Преміум козинаки та дегустаційні смеси",
    color: "from-yellow-100 to-amber-50",
  },
  candies: {
    title: "Цукерки",
    subtitle: "Розкішні цукерки для найвибагливіших гурманів",
    color: "from-rose-100 to-orange-50",
  },
  new: {
    title: "Новинки",
    subtitle: "Новітні смаки та комбінації",
    color: "from-purple-100 to-pink-50",
  },
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const category = params.category as CategoryType;
  const banner = categoryBanners[category] || categoryBanners.cookies;

  useEffect(() => {
    setIsLoading(true);
    try {
      const categoryProducts = getProductsByCategory(category);
      setProducts(categoryProducts);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-white">
      {/* Category Banner */}
      <CategoryBanner
        title={banner.title}
        subtitle={banner.subtitle}
        colorClass={banner.color}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* Products Grid */}
        <ProductGrid
          products={products}
          category={category}
          isLoading={isLoading}
        />

        {/* Back Button */}
        {!isLoading && products.length > 0 && (
          <div className="flex justify-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Назад до продукції
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
