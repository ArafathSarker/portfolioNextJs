"use client";

import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/data";
import { Award, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

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
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Certifications</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-cyan-500/5 group-hover:to-transparent transition-all duration-500" />

              <div className="aspect-video overflow-hidden bg-slate-800 relative">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Zoom Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      Issued by <span className="text-emerald-400 font-medium">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                {/* View Certificate Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t border-slate-700/50"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Click to view</span>
                    <ZoomIn className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Now inside the container and always visible */}
              <button
                onClick={() => setSelectedCert(null)}
                className="sticky top-4 left-full z-10 ml-4 mb-4 p-3 bg-slate-800 hover:bg-emerald-500 rounded-full transition-colors shadow-lg flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
                <div className="relative w-full" style={{ minHeight: '400px' }}>
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '70vh' }}
                    priority
                  />
                </div>
                <div className="p-6 border-t border-slate-700">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                  <p className="text-slate-400">Issued by <span className="text-emerald-400 font-medium">{selectedCert.issuer}</span></p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
