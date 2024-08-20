import React from "react";
import Hero from "./components/Hero";
import Scene from "./components/Scene";

import "./App.css";
import Services from "./components/Services";
import ImageMorph from "./components/anime";
import ScrambleText from "./components/about";

function App() {
  return(
    <div>
      <Hero />
      <ScrambleText />
      <Scene />
      <Services />
      <Scene />
      <ImageMorph />
    </div>
  )
}

export default App;