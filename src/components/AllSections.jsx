import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificate from "./Certificate";
import Contact from "./Contact";

export default function AllSections() {
  return (
    <div className="bg-[#0a0f1c] text-white">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
    </div>
  );
}
