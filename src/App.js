import React from "react";
import Hero from "./components/Hero";
import Scene from "./components/Scene";

import "./App.css";
import Services from "./components/Services";
import About from "./components/Abouts";
import Contact from "./components/contact";
import NavbarWithLogo from "./components/NavbarWithLogo";

function App() {
  return(
    <div>
      <NavbarWithLogo />
      <Hero />
      <About />
      <Services />
      <Scene />
      <Contact />
    </div>
  )
}

export default App;