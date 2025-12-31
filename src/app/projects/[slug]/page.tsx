"use client";

import { projects } from "@/data";
import { ArrowLeft, ExternalLink, Github, Play, Code2, Sparkles, Image as ImageIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState, use } from "react";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Back Button */}
        <div className="animate-slideInLeft">
          <Link
            href="/#projects"
            aria-label="Back to all projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-16 animate-fadeInUp">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 font-medium animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-4xl">
            {project.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Play className="w-5 h-5" />
                Live Demo
              </a>
            )}
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl font-semibold text-white hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}

            {project.frontendCode && (
              <a
                href={project.frontendCode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} frontend code on GitHub`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl font-semibold text-white hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Code2 className="w-5 h-5" />
                Frontend Code
              </a>
            )}

            {project.backendCode && (
              <a
                href={project.backendCode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} backend code on GitHub`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl font-semibold text-white hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-5 h-5" />
                Backend Code
              </a>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700/50 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">About This Project</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg">
                    <ImageIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Gallery</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer rounded-xl overflow-hidden border-2 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 shadow-xl h-64 hover:scale-[1.03] animate-fadeInUp"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" />
                          Click to enlarge
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Tech Stack */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg">
                    <Code2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Technologies</h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies?.map((tech, index) => (
                    <div
                      key={tech}
                      className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 animate-scaleIn"
                      style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all duration-300 group"
                      >
                        <Play className="w-5 h-5 text-emerald-400" />
                        <span className="text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">
                          Live Demo
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
                      </a>
                    )}
                    
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all duration-300 group"
                      >
                        <Github className="w-5 h-5 text-emerald-400" />
                        <span className="text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">
                          Source Code
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
                      </a>
                    )}

                    {project.frontendCode && (
                      <a
                        href={project.frontendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all duration-300 group"
                      >
                        <Code2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">
                          Frontend Repo
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
                      </a>
                    )}

                    {project.backendCode && (
                      <a
                        href={project.backendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all duration-300 group"
                      >
                        <ExternalLink className="w-5 h-5 text-emerald-400" />
                        <span className="text-slate-300 group-hover:text-emerald-400 transition-colors duration-300">
                          Backend Repo
                        </span>
                        <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal - CSS Based */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] overflow-auto animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="sticky top-4 left-full z-10 ml-4 mb-4 p-3 bg-slate-800 hover:bg-emerald-500 rounded-full transition-colors duration-300 shadow-lg"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <div className="relative w-full" style={{ minHeight: '400px' }}>
                <Image
                  src={selectedImage}
                  alt="Full size screenshot"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '80vh' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
