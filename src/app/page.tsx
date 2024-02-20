import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";

import BgHero from "/public/bg-hero.webp";

export default function Home() {
  return (
    <main className="bg-blue-900 w-full">
      <div
        className="w-full h-full"
        style={{
          background: `#010c1d url(${BgHero.src}) center/cover no-repeat`,
        }}
      >
        <Header />
        <Hero />
      </div>
      <About />
    </main>
  );
}
