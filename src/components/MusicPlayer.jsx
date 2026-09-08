import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc, Sparkles } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  const playlist = [
    { title: "Melodia Suave em Dó Maior", vibe: "Foco & Harmonia" },
    { title: "Sons Acústicos da Tarde", vibe: "Inspiração & Código" },
    { title: "Batidas Lo-Fi Criativas", vibe: "Ritmo & Concentração" },
  ];

  // Synthesize pleasant acoustic ambient chords via Web Audio API
  const playChord = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (isMuted) return;

      const chordFrequencies = [
        [261.63, 329.63, 392.00, 523.25], // C Major
        [220.00, 261.63, 329.63, 440.00], // A Minor
        [174.61, 220.00, 261.63, 349.23], // F Major
        [196.00, 246.94, 293.66, 392.00]  // G Major
      ];

      const chosenChord = chordFrequencies[Math.floor(Math.random() * chordFrequencies.length)];

      chosenChord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft attack, gentle decay for dreamy bell/lofi tone
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04 / (idx + 1), ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + 3.2);
      });
    } catch (e) {
      console.warn("Audio context error:", e);
    }
  };

  const togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      playChord();
      intervalRef.current = setInterval(() => {
        playChord();
      }, 3500);
    } else {
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-zinc-800 shadow-2xl shadow-black/80 hover:border-zinc-700 transition-all duration-300">
      <div className="flex items-center gap-2">
        <div className={`relative flex items-center justify-center w-8 h-8 rounded-full bg-ruby-950/80 border border-ruby-800/50 text-ruby-400 ${isPlaying ? 'animate-spin-slow' : ''}`}>
          <Disc className="w-4 h-4" />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-ruby-500 rounded-full animate-ping" />
          )}
        </div>
        <div className="hidden sm:block text-left pr-2 border-r border-zinc-800">
          <p className="text-xs font-semibold text-zinc-200 leading-tight">
            {playlist[trackIndex].title}
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-ruby-500"></span>
            <span className="text-[10px] text-zinc-400 font-medium">
              {isPlaying ? 'Tocando trilha ambiente' : 'Trilha sonora relaxante'}
            </span>
          </div>
        </div>
      </div>

      {/* Audio Visualizer Bars */}
      <div className="flex items-end gap-0.5 h-4 w-6 px-1">
        <span className={`w-1 bg-ruby-500 rounded-full transition-all duration-200 ${isPlaying ? 'h-4 animate-waveform' : 'h-1.5'}`} style={{ animationDelay: '0ms' }} />
        <span className={`w-1 bg-rose-400 rounded-full transition-all duration-200 ${isPlaying ? 'h-3 animate-waveform' : 'h-2'}`} style={{ animationDelay: '150ms' }} />
        <span className={`w-1 bg-ruby-400 rounded-full transition-all duration-200 ${isPlaying ? 'h-4 animate-waveform' : 'h-1'}`} style={{ animationDelay: '300ms' }} />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="p-1.5 rounded-full bg-ruby-600 hover:bg-ruby-500 text-white shadow-md shadow-ruby-950/50 transition-all transform active:scale-95"
        title={isPlaying ? "Pausar música ambiente" : "Ouvir melodia ambiente"}
        aria-label="Tocar trilha sonora"
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
      </button>

      {/* Mute Button */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="p-1 text-zinc-400 hover:text-white transition-colors"
          title={isMuted ? "Desmutar" : "Mutar"}
          aria-label="Mutar ou desmutar som"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
}
