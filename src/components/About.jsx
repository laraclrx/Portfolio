import React from 'react';
import { motion } from 'framer-motion';
import { User, Music, Sparkles, Heart, Target, Camera, BookOpen, Disc3 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Music,
      title: "Ritmo & Concentração",
      description: "A música me ensinou a escutar com atenção, ter cadência e persistir em cada compasso — qualidades que levo para a lógica de programação e análise de dados."
    },
    {
      icon: Camera,
      title: "Olhar Visual & Detalhes",
      description: "A fotografia e o design aguçam minha percepção visual, garantindo interfaces limpas, harmoniosas e bem diagramadas para o usuário final."
    },
    {
      icon: Target,
      title: "Compromisso com a Prática",
      description: "No 3º ano do IFAC, busco constantemente aplicar a teoria em projetos reais, aprimorando meu código e aprofundando certificações técnicas."
    },
    {
      icon: Heart,
      title: "Empatia & Sintonia",
      description: "Acredito que a melhor tecnologia é aquela que comunica de forma transparente e resolve problemas reais das pessoas com simplicidade."
    }
  ];

  // Floating rose petals drifting in ruby atmosphere
  const floatingPetals = [
    { id: 1, left: '8%', top: '15%', size: 'w-10 sm:w-12', duration: 10, delay: 0, xRange: [0, 25, -15, 0], yRange: [0, 35, 15, 0], rotate: [0, 45, 90, 0] },
    { id: 2, left: '88%', top: '22%', size: 'w-12 sm:w-16', duration: 12, delay: 1.5, xRange: [0, -30, 20, 0], yRange: [0, 45, 20, 0], rotate: [20, -40, 30, 20] },
    { id: 3, left: '42%', top: '75%', size: 'w-9 sm:w-11', duration: 9, delay: 2.2, xRange: [0, 20, -25, 0], yRange: [0, -30, -10, 0], rotate: [0, 35, 70, 0] },
    { id: 4, left: '80%', top: '80%', size: 'w-11 sm:w-14', duration: 11, delay: 0.8, xRange: [0, -25, 15, 0], yRange: [0, 40, 15, 0], rotate: [45, 90, 135, 45] },
    { id: 5, left: '16%', top: '82%', size: 'w-10 sm:w-12', duration: 13, delay: 3, xRange: [0, 30, -20, 0], yRange: [0, -35, 15, 0], rotate: [-15, 30, 75, -15] },
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-[#09090b] via-[#140308] to-[#09090b] text-white relative overflow-hidden">
      {/* Decorative Chase Atlantic Rose Background Watermark */}
      <div className="absolute -left-20 -bottom-20 w-80 sm:w-96 opacity-20 pointer-events-none select-none -rotate-12 filter blur-[0.5px]">
        <img
          src="/images/chase-rose-petals.png"
          alt="Rosa Decorativa"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Floating Rose Petals Drift Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingPetals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ x: 0, y: 0, opacity: 0.3 }}
            animate={{
              x: petal.xRange,
              y: petal.yRange,
              rotate: petal.rotate,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: "easeInOut"
            }}
            className={`absolute ${petal.size} pointer-events-none select-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`}
            style={{ left: petal.left, top: petal.top }}
          >
            <img
              src="/images/chase-rose-petals.png"
              alt="Pétala Chase Atlantic"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ruby-950/70 backdrop-blur-md border border-ruby-800/60 text-ruby-300 text-xs font-semibold mb-3 shadow-xs">
            <Music className="w-3.5 h-3.5 text-ruby-400" />
            <span>Faixa 01: Sobre Mim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A harmonia entre estudo, dedicação e criatividade
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Conheça um pouco mais sobre minha trajetória acadêmica, valores e o que me motiva diariamente no universo da tecnologia.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80 shadow-xl relative overflow-hidden group">
              {/* Subtle light reflection on card hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Audio Waveform Equalizer Line */}
              <div className="flex items-center gap-1 mb-5">
                {[12, 24, 16, 30, 20, 28, 14, 26, 18, 28, 15, 22, 12, 26, 16].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: [`${h * 0.35}px`, `${h}px`, `${h * 0.35}px`] }}
                    transition={{ duration: 1.1 + (i % 4) * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.07 }}
                    className="w-1 bg-ruby-500 rounded-full inline-block"
                    style={{ height: `${h}px` }}
                  />
                ))}
                <span className="ml-2.5 text-[10px] uppercase font-bold tracking-widest text-ruby-400">
                  Audio Memoir • IFAC
                </span>
              </div>

              <span className="text-5xl font-serif text-white/10 absolute top-12 left-4 pointer-events-none select-none">“</span>
              <p className="relative z-10 font-semibold text-zinc-100 text-base sm:text-lg leading-relaxed mb-4">
                Tenho 18 anos e estou concluindo o 3º ano do Ensino Médio Integrado ao Técnico em Informática para a Internet no IFAC.
              </p>
              <p className="relative z-10 text-zinc-400 mb-4 text-xs sm:text-sm leading-relaxed">
                Minha formação no Instituto Federal do Acre tem sido um marco no desenvolvimento de disciplina analítica e raciocínio lógico. Embora esteja iniciando minha inserção em projetos para a web, trago uma postura proativa, dedicação contínua e facilidade para aprender novas ferramentas.
              </p>
              <p className="relative z-10 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                A música e a estética vermelha (inspirada na banda Chase Atlantic) simbolizam minha energia criativa: uma constante busca por equilíbrio, ritmo harmônico e atenção aos detalhes para que cada trabalho tenha clareza e elegância.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Sleek Dark Profile Card for High Contrast */}
            <div className="p-6 rounded-3xl bg-zinc-900/90 text-white shadow-2xl border border-zinc-800">
              <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ruby-400 block">
                    Ficha Rápida
                  </span>
                  <h3 className="text-lg font-bold text-white">Ana Clara Fischer de Souza</h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-ruby-950/80 border border-ruby-800/50 flex items-center justify-center text-ruby-400">
                  <Disc3 className="w-5 h-5 animate-spin-slow" />
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="flex justify-between py-1 border-b border-zinc-800/70">
                  <span className="text-zinc-500">Idade:</span>
                  <span className="font-semibold text-zinc-200">18 anos</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/70">
                  <span className="text-zinc-500">Instituição:</span>
                  <span className="font-semibold text-zinc-200">IFAC (Campus Rio Branco)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/70">
                  <span className="text-zinc-500">Curso:</span>
                  <span className="font-semibold text-zinc-200">Informática para a Internet</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/70">
                  <span className="text-zinc-500">Etapa:</span>
                  <span className="font-semibold text-ruby-400">3º Ano (Concluinte)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Inspiração:</span>
                  <span className="font-semibold text-zinc-200">Web, Dados & Chase Atlantic</span>
                </div>
              </div>

              {/* Audio Track Scrubber Bar */}
              <div className="mt-4 pt-3 border-t border-zinc-800">
                <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-1.5">
                  <span className="flex items-center gap-1 font-bold text-ruby-400">
                    <Music className="w-3 h-3 animate-pulse" />
                    TRACK 01
                  </span>
                  <span className="font-semibold text-zinc-400">01:18 / 03:45</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[44%] bg-gradient-to-r from-ruby-600 via-rose-500 to-red-500 rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[9px] text-zinc-400 mt-1.5">
                  <span>Trajetória & Inspirações</span>
                  <span className="text-ruby-400 font-bold">33 RPM • Hi-Fi</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 text-white flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-ruby-950/80 border border-ruby-800/50 flex items-center justify-center text-ruby-400 shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Evolução Contínua</h4>
                <p className="text-[11px] text-zinc-400">
                  Certificações ativas e busca frequente por novas soluções digitais.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Grid with Stagger Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-zinc-900/60 hover:bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 hover:border-zinc-700 p-5 rounded-2xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
