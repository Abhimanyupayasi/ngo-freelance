import Header from "@/components/common/Header";
import HomeHero from "@/components/hero/HomeHero";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-zinc-900 overflow-hidden">
      <Header />
      <div className="h-24">
      </div>
      <HomeHero />
    </main>
  );
}