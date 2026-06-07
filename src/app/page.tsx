"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedCarousel } from "@/components/sections/FeaturedCarousel";
import { JourneySection } from "@/components/sections/JourneySection";
import { SuccessStories } from "@/components/sections/SuccessStories";
// import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { CommunitySection } from "@/components/sections/CommunitySection";

import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ImpactSection />
        <CategoriesSection />
        <FeaturedCarousel />
        <JourneySection />
        <SuccessStories />
        {/* <ResourcesSection /> */}
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
