import { Metadata } from "next";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Solutions from "@/components/Solutions/Solutions";
import Techs from "@/components/Techs/Techs";
import Projects from "@/components/Projects/Projects";
import BgHero from "/public/images/bg-hero.webp";
import Footer from "@/components/Footer/Footer";
import Blog from "@/components/Blog/Blog";

export const metadata: Metadata = {
  title: "Home",
};

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
      {/* @ts-expect-error Async Server Component */}
      <About />
      {/* @ts-expect-error Async Server Component */}
      <Solutions />
      {/* @ts-expect-error Async Server Component */}
      <Techs />
      {/* @ts-expect-error Async Server Component */}
      <Projects />
      {/* @ts-expect-error Async Server Component */}
      <Blog />
      <Footer />
    </main>
  );
}
