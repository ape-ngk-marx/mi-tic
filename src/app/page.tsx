import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SoftwareArchitecture } from "@/components/SoftwareArchitecture";
import { EngineeringProcess } from "@/components/EngineeringProcess";
import { DevOpsShowcase } from "@/components/DevOpsShowcase";
import { SystemDesign } from "@/components/SystemDesign";
import { PerformanceEngineering } from "@/components/PerformanceEngineering";
import { EngineeringValues } from "@/components/EngineeringValues";
import { AnimatedImages } from "@/components/AnimatedImages";
import { TikTokShowcase } from "@/components/TikTokShowcase";
import { TechEcosystem } from "@/components/TechEcosystem";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <SoftwareArchitecture />
        <EngineeringProcess />
        <DevOpsShowcase />
        <SystemDesign />
        <PerformanceEngineering />
        <EngineeringValues />
        <AnimatedImages />
        <TikTokShowcase />
        <TechEcosystem />
        <Footer />
      </main>
    </>
  );
}
