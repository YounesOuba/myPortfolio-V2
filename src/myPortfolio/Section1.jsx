import React from "react";
import './style.css';
import 'boxicons';
import 'tailwindcss/tailwind.css';
import myPic from './assets/myPic.png';
import cv from './assets/mycv.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  AOS.init()
    return (
        <section className="homeSection text-center py-20 flex flex-col items-center animate-fade-in-down w-full"
        aos-data="zoom-in"
        data-aos-duration="2000"
        >
            <div className="homeDiv relative flex flex-col w-3/4 mx-auto" 
              data-aos="fade-up"
              data-aos-duration="2200">
              <h1 className="homeTitle text-5xl font-extrabold mb-4 hover:scale-110 transition-transform duration-300 text-white"
              data-aos="fade-up"
              data-aos-duration="2200"> Hey There!<span className='emoji animate-pulse'> 👋</span></h1>
              <h3 className="myName my-2 text-3xl font-extrabold mb-4 text-white fadeIn hover:translate-x-6 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration="2500">I'm 
                <span className="name text-purple-700 text-animation animate-text-glow"
                data-aos="fade-up"
              data-aos-duration="2600">
                  <span>&nbsp; Y</span>
                  <span>o</span>
                  <span>u</span>
                  <span>n</span>
                  <span>e</span>
                  <span>s</span>
                  <span>&nbsp;</span>
                  <span>O</span>
                  <span>u</span>
                  <span>b</span>
                  <span>a</span>
                </span>
              </h3>
              <h5 className="myOcc my-4 text-2xl text-gray-400 hover:translate-x-8 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-duration="2700">
              I'm a  
              <span style={{ "--i": 3 }} className="mx-1 text-purple-400" data-text="Full stack"> Full stack</span>
              <span style={{ "--i": 2 }} className="mx-1 text-purple-400" data-text="Front End"> Front End</span>
              <span style={{ "--i": 1 }} className="mx-1 text-purple-400" data-text="Back End"> Back End</span> Developer
              </h5>
              <p className="whoIam text-gray-300 mb-4 max-w-lg"
              data-aos="fade-up"
              data-aos-duration="3000">
              Hello! My name is Younes, and I am a web developer with a passion for creating dynamic and responsive websites. I specialize in both front-end 
              and back-end development, working with several technologies. I enjoy designing user-friendly interfaces and building functional web applications 
              that deliver smooth user experiences. I am always looking to enhance my skills and stay up-to-date with the latest web technologies. 
              </p>   
            </div>
            <div className="button-links flex flex-col items-center space-y-4 mt-16 -mb-12">
              <button className="downloadButton inline-flex items-center rounded cursor-pointer bg-[#be27f1] px-6 py-3 font-semibold text-white transition [box-shadow:rgb(148,_0,_211)-8px_8px] hover:[box-shadow:rgb(148,_0,_211)0px_0px]"
                onClick={() => window.open(cv, "_blank")}
                data-aos="fade-up"
                data-aos-duration="3300"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <a href="#" className="text-white">Download CV &nbsp;</a> <box-icon name='download' color="white"></box-icon>
              </button>

              <div className="myPic absolute w-1/4 top-[20%] right-40 -mt-14 mx-auto z-30 group">
                <div className="absolute inset-0 rounded-lg animate-glow outer-line p-2" 
                data-aos="fade-up"
                data-aos-duration="2600"></div>
                <div className="absolute inset-4 rounded-lg animate-glow inner-line p-2"
                 data-aos="fade-up"
                 data-aos-duration="2600"></div>
                <img 
                  src={myPic} 
                  className="relative rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                  data-aos="fade-up"
                  data-aos-duration="2600"
                  alt="Younes Ouba" />
                </div>

            </div>
          </section>
    );
}

export default Home;
