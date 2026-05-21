import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { theme } = useSelector((state) => state.portfolio);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles = [];
    const particleCount = 50;

    const getColors = () => {
      switch (theme) {
        case 'cyberpunk':
          return ['rgba(0, 240, 255, 0.25)', 'rgba(255, 0, 127, 0.2)', 'rgba(157, 0, 255, 0.15)'];
        case 'cosmos':
          return ['rgba(59, 130, 246, 0.25)', 'rgba(236, 72, 153, 0.2)', 'rgba(139, 92, 246, 0.15)'];
        case 'minimal':
          return ['rgba(255, 255, 255, 0.15)', 'rgba(163, 163, 163, 0.1)', 'rgba(82, 82, 82, 0.08)'];
        default:
          return ['rgba(0, 240, 255, 0.25)', 'rgba(255, 0, 127, 0.2)'];
      }
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        const colors = getColors();
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
