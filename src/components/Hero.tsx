"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { Linkedin, Sparkles, Code2, Rocket } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-20 text-emerald-500/20"
      >
        <Code2 size={60} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-20 text-cyan-500/20"
      >
        <Rocket size={70} />
      </motion.div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Available for opportunities</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-medium text-slate-400 mb-3"
          >
            Hello, <span className="text-emerald-400">I'm</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {personalInfo.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
          >
            {personalInfo.bio}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="https://www.linkedin.com/in/arafath-sarker/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with me on LinkedIn"
              className="group px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Linkedin size={18} />
                Let's Talk
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#projects"
              aria-label="View my work and projects"
              className="px-8 py-3.5 border-2 border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white rounded-full font-medium transition-all hover:bg-emerald-500/10 backdrop-blur-sm"
            >
              View Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            {personalInfo.socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all hover:bg-slate-800"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center perspective-1000"
        >
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-emerald-500/20 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-cyan-500/20"
            />
            
            {/* Hexagon Container with Profile */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <svg
                viewBox="20 -4 189.959 207.282"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                className="drop-shadow-2xl"
              >
                <defs>
                  {/* Gradient for the hexagon border */}
                  <linearGradient id="hexGradient" x1="0" x2="1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>

                  {/* Bottom Glow Effect */}
                  <filter id="bottomGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="10" stdDeviation="6" floodColor="rgba(16, 185, 129, 0.5)" />
                  </filter>

                  {/* Stronger Glow for Hover */}
                  <filter id="bottomGlowHover" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="rgba(16, 185, 129, 0.9)" />
                  </filter>

                  {/* Mask for the image - extended upper portion for head overflow */}
                  <mask id="hexMask">
                    <path
                      d="M164.041 57.718 195.959 113A14 14 0 01195.959 127L164.041 182.282A14 14 0 01151.917 189.282L88.083 189.282A14 14 0 0175.959 182.282L43 125 34 46 110 10Z"
                      fill="white"
                      transform="rotate(30 120 120)"
                    />
                  </mask>
                </defs>

                {/* Hexagon border with gradient and glow */}
                <motion.path
                  d="M 164.041 57.718 L 195.959 113.000 A 14 14 0 0 1 195.959 127.000 L 164.041 182.282 A 14 14 0 0 1 151.917 189.282 L 88.083 189.282 A 14 14 0 0 1 75.959 182.282 L 44.041 127.000 A 14 14 0 0 1 44.041 113.000 L 75.959 57.718 A 14 14 0 0 1 88.083 50.718 L 151.917 50.718 A 14 14 0 0 1 164.041 57.718 Z"
                  fill="none"
                  stroke="url(#hexGradient)"
                  strokeWidth="3"
                  transform="rotate(30 120 120)"
                  filter="url(#bottomGlow)"
                  whileHover={{ filter: "url(#bottomGlowHover)" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Profile image clipped inside the hexagon mask */}
                <foreignObject
                  x="25.041"
                  y="10"
                  width="200.918"
                  height="240.564"
                  mask="url(#hexMask)"
                >
                  <Image
                    src="/images/profile.png"
                    alt="Profile"
                    width={201}
                    height={241}
                    priority
                    quality={85}
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </foreignObject>
              </svg>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 15}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
