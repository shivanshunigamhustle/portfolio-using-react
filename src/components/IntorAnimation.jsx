import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const logs = [
  "SYSTEM BOOT IN PROGRESS...",
  "INITIALIZING THREE.JS WEBGL RENDER CONTEXT...",
  "LOADING SPATIAL VERTEX AND SHADOW SHADERS...",
  "SPAWNING REDUX GLOBAL STORE STATE ENGINE...",
  "COMPILING TAILWIND CSS V4 DIRECTIVES...",
  "CONNECTING TO USER CLOUD STORAGE SYSTEM...",
  "PARSING RESUME DATABASE: SHIVANSHU NIGAM...",
  "POSITION FOUND: MERN DEVELOPER @ ADRS PVT LTD...",
  "FETCHING INTERNSHIP LOGS: SHERYIANS CODING SCHOOL...",
  "RETRIEVING SOURCE PROJECTS & SUB-MODULES...",
  "PRE-RENDERING THREE.JS CANVAS PARTICLES...",
  "INITIALIZING SOUND EFFECT CHANNELS...",
  "BOOT SUCCESSFUL. WELCOME TO SHIVANSHU'S REALM."
];

export default function IntorAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentLog, setCurrentLog] = useState(logs[0]);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        const diff = Math.random() * 15 + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const segment = 100 / logs.length;
    const index = Math.min(Math.floor(progress / segment), logs.length - 1);
    if (index !== logIndex) {
      setLogIndex(index);
      setCurrentLog(logs[index]);
    }
  }, [progress, logIndex]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#06060c] z-[9999] flex flex-col justify-center items-center px-4 font-mono select-none"
      exit={{ y: '-100vh', opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-full max-w-xl flex flex-col">
        {/* Retro Header */}
        <div className="flex justify-between items-center mb-6 text-xs text-zinc-500 border-b border-zinc-900 pb-2">
          <span>SHIVANSHU_OS v3.5_FLASH</span>
          <span>MAY_2026_SYSTEM</span>
        </div>

        {/* Console logs */}
        <div className="h-28 text-left text-xs mb-8 flex flex-col justify-end overflow-hidden space-y-1 select-none">
          {logs.slice(Math.max(0, logIndex - 3), logIndex).map((log, i) => (
            <div key={i} className="text-zinc-600 opacity-60">
              &gt; {log}
            </div>
          ))}
          <motion.div
            key={currentLog}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[var(--color-primary)] font-semibold text-sm"
          >
            &gt; {currentLog}
          </motion.div>
        </div>

        {/* Progress Bar Container */}
        <div className="relative w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          {/* Neon Glow Bar */}
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Percentage and State */}
        <div className="flex justify-between items-center mt-3 text-xs text-zinc-500">
          <span>INITIALIZING SHARDS</span>
          <span className="text-[var(--color-primary)] font-bold text-sm">
            {Math.floor(progress)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}
