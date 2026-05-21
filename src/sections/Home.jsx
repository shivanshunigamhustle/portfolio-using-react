import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import ThreeDScene from '../components/ThreeDScene';
import { playSound } from '../utils/sound';
import { FiArrowDown, FiSend } from 'react-icons/fi';

export default function Home() {
  const { soundEnabled } = useSelector((state) => state.portfolio);

  const scrollToSection = (id) => {
    playSound.click(soundEnabled);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-20 px-6"
    >
      {/* 3D WebGL Canvas Background */}
      <ThreeDScene />

      {/* Hero Content */}
      <div className="z-10 text-center max-w-4xl flex flex-col items-center select-none">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 rounded-full glass border border-[var(--color-card-border)] text-xs font-semibold tracking-widest text-[var(--color-primary)] text-glow uppercase mb-6"
        >
          Welcome to my developer hub
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          Hi, I am <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent text-glow">Shivanshu Nigam</span>
        </motion.h1>

        {/* Dynamic Titles */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl text-zinc-400 font-medium tracking-wide mb-8"
        >
          Full Stack Developer &bull; MERN Developer @ ADRS Private Limited
        </motion.h2>

        {/* Brief Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 max-w-xl text-sm sm:text-base mb-10 leading-relaxed font-light"
        >
          I architect high-performance, real-time web applications with complex Redux state pipelines, 
          interactive 3D WebGL user interfaces, and custom AI API integrations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollToSection('project')}
            onMouseEnter={() => playSound.hover(soundEnabled)}
            className="px-8 py-3.5 rounded-full font-semibold glow-btn cursor-none flex items-center justify-center gap-2 group"
          >
            <span>Explore Work</span>
            <FiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            onMouseEnter={() => playSound.hover(soundEnabled)}
            className="px-8 py-3.5 rounded-full font-semibold glass border border-[var(--color-card-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-none flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
            <FiSend />
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent pointer-events-none" />
    </section>
  );
}
