import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HeroSectionOne from "@/components/hero/HeroSectionOne";
import HeroSectionTwo from "@/components/hero/HeroSectionTwo";
import HomeHero from "@/components/hero/HomeHero";
import HopeSection from "@/components/hero/HopeSection";
import ImpactSection from "@/components/hero/ImpactSection";
import ProgramsSection from "@/components/hero/ProgramsSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-zinc-900 overflow-hidden">
     
      <HomeHero />
      <HeroSectionOne/>
      <HeroSectionTwo/>
      {/* <ProgramsSection/> */}
      <ImpactSection/>
      <HopeSection/>
      
    </main>
  );
}