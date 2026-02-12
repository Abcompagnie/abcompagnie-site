import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Realisations from "./sections/Realisations";
import OtherDomaines from "./sections/OtherDomaines";
import Contact from "./sections/Contact";
import ScrollToTop from "./components/ScrollTop";

function App() {
  // Références pour le scroll
  const sections = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    domains: useRef(null),
    contact: useRef(null),
  };
  const scrollTo = (key) => {
    sections[key].current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Navbar sections={sections} />

      <section ref={sections.home} id="home">
        <Hero onScrollTo={scrollTo}/>
      </section>

      <section ref={sections.about} id="about">
        <About />
      </section>

      <section ref={sections.services} id="services">
        <Services />
      </section>

      <section ref={sections.projects} id="projects">
        <Realisations />
      </section>

      <section ref={sections.domains} id="domains">
        <OtherDomaines />
      </section>

      <section ref={sections.contact} id="contact">
        <Contact />
      </section>
      <ScrollToTop />
    </>
  );
}

export default App;
