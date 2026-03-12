import AboutSection from "@/components/HomePage/About";
import CTASection from "@/components/HomePage/CTASection";
import FeaturesSection from "@/components/HomePage/Features";
import Hero from "@/components/HomePage/Hero";
import ProductsSlider from "@/components/HomePage/ProductSlider";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <ProductsSlider />
      <CTASection />
    </main>
  );
}

