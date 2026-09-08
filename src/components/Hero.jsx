import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, MapPin, GraduationCap, Music, Headphones, CheckCircle2, FileText, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [isVinylActive, setIsVinylActive] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 78;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleVinylClick = () => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.45, x: 0.75 },
      colors: ['#e11d48', '#fda4af', '#be123c', '#ffffff']
    });
  };

  // Particles visibly emitted from the top and outer rim of the spinning vinyl disc
  const vinylParticles = [
    { id: 'v1', char: '♪', xStart: 45, xDrift: 25, yDrift: -90, duration: 3.2, delay: 0, size: 'text-2xl', color: 'text-ruby-600' },
    { id: 'v2', char: '♫', xStart: 75, xDrift: 35, yDrift: -115, duration: 3.8, delay: 0.6, size: 'text-3xl', color: 'text-rose-500' },
    { id: 'v3', char: '♬', xStart: 105, xDrift: 20, yDrift: -100, duration: 3.5, delay: 1.2, size: 'text-2xl', color: 'text-red-600' },
    { id: 'v4', char: '♩', xStart: 60, xDrift: 30, yDrift: -125, duration: 4.0, delay: 1.8, size: 'text-xl', color: 'text-ruby-500' },
    { id: 'v5', char: '♪', xStart: 125, xDrift: 30, yDrift: -95, duration: 3.6, delay: 2.4, size: 'text-2xl', color: 'text-rose-600' },
    { id: 'v6', char: '✨', xStart: 90, xDrift: 15, yDrift: -80, duration: 2.8, delay: 3.0, size: 'text-base', color: 'text-amber-500' },
    { id: 'v7', char: '♫', xStart: 40, xDrift: 25, yDrift: -110, duration: 4.2, delay: 3.6, size: 'text-2xl', color: 'text-ruby-600' },
  ];

  // Musical particles flowing across the visible soundwave ribbons (faixas) in the Hero background
  const ribbonParticles = [
    { id: 'r1', char: '♪', left: '6%', top: '24%', delay: 0, duration: 4.2, size: 'text-2xl', color: 'text-ruby-600', yRange: [-12, 14, -12] },
    { id: 'r2', char: '♫', left: '16%', top: '18%', delay: 0.8, duration: 4.8, size: 'text-3xl', color: 'text-rose-600', yRange: [12, -15, 12] },
    { id: 'r3', char: '𝄞', left: '26%', top: '28%', delay: 1.6, duration: 5.4, size: 'text-4xl', color: 'text-ruby-700', yRange: [-14, 12, -14] },
    { id: 'r4', char: '♬', left: '38%', top: '20%', delay: 0.5, duration: 4.0, size: 'text-2xl', color: 'text-rose-500', yRange: [14, -16, 14] },
    { id: 'r5', char: '♩', left: '48%', top: '34%', delay: 1.4, duration: 4.5, size: 'text-2xl', color: 'text-ruby-600', yRange: [-10, 15, -10] },
    { id: 'r6', char: '✨', left: '55%', top: '44%', delay: 2.2, duration: 3.2, size: 'text-lg', color: 'text-amber-500', yRange: [-8, 10, -8] },
    { id: 'r7', char: '♫', left: '64%', top: '22%', delay: 1.8, duration: 4.6, size: 'text-3xl', color: 'text-rose-600', yRange: [10, -14, 10] },
    { id: 'r8', char: '♪', left: '72%', top: '38%', delay: 1.1, duration: 3.9, size: 'text-2xl', color: 'text-red-600', yRange: [-12, 12, -12] },
    { id: 'r9', char: '♬', left: '84%', top: '20%', delay: 2.5, duration: 4.4, size: 'text-3xl', color: 'text-ruby-600', yRange: [12, -14, 12] },
    { id: 'r10', char: '♩', left: '92%', top: '30%', delay: 0.9, duration: 4.1, size: 'text-2xl', color: 'text-rose-500', yRange: [-10, 12, -10] },
  ];

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#09090b]">
      {/* Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-ruby-950/40 via-rose-950/20 to-transparent blur-3xl pointer-events-none z-0" />

      {/* VIVID FLOWING SOUNDWAVE RIBBONS (FAIXAS MUSICAIS) — z-[1] ensures full visibility above background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 650" fill="none" preserveAspectRatio="none">
          <defs>
            {/* Gradient for Ribbon Band 1 Fill */}
            <linearGradient id="heroRibbonFill1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e11d48" stopOpacity="0.04" />
              <stop offset="25%" stopColor="#f43f5e" stopOpacity="0.16" />
              <stop offset="60%" stopColor="#e11d48" stopOpacity="0.20" />
              <stop offset="85%" stopColor="#be123c" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#881337" stopOpacity="0.03" />
            </linearGradient>

            {/* Gradient for Ribbon Band 2 Fill */}
            <linearGradient id="heroRibbonFill2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fda4af" stopOpacity="0.03" />
              <stop offset="30%" stopColor="#fb7185" stopOpacity="0.14" />
              <stop offset="70%" stopColor="#e11d48" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#9f1239" stopOpacity="0.04" />
            </linearGradient>

            {/* Main Stroke 1 */}
            <linearGradient id="heroFaixaStroke1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e11d48" stopOpacity="0.25" />
              <stop offset="25%" stopColor="#f43f5e" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#e11d48" stopOpacity="0.85" />
              <stop offset="90%" stopColor="#be123c" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#881337" stopOpacity="0.25" />
            </linearGradient>

            {/* Rhythm Stroke 2 */}
            <linearGradient id="heroFaixaStroke2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fda4af" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#fb7185" stopOpacity="0.70" />
              <stop offset="75%" stopColor="#e11d48" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#9f1239" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Main Flowing Ribbon Band 1 (Translucent Body) */}
          <path
            d="M-80 180 C 260 70, 520 290, 880 150 C 1180 40, 1380 240, 1600 140 L 1600 195 C 1380 295, 1180 95, 880 205 C 520 345, 260 125, -80 235 Z"
            fill="url(#heroRibbonFill1)"
          />

          {/* Main Flowing Ribbon 1 - Upper Edge */}
          <path
            d="M-80 180 C 260 70, 520 290, 880 150 C 1180 40, 1380 240, 1600 140"
            stroke="url(#heroFaixaStroke1)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Main Flowing Ribbon 1 - Lower Edge Dashed Acoustic Line */}
          <path
            d="M-80 235 C 260 125, 520 345, 880 205 C 1180 95, 1380 295, 1600 195"
            stroke="url(#heroFaixaStroke1)"
            strokeWidth="1.5"
            strokeOpacity="0.45"
            strokeDasharray="5 5"
          />

          {/* Secondary Ribbon Band 2 (Translucent Body) */}
          <path
            d="M-80 290 C 320 400, 640 180, 1000 320 C 1240 410, 1420 240, 1600 300 L 1600 340 C 1420 280, 1240 450, 1000 360 C 640 220, 320 440, -80 330 Z"
            fill="url(#heroRibbonFill2)"
          />

          {/* Secondary Ribbon 2 with dashed acoustic rhythm */}
          <path
            d="M-80 290 C 320 400, 640 180, 1000 320 C 1240 410, 1420 240, 1600 300"
            stroke="url(#heroFaixaStroke2)"
            strokeWidth="3"
            strokeDasharray="9 7"
            strokeLinecap="round"
          />

          {/* Third Harmonic Echo Line */}
          <path
            d="M-80 230 C 280 160, 560 210, 920 180 C 1200 170, 1380 200, 1600 175"
            stroke="url(#heroFaixaStroke1)"
            strokeWidth="2"
            strokeOpacity="0.45"
          />
        </svg>

        {/* Floating Musical Particles along the Ribbons — Fully Visible with drop shadow */}
        {ribbonParticles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ y: 0, opacity: 0.7 }}
            animate={{
              y: p.yRange,
              opacity: [0.7, 1, 0.7],
              rotate: [0, 12, -10, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className={`absolute pointer-events-none select-none font-serif font-bold ${p.size} ${p.color} filter drop-shadow-[0_2px_8px_rgba(225,29,72,0.35)]`}
            style={{ left: p.left, top: p.top }}
          >
            {p.char}
          </motion.span>
        ))}
      </div>

      {/* Large Decorative Chase Atlantic Rose Background Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-12 -left-16 sm:left-auto sm:-right-16 md:-right-10 lg:right-4 w-72 sm:w-96 md:w-[440px] lg:w-[500px] pointer-events-none z-[2] select-none opacity-80 filter drop-shadow-2xl"
      >
        <img
          src="./images/chase-rose-petals.png"
          alt="Rosa Decorativa Chase Atlantic"
          className="w-full h-auto object-contain transform hover:rotate-6 transition-transform duration-700"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Tag Badge with Rose & Music Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ruby-950/60 border border-ruby-800/60 text-ruby-300 text-xs font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ruby-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ruby-600"></span>
              </span>
              <span className="text-sm">🌹</span>
              <span>Chase Atlantic Vibe • Tecnologia & Web</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Olá, eu sou a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ruby-500 via-rose-500 to-red-400">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-zinc-400 max-w-xl leading-relaxed pt-2">
                Estudante concluinte de <span className="text-white font-semibold">Informática para a Internet no IFAC</span>. 
                Focada no desenvolvimento de soluções digitais limpas, organização inteligente de dados e paixão por música.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 shadow-xs hover:border-zinc-700 transition-colors">
                <div className="p-2 rounded-xl bg-ruby-950/80 text-ruby-400 border border-ruby-800/50">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 font-medium block">Formação</span>
                  <span className="text-xs font-bold text-zinc-100">IFAC 3º Ano</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 shadow-xs hover:border-zinc-700 transition-colors">
                <div className="p-2 rounded-xl bg-ruby-950/80 text-ruby-400 border border-ruby-800/50">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 font-medium block">Certificações</span>
                  <span className="text-xs font-bold text-zinc-100">Excel & PPT Pro</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 shadow-xs col-span-2 sm:col-span-1 hover:border-zinc-700 transition-colors">
                <div className="p-2 rounded-xl bg-ruby-950/80 text-ruby-400 border border-ruby-800/50">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 font-medium block">Inspiração</span>
                  <span className="text-xs font-bold text-zinc-100">Chase Atlantic</span>
                </div>
              </div>
            </div>

            {/* Action Buttons with Smooth Scrolling */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold bg-ruby-600 hover:bg-ruby-500 text-white shadow-lg shadow-ruby-950/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4" />
                <span>Baixar Currículo (PDF)</span>
                <Download className="w-3.5 h-3.5" />
              </button>

              <a
                href="#certificados"
                onClick={(e) => scrollTo(e, 'certificados')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-bold bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Award className="w-4 h-4 text-ruby-500" />
                <span>Ver Certificações</span>
              </a>

              <a
                href="#sobre"
                onClick={(e) => scrollTo(e, 'sobre')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full text-xs font-bold text-zinc-400 hover:text-rose-400 transition-colors"
              >
                <span>Conhecer Trajetória</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 pt-1 text-xs text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{personalInfo.status}</span>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Spinning Vinyl, Musical Particles & Official Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] max-w-full">
              
              {/* Spinning Vinyl Disc Container — Positioned behind the photo card (z-[5]) like a vinyl sliding out of an album sleeve */}
              <div 
                onClick={handleVinylClick}
                title="Disco de Vinil Interativo (Chase Atlantic) — Clique para soltar confetes!"
                className="absolute -top-12 sm:-top-16 md:-top-20 -right-8 sm:-right-16 md:-right-24 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full cursor-pointer z-[5] group select-none transition-transform duration-500 hover:scale-105"
              >
                {/* Vinyl Grooves with continuous rotation animation */}
                <div 
                  className={`w-full h-full rounded-full vinyl-grooves shadow-[0_15px_35px_rgba(0,0,0,0.45)] flex items-center justify-center relative overflow-hidden transition-transform duration-500 ${
                    isVinylActive ? 'animate-spin-slow' : ''
                  }`}
                  style={{ animationDuration: '14s' }}
                >
                  {/* Subtle Light Sheen / Vinyl Gloss Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                  {/* Vinyl Label Center */}
                  <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-tr from-ruby-700 via-rose-600 to-red-500 flex flex-col items-center justify-center text-white border-4 border-stone-900 shadow-inner relative z-10">
                    <Music className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase mt-0.5">33 RPM</span>
                    <span className="text-[7px] sm:text-[8px] text-rose-200 font-bold uppercase tracking-wider">IFAC • SIDE A</span>
                  </div>

                  {/* Spindle Center Hole */}
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-stone-950 border-2 border-stone-600 z-20" />
                </div>

                {/* Disc Hover Tooltip */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-stone-900/90 backdrop-blur-md border border-ruby-500/40 text-[9px] font-bold text-rose-300 shadow-md whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  33 RPM • Chase Atlantic
                </div>
              </div>

              {/* Floating Musical Particles directly over the exposed top of the vinyl (z-30 ensures visibility) */}
              <div className="absolute -top-24 sm:-top-28 -right-6 sm:-right-14 w-64 h-64 pointer-events-none z-30 overflow-visible">
                {vinylParticles.map((p) => (
                  <motion.span
                    key={p.id}
                    initial={{ opacity: 0, x: p.xStart, y: 30, scale: 0.7, rotate: 0 }}
                    animate={{
                      opacity: [0, 1, 0.9, 0],
                      x: [p.xStart, p.xStart + p.xDrift * 0.6, p.xStart + p.xDrift],
                      y: [30, p.yDrift * 0.5, p.yDrift],
                      scale: [0.7, 1.2, 0.85],
                      rotate: [0, p.id.charCodeAt(1) % 2 === 0 ? 35 : -35, p.id.charCodeAt(1) % 2 === 0 ? 70 : -70]
                    }}
                    transition={{
                      duration: p.duration,
                      repeat: Infinity,
                      delay: p.delay,
                      ease: "easeInOut"
                    }}
                    className={`absolute pointer-events-none select-none font-serif font-bold ${p.size} ${p.color} filter drop-shadow-[0_2px_8px_rgba(225,29,72,0.4)]`}
                    style={{ top: '10px', left: '0px' }}
                  >
                    {p.char}
                  </motion.span>
                ))}
              </div>

              {/* Foreground Floating Rose Layer in bottom corner */}
              <div className="absolute -bottom-8 -right-8 w-32 sm:w-40 z-20 pointer-events-none select-none filter drop-shadow-xl transform rotate-6">
                <img
                  src="./images/chase-rose-petals.png"
                  alt="Rosa Chase Atlantic"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Main Photo Card */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-zinc-800/90 bg-zinc-900 group z-10">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Gradient Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Caption on Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-ruby-600 text-white">
                      IFAC Terceirão
                    </span>
                    <span className="text-xs text-zinc-300">Informática para a Internet</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {personalInfo.fullName}
                  </h3>
                </div>
              </div>

              {/* Floating Badge: Music & Photography */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-zinc-900/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-zinc-800 shadow-xl shadow-black/50 flex items-center gap-3 z-30"
              >
                <div className="w-8 h-8 rounded-xl bg-ruby-950/80 text-ruby-400 border border-ruby-800/50 flex items-center justify-center">
                  <Music className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-100 leading-tight">Música & Fotografia</p>
                  <p className="text-[10px] text-zinc-400">Inspiração & Sensibilidade</p>
                </div>
              </motion.div>

              {/* Floating Badge: 18 Anos with Equalizer */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-3 -left-2 sm:-left-3 bg-zinc-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-zinc-800 shadow-xl shadow-black/50 flex items-center gap-2 z-20"
              >
                <div className="flex items-end gap-1 h-3 w-4">
                  <span className="w-1 bg-ruby-500 rounded-full h-3 animate-pulse" />
                  <span className="w-1 bg-rose-500 rounded-full h-2 animate-bounce" />
                  <span className="w-1 bg-ruby-400 rounded-full h-2.5 animate-pulse" />
                </div>
                <span className="text-[11px] font-bold text-ruby-400">18 Anos</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
