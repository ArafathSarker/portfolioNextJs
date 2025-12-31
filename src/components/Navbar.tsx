"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Achievements", href: "#achievements" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-emerald-500/5 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" aria-label="Home - Portfolio" className="flex items-center gap-3 group relative">
          <div className="relative w-12 h-12 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-0.5 transform group-hover:scale-110 transition-transform duration-300">
            <div className="w-full h-full bg-slate-900 rounded-2xl overflow-hidden relative">
              <Image src="/images/logo.png" alt="Logo" fill className="object-cover" sizes="48px" priority />
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            Portfolio
          </span>
          <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 group"
              >
                <span className={`relative z-10 font-medium transition-colors duration-300 ${
                  isActive ? "text-emerald-400" : "text-slate-300 group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg border border-emerald-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            );
          })}
          <a
            href="https://www.linkedin.com/in/arafath-sarker/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-emerald-500/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-emerald-400" /> : <Menu size={24} className="text-slate-300" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-slate-300 hover:text-emerald-400 font-medium text-lg rounded-lg hover:bg-slate-800/50 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="https://www.linkedin.com/in/arafath-sarker/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-center text-white rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
