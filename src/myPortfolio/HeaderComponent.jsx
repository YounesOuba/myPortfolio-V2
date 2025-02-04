import React, { useEffect, useState } from "react";
import './style.css';
import AOS from "aos";
import 'aos/dist/aos.css';

function HeaderComponent({ isScrolled }) {

  useEffect(() => {
    AOS.init({
      duration: 500, // Faster animation duration
      easing: "ease-in", // Easing for the animation
      once: true, // Allow animations to repeat on each scroll
      mirror: false, // Sync animations as the user scrolls back and forth
    });
  }, []); // Only run AOS.init once on mount

  const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
      const sections = document.querySelectorAll("section");
    
      let timeout;
      const observer = new IntersectionObserver(
        (entries) => {
          let mostVisibleSection = null;
          let maxIntersectionRatio = 0;
    
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
              maxIntersectionRatio = entry.intersectionRatio;
              mostVisibleSection = entry.target.id;
            }
          });
    
          if (mostVisibleSection) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              setActiveSection(mostVisibleSection);
            }, 100); // Small delay to prevent quick flickering
          }
        },
        {
          root: null,
          rootMargin: "0px 0px 0px 0px",
          threshold: [0.3, 0.6, 0.9],
        }
      );
    
      sections.forEach((section) => observer.observe(section));
    
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }, []);
    

  return (
    <header
      className={`navBar fixed top-0 shadow-md w-full p-4 z-50 ${isScrolled ? 'scrolled' : ''}`}
      data-aos="fade-up"
      data-aos-mirror="flase"
      data-aos-once="true"    
    >
      <nav className="navContainer mx-auto flex justify-between items-center w-3/4">
        <ul className="navList flex space-x-4">
          {["home", "about", "services"].map((id, index) => (
            <li
              key={id}
              className="navItem transition duration-300 ease-in-out"
              data-aos="fade-up" // Add AOS fade-up animation to each navbar item
              data-aos-delay={`${index * 100}`} // Delay each item slightly for staggered animation
              data-aos-duration="500" // Control animation speed
              data-aos-mirror="flase"
              data-aos-once="true"  
            >
              <a
                href={`#${id}`}
                className={`navLink text-gray-300 hover:text-purple-300 ${
                  activeSection === id ? "active" : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="navLogo text-xl font-black text-white hover:text-purple-100 scale-125 transition logo-glow"
          data-aos="zoom-out" 
          data-aos-duration="500"
          data-aos-mirror="flase"
          data-aos-once="true"  
        >
          Younes
        </a>

        <ul className="navList flex space-x-4">
          {["resume", "project", "contact"].map((id, index) => (
            <li
              key={id}
              className="navItem transition duration-300 ease-in-out"
              data-aos="fade-up" 
              data-aos-delay={`${(index + 3) * 100}`} 
              data-aos-duration="500"
              data-aos-mirror="flase"
              data-aos-once="true"  
            >
              <a
                href={`#${id}`}
                className={`navLink text-gray-300 hover:text-purple-300 ${
                  activeSection === id ? "active" : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;
