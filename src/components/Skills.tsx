"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";
import { useState } from "react";
import { Code2, Sparkles } from "lucide-react";

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05,
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
      
      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08), transparent 70%)",
          }}
        />

        {/* Icon Section */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.6 }}
                className="p-2.5 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-500/30"
              >
                <Code2 size={20} className="text-emerald-400" />
              </motion.div>
              <h3 className="text-lg font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </h3>
            </div>
            
            <motion.div
              animate={isHovered ? { scale: [1, 1.15, 1] } : { scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5"
            >
              {isHovered && <Sparkles size={14} className="text-emerald-400" />}
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {skill.level}%
              </span>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2.5 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full relative shadow-lg shadow-emerald-500/30"
            >
              {/* Shimmer Effect */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </motion.div>
          </div>

          {/* Skill Level Label */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
            className="mt-3 flex items-center justify-between"
          >
            <span className="text-xs text-slate-400 font-medium">
              {skill.level >= 85 ? "🏆 Expert" : skill.level >= 75 ? "⭐ Advanced" : "💪 Proficient"}
            </span>
            <span className="text-xs text-emerald-400/70">
              {skill.level >= 85 ? "Master Level" : skill.level >= 75 ? "High Skill" : "Growing"}
            </span>
          </motion.div>
        </div>

        {/* Decorative Corner Element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full mb-6"
          >
            <Code2 size={16} className="text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Tech Stack & Expertise</span>
            <Sparkles size={14} className="text-cyan-400" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Proficiency
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of technologies and tools I use to craft innovative,
            scalable, and impactful solutions.
          </p>
        </motion.div>

        {/* Two Column Layout: Skills Left, Cloud Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 max-w-7xl mx-auto items-center">
          
          {/* Left: Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Right: Thunder Cloud - Optimized */}
          <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
            {/* Static Outer Ring */}
            <div className="absolute inset-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/20" />
            </div>

            {/* Static Inner Ring */}
            <div className="absolute inset-0 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
              <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
            </div>

            {/* Pulsing Glow Background - Reduced */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl opacity-50" />

            {/* Main Thunder Cloud SVG - Simplified */}
            <div className="will-change-transform">
              <svg
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] drop-shadow-2xl"
              >
                <defs>
                  <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="thunderGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                  <filter id="cloudGlow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Enhanced Cloud Shape with more morphing */}
                <motion.path
                  animate={{
                    d: [
                      "M150,80 C140,80 130,85 125,95 C115,92 105,95 100,105 C90,105 82,113 82,123 C82,133 90,141 100,141 L200,141 C210,141 218,133 218,123 C218,115 213,108 206,105 C206,95 198,87 188,87 C183,87 178,89 175,92 C170,85 161,80 150,80 Z",
                      "M150,75 C138,75 128,82 123,93 C113,90 103,93 98,103 C88,103 80,111 80,121 C80,131 88,139 98,139 L202,139 C212,139 220,131 220,121 C220,113 215,106 208,103 C208,93 200,85 190,85 C185,85 180,87 177,90 C172,82 163,75 150,75 Z",
                      "M150,82 C142,82 132,87 127,97 C117,94 107,97 102,107 C92,107 84,115 84,125 C84,135 92,143 102,143 L198,143 C208,143 216,135 216,125 C216,117 211,110 204,107 C204,97 196,89 186,89 C181,89 176,91 173,94 C168,87 159,82 150,82 Z",
                      "M150,80 C140,80 130,85 125,95 C115,92 105,95 100,105 C90,105 82,113 82,123 C82,133 90,141 100,141 L200,141 C210,141 218,133 218,123 C218,115 213,108 206,105 C206,95 198,87 188,87 C183,87 178,89 175,92 C170,85 161,80 150,80 Z"
                    ],
                    scale: [1, 1.02, 0.99, 1],
                    y: [0, -2, 1, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  fill="url(#cloudGradient)"
                  filter="url(#cloudGlow)"
                  opacity="0.9"
                />

                {/* Animated Thunder Bolts with Enhanced Effects */}
                {/* Thunder Bolt 1 - Left */}
                <motion.path
                  d="M110,145 L105,165 L112,165 L108,185 L118,160 L113,160 L118,145 Z"
                  fill="url(#thunderGradient)"
                  animate={{
                    opacity: [0, 0.3, 1, 1, 0],
                    scaleY: [0.5, 0.8, 1, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut"
                  }}
                />

                {/* Thunder Bolt 2 - Right */}
                <motion.path
                  d="M190,145 L185,165 L192,165 L188,185 L198,160 L193,160 L198,145 Z"
                  fill="url(#thunderGradient)"
                  animate={{
                    opacity: [0, 0.3, 1, 1, 0],
                    scaleY: [0.5, 0.8, 1, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 0.6,
                    ease: "easeInOut"
                  }}
                />

                {/* Thunder Bolt 3 - Center */}
                <motion.path
                  d="M150,145 L147,160 L152,160 L149,175 L156,155 L152,155 L155,145 Z"
                  fill="url(#thunderGradient)"
                  animate={{
                    opacity: [0, 0.3, 1, 1, 0],
                    scaleY: [0.5, 0.8, 1, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    delay: 1.2,
                    ease: "easeInOut"
                  }}
                />

                {/* Enhanced Cloud Outline with shimmer */}
                <motion.path
                  animate={{
                    d: [
                      "M150,80 C140,80 130,85 125,95 C115,92 105,95 100,105 C90,105 82,113 82,123 C82,133 90,141 100,141 L200,141 C210,141 218,133 218,123 C218,115 213,108 206,105 C206,95 198,87 188,87 C183,87 178,89 175,92 C170,85 161,80 150,80 Z",
                      "M150,75 C138,75 128,82 123,93 C113,90 103,93 98,103 C88,103 80,111 80,121 C80,131 88,139 98,139 L202,139 C212,139 220,131 220,121 C220,113 215,106 208,103 C208,93 200,85 190,85 C185,85 180,87 177,90 C172,82 163,75 150,75 Z",
                      "M150,82 C142,82 132,87 127,97 C117,94 107,97 102,107 C92,107 84,115 84,125 C84,135 92,143 102,143 L198,143 C208,143 216,135 216,125 C216,117 211,110 204,107 C204,97 196,89 186,89 C181,89 176,91 173,94 C168,87 159,82 150,82 Z",
                      "M150,80 C140,80 130,85 125,95 C115,92 105,95 100,105 C90,105 82,113 82,123 C82,133 90,141 100,141 L200,141 C210,141 218,133 218,123 C218,115 213,108 206,105 C206,95 198,87 188,87 C183,87 178,89 175,92 C170,85 161,80 150,80 Z"
                    ],
                    strokeOpacity: [0.5, 0.8, 0.6, 0.5]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  fill="none"
                  stroke="url(#cloudGradient)"
                  strokeWidth="3"
                  filter="url(#cloudGlow)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: "13+" },
            { label: "Years Learning", value: "3+" },
            { label: "Projects Built", value: "10+" },
            { label: "Avg. Proficiency", value: "78%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all group"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
