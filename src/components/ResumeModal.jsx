import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, X, Printer, CheckCircle2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#e11d48', '#fb7185', '#be123c', '#ffffff']
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden z-10 border border-zinc-800 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-ruby-950/80 border border-ruby-800/50 text-ruby-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Currículo Oficial — Ana Clara Fischer</h3>
                <p className="text-xs text-zinc-400">Formatado para impressão em 1 página A4 • IFAC 3º Ano</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/curriculo-ana-clara.pdf"
                download="Curriculo_Ana_Clara_Fischer.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-ruby-600 hover:bg-ruby-500 text-white text-xs font-bold transition-all shadow-md shadow-ruby-950/50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Baixar PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Preview Image Scrollable */}
          <div className="p-4 sm:p-6 bg-black/70 overflow-y-auto flex items-center justify-center flex-1 border-t border-b border-zinc-800/50">
            <img
              src="/curriculo-ana-clara.png"
              alt="Currículo Oficial de Ana Clara Fischer"
              className="w-full max-w-2xl rounded-lg shadow-2xl border border-zinc-800"
            />
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-3.5 bg-zinc-950/90 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Inclui as 4 certificações oficiais e dados completos de formação.</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/curriculo-ana-clara.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-ruby-400 font-bold hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir PDF em nova aba</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
