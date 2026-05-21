import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { playSound } from '../utils/sound';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const { soundEnabled } = useSelector((state) => state.portfolio);

  const scrollToTop = () => {
    playSound.click(soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-zinc-900 bg-zinc-950/20 py-10 px-6 z-10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Status indicator */}
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-glow" />
          <span>All Systems Operational</span>
        </div>

        {/* Brand & Copyright */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end gap-1">
          <p className="text-sm text-zinc-400 font-medium">
            &copy; {new Date().getFullYear()} Shivanshu Nigam. All rights reserved.
          </p>
          <p className="text-xs text-zinc-650 font-light font-mono">
            Handcrafted in 2026 using React 19 & ThreeJS.
          </p>
        </div>

        {/* Actions (Scroll to Top & Socials) */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shivanshunigamhustle"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => playSound.hover(soundEnabled)}
            onClick={() => playSound.click(soundEnabled)}
            className="p-2.5 glass hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] rounded-full text-zinc-400 transition-all cursor-none"
            title="GitHub"
          >
            <FiGithub className="text-sm" />
          </a>
          <a
            href="https://linkedin.com/in/shivanshunigam"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => playSound.hover(soundEnabled)}
            onClick={() => playSound.click(soundEnabled)}
            className="p-2.5 glass hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] rounded-full text-zinc-400 transition-all cursor-none"
            title="LinkedIn"
          >
            <FiLinkedin className="text-sm" />
          </a>
          <a
            href="mailto:nigamshivanshu297@gmail.com"
            onMouseEnter={() => playSound.hover(soundEnabled)}
            onClick={() => playSound.click(soundEnabled)}
            className="p-2.5 glass hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] rounded-full text-zinc-400 transition-all cursor-none"
            title="Email"
          >
            <FiMail className="text-sm" />
          </a>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => playSound.hover(soundEnabled)}
            className="p-2.5 bg-[var(--color-primary)] text-zinc-950 rounded-full hover:shadow-[0_0_15px_var(--color-primary)] transition-all cursor-none font-bold"
            title="Back to Top"
          >
            <FiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
}
