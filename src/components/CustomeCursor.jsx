import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomeCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if it's a touch device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, select, input, textarea, [role="button"], .interactive, .glow-btn'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    // Watch for dynamically rendered interactive elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY, hidden, isTouchDevice]);

  if (isTouchDevice || hidden) return null;

  return (
    <>
      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-primary)] pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? 'var(--color-glow)' : 'transparent',
          borderColor: hovered ? 'var(--color-primary)' : 'var(--color-primary)',
          boxShadow: hovered ? '0 0 15px var(--color-primary)' : 'none',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.2 }}
      />
      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[var(--color-primary)] rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  );
}
