import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProject } from '../redux/portfolioSlice';
import { playSound } from '../utils/sound';
import { FiExternalLink, FiX, FiInfo, FiCode } from 'react-icons/fi';

const projects = [
  {
    title: "Perplexity Clone — AI Search & Chat Platform",
    date: "Mar 2026",
    tech: ["Node.js", "Socket.IO", "Gemini API", "Mistral API", "Tavily API", "MongoDB", "Nodemailer"],
    shortDesc: "Full-stack AI search engine with real-time streaming, dynamic LLM model switching, and automated email alerts.",
    details: [
      "Architected a robust full-stack AI search platform integrating dual Gemini + Mistral API layers for dynamic, context-aware answering.",
      "Utilized Socket.IO to enable fluid real-time token streaming directly to client layouts, reducing perceivable latency.",
      "Integrated Tavily Search API to perform live Google-grade web searches, grounding generated text in source citations.",
      "Constructed a drag-and-drop image uploader allowing multimodal inputs (image-to-text queries) and configured Nodemailer for mail alerts.",
      "Designed dynamic MongoDB schemas to serialize multi-turn conversation threads and preserve historical user sessions."
    ],
    github: "https://github.com/shivanshunigamhustle"
  },
  {
    title: "Mood Detector — Emotion-Based Music Player",
    date: "Feb 2026",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    shortDesc: "Real-time webcam-based mood detector that curates and streams soundscapes matching current emotion states.",
    details: [
      "Built real-time mood recognition logic via sentiment/facial recognition engines, curating audio queues accordingly.",
      "Designed a global Redux audio state pipeline controlling volume, play/pause states, current tracks, and playlist queues.",
      "Constructed custom Node/Express backends to route metadata queries, backed by MongoDB for rapid music search indexing.",
      "Created sleek, micro-animated playback consoles featuring active progress wavebars and glass controls."
    ],
    github: "https://github.com/shivanshunigamhustle"
  },
  {
    title: "macOS UI Clone — Desktop Simulation in Browser",
    date: "Jan 2026",
    tech: ["React.js", "Context API", "SCSS", "Framer Motion"],
    shortDesc: "Pixel-perfect web replication of macOS Monterey with draggable applications, active dock, and system status indicators.",
    details: [
      "Developed custom React drag-and-drop engines to enable fluid window drag, resize, minimize, and maximize actions.",
      "Implemented a functional, scale-on-hover application dock simulating macOS animations.",
      "Managed active desktop layout structures using Context API, controlling z-index layers dynamically on window focus.",
      "Constructed secondary utilities like dynamic calendar widgets, menu bars, and real-time clocks."
    ],
    github: "https://github.com/shivanshunigamhustle"
  }
];

export default function Project() {
  const dispatch = useDispatch();
  const { soundEnabled, selectedProject } = useSelector((state) => state.portfolio);

  const openModal = (proj) => {
    playSound.click(soundEnabled);
    dispatch(setSelectedProject(proj));
  };

  const closeModal = () => {
    playSound.click(soundEnabled);
    dispatch(setSelectedProject(null));
  };

  return (
    <section id="project" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-5xl font-bold tracking-wider mb-2 text-center"
        >
          My <span className="text-[var(--color-primary)] text-glow">Projects</span>
        </motion.h2>
        <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full text-glow" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-3xl p-6 flex flex-col justify-between border border-[var(--color-card-border)] hover:border-[var(--color-primary)] group transition-all duration-300 select-none hover:shadow-[0_12px_30px_var(--color-glow)]"
          >
            <div>
              {/* Date Header */}
              <div className="flex justify-between items-center mb-4 text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                <span>{proj.date}</span>
                <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] text-glow shadow-[0_0_5px_var(--color-secondary)]" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-zinc-100 group-hover:text-[var(--color-primary)] transition-colors mb-3 leading-snug">
                {proj.title}
              </h3>
              
              {/* Description */}
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                {proj.shortDesc}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.slice(0, 4).map((techName, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-300"
                  >
                    {techName}
                  </span>
                ))}
                {proj.tech.length > 4 && (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-[var(--color-primary)]">
                    +{proj.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 border-t border-zinc-800/40 pt-4 mt-auto">
              <button
                onClick={() => openModal(proj)}
                onMouseEnter={() => playSound.hover(soundEnabled)}
                className="flex-1 py-2.5 rounded-2xl glass hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-none transition-all"
              >
                <FiInfo className="text-sm" />
                <span>View Details</span>
              </button>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playSound.hover(soundEnabled)}
                onClick={() => playSound.click(soundEnabled)}
                className="p-2.5 glass hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] rounded-2xl cursor-none transition-all text-sm text-zinc-400 hover:text-white"
              >
                <FiCode />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl bg-zinc-950/95 border border-[var(--color-card-border)] rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_var(--color-glow)] z-10 max-h-[85vh] overflow-y-auto custom-scroll"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                onMouseEnter={() => playSound.hover(soundEnabled)}
                className="absolute top-4 right-4 p-2 glass hover:border-red-500 hover:text-red-500 rounded-full cursor-none transition-all text-zinc-400"
              >
                <FiX className="text-base" />
              </button>

              {/* Title & Date */}
              <div className="mb-6 select-none pr-8">
                <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-widest block mb-1">
                  {selectedProject.date}
                </span>
                <h3 className="text-2xl font-bold text-glow text-[var(--color-primary)]">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6 select-none">
                {selectedProject.tech.map((techName, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-900 border border-zinc-850 text-zinc-350"
                  >
                    {techName}
                  </span>
                ))}
              </div>

              {/* Bullet Features */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 select-none">
                  Core Implementation Features
                </h4>
                <ul className="space-y-3 list-none">
                  {selectedProject.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-3 items-start text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] text-glow mt-2 shrink-0 shadow-[0_0_5px_var(--color-primary)]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 border-t border-zinc-800/80 pt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playSound.hover(soundEnabled)}
                  onClick={() => playSound.click(soundEnabled)}
                  className="flex-1 py-3 bg-[var(--color-primary)] text-zinc-950 rounded-2xl text-center text-xs font-bold uppercase tracking-wider cursor-none transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_15px_var(--color-primary)]"
                >
                  <FiCode className="text-sm" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
