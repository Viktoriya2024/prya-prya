import ProductsHero from "../components/Products/ProductsHero";
import ProductCategories from "../components/Products/ProductCategories";
import ProductGrid from "../components/Products/ProductGrid";

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ProductsHero />
      <ProductCategories />
      <ProductGrid />
    </main>
  );
}
