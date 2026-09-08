import React, { useState, useEffect } from 'react';
import { Music, Menu, X, FileText, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Formação', id: 'formacao' },
    { name: 'Certificados', id: 'certificados' },
    { name: 'Habilidades', id: 'habilidades' },
    { name: 'Projetos', id: 'projetos' },
    { name: 'Contato', id: 'contato' },
  ];

  // Detect scroll state, scroll progress and current active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate page scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      // Find current section in view
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth easing scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 78; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      // Native smooth scroll with precise offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/50 border-b border-zinc-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Vinyl Stylus Needle Scroll Progress Bar (Agulha de Leitura do Vinil) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-transparent overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-ruby-600 via-rose-500 to-red-600 transition-all duration-100 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Stylus needle tip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-ruby-600 shadow-xs" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-ruby-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-ruby-500/25 group-hover:scale-105 transition-transform">
            <Music className="w-5 h-5 transition-transform group-hover:rotate-12" />
          </div>
          <div>
            <span className="text-lg font-bold text-white tracking-tight block leading-none">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-medium text-ruby-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-ruby-500 animate-pulse"></span>
              IFAC • Informática para a Internet
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Active Pill indicator */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/85 backdrop-blur-md p-1.5 rounded-full border border-zinc-800/90 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-ruby-600 shadow-md shadow-ruby-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
            title="Visualizar e baixar currículo em PDF"
          >
            <FileText className="w-3.5 h-3.5 text-ruby-400" />
            <span>Currículo (PDF)</span>
          </button>

          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, 'contato')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-ruby-600 text-white hover:bg-ruby-700 shadow-md shadow-ruby-600/25 hover:shadow-ruby-600/40 transition-all hover:-translate-y-0.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Fale Comigo</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 shadow-2xl px-6 py-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-ruby-600 text-white'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-zinc-800 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-zinc-900 text-zinc-200 border border-zinc-800"
              >
                <FileText className="w-4 h-4 text-ruby-400" />
                <span>Visualizar Currículo (PDF)</span>
              </button>

              <a
                href="#contato"
                onClick={(e) => handleNavClick(e, 'contato')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-ruby-600 hover:bg-ruby-500 text-white shadow-md shadow-ruby-950/50"
              >
                <Send className="w-4 h-4" />
                <span>Entrar em Contato</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
