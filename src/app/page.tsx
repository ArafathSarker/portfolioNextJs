import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: true });
const Certificates = dynamic(() => import("@/components/Certificates"), { ssr: true });

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
