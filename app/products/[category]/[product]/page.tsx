"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getProductBySlug, Product, getCategoryName } from "@/data/products";

interface ProductDetailPageProps {
  params: {
    category: string;
    product: string;
  };
}

type CategoryType = "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new";

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const category = params.category as CategoryType;
  const productSlug = params.product;

  useEffect(() => {
    setIsLoading(true);
    try {
      const foundProduct = getProductBySlug(productSlug, category);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    } catch (error) {
      console.error("Error loading product:", error);
    } finally {
      setIsLoading(false);
    }
  }, [productSlug, category]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin">
            <svg
              className="w-12 h-12 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 mt-4">Завантаження продукту...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Продукт не знайден
          </h1>
          <p className="text-gray-600 mb-6">
            Вибачте, цей продукт більше не доступний
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Назад до продукції
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = getCategoryName(category);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link
            href="/products"
            className="hover:text-orange-600 transition-colors"
          >
            Продукція
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href={`/products/${category}`}
            className="hover:text-orange-600 transition-colors"
          >
            {categoryName}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-orange-600 font-semibold">
            {product.name_ua}
          </span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50 shadow-xl">
              <Image
                src={product.image}
                alt={product.name_ua}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Category Tag */}
            <div className="inline-flex w-fit mb-4">
              <span className="px-4 py-1.5 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full">
                {categoryName}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              {product.name_ua}
            </h1>

            {/* Weight Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold text-orange-600">
                {product.weight}
              </span>
              <span className="text-gray-500">вага</span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {product.fullDescription_ua}
            </p>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-8"></div>

            {/* Nutrition Info */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Харчова цінність на 100g
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Калорійність</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {product.nutritionPer100g.calories}
                  </p>
                  <p className="text-xs text-gray-500">ккал</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Білки</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {product.nutritionPer100g.protein}
                  </p>
                  <p className="text-xs text-gray-500">г</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Жири</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {product.nutritionPer100g.fat}
                  </p>
                  <p className="text-xs text-gray-500">г</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Вуглеводи</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {product.nutritionPer100g.carbs}
                  </p>
                  <p className="text-xs text-gray-500">г</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-8"></div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Інгредієнти
              </h3>
              <ul className="space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col gap-4 mt-auto pt-8">
              <button className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                До кошика
              </button>

              <Link
                href={`/products/${category}`}
                className="w-full py-4 px-6 border-2 border-orange-500 text-orange-600 font-bold text-lg rounded-xl hover:bg-orange-50 transition-colors text-center"
              >
                Назад до категорії
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-20 pt-20 border-t border-gray-200 bg-gradient-to-b from-orange-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Також переглядайте категорію
          </h3>
          <p className="text-lg text-gray-600 text-center mb-8">
            Інші смакові поєднання у категорії "{categoryName}"
          </p>
          <div className="flex justify-center">
            <Link
              href={`/products/${category}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Переглянути категорію
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
