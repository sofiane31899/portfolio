import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0 ">
      <Navbar />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start h-screen">
        <About />
      </section>
      <section className="snap-center h-screen">
        <Projects />
      </section>
      <section className="snap-center h-screen">
        <Skills />
      </section>
      {/* <Contacte/> */}
    </div>
  );
}

export default App;
