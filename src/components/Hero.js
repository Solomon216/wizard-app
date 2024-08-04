import React from "react";
import background from "../images/videoplayback.mp4"
import wizard from "../images/book.png"

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video src={background} className="w-full h-full object-cover absolute" autoPlay  loop  muted  playsInline />
      <div className="relative flex gap-6 flex-col justify-center items-center h-full">
        <h1 className="text-6xl text-white league">WIZARDLENZ XR STUDIO</h1>
        <p className="text-white text-2xl">See the Magic! Be the Magic!</p>
        <div className="relative w-[1031px] h-[300px] flex justify-center items-center">
          <div className="absolute w-[900px] h-[280px] bg-[#7935d0] rounded-full blur-[500px]"></div>
          <img className="relative floating-image" src={wizard} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
}