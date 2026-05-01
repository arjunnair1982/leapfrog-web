"use client";

import { useState } from "react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { HowItWorks } from "@/components/HowItWorks";
import { SectorCarousel } from "@/components/SectorCarousel";
import { SocialProof } from "@/components/SocialProof";
import { PricingSignal } from "@/components/PricingSignal";
import { FinalCTA } from "@/components/FinalCTA";
import { AIConsultantModal } from "@/components/AIConsultantModal";
import { ElevenLabsWidget } from "@/components/ElevenLabsWidget";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpen={() => setModalOpen(true)} />
      <main>
        <Hero onOpen={() => setModalOpen(true)} />
        <PainPoints />
        <HowItWorks />
        <SectorCarousel />
        <SocialProof />
        <PricingSignal />
        <FinalCTA onOpen={() => setModalOpen(true)} />
      </main>
      <AIConsultantModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ElevenLabsWidget />
    </div>
  );
}
