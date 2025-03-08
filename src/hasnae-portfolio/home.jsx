import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; 
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  const fullText = "Welcome to My World";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1)); 
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen -mt-48 flex flex-col justify-center items-center text-center px-6 transition-all duration-300">
      {/* Animated Typing Effect */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold drop-shadow-lg text-gray-900 dark:text-white font-orbitron"
      >
        {displayText}
        <span className="animate-blink">|</span> {/* Blinking Cursor */}
      </motion.h1>

      <p className="text-lg md:text-2xl mt-4 text-gray-700 dark:text-gray-300 font-orbitron">
        Bridging Mechanics & Electronics
      </p>
      <p className="text-lg md:text-2xl mt-4 text-gray-700 dark:text-gray-300 font-orbitron">
        Innovating the Future of Robotics & Automation
      </p>
      <ScrollLink to="about" scroll={true} smooth={true} duration={500}>
        <button className="mt-6 px-6 py-3 bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-700 rounded-lg text-white text-lg font-semibold transition-all font-orbitron">
          Get Started <FaArrowDown className="inline-block ml-2 animate-bounce" />
        </button>
      </ScrollLink>
    </div>
  );
}
