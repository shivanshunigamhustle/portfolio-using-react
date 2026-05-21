import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { playSound } from '../utils/sound';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: "MERN Developer",
    company: "ADRS Private Limited",
    period: "May 2026 — Present",
    current: true,
    details: [
      "Developing high-performance, responsive web applications using the MERN stack (MongoDB, Express, React 19, Node.js).",
      "Collaborating with senior developers to write modular backend APIs and establish structured global state systems via Redux Toolkit.",
      "Optimizing front-end rendering engines and designing interactive components with micro-animations."
    ]
  },
  {
    role: "Full Stack Intern",
    company: "Sheryians Coding School",
    period: "Sep 2025 — Apr 2026",
    current: false,
    details: [
      "Built and enhanced student-facing educational platforms, contributing to full-stack features end-to-end.",
      "Participated in agile sprints, code reviews, and collaborated with senior engineers on production deployments.",
      "Maintained system codebases in Node/Express and enhanced database performance for high student traffic."
    ]
  },
  {
    role: "Web Dev Intern",
    company: "Scaler School of Technology",
    period: "Jul — Oct 2024",
    current: false,
    details: [
      "Designed e-commerce user interfaces in Figma and translated them into clean, pixel-perfect, fully responsive billing pages.",
      "Implemented standards-compliant, responsive structures utilizing raw HTML, CSS, and modern layouts.",
      "Enhanced page loading speeds by optimizing image and stylesheet delivery pipelines."
    ]
  },
  {
    role: "Campus Ambassador",
    company: "Acemgrade",
    period: "Mar — May 2025",
    current: false,
    details: [
      "Led student outreach programs and designed high-fidelity UI/UX mockups for campus marketing campaigns.",
      "Conducted information seminars and represented the company in student events to improve brand awareness."
    ]
  }
];

export default function Experience() {
  const { soundEnabled } = useSelector((state) => state.portfolio);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-5xl font-bold tracking-wider mb-2 text-center"
        >
          Work <span className="text-[var(--color-primary)] text-glow">Experience</span>
        </motion.h2>
        <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full text-glow" />
      </div>

      {/* Timeline wrapper */}
      <div className="relative border-l-2 border-zinc-800/80 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12 py-4 select-none">
        
        {/* Timeline Path Line Indicator */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent text-glow"
        />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative"
          >
            {/* Timeline Icon Node */}
            <div className={`absolute left-[-42px] md:left-[-74px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center text-xs z-10 transition-all duration-300 ${
              exp.current 
                ? 'bg-[var(--color-primary)] text-zinc-950 shadow-[0_0_15px_var(--color-primary)] scale-110 border-none' 
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]'
            }`}>
              <FiBriefcase />
            </div>

            {/* Content Card */}
            <div className={`glass rounded-3xl p-6 md:p-8 border transition-all duration-350 ${
              exp.current 
                ? 'border-[var(--color-primary)] shadow-[0_4px_30px_rgba(0,240,255,0.08)] bg-zinc-950/65' 
                : 'border-[var(--color-card-border)] hover:border-zinc-700/60'
            }`}>
              
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-100">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30 animate-pulse">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-zinc-400 mt-1">{exp.company}</p>
                </div>
                
                <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider bg-zinc-900/60 border border-zinc-800/80 px-3.5 py-1.5 rounded-full self-start md:self-center">
                  {exp.period}
                </span>
              </div>

              {/* Card Body */}
              <ul className="space-y-3 list-none">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-3 items-start text-zinc-450 font-light text-sm md:text-base leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mt-2 shrink-0 shadow-[0_0_5px_var(--color-secondary)]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
