"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500"
    >
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
        }}
      />

      <div className="relative h-56 overflow-hidden">
        <motion.div
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </motion.div>

        {/* Floating Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full"
        >
          Featured
        </motion.div>
      </div>

      <div className="p-6 relative" style={{ transform: "translateZ(50px)" }}>
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
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={project.link}
              aria-label={`Open ${project.title} in new page`}
              className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>

        <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-slate-800 to-slate-700 text-slate-300 rounded-lg border border-slate-600 hover:border-emerald-500/50 transition-all"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="flex gap-3 pt-4 border-t border-slate-700/50"
        >
          <Link
            href={project.link}
            aria-label={`View details of ${project.title}`}
            className="flex-1 px-4 py-2 bg-slate-800/50 hover:bg-emerald-500 text-slate-300 hover:text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <Eye size={16} />
            View Details
          </Link>
        </motion.div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)`,
        }}
      />
    </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-emerald-400 font-medium">Recent Work</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A curated selection of projects that showcase my passion for creating
            innovative and impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
