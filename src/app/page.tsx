import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Achievements />
      <Footer />
    </main>
  );
}
