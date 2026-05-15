import AboutHero from "@/components/About/AboutHero";
import AboutFactory from "@/components/About/AboutFactory";
import AboutProduction from "@/components/About/AboutProduction";
import AboutProducts from "@/components/About/AboutProducts";
import AboutStaff from "@/components/About/AboutStaff";
import AboutPartners from "@/components/About/AboutPartners";
import AboutQuality from "@/components/About/AboutQuality";
import AboutValues from "@/components/About/AboutValues";

export default function AboutPage() {
  return (
    <main id="about" className="scroll-smooth pt-16 sm:pt-18 md:pt-20">
      <AboutHero />
      <AboutFactory />
      <AboutProduction />
      <AboutProducts />
      <AboutStaff />
      <AboutPartners />
      <AboutQuality />
      <AboutValues />
    </main>
  );
}
