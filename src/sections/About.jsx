import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { playSound } from '../utils/sound';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiAward, FiBookOpen } from 'react-icons/fi';

export default function About() {
  const { soundEnabled } = useSelector((state) => state.portfolio);

  const achievements = [
    { text: "170+ LeetCode Problems Solved", detail: "DSA, OOP, & Software Engineering Core" },
    { text: "National Level Quiz Winner", detail: "Analytical thinking and problem solving" },
    { text: "AWS Certified - Forage", detail: "Cloud architecture & deployment pipelines" },
    { text: "Machine Learning - Great Learning", detail: "Predictive modeling and algorithms" }
  ];

  const education = [
    {
      degree: "B.Tech — Electronics & Communication (ECE)",
      institution: "Shri Ram Institute of Technology",
      score: "SGPA: 8.01",
      period: "College"
    },
    {
      degree: "Class XII (PCM)",
      institution: "Saraswati Vidya Mandir",
      score: "Score: 88% | PCM: 91%",
      period: "Schooling"
    },
    {
      degree: "Class X",
      institution: "Saraswati Vidya Mandir, Satna",
      score: "Score: 95%",
      period: "Schooling"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-5xl font-bold tracking-wider mb-2 text-center"
        >
          About <span className="text-[var(--color-primary)] text-glow">Me</span>
        </motion.h2>
        <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full text-glow" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Card & Achievements - 7 Columns on Large screens */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-6 md:p-8 flex flex-col gap-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-glow text-[var(--color-primary)]">
              Shivanshu Nigam
            </h3>
            <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
              I am a passionate Full Stack Developer with strong expertise in the MERN stack and a proven track record of building AI-powered, real-time web applications. I specialize in integrating cutting-edge LLMs — including Gemini and Mistral — with live socket streaming, multimodal image uploads, and search agents to create intelligent, production-ready interfaces.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
              Beyond engineering, I am a strong communicator, mentor, and collaborator. I bring structured, analytical thinking to every architectural challenge and always ship with user experience front and center.
            </p>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-zinc-800/60 pt-6 text-sm text-zinc-400">
              <a
                href="mailto:nigamshivanshu297@gmail.com"
                onMouseEnter={() => playSound.hover(soundEnabled)}
                onClick={() => playSound.click(soundEnabled)}
                className="flex items-center gap-3 hover:text-white cursor-none transition-colors"
              >
                <FiMail className="text-[var(--color-primary)] text-base" />
                <span className="truncate">nigamshivanshu297@gmail.com</span>
              </a>
              <a
                href="tel:+919981992856"
                onMouseEnter={() => playSound.hover(soundEnabled)}
                onClick={() => playSound.click(soundEnabled)}
                className="flex items-center gap-3 hover:text-white cursor-none transition-colors"
              >
                <FiPhone className="text-[var(--color-primary)] text-base" />
                <span>+91 9981992856</span>
              </a>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-[var(--color-primary)] text-base" />
                <span>Jabalpur, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-4 pt-2 md:pt-0">
                <a
                  href="https://linkedin.com/in/shivanshunigam"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playSound.hover(soundEnabled)}
                  onClick={() => playSound.click(soundEnabled)}
                  className="p-2 glass rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-none transition-all"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://github.com/shivanshunigamhustle"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => playSound.hover(soundEnabled)}
                  onClick={() => playSound.click(soundEnabled)}
                  className="p-2 glass rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-none transition-all"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Achievements Container */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold tracking-wider text-zinc-300 pl-2">Key Achievements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-interactive rounded-2xl p-5 flex gap-4 items-start select-none"
                >
                  <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 text-[var(--color-primary)] text-lg">
                    <FiAward />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-zinc-100 mb-1">{item.text}</h5>
                    <p className="text-zinc-500 text-xs">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline - 5 Columns */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-6 md:p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800/60 pb-4">
              <FiBookOpen className="text-[var(--color-primary)] text-xl text-glow" />
              <h3 className="text-lg md:text-xl font-bold tracking-wide">
                Education
              </h3>
            </div>

            <div className="relative border-l border-zinc-800 pl-6 ml-2 space-y-8 py-2">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group select-none">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-850 group-hover:border-[var(--color-primary)] group-hover:shadow-[0_0_10px_var(--color-primary)] transition-all duration-300" />
                  
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-secondary)] mb-1 block">
                    {edu.period}
                  </span>
                  <h4 className="font-semibold text-sm md:text-base text-zinc-200 group-hover:text-white transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">{edu.institution}</p>
                  <span className="inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 text-[var(--color-primary)]">
                    {edu.score}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
