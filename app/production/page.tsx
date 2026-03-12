import ProductionHero from "@/components/Production/Hero";
import FillingSection from "@/components/Production/FillingSection";
import FormingSection from "@/components/Production/FormingSection";
import BakingSection from "@/components/Production/BakingSection";
import DoughSection from "@/components/Production/DoughSection";
import Packing from "@/components/Production/Packing";
import ProductionFinalBlock from "@/components/Production/ProductionFinalBlock";

export default function ProductionPage() {
  return (
    <main>
      <ProductionHero />
      <DoughSection/>
      <FillingSection />
      <FormingSection />
      <BakingSection />
      <Packing/>
      <ProductionFinalBlock/>
    </main>
  );
}