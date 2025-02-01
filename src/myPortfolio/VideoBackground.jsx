import React from 'react';
import 'tailwindcss/tailwind.css';
import './style.css'

function VideoBackground({ videoSrc }) {
  return (
        <video
            className="bgVideo fixed top-0 left-0 bg-auto w-screen h-full object-cover -z-10 brightness-50"
            autoPlay
            muted
            loop
        >
        <source src={videoSrc} type="video/mp4" />
        </video>
  );
}

export default VideoBackground;