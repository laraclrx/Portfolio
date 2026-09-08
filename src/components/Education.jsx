import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle, Code, Server, Layout, ShieldCheck } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const subjects = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      desc: "Construção de websites com HTML5 semântico, estilização com CSS3 e interatividade com JavaScript moderno."
    },
    {
      icon: Layout,
      title: "Design de Interfaces & Usabilidade",
      desc: "Princípios de UI/UX, arquitetura da informação, contraste, tipografia e responsividade para múltiplos dispositivos."
    },
    {
      icon: Server,
      title: "Redes & Protocolos da Internet",
      desc: "Compreensão de modelos OSI/TCP-IP, protocolos HTTP/HTTPS, DNS, servidores e infraestrutura web."
    },
    {
      icon: ShieldCheck,
      title: "Lógica, Dados & Segurança Básica",
      desc: "Resolução algorítmica estruturada, noções de modelagem de dados e boas práticas de integridade digital."
    }
  ];

  return (
    <section id="formacao" className="py-24 bg-[#09090b] relative overflow-hidden">
      {/* Subtle Staff Lines Pauta Musical Background Accent */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          {[160, 175, 190, 205, 220].map((y, i) => (
            <path
              key={i}
              d={`M-50 ${y} C 320 ${y - 35}, 720 ${y + 40}, 1120 ${y - 25}, 1500 ${y + 15}`}
              stroke="#e11d48"
              strokeWidth="1.2"
              strokeOpacity={0.25 - i * 0.03}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ruby-950/70 border border-ruby-800/60 text-ruby-300 text-xs font-semibold mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-ruby-400" />
            <span>Faixa 02: Formação no IFAC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A sólida base técnica construída no IFAC
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            O Instituto Federal do Acre proporciona uma formação integrada de alto nível, conectando excelência acadêmica e laboratórios práticos.
          </p>
        </div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/60 rounded-3xl p-6 sm:p-10 border border-zinc-800 shadow-xl mb-12 relative overflow-hidden"
        >
          {/* Subtle Red Accent Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-ruby-600 via-rose-500 to-red-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-ruby-600 text-white shadow-xs">
                  3º Ano (Conclusão)
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-ruby-400" />
                  {educationData.period}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-ruby-400" />
                  Rio Branco, AC
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {educationData.course}
              </h3>
              
              <p className="text-sm sm:text-base font-semibold text-ruby-400">
                {educationData.school}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {educationData.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-ruby-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Institution Badge with Official Rotating Seal */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-sm text-center relative overflow-hidden">
              <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-ruby-800/60 bg-ruby-950/40" />
                {/* Rotating SVG circular text seal */}
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100" style={{ animationDuration: '22s' }}>
                  <path id="stampCircle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[7.2px] uppercase font-bold tracking-[2px] fill-ruby-400">
                    <textPath href="#stampCircle" startOffset="0%">
                      • IFAC • CAMPUS RIO BRANCO • 2024-2026
                    </textPath>
                  </text>
                </svg>
                <div className="w-11 h-11 rounded-full bg-zinc-900 shadow-sm flex items-center justify-center text-ruby-400 z-10 border border-zinc-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <h4 className="text-base font-bold text-zinc-100">Rede Federal de Educação</h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                Ensino técnico público, gratuito e de reconhecido padrão de excelência no Brasil.
              </p>
              <div className="mt-3 px-3 py-1 rounded-lg bg-ruby-950/80 border border-ruby-800/50 text-ruby-300 text-[11px] font-bold">
                Técnico Integrado
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subjects & Competencies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <motion.div
                key={sub.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="clean-card p-5 rounded-2xl group flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-100 mb-1.5">{sub.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{sub.desc}</p>
                </div>

                {/* Micro Equalizer Bar */}
                <div className="flex items-end gap-1 mt-4 pt-3 border-t border-zinc-800">
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-1 bg-ruby-500 rounded-full h-2 group-hover:h-3 transition-all duration-300" />
                    <span className="w-1 bg-rose-400 rounded-full h-3 group-hover:h-1.5 transition-all duration-300" />
                    <span className="w-1 bg-ruby-600 rounded-full h-1.5 group-hover:h-2.5 transition-all duration-300" />
                    <span className="w-1 bg-rose-500 rounded-full h-2.5 group-hover:h-3 transition-all duration-300" />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-medium ml-1">Módulo Prático</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
