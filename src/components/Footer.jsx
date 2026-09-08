import React from 'react';
import { Music, Heart, ArrowUp, Disc3 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Formação', id: 'formacao' },
    { name: 'Certificações', id: 'certificados' },
    { name: 'Habilidades', id: 'habilidades' },
    { name: 'Projetos', id: 'projetos' },
    { name: 'Contato', id: 'contato' },
  ];

  return (
    <footer className="bg-[#09090b] text-white border-t border-zinc-800/80 pt-16 pb-16 relative overflow-hidden">
      {/* Subtle Vinyl Grooves Ambient in background */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full vinyl-grooves opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Equalizer Waveform Decoration */}
        <div className="flex items-center justify-center gap-1.5 mb-10 opacity-70">
          {[6, 12, 20, 32, 24, 40, 18, 10, 26, 36, 20, 28, 14, 22, 34, 16, 8, 20, 30, 12].map((h, idx) => (
            <span
              key={idx}
              className="w-1 bg-gradient-to-t from-ruby-600 to-rose-400 rounded-full animate-pulse"
              style={{ height: `${h}px`, animationDelay: `${idx * 80}ms` }}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ruby-600 flex items-center justify-center text-white shadow-lg shadow-ruby-950/50">
              <Disc3 className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <p className="text-base font-bold text-white tracking-tight">{personalInfo.fullName}</p>
              <p className="text-xs text-rose-400">IFAC • Informática para a Internet • 3º Ano</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollTo(e, link.id)}
                className="hover:text-rose-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-zinc-900 hover:bg-ruby-600 text-zinc-300 hover:text-white transition-all border border-zinc-800 shadow-md"
            title="Voltar ao início"
            aria-label="Voltar ao início"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Sintonia entre Tecnologia, Ritmo & Chase Atlantic.</span>
            <span className="text-ruby-500">🌹</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
