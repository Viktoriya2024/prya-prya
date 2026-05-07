import ProductsHero from "@/components/Products/ProductsHero";
import ProductCategories from "@/components/Products/ProductCategories";
import ProductsQuality from "@/components/Products/ProductsQuality";
import ProductsCTA from "@/components/Products/ProductsCTA";

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ProductsHero />
      <ProductCategories />
      <ProductsQuality />
      <ProductsCTA />
    </main>
  );
}
