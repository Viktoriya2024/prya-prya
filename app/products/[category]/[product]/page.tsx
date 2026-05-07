"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getProductBySlug, Product, getCategoryName, getProductsByCategory } from "@/data/products";
import ProductImageGallery from "@/components/Products/ProductImageGallery";

type CategoryType = "cookies" | "gingerbread" | "eastern-sweets" | "candies" | "new";

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const category = (params?.category as CategoryType) || "cookies";
  const productSlug = (params?.product as string) || "";

  useEffect(() => {
    setIsLoading(true);
    try {
      const foundProduct = getProductBySlug(productSlug, category);
      if (foundProduct) {
        setProduct(foundProduct);
        // Load related products from same category
        const allCategoryProducts = getProductsByCategory(category);
        const related = allCategoryProducts.filter(p => p.id !== foundProduct.id).slice(0, 4);
        setRelatedProducts(related);
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
            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Продукт не знайден</h1>
          <p className="text-gray-600 mb-6">Вибачте, цей продукт більше не доступний</p>
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
          <Link href="/products" className="hover:text-orange-600 transition-colors">
            Продукція
          </Link>
          <span className="text-gray-400">/</span>
          <Link href={`/products/${category}`} className="hover:text-orange-600 transition-colors">
            {categoryName}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-orange-600 font-semibold">{product?.name_ua}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Product Image Gallery - Left Column */}
          <ProductImageGallery
            images={product?.gallery || [product?.image || ""]}
            productName={product?.name_ua || ""}
          />

          {/* Product Info - Right Column */}
          <div className="flex flex-col">
            {/* Category Badge */}
            <div className="inline-flex w-fit mb-4">
              <span className="px-4 py-1.5 text-sm font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-full shadow-md">
                {categoryName}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {product?.name_ua}
            </h1>

            {/* Weight Info */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Розмір упаковки</p>
              <p className="text-3xl font-bold text-orange-600">{product?.weight}</p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {product?.fullDescription_ua}
            </p>

            {/* Nutrition Info - Cards */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Харчова цінність на 100г
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-linear-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <p className="text-xs text-gray-600 mb-1">Калорійність</p>
                  <p className="text-xl font-bold text-gray-900">{product?.nutritionPer100g.calories}</p>
                  <p className="text-xs text-gray-500">ккал</p>
                </div>
                <div className="p-4 bg-linear-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <p className="text-xs text-gray-600 mb-1">Білки</p>
                  <p className="text-xl font-bold text-gray-900">{product?.nutritionPer100g.protein}г</p>
                </div>
                <div className="p-4 bg-linear-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <p className="text-xs text-gray-600 mb-1">Жири</p>
                  <p className="text-xl font-bold text-gray-900">{product?.nutritionPer100g.fat}г</p>
                </div>
                <div className="p-4 bg-linear-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                  <p className="text-xs text-gray-600 mb-1">Вуглеводи</p>
                  <p className="text-xl font-bold text-gray-900">{product?.nutritionPer100g.carbs}г</p>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">
                Інгредієнти
              </h3>
              <ul className="space-y-2">
                {product?.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="shrink-0 w-2.5 h-2.5 bg-linear-to-r from-orange-500 to-orange-600 rounded-full mt-1.5"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* B2B CTA Button */}
            <Link
              href="/contact"
              className="w-full py-4 px-6 bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 text-center"
            >
              Запитати умови співпраці
            </Link>

            {/* Back Button */}
            <Link
              href={`/products/${category}`}
              className="mt-4 w-full py-4 px-6 border-2 border-orange-500 text-orange-600 font-bold text-lg rounded-xl hover:bg-orange-50 transition-colors text-center"
            >
              Назад до категорії
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Product Information */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Storage Conditions */}
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Умови зберігання</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Зберігати у сухих, чистих, добре вентильованих складах, без стороннього запаху, не заражених шкідниками, за температури від +18°C до +3°C та відносної вологості повітря не вище 75%. Не допускати впливу прямих сонячних променів.
                  </p>
                </div>
              </div>
            </div>

            {/* Shelf Life */}
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Термін придатності</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {product?.shelfLife_ua}
                  </p>
                </div>
              </div>
            </div>

            {/* B2B Information */}
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Для оптових замовлень</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Продукція доступна для постачання в магазини, супермаркети, торговельні мережи та для дистриб'юторів. Зв'яжіться з нами для отримання спеціальних пропозицій.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-20 border-t border-gray-200 bg-linear-to-b from-orange-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Схожі товари
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Інші продукти категорії "{categoryName}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.id}
                  href={`/products/${category}/${relProduct.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 max-w-xs mx-auto w-full"
                >
                  <div className="relative w-full h-80 bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden flex items-center justify-center p-6">
                    <Image
                      src={relProduct.image}
                      alt={relProduct.name_ua}
                      width={320}
                      height={320}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-full shadow-md">
                        {relProduct.weight}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {relProduct.name_ua}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-4">
                      {relProduct.description_ua}
                    </p>
                    <button className="w-full py-2.5 px-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-sm">
                      Детальніше
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
