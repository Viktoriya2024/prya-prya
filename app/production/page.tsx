import ProductionHero from "@/components/Production/Hero";

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
      <BakingSection />
     
      <FormingSection />
      
      <Packing/>
      <ProductionFinalBlock/>
    </main>
  );
}