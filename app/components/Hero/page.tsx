import AboutSection from "../HomePage/About";
import CTASection from "../HomePage/CTASection";
import FeaturesSection from "../HomePage/Features";
import Hero from "../HomePage/Hero";
import ProductsSlider from "../HomePage/ProductSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <FeaturesSection/>
      <ProductsSlider/>
      <CTASection/>
    </>
  );
}
