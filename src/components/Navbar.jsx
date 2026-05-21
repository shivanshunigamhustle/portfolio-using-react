import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, toggleSound, setActiveSection } from '../redux/portfolioSlice';
import { playSound } from '../utils/sound';
import { FiSun, FiMoon, FiCpu, FiVolume2, FiVolumeX, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const sections = ['home', 'about', 'skills', 'project', 'experience', 'contact'];

export default function Navbar() {
  const dispatch = useDispatch();
  const { theme, soundEnabled, activeSection } = useSelector((state) => state.portfolio);
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeToggle = () => {
    let nextTheme = 'cyberpunk';
    if (theme === 'cyberpunk') nextTheme = 'cosmos';
    else if (theme === 'cosmos') nextTheme = 'minimal';
    
    dispatch(setTheme(nextTheme));
    playSound.theme(soundEnabled);
  };

  const handleSoundToggle = () => {
    dispatch(toggleSound());
    if (!soundEnabled) {
      setTimeout(() => playSound.click(true), 50);
    }
  };

  const handleNavClick = (section) => {
    dispatch(setActiveSection(section));
    playSound.click(soundEnabled);
    setIsOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-6xl">
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-1 cursor-none font-bold text-xl tracking-wider select-none"
        >
          <span>SHIVANSHU</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] text-glow animate-pulse-glow" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              onMouseEnter={() => playSound.hover(soundEnabled)}
              className={`cursor-none capitalize text-sm transition-all relative py-1 px-2 font-medium tracking-wide ${
                activeSection === section 
                  ? 'text-[var(--color-primary)] text-glow font-bold' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {section}
              {activeSection === section && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Controls (Theme / Audio / Burger) */}
        <div className="flex items-center gap-4">
          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => playSound.hover(soundEnabled)}
            className="p-2.5 rounded-full glass hover:border-[var(--color-primary)] transition-all cursor-none"
            title={soundEnabled ? "Mute Sounds" : "Enable Sound FX"}
          >
            {soundEnabled ? (
              <FiVolume2 className="text-[var(--color-primary)] w-4 h-4 text-glow" />
            ) : (
              <FiVolumeX className="text-zinc-500 w-4 h-4" />
            )}
          </button>

          {/* Theme Selector */}
          <button
            onClick={handleThemeToggle}
            onMouseEnter={() => playSound.hover(soundEnabled)}
            className="p-2.5 rounded-full glass hover:border-[var(--color-primary)] transition-all cursor-none"
            title={`Current Theme: ${theme}. Click to change.`}
          >
            {theme === 'cyberpunk' && <FiCpu className="text-[var(--color-primary)] w-4 h-4 text-glow" />}
            {theme === 'cosmos' && <FiMoon className="text-[var(--color-primary)] w-4 h-4 text-glow" />}
            {theme === 'minimal' && <FiSun className="text-[var(--color-primary)] w-4 h-4 text-glow" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => { setIsOpen(!isOpen); playSound.click(soundEnabled); }}
            onMouseEnter={() => playSound.hover(soundEnabled)}
            className="md:hidden p-2.5 rounded-full glass hover:border-[var(--color-primary)] transition-all cursor-none"
          >
            {isOpen ? <FiX className="w-4 h-4 text-[var(--color-primary)]" /> : <FiMenu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 glass rounded-3xl p-6 md:hidden flex flex-col gap-4 border border-[var(--color-card-border)]"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                onMouseEnter={() => playSound.hover(soundEnabled)}
                className={`cursor-none capitalize text-left text-lg py-2 border-b border-zinc-800/50 ${
                  activeSection === section 
                    ? 'text-[var(--color-primary)] font-semibold text-glow pl-2 border-[var(--color-primary)]' 
                    : 'text-zinc-400 pl-0 hover:text-white'
                } transition-all`}
              >
                {section}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
