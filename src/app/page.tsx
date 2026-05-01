import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { HowItWorks } from "@/components/HowItWorks";
import { SectorCarousel } from "@/components/SectorCarousel";
import { SocialProof } from "@/components/SocialProof";
import { PricingSignal } from "@/components/PricingSignal";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <SectorCarousel />
        <SocialProof />
        <PricingSignal />
        <FinalCTA />
      </main>
    </div>
  );
}
