import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Layers, FileSpreadsheet, Presentation, Globe, Music, Disc, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const getIcon = (id) => {
    switch(id) {
      case 1: return Globe;
      case 2: return Layers;
      case 3: return FileSpreadsheet;
      case 4: return Presentation;
      default: return FolderGit2;
    }
  };

  const trackMeta = [
    { track: "SIDE A • TRACK 01", bpm: "124 BPM", time: "03:45" },
    { track: "SIDE A • TRACK 02", bpm: "128 BPM", time: "04:10" },
    { track: "SIDE B • TRACK 03", bpm: "118 BPM", time: "03:15" },
    { track: "SIDE B • TRACK 04", bpm: "130 BPM", time: "03:50" },
  ];

  return (
    <section id="projetos" className="py-24 bg-gradient-to-b from-[#09090b] via-[#120308] to-[#09090b] text-white relative overflow-hidden">
      {/* Background Soundwave Harmonic Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path
            d="M-50 200 C 350 350, 700 100, 1100 280 C 1300 370, 1450 220, 1550 250"
            stroke="#e11d48"
            strokeWidth="3"
            strokeDasharray="8 6"
          />
          <path
            d="M-50 240 C 300 120, 650 320, 1050 180 C 1300 90, 1450 260, 1550 200"
            stroke="#9f1239"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ruby-950/70 backdrop-blur-md border border-ruby-800/60 text-ruby-300 text-xs font-semibold mb-3 shadow-xs">
            <Music className="w-3.5 h-3.5 text-ruby-400" />
            <span>Faixa 05: Repertório & Práticas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos & Aplicações em Foco
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Repertório construído na prática escolar do IFAC, soluções de produtividade com dados e interfaces web estruturadas.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => {
            const Icon = getIcon(project.id);
            const meta = trackMeta[idx] || { track: `TRACK 0${idx + 1}`, bpm: "120 BPM", time: "03:30" };
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-zinc-900/80 hover:border-zinc-700 transition-all shadow-xl relative overflow-hidden group"
              >
                {/* Vinyl Jacket Gloss Sheen Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

                <div>
                  {/* Tracklist Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
                    <span className="font-bold tracking-wider uppercase text-zinc-200 flex items-center gap-1.5">
                      <Disc className="w-3.5 h-3.5 text-ruby-400 animate-spin-slow" />
                      {meta.track}
                    </span>
                    <span className="flex items-center gap-2 text-ruby-400">
                      <span>{meta.bpm}</span>
                      <span>•</span>
                      <span>{meta.time}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-zinc-800 border border-zinc-700 text-ruby-300 shadow-sm">
                      {project.badge}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-ruby-400 block mb-1">
                    {project.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-zinc-950/70 text-zinc-300 text-[11px] font-medium border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Growth Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center max-w-xl mx-auto backdrop-blur-xs"
        >
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-200">Constante evolução:</span> Cada novo trabalho acadêmico no IFAC e desafio prático se torna uma oportunidade para ampliar o domínio técnico e refinar este repertório digital.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
