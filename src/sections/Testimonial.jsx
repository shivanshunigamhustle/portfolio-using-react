import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { playSound } from '../utils/sound';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const testimonials = [
  {
    quote: "Shivanshu was a standout intern at Sheryians. He picked up advanced real-time communications (WebSockets) and LLM APIs faster than expected. He has a solid grasp of database engineering and is a natural collaborator.",
    author: "Harsh Sharma",
    role: "Co-Founder & Mentor, Sheryians Coding School"
  },
  {
    quote: "During his tenure at Scaler, Shivanshu showed incredible attention to detail. His ability to take complex Figma mockups and implement them in pixel-perfect, highly responsive HTML/CSS structures was highly impressive.",
    author: "Anshuman Singh",
    role: "Technical Lead, Scaler School of Technology"
  },
  {
    quote: "Collaborating with Shivanshu on engineering projects is a breeze. His knowledge of Data Structures and Algorithms combined with a structured problem-solving approach makes him an invaluable asset to any engineering team.",
    author: "Aman Verma",
    role: "Full Stack Engineer & Peer Collaborator"
  }
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const { soundEnabled } = useSelector((state) => state.portfolio);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0
    })
  };

  const handleNext = () => {
    playSound.click(soundEnabled);
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    playSound.click(soundEnabled);
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonial" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10 overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-5xl font-bold tracking-wider mb-2 text-center"
        >
          Peer & Mentor <span className="text-[var(--color-primary)] text-glow">Reviews</span>
        </motion.h2>
        <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full text-glow" />
      </div>

      {/* Carousel Container */}
      <div className="relative flex flex-col items-center select-none min-h-[300px] justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full glass rounded-3xl p-8 md:p-12 border border-[var(--color-card-border)] flex flex-col gap-6 text-center"
          >
            <div className="text-4xl text-[var(--color-primary)] mx-auto text-glow">
              <FiMessageSquare />
            </div>
            
            <p className="text-zinc-300 font-light italic leading-relaxed text-sm md:text-lg">
              "{testimonials[index].quote}"
            </p>

            <div className="border-t border-zinc-800/40 pt-4">
              <h4 className="font-bold text-zinc-200 text-sm md:text-base">
                {testimonials[index].author}
              </h4>
              <p className="text-zinc-500 text-xs md:text-sm mt-0.5">
                {testimonials[index].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handlePrev}
            onMouseEnter={() => playSound.hover(soundEnabled)}
            className="p-3 glass rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-none transition-all text-zinc-450 hover:text-white"
            title="Previous Review"
          >
            <FiChevronLeft className="text-lg" />
          </button>
          
          <button
            onClick={handleNext}
            onMouseEnter={() => playSound.hover(soundEnabled)}
            className="p-3 glass rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-none transition-all text-zinc-450 hover:text-white"
            title="Next Review"
          >
            <FiChevronRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
