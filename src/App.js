import React from "react";
import Hero from "./components/Hero";
import Scene from "./components/Scene";

import "./App.css";
import Services from "./components/Services";
import ImageMorph from "./components/anime";
import ScrambleText from "./components/about";
import AnimatedTitle from "./components/about2";

function App() {
  return(
    <div>
      <Hero />
      <AnimatedTitle />
      <ScrambleText />
      <Services />
      <Scene />
      <ImageMorph />
    </div>
  )
}

export default App;