import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap, Radio, ExternalLink, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Decorative Chase Atlantic Rose Accent in Corner */}
      <div className="absolute -bottom-16 -right-16 w-60 sm:w-72 opacity-20 pointer-events-none select-none filter blur-[0.5px] rotate-12">
        <img
          src="./images/chase-rose-petals.png"
          alt="Rosa Chase Atlantic"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ruby-950/70 border border-ruby-800/60 text-ruby-300 text-xs font-semibold mb-3 shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <Radio className="w-3.5 h-3.5 text-ruby-400" />
            <span>Faixa 06 • ON AIR: Canais Diretos de Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vamos conversar?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Estou à disposição para oportunidades de estágio, projetos e conexões profissionais. Entre em contato pelos canais oficiais abaixo.
          </p>
        </div>

        {/* Direct Channels Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          
          {/* Instagram Button Card (Prominent Highlight with Transmission Waves) */}
          <motion.a
            href={personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group p-6 rounded-3xl bg-gradient-to-br from-[#881337] via-[#9f1239] to-[#be123c] text-white shadow-xl shadow-ruby-950/30 hover:shadow-ruby-900/50 transition-all hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Radiating Audio Waves */}
            <div className="absolute -top-12 -left-12 w-44 h-44 pointer-events-none z-0 opacity-20">
              <span className="absolute inset-0 rounded-full border-2 border-white animate-ping" style={{ animationDuration: '3.5s' }} />
              <span className="absolute inset-4 rounded-full border border-white/70 animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-ruby-700 transition-colors shadow-sm">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-200 block mb-1">
                Rede Social • Transmissão Direta
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                Instagram
              </h3>
              <p className="text-xs text-rose-100 font-medium">
                {personalInfo.instagramUser}
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-ruby-700 text-xs font-bold shadow-sm group-hover:bg-rose-50 transition-colors">
                <span>Acessar Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.a>

          {/* Email Direct Channel Card */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 shadow-xl hover:border-zinc-700 transition-all hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center group-hover:bg-ruby-600 group-hover:text-white transition-colors shadow-xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="p-2 rounded-full bg-zinc-800 group-hover:bg-ruby-950/80 text-zinc-400 group-hover:text-ruby-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                Contato Profissional
              </span>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-ruby-400 transition-colors">
                E-mail Principal
              </h3>
              <p className="text-xs text-zinc-300 font-mono break-all">
                {personalInfo.email}
              </p>
            </div>

            <div className="pt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ruby-600 hover:bg-ruby-500 text-white text-xs font-bold shadow-lg shadow-ruby-950/50 transition-colors">
                <Send className="w-3.5 h-3.5" />
                <span>Enviar E-mail Direto</span>
              </span>
            </div>
          </motion.a>

          {/* Education Institution Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center mb-4 shadow-xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                Instituição de Ensino
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                IFAC — Campus Rio Branco
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Técnico Integrado em Informática para a Internet • 3º Ano (Concluinte)
              </p>
            </div>
            <div className="pt-4 text-[11px] font-semibold text-ruby-400">
              Acre, Brasil
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-3xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center mb-4 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                Localização
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                Rio Branco, Acre
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Disponível para estágios presenciais em Rio Branco e oportunidades remotas em todo o Brasil.
              </p>
            </div>
            <div className="pt-4 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Disponível para Estágio</span>
            </div>
          </motion.div>

        </div>

        {/* Footer Quote Banner */}
        <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center max-w-xl mx-auto">
          <p className="text-xs text-zinc-300 italic leading-relaxed">
            “A dedicação constante transforma pequenas notas de estudo em grandes acordes de realizações.”
          </p>
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mt-2">
            — Ana Clara Fischer 🌹
          </span>
        </div>

      </div>
    </section>
  );
}
