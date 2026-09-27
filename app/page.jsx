import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="relative overflow-hidden">
          <Hero />
          <Projects />
          <Skills />
          <Reveal><Experience /></Reveal>
          <Reveal><Contact /></Reveal>
        </main>
        <Reveal><Footer /></Reveal>
      </PageTransition>
    </>
  );
}
