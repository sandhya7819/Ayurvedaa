import Hero from "@/components/sections/Hero";
import ConditionCategories from "@/components/sections/ConditionCategories";
import FeaturedHerbs from "@/components/sections/FeaturedHerbs";
import TrustedProducts from "@/components/sections/TrustedProducts";
import ConsultCTA from "@/components/sections/ConsultCTA";
import TrustSection from "@/components/sections/TrustSection";
import ChatCTA from "@/components/sections/ChatCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ConditionCategories />
      <FeaturedHerbs />
      <TrustedProducts />
      <ConsultCTA />
      <ChatCTA />
      <TrustSection />
    </>
  );
}
