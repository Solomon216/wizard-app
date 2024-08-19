import React from "react";
import Hero from "./components/Hero";
import Scene from "./components/Scene";

import "./App.css";
import Services from "./components/Services";
import ImageMorph from "./components/anime";

function App() {
  return(
    <div>
      <Hero />
      <Services />
      <Scene />
      <ImageMorph />
    </div>
  )
}

export default App;