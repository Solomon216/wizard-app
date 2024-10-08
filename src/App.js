import React from "react";
import Hero from "./components/Hero";
import Scene from "./components/Scene";

import "./App.css";
import Services from "./components/Services";
import About from "./components/Abouts";
import Contact from "./components/contact";
import NavBar from "./components/NavbarWithLogo";

function App() {
  return(
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Scene />
      <Contact />
    </div>
  )
}

export default App;