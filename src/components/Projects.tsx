"use client";

import { projects } from "@/data";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div
      className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-2 animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent 40%)`,
        }}
      />

      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          Featured
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className={`text-sm font-semibold ${project.color} flex items-center gap-2`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {project.subtitle}
            </p>
          </div>
          
          <Link
            href={project.link}
            aria-label={`Open ${project.title} in new page`}
            className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 shadow-lg flex items-center justify-center hover:scale-110 hover:rotate-3"
          >
            <ExternalLink size={20} />
          </Link>
        </div>

        <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-slate-800 to-slate-700 text-slate-300 rounded-lg border border-slate-600 hover:border-emerald-500/50 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <Link
            href={project.link}
            aria-label={`View details of ${project.title}`}
            className="flex-1 px-4 py-2 bg-slate-800/50 hover:bg-emerald-500 text-slate-300 hover:text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <Eye size={16} />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-emerald-400 font-medium">Recent Work</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in building modern, scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
