"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Aggressive lazy loading - load below-fold components only on client
const Skills = dynamic(() => import("@/components/Skills"), { 
  ssr: false,
  loading: () => <div className="h-screen" /> 
});
const Projects = dynamic(() => import("@/components/Projects"), { 
  ssr: false,
  loading: () => <div className="h-screen" /> 
});
const Achievements = dynamic(() => import("@/components/Achievements"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
});
const Certificates = dynamic(() => import("@/components/Certificates"), { 
  ssr: false,
  loading: () => <div className="h-96" /> 
});

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
