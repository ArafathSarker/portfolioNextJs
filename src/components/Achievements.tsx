"use client";

import { achievements } from "@/data";
import { Award, Trophy, Calendar } from "lucide-react";
import Image from "next/image";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Recognition</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Honors &{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Awards
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Recognition and achievements that mark key milestones in my journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline Line */}
              {index < achievements.length - 1 && (
                <div className="absolute left-8 md:left-12 top-24 w-0.5 h-full bg-gradient-to-b from-emerald-500/50 to-transparent" />
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start group">
                {/* Icon */}
                <div className="relative flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-[5deg]">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-0.5 shadow-xl shadow-emerald-500/20">
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <Image
                        src={achievement.logo}
                        alt={achievement.issuer}
                        width={64}
                        height={64}
                        className="object-contain rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Pulse Effect */}
                  <span className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>
                
                {/* Content Card */}
                <div className="flex-grow bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden hover:scale-[1.02]">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 text-sm mb-4">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Award className="w-4 h-4 text-emerald-400" />
                            <span>{achievement.issuer}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4 text-cyan-400" />
                            <span>{achievement.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Badge */}
                      {achievement.placement && (
                        <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-sm font-semibold text-emerald-400 backdrop-blur-sm">
                          {achievement.placement}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {achievement.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-700/50">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-400 text-sm">Silver Medal</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Award Image */}
                <div className="flex-shrink-0 w-full md:w-64 h-48 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 shadow-xl relative hover:scale-105">
                  <Image
                    src={achievement.image}
                    alt="Award"
                    fill
                    sizes="(max-width: 768px) 100vw, 256px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute left-8 md:left-12 top-8 md:top-12 w-4 h-4 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
