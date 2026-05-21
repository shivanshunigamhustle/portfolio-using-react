import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { playSound } from '../utils/sound';
import { FiCode, FiLayers, FiDatabase, FiCpu, FiTool, FiCheckCircle, FiSearch, FiMail, FiTerminal, FiBox, FiSettings } from 'react-icons/fi';
import { 
  SiJavascript, 
  SiPython, 
  SiCplusplus, 
  SiC, 
  SiReact, 
  SiRedux, 
  SiTailwindcss, 
  SiSass, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiSocketdotio, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiFigma, 
  SiGooglegemini
} from 'react-icons/si';

const categories = [
  { id: 'all', name: 'All Tech', icon: FiLayers },
  { id: 'languages', name: 'Languages', icon: FiCode },
  { id: 'frontend', name: 'Frontend', icon: FiLayers },
  { id: 'backend', name: 'Backend', icon: FiLayers },
  { id: 'databases', name: 'Databases', icon: FiDatabase },
  { id: 'ai-apis', name: 'AI & APIs', icon: FiCpu },
  { id: 'tools', name: 'Tools', icon: FiTool },
  { id: 'core', name: 'Core CS', icon: FiCheckCircle },
];

const skillsData = [
  // Languages
  { name: 'JavaScript ES6+', level: 'Expert', category: 'languages', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Python', level: 'Intermediate', category: 'languages', icon: SiPython, color: '#3776ab' },
  { name: 'C++', level: 'Intermediate', category: 'languages', icon: SiCplusplus, color: '#00599c' },
  { name: 'C', level: 'Intermediate', category: 'languages', icon: SiC, color: '#a8b9cc' },
  
  // Frontend
  { name: 'React.js', level: 'Expert', category: 'frontend', icon: SiReact, color: '#61dafb' },
  { name: 'Redux Toolkit', level: 'Expert', category: 'frontend', icon: SiRedux, color: '#764abc' },
  { name: 'Tailwind CSS', level: 'Expert', category: 'frontend', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'SCSS / CSS3', level: 'Expert', category: 'frontend', icon: SiSass, color: '#cc6699' },
  { name: 'Context API', level: 'Expert', category: 'frontend', icon: FiLayers, color: '#61dafb' },
  
  // Backend
  { name: 'Node.js', level: 'Expert', category: 'backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', level: 'Expert', category: 'backend', icon: SiExpress, color: '#a9a9a9' },
  { name: 'REST APIs', level: 'Expert', category: 'backend', icon: FiSettings, color: '#00bfa5' },
  
  // Databases
  { name: 'MongoDB', level: 'Expert', category: 'databases', icon: SiMongodb, color: '#47a248' },
  { name: 'Vector Databases', level: 'Intermediate', category: 'databases', icon: FiDatabase, color: '#ff6f00' },
  
  // AI / APIs
  { name: 'Gemini API', level: 'Advanced', category: 'ai-apis', icon: SiGooglegemini, color: '#4285f4' },
  { name: 'Mistral API', level: 'Advanced', category: 'ai-apis', icon: FiCpu, color: '#ff5a1f' },
  { name: 'Tavily Search API', level: 'Advanced', category: 'ai-apis', icon: FiSearch, color: '#00f0ff' },
  { name: 'Socket.IO', level: 'Advanced', category: 'ai-apis', icon: SiSocketdotio, color: '#ffffff' },
  { name: 'Nodemailer', level: 'Advanced', category: 'ai-apis', icon: FiMail, color: '#ff007f' },
  
  // Tools
  { name: 'Git', level: 'Advanced', category: 'tools', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', level: 'Advanced', category: 'tools', icon: SiGithub, color: '#ffffff' },
  { name: 'Postman', level: 'Advanced', category: 'tools', icon: SiPostman, color: '#ff6c37' },
  { name: 'Figma', level: 'Intermediate', category: 'tools', icon: SiFigma, color: '#f24e1e' },
  { name: 'VS Code', level: 'Expert', category: 'tools', icon: FiCode, color: '#007acc' },
  
  // Core CS
  { name: 'Data Structures (DSA)', level: 'Advanced', category: 'core', icon: FiCode, color: '#9d00ff' },
  { name: 'Algorithms', level: 'Advanced', category: 'core', icon: FiTerminal, color: '#00f0ff' },
  { name: 'Object-Oriented (OOP)', level: 'Advanced', category: 'core', icon: FiBox, color: '#ff007f' },
  { name: 'Software Engineering', level: 'Advanced', category: 'core', icon: FiSettings, color: '#00e676' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { soundEnabled } = useSelector((state) => state.portfolio);

  const handleCategoryClick = (category) => {
    playSound.click(soundEnabled);
    setActiveCategory(category);
  };

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-5xl font-bold tracking-wider mb-2 text-center"
        >
          My <span className="text-[var(--color-primary)] text-glow">Skills</span>
        </motion.h2>
        <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full text-glow" />
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              onMouseEnter={() => playSound.hover(soundEnabled)}
              className={`cursor-none px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                isActive 
                  ? 'bg-[var(--color-primary)] text-zinc-950 font-bold shadow-[0_0_15px_var(--color-primary)]' 
                  : 'glass border border-[var(--color-card-border)] text-zinc-400 hover:text-white hover:border-[var(--color-primary)]'
              }`}
            >
              <Icon className="text-sm" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="glass rounded-2xl p-5 flex flex-col justify-between border border-[var(--color-card-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_12px_var(--color-glow)] group transition-all select-none"
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 transition-colors group-hover:border-[var(--color-primary)]/40 shrink-0 text-xl"
                    style={{ color: skill.color }}
                  >
                    <IconComponent />
                  </div>
                  <span className="font-semibold text-zinc-200 text-sm md:text-base leading-snug group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-secondary)]">
                    {skill.level}
                  </span>
                  <span 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
