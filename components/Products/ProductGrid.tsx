"use client";
import ProductCard from "./ProductCard";
import EmptyState from "@/components/shared/EmptyState";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
  category: string;
  isLoading?: boolean;
}

export default function ProductGrid({
  products = [],
  category,
  isLoading = false,
}: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
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
          <p className="text-gray-600 mt-4">Завантаження продуктів...</p>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <EmptyState
        title="Немає продуктів"
        description="Вибачте, в цій категорії поки немає продуктів"
        actionLabel="Назад до продукції"
        actionHref="/products"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name_ua}
          description={product.description_ua}
          image={product.image}
          weight={product.weight}
          category={category}
          slug={product.slug}
        />
      ))}
    </div>
  );
}

// Old component - no longer used
