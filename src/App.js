import React from "react";
import Hero from "./components/Hero";
import Scene from "./components/Scene";

import "./App.css";
import Services from "./components/Services";
import About from "./components/Abouts";

function App() {
  return(
    <div>
      <Hero />
      <About />
      <Services />
      <Scene />
    </div>
  )
}

export default App;