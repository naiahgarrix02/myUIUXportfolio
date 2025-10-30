import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Hero />
        <About />
        <Skillset />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;