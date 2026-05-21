import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { setActiveSection } from './redux/portfolioSlice';
import { AnimatePresence } from 'framer-motion';

// Component imports
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import CustomeCursor from "./components/CustomeCursor";
import IntorAnimation from "./components/IntorAnimation";

// Section imports
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function PortfolioApp() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.portfolio);
  const [loading, setLoading] = useState(true);

  // Sync theme class name with body element
  useEffect(() => {
    const body = document.body;
    body.className = `theme-${theme}`;
  }, [theme]);

  // Set up IntersectionObserver to auto-update active navigation link on scroll
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -45% 0px', // Focus middle area of screen
      threshold: 0.05
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setActiveSection(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'skills', 'project', 'experience', 'contact'];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [dispatch, loading]);

  return (
    <div className="relative text-white overflow-hidden min-h-screen">
      {/* Intro Animation Console */}
      <AnimatePresence>
        {loading && (
          <IntorAnimation onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Custom Cursor */}
          <CustomeCursor />

          {/* Interactive Particle Fallback */}
          <ParticleBackground />

          {/* Navigation Bar */}
          <Navbar />

          {/* Main Portfolio Sections */}
          <main>
            <Home />
            <About />
            <Skills />
            <Project />
            <Experience />
            <Testimonial />
            <Contact />
          </main>

          {/* Footer Component */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PortfolioApp />
    </Provider>
  );
}
