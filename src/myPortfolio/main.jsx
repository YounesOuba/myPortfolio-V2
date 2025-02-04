// function Portfoilo(){
//     return (
//         <main>
//             <header className="navBar">
//                 <nav>
//                     <ul className="navList">
//                         <li className="navItem"><a href="#" className="navLink">Home</a></li>
//                         <li className="navItem"><a href="#" className="navLink">About</a></li>
//                         <li className="navItem"><a href="#" className="navLink">Service</a></li>
//                     </ul>
//                     <a className="navLogo">Logo</a>
//                     <ul className="navList">
//                         <li className="navItem"><a href="#" className="navLink">Resume</a></li>
//                         <li className="navItem"><a href="#" className="navLink">Project</a></li>
//                         <li className="navItem"><a href="#" className="navLink">Contact</a></li>
//                     </ul>
//                 </nav>
//             </header>
//             {/* First Section */}
//             <section className="homeSection">
//                 <div className="homeDiv">
//                     <h1 className="homeTitle">Welcome to my Portfoilo</h1>
//                     <h3 className='myName'>I'm <span className='name'>Younes Ouba</span></h3>
//                     <h5 className='myOcc'>I'm a  
//                         <span> Full stack </span>
//                         <span>Front End </span>
//                         <span>Back End </span>
//                         Developer</h5>
//                     <p className='whoIam'>The journey of a thousand miles begins with a single step, and every great achievement is built upon 
//                         small, consistent efforts. In a world filled with endless possibilities, curiosity and determination
//                         can unlock doors to opportunities we never imagined. Whether it's exploring new ideas, learning new 
//                         skills, or pushing the boundaries of creativity,</p>
//                 </div>
//                 <div className="button-links">
//                     <button className="dowloadButton"><a href="#">Download CV</a></button>
//                     <div className="sc-Links">
//                         <a href="#" className="sc-link"><box-icon type='logo' name='github'></box-icon> GitHub </a>
//                         <a href="#" className="sc-link"><box-icon type='logo' name='linkedin'></box-icon> LinkedIn </a>
//                         <a href="#" className="sc-link"><box-icon type='logo' name='instagram'></box-icon> Instagram </a>
//                         <a href="#" className="sc-link"><box-icon type='logo' name='telegram'></box-icon> Telegram</a>
//                     </div>
//                 </div>
//             </section>
//             {/* Second Section */}
//             <section className='ndSection'>
                                
//             </section>
//         </main>
//     );
// }
import React, { useState, useEffect } from 'react';
import 'boxicons';
import './style.css';
import 'tailwindcss/tailwind.css';
import Loader from './loader';
import HeaderComponent from './HeaderComponent';
import Home from './Section1';
import About from './section2';
import VideoBackground from './VideoBackground';
import bgVideo from './assets/bg2.mp4';
import Links from './sc-Links';
import Section3 from './section3';
import Services from './services';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';


function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 26);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  


  return (
    <div className="bg-transparent -z-11 min-h-screen flex flex-col items-center justify-center text-white">
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeaderComponent isScrolled={isScrolled} />
          <VideoBackground videoSrc={bgVideo} className="bgVideo" />
          <section id="home" className='section w-full'>
            <Home />
          </section>
          <section id="links" className='section w-full'>
            <Links />
          </section>
          <section id="about" className='section w-full'>
            <About />
          </section>
          <section id="services" className='section w-full'>
            <Services />
          </section>
          <section id="section3" className='section w-full'>
            <Section3 />
          </section>
          <section id="resume" className='section w-full'>
            <Resume />
          </section>
          <section id="project" className='section w-full'>
            <Projects />
          </section>
          <section id="contact" className='section w-full'>
            <Contact />
          </section>
          <Footer />
        </>

     )}
    </div>
  );
}

export default Portfolio;




{/* <>
<HeaderComponent isScrolled={isScrolled}/>
<VideoBackground videoSrc={ bgVideo } className="bgVideo"/>
<Home />
<Links />
<About />          
<Services />
<Section3 />
<Resume />
<Contact />
<Footer />
</> */}
