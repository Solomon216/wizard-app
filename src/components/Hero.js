import React from "react";
import wizard from "../images/book.png";
import ThreeScene from "./ThreeScene";
import ScrambleText from "./Scramble";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <ThreeScene className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="relative flex gap-6 flex-col justify-center items-center z-10">
        <div className="h-8"></div>
        <h1 className="text-6xl text-white text-center max-[435px]:text-3xl lizzie"><span className="wizard-header">WIZARDLENZ</span> XR STUDIO</h1>
        <ScrambleText />
        <div className=" w-screen h-[300px] flex justify-center items-center">
          <div className="absolute w-screen h-[280px] bg-[#7935d0] rounded-full blur-[500px]"></div>
          <img className="relative floating-image" src={wizard} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
}
