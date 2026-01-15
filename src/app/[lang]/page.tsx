import Hero from "@/components/sections/Hero";
import QuickConditions from "@/components/sections/QuickConditions";
import ConditionCategories from "@/components/sections/ConditionCategories";
import FeaturedHerbs from "@/components/sections/FeaturedHerbs";
import TrustedProducts from "@/components/sections/TrustedProducts";
import ConsultCTA from "@/components/sections/ConsultCTA";
import TrustSection from "@/components/sections/TrustSection";
import DidYouKnow from "@/components/sections/DidYouKnow";
import Newsletter from "@/components/sections/Newsletter";


export default function Home() {
  return (
    <>
      <Hero />
      <QuickConditions />
      <ConditionCategories />
      <FeaturedHerbs />
      <DidYouKnow />
      <TrustedProducts />
      <ConsultCTA />
      <Newsletter />
      <TrustSection />
    </>
  );
}
