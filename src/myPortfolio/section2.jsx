import React, { useEffect } from "react";
import './style.css';
import 'boxicons';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <section className="ndSection w-full h-screen flex mt-36">
            <div className="ndDiv relative flex flex-col w-3/4 mx-auto" data-aos="zoom-in">
                <h1 className="ndTitle text-5xl font-extrabold mb-4 text-center hover:scale-110 transition-transform duration-300 text-white"
                    data-aos="zoom-in-down"
                    data-aos-offset="-100"
                    data-aos-delay="50"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    About Me <span className='emoji animate-pulse'> 🧑‍💻</span>
                </h1>
                <div className="aboutContainer flex items-center gap-5" data-aos="fade-up">
                    <div className="ndText bg-slate-400/10 text-gray-300 mb-4 mt-12 w-2/4 rounded-2xl backdrop-blur-lg px-8 py-20"
                        data-aos="flip-left"
                        data-aos-offset="-100"
                        data-aos-delay="50"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <h3 className="right-0 flex mb-5 text-2xl font-extrabold" data-aos="zoom-out">Who I am ?</h3>
                        <p>
                            I'm a web developer dedicated to crafting dynamic and responsive websites. My expertise spans both front-end and 
                            back-end development, utilizing a variety of technologies. I take pleasure in designing intuitive user interfaces 
                            and developing functional web applications that provide seamless user experiences. I am continually striving to 
                            improve my skills and stay current with the latest advancements in web technologies.
                        </p>
                    </div>
                    <div className="ndText bg-slate-400/10 text-gray-300 mb-4 mt-12 w-2/4 rounded-2xl backdrop-blur-lg px-8 py-20"
                        data-aos="flip-left"
                        data-aos-offset="-100"
                        data-aos-delay="50"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <h3 className="right-0 flex mb-5 text-2xl font-extrabold" data-aos="zoom-out">Contact Information</h3>
                        <div className="contact-info" data-aos="zoom-in">
                            <p className="mb-4"><strong>Email:</strong> oubayounesouba@gmail.com</p>
                            <p className="mb-4"><strong>Phone:</strong> +212 636 401454</p>
                            <p className="mb-4"><strong>Address:</strong> Tounfite, Midelt, Morocco</p>
                            <p className="mb-4"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/younes-ouba-4560292a9" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Here</a></p>
                            <p className="mb-4"><strong>GitHub:</strong> <a href="https://github.com/YounesOuba" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;