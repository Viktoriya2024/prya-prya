import AboutSection from "../HomePage/About";
import ContactSection from "../HomePage/ContactSection";
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
      <ContactSection/>
    </>
  );
}
