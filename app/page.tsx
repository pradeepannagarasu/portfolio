import Hero from "@/components/Hero";
import About from "@/components/About";
import AiLlmSystems from "@/components/AiLlmSystems";
import FullStackPlatform from "@/components/FullStackPlatform";
import DigitalGrowth from "@/components/DigitalGrowth";
import Projects from "@/components/Projects";
import ArchitectureDocs from "@/components/ArchitectureDocs";
import Links from "@/components/ResumeLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <AiLlmSystems />
        <FullStackPlatform />
        <DigitalGrowth />
        <Projects />
        <ArchitectureDocs />
        <Links />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

