import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth z-0 ">
      <Navbar />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start h-screen">
        <About />
      </section>
      <section id="projects" className="snap-center h-screen">
        <Projects />
      </section>
      <section id="skills" className="snap-center h-screen">
        <Skills />
      </section>
      <section id="contact" className="snap-center h-screen">
        <Contact />
      </section>
    </div>
  );
}

export default App;
