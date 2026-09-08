import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Music2, Sliders } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Subtle Chase Atlantic Rose Outline Watermark */}
      <div className="absolute -right-20 top-16 w-80 sm:w-96 opacity-[0.08] pointer-events-none select-none filter blur-[0.5px]">
        <img
          src="/images/chase-rose-petals.png"
          alt="Rose Outline"
          className="w-full h-auto object-contain grayscale"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ruby-950/70 border border-ruby-800/60 text-ruby-300 text-xs font-semibold mb-3 shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-ruby-400" />
            <span>Faixa 04: Habilidades & Tecnologias</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Afinação Técnica & Competências
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Sintonia entre desenvolvimento web moderno, organização analítica de dados e sensibilidade visual.
          </p>
        </div>

        {/* Two main columns: Web & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/60 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Desenvolvimento Web & Front-end</h3>
                  <p className="text-xs text-zinc-400">Padrões abertos e interfaces acessíveis</p>
                </div>
              </div>
              
              {/* Frequency Spectrum Equalizer */}
              <div className="flex items-end gap-1 h-5 px-2 py-1 rounded-lg bg-zinc-950 border border-zinc-800">
                {[12, 18, 10, 20, 15].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: [`${h * 0.3}px`, `${h}px`, `${h * 0.3}px`] }}
                    transition={{ duration: 0.8 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                    className="w-0.5 bg-ruby-500 rounded-full"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {skillsData.web.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-zinc-200">{skill.name}</span>
                    <span className="font-semibold text-ruby-400 font-mono">{skill.level}%</span>
                  </div>
                  {/* Mixing Console Fader Meter */}
                  <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden p-0.5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-rose-600 via-ruby-600 to-red-500 relative"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-ruby-600 shadow-xs" />
                    </motion.div>
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-zinc-500 px-0.5">
                    <span>-∞</span>
                    <span>-12dB</span>
                    <span>-6dB</span>
                    <span>0dB (Pro)</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Productivity, Data & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-900/60 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Produtividade, Dados & Fundamentos</h3>
                  <p className="text-xs text-zinc-400">Ferramentas de análise e base técnica</p>
                </div>
              </div>
              
              {/* Frequency Spectrum Equalizer */}
              <div className="flex items-end gap-1 h-5 px-2 py-1 rounded-lg bg-zinc-950 border border-zinc-800">
                {[14, 10, 22, 16, 12].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: [`${h * 0.3}px`, `${h}px`, `${h * 0.3}px`] }}
                    transition={{ duration: 0.85 + i * 0.12, repeat: Infinity, ease: "easeInOut" }}
                    className="w-0.5 bg-ruby-500 rounded-full"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {skillsData.tools.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-zinc-200">{skill.name}</span>
                    <span className="font-semibold text-ruby-400 font-mono">{skill.level}%</span>
                  </div>
                  {/* Mixing Console Fader Meter */}
                  <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden p-0.5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-rose-600 via-ruby-600 to-red-500 relative"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-ruby-600 shadow-xs" />
                    </motion.div>
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-zinc-500 px-0.5">
                    <span>-∞</span>
                    <span>-12dB</span>
                    <span>-6dB</span>
                    <span>0dB (Pro)</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Soft Skills Section */}
        <div className="bg-zinc-900/60 rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400">
                <Music2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Cadência Profissional & Postura</h3>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <span className="w-1 h-3 bg-ruby-500 rounded-full animate-pulse" />
              <span className="w-1 h-5 bg-rose-500 rounded-full animate-pulse" />
              <span className="w-1 h-2 bg-ruby-400 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.soft.map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-2 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ruby-500"></span>
                  <h4 className="text-xs font-bold text-zinc-200">{item.title}</h4>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
