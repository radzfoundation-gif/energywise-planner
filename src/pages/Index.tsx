import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EnergyTracker } from "@/components/EnergyTracker";
import { SmartPrioritizer } from "@/components/SmartPrioritizer";
import { FeaturesGrid } from "@/components/FeaturesGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EnergyTracker />
      <SmartPrioritizer />
      <FeaturesGrid />
    </div>
  );
};

export default Index;