import React from "react";


export default function VideoBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="bgVideo fixed bg-auto w-screen h-full object-cover brightness-50"
        autoPlay
        loop
        muted
      >
        <source src="/assets/hasnaeBgVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}