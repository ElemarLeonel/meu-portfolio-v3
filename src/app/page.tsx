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
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const appURL = process.env.APP_URL;
  const posts = await fetch(`${appURL}/api/posts-home`).then((res) =>
    res.json().catch((err) => console.log(err))
  );

  return (
    <main className="bg-blue-900 w-full relative">
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
      <Solutions />
      <Techs />
      <Projects />
      <Blog posts={posts} />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
