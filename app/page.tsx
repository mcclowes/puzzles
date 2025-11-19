import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { GameGrid } from "@/components/game-grid";
import { FactOfTheDay } from "@/components/fact-of-the-day";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <GameGrid />
      <FactOfTheDay />
      <Footer />
    </main>
  );
}
