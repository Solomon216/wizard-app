import React from "react";
import Hero from "./components/Hero";
import Scene from "./components/Scene";

import "./App.css";
import Services from "./components/Services";
import ScrambleText from "./components/about";
import AnimatedTitle from "./components/about2";
import Contact from "./components/contact";
import NavbarWithLogo from "./components/NavbarWithLogo";

function App() {
  return(
    <div>
      <NavbarWithLogo />
      <Hero />
      <AnimatedTitle />
      <ScrambleText />
      <Services />
      <Scene />
      <Contact />
    </div>
  )
}

export default App;