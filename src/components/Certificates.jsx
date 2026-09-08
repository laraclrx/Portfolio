import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Clock, Calendar, CheckCircle2, ExternalLink, Download, Eye, X, Copy, Check, ShieldCheck, FileCheck, Sparkles, Disc } from 'lucide-react';
import confetti from 'canvas-confetti';
import { certificatesData } from '../data/certificatesData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const openCertModal = (cert) => {
    setSelectedCert(cert);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ffffff', '#fecdd3', '#fda4af', '#e11d48']
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="certificados" className="py-24 bg-gradient-to-b from-[#09090b] via-[#16040a] to-[#09090b] text-white relative overflow-hidden">
      {/* Concentric Vinyl Grooves Background Watermark */}
      <div className="absolute -right-32 -top-32 w-[550px] h-[550px] pointer-events-none z-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 500 500">
          {[80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480].map((r, i) => (
            <circle
              key={i}
              cx="250"
              cy="250"
              r={r / 2}
              fill="none"
              stroke="#e11d48"
              strokeWidth="1.2"
              strokeDasharray={i % 2 === 0 ? "none" : "6 4"}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ruby-950/70 backdrop-blur-md border border-ruby-800/60 text-ruby-300 text-xs font-semibold mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-ruby-400" />
            <span>Faixa 03: Certificações Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Credenciais Técnicas & Certificados
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Qualificações concluídas com aproveitamento na Fundação Bradesco (Escola Virtual), atestando proficiência em ferramentas de dados e apresentação.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between hover:bg-zinc-900/80 hover:border-zinc-700 transition-all shadow-xl relative overflow-hidden group"
            >
              {/* Subtle metallic sheen reflection */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />

              <div>
                {/* Header: Issuer and Status */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 flex items-center justify-center">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-zinc-100 block">
                        {cert.issuer}
                      </span>
                      <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Certificado Autenticado
                        <Sparkles className="w-2.5 h-2.5 text-amber-300 animate-pulse ml-0.5" />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-stone-950 text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                      ★ Gold Master
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-zinc-800 border border-zinc-700 text-ruby-300 shadow-sm">
                      {cert.level}
                    </span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300 mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950/60 border border-zinc-800">
                    <Clock className="w-3 h-3 text-ruby-400" />
                    <span className="font-semibold text-zinc-200">{cert.hours}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950/60 border border-zinc-800">
                    <Calendar className="w-3 h-3 text-ruby-400" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                {/* Code bar */}
                <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 text-xs flex items-center justify-between mb-4">
                  <div className="truncate pr-2">
                    <span className="text-[10px] text-zinc-500 block uppercase font-mono tracking-wider">Código de Autenticidade:</span>
                    <span className="font-mono text-zinc-300 text-[11px]">{cert.code}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(cert.code)}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-colors shrink-0"
                    title="Copiar código oficial"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => openCertModal(cert)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-ruby-600 hover:bg-ruby-500 text-white text-xs font-bold shadow-lg shadow-ruby-950/50 transition-all active:scale-98"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Comprovante</span>
                </button>

                <a
                  href={cert.pdfUrl}
                  download
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 transition-all"
                  title="Baixar PDF Original"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification guarantee */}
        <div className="mt-12 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-center max-w-xl mx-auto backdrop-blur-xs">
          <p className="text-xs text-zinc-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Certificados autoinstrucionais com autenticidade verificável via portal da EV.</span>
          </p>
        </div>

      </div>

      {/* Modal Dialog for Certificate Preview */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-zinc-900 text-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-zinc-800"
            >
              {/* Header */}
              <div className="px-6 py-4 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{selectedCert.title}</h3>
                    <p className="text-xs text-zinc-400">Fundação Bradesco • {selectedCert.hours}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="p-4 sm:p-6 bg-black/60 max-h-[60vh] overflow-y-auto flex items-center justify-center border-t border-b border-zinc-800/60">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full rounded-xl shadow-xl border border-zinc-800"
                />
              </div>

              {/* Modal Footer / Details */}
              <div className="p-6 bg-zinc-900 space-y-4">
                {/* Code block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                      Código de Autenticidade Oficial
                    </span>
                    <code className="text-xs font-mono font-semibold text-zinc-200 break-all">
                      {selectedCert.code}
                    </code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(selectedCert.code)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold transition-all shrink-0 self-start sm:self-center"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <a
                    href={selectedCert.validationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-ruby-400 hover:text-rose-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Verificar no Portal da Escola Virtual</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={selectedCert.pdfUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-ruby-600 hover:bg-ruby-500 text-white text-xs font-bold shadow-md shadow-ruby-950/50 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Baixar PDF Oficial</span>
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
