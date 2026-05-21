import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setFormStatus } from '../redux/portfolioSlice';
import { playSound } from '../utils/sound';
import { FiSend, FiLoader, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export default function Contact() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const { soundEnabled, formStatus } = useSelector((state) => state.portfolio);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#ff007f', '#9d00ff', '#ffffff']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      playSound.click(soundEnabled);
      return;
    }

    dispatch(setFormStatus('submitting'));
    playSound.click(soundEnabled);

    // Placeholders - replace with your actual keys if you wish to hook up live emails
    const SERVICE_ID = 'service_portfolio'; 
    const TEMPLATE_ID = 'template_portfolio';
    const PUBLIC_KEY = 'user_public_key';

    if (PUBLIC_KEY === 'user_public_key' || SERVICE_ID === 'service_portfolio') {
      // Mock Success transmission
      setTimeout(() => {
        dispatch(setFormStatus('success'));
        playSound.success(soundEnabled);
        triggerConfetti();
        setFormData({ name: '', email: '', message: '' });
      }, 1200);
    } else {
      // Real EmailJS Send
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        dispatch(setFormStatus('success'));
        playSound.success(soundEnabled);
        triggerConfetti();
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        dispatch(setFormStatus('error'));
        setError('Failed to transmit message. Please try again or email directly.');
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
      {/* Title */}
      <div className="flex flex-col items-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-5xl font-bold tracking-wider mb-2 text-center"
        >
          Contact <span className="text-[var(--color-primary)] text-glow">Me</span>
        </motion.h2>
        <div className="w-20 h-1 bg-[var(--color-primary)] rounded-full text-glow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch select-none">
        
        {/* Pitch Card - 5 Columns */}
        <div className="md:col-span-5 flex flex-col justify-between glass rounded-3xl p-8 border border-[var(--color-card-border)]">
          <div>
            <h3 className="text-xl font-bold text-glow text-[var(--color-primary)] mb-4">
              Let's build something epic!
            </h3>
            <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base mb-6">
              Whether you are looking to hire a full-stack engineer, have a project idea, or just want to chat about Web3, AI search engines, or WebGL, feel free to drop a message.
            </p>
          </div>
          
          <div className="border-t border-zinc-800/60 pt-6 text-zinc-500 text-xs font-mono space-y-1">
            <p>// Active status: Available for contracts</p>
            <p>// Response rate: &lt; 24 hours</p>
          </div>
        </div>

        {/* Contact Form - 7 Columns */}
        <div className="md:col-span-7">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 md:p-8 flex flex-col gap-5 border border-[var(--color-card-border)] h-full justify-between"
          >
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 gap-4"
              >
                <FiCheckCircle className="text-5xl text-emerald-400 text-glow" />
                <h4 className="text-xl font-bold text-zinc-150">Message Transmitted!</h4>
                <p className="text-sm text-zinc-400 max-w-sm">
                  Thank you for reaching out. Shivanshu will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => dispatch(setFormStatus('idle'))}
                  onMouseEnter={() => playSound.hover(soundEnabled)}
                  className="mt-4 px-6 py-2 glass rounded-xl text-xs font-semibold uppercase tracking-wider cursor-none hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                {/* Input Fields */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => playSound.hover(soundEnabled)}
                      className="px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-[var(--color-primary)] focus:outline-none text-zinc-205 text-sm transition-colors cursor-none"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => playSound.hover(soundEnabled)}
                      className="px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-[var(--color-primary)] focus:outline-none text-zinc-205 text-sm transition-colors cursor-none"
                      placeholder="e.g. john@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => playSound.hover(soundEnabled)}
                      className="px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-[var(--color-primary)] focus:outline-none text-zinc-205 text-sm transition-colors resize-none cursor-none"
                      placeholder="Type your message here..."
                    />
                  </div>
                </div>

                {/* Feedback alerts & submit button */}
                <div className="flex flex-col gap-3 mt-6">
                  {error && (
                    <span className="text-xs text-red-500 font-semibold text-left">
                      {error}
                    </span>
                  )}
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    onMouseEnter={() => playSound.hover(soundEnabled)}
                    className="w-full py-3.5 rounded-2xl bg-[var(--color-primary)] text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-none transition-all hover:shadow-[0_0_15px_var(--color-primary)] disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <FiLoader className="animate-spin text-sm" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-sm" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
