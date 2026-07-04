"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CategoryBanner from "@/components/Products/CategoryBanner";
import ProductGrid from "@/components/Products/ProductGrid";
import { getProductsByCategory, Product } from "@/data/products";
import { useTranslation } from "react-i18next";

type CategoryType = "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new";

export default function CategoryPage() {
  const { t } = useTranslation();
  const params = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const category = (params?.category as CategoryType) || "cookies";
  
  // Get translations for category
  const categoryData = t(`productCategories.${category}`, { returnObjects: true }) as any;
  const banner = {
    title: categoryData?.title || t("common.navigation.products"),
    subtitle: categoryData?.subtitle || "",
    color: [
      "from-amber-100 to-orange-50",
      "from-orange-100 to-amber-50",
      "from-yellow-100 to-amber-50",
      "from-rose-100 to-orange-50",
      "from-purple-100 to-pink-50",
    ][["cookies", "gingerbread", "eastern-sweets", "candies", "new"].indexOf(category)] || "from-amber-100 to-orange-50",
  };

  useEffect(() => {
    console.log("Category from params:", params?.category);
    setIsLoading(true);
    try {
      const categoryProducts = getProductsByCategory(category);
      console.log("Products found:", categoryProducts);
      setProducts(categoryProducts);
    } catch (error) {
      console.error("Error loading products:", error);
      setProducts([]);
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
              {t("productDetail.backToProducts")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
