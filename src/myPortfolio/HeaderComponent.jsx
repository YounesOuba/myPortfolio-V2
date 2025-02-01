import React, { useEffect } from "react";
import './style.css';
import AOS from "aos";
import 'aos/dist/aos.css';

function HeaderComponent({ isScrolled }) {
  useEffect(() => {
    AOS.init({
      duration: 500, // Faster animation duration
      easing: "ease-in", // Easing for the animation
      once: false, // Allow animations to repeat on each scroll
      mirror: true, // Sync animations as the user scrolls back and forth
    });
  }, []); // Only run AOS.init once on mount

  return (
    <header
      className={`navBar fixed top-0 shadow-md w-full p-4 z-50 ${isScrolled ? 'scrolled' : ''}`}
      data-aos="fade-up"
      data-aos-duration="500" // Adjusted to make it appear faster
      data-aos-easing="ease-in"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <nav className="navContainer mx-auto flex justify-between items-center w-3/4">
        <ul className="navList flex space-x-4">
          <li
            className="navItem hover:text-blue-400 transition duration-300 ease-in-out"
            data-aos="zoom-out-up"
            data-aos-duration="500" // Adjusted duration for each item
          >
            <a href="#" className="navLink text-gray-300 hover:text-purple-300" data-aos-once="false">
              Home
            </a>
          </li>
          <li
            className="navItem hover:text-blue-400 transition duration-300 ease-in-out"
            data-aos="zoom-out-up"
            data-aos-duration="500" // Adjusted duration for each item
          >
            <a href="#" className="navLink text-gray-300 hover:text-purple-300" data-aos-once="false">
              About
            </a>
          </li>
          <li
            className="navItem hover:text-blue-400 transition duration-300 ease-in-out"
            data-aos="zoom-out-up"
            data-aos-duration="500" // Adjusted duration for each item
          >
            <a href="#" className="navLink text-gray-300 hover:text-purple-300" data-aos-once="false">
              Service
            </a>
          </li>
        </ul>

        <a
          className="navLogo text-xl font-black text-white hover:text-purple-100 scale-125 transition logo-glow"
          data-aos="zoom-out"
          data-aos-duration="500" // Adjusted duration for the logo
          data-aos-once="false"
        >
          Younes
        </a>

        <ul className="navList flex space-x-4">
          <li
            className="navItem hover:text-blue-400 transition duration-300 ease-in-out"
            data-aos="zoom-out-up"
            data-aos-duration="500" // Adjusted duration for each item
          >
            <a href="#" className="navLink text-gray-300 hover:text-purple-300" data-aos-once="false">
              Resume
            </a>
          </li>
          <li
            className="navItem hover:text-blue-400 transition duration-300 ease-in-out"
            data-aos="zoom-out-up"
            data-aos-duration="500" // Adjusted duration for each item
          >
            <a href="#" className="navLink text-gray-300 hover:text-purple-300" data-aos-once="false">
              Project
            </a>
          </li>
          <li
            className="navItem hover:text-blue-400 transition duration-300 ease-in-out"
            data-aos="zoom-out-up"
            data-aos-duration="500" // Adjusted duration for each item
          >
            <a href="#" className="navLink text-gray-300 hover:text-purple-300" data-aos-once="false">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
