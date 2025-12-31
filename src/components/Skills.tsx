"use client";

import { skills } from "@/data";
import { Code2 } from "lucide-react";

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  return (
    <div
      className="relative group animate-fadeInUp"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
      
      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-5 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
        {/* Icon Section */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-500/30 group-hover:rotate-12 transition-transform duration-300">
                <Code2 size={18} className="text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-slate-200 group-hover:text-emerald-400 transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
            
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {skill.level}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full animate-progressFill"
              style={{ 
                "--progress-width": `${skill.level}%`,
                animationDelay: `${300 + index * 100}ms`
              } as React.CSSProperties}
            />
          </div>

          {/* Skill Level Label */}
          <div className="mt-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-slate-400 font-medium">
              {skill.level >= 85 ? "🏆 Expert" : skill.level >= 75 ? "⭐ Advanced" : "💪 Proficient"}
            </span>
            <span className="text-xs text-emerald-400/70">
              {skill.level >= 85 ? "Master Level" : skill.level >= 75 ? "High Skill" : "Growing"}
            </span>
          </div>
        </div>
      </div>
    </div>
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
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Code2 size={16} className="text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Tech Stack & Expertise</span>
          </div>

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
        </div>

        {/* Two Column Layout: Skills Left, Cloud Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 max-w-7xl mx-auto items-center">
          
          {/* Left: Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Right: Thunder Cloud - Static SVG with CSS animations */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Static Rings */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/20" />
            </div>

            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
              <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
            </div>

            {/* Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl opacity-50" />

            {/* Static Thunder Cloud SVG */}
            <svg
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] drop-shadow-2xl animate-float"
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
              </defs>

              {/* Cloud Shape */}
              <path
                d="M150,80 C140,80 130,85 125,95 C115,92 105,95 100,105 C90,105 82,113 82,123 C82,133 90,141 100,141 L200,141 C210,141 218,133 218,123 C218,115 213,108 206,105 C206,95 198,87 188,87 C183,87 178,89 175,92 C170,85 161,80 150,80 Z"
                fill="url(#cloudGradient)"
                opacity="0.9"
              />

              {/* Thunder Bolts with CSS animation */}
              <path
                d="M110,145 L105,165 L112,165 L108,185 L118,160 L113,160 L118,145 Z"
                fill="url(#thunderGradient)"
                className="animate-thunderPulse"
              />
              <path
                d="M190,145 L185,165 L192,165 L188,185 L198,160 L193,160 L198,145 Z"
                fill="url(#thunderGradient)"
                className="animate-thunderPulse"
                style={{ animationDelay: "0.5s" }}
              />
              <path
                d="M150,145 L147,160 L152,160 L149,175 L156,155 L152,155 L155,145 Z"
                fill="url(#thunderGradient)"
                className="animate-thunderPulse"
                style={{ animationDelay: "1s" }}
              />

              {/* Cloud Outline */}
              <path
                d="M150,80 C140,80 130,85 125,95 C115,92 105,95 100,105 C90,105 82,113 82,123 C82,133 90,141 100,141 L200,141 C210,141 218,133 218,123 C218,115 213,108 206,105 C206,95 198,87 188,87 C183,87 178,89 175,92 C170,85 161,80 150,80 Z"
                fill="none"
                stroke="url(#cloudGradient)"
                strokeWidth="3"
                strokeOpacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Technologies", value: "13+" },
            { label: "Years Learning", value: "3+" },
            { label: "Projects Built", value: "10+" },
            { label: "Avg. Proficiency", value: "78%" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all group animate-fadeInUp"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
