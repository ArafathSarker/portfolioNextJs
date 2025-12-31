"use client";

import { personalInfo } from "@/data";
import { ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 relative overflow-hidden">
                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center relative">
                  <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="object-cover rounded-lg" />
                </div>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
                Portfolio.
              </h2>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Building innovative solutions that bridge the gap between technology and user experience.
            </p>
            <div className="space-y-3 text-slate-400">
              <p className="text-lg font-medium text-white">{personalInfo.address}</p>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="block hover:text-emerald-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <p>{personalInfo.phone}</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400" />
            </h3>
            <ul className="space-y-3">
              {["Home", "Projects", "Skills", "Certificates", "Achievements"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400" />
            </h3>
            <div className="flex flex-wrap gap-3">
              {personalInfo.socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-emerald-500 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 group"
                  aria-label={social.name}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/50 gap-4"
        >
          <p className="text-slate-500 text-sm flex items-center gap-2">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Made with
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            and dedication.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white transition-all shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/40"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
