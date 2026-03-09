import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Testimonial from "./sections/Testimonial";

export default function App() {
  return(
    <div className="relative gradient text-white">
      <ParticleBackground />

      
      <Navbar />
      <Home />
      <About/>
      <Skills />
      <Project />
      <Experience />
      <Footer />
       <Contact />
      <Testimonial />

    </div>
  )
}

