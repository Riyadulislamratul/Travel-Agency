import React, { useRef, useState } from "react";
import Header from "./Header";
import Video from "../assets/banner.mp4";
const Banner = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="relative">
      <Header isHome={true} />

      {/* Banner Section */}
      <div className="h-screen relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={Video} type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center flex-col justify-center text-white">
          <h1 className="text-5xl font-bold font-volkhov text-black-heading">We Find The Best Tours For You</h1>
          <p className="text-[16px] leading-6.25 font-mulish pt-5.5 w-[569px] text-center text-black-heading">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        {/* Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute bottom-10 right-10 bg-white/80 hover:bg-white text-black px-4 py-2 rounded-lg"
        >
          {isPaused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
};

export default Banner;
