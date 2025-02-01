import React from "react";
import "./style.css";
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Resume() {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            anchorPlacement: "top-center",
            offset: -100,
        });
    }, []);

    return (
        <div className="resume p-10 w-full mt-14 min-h-screen flex flex-col items-center bg-transparent text-white">
            <h1 className="text-5xl font-bold text-center mb-10 text-white"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                Resume
            </h1>
            <section className="resume-content w-4/5 bg-slate-300/10 p-10 rounded-2xl shadow-lg flex flex-col gap-8"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                {/* Education Section */}
                <div className="education"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2 className="text-3xl ml-8 font-semibold mb-4 text-purple-300 underline hover:tracking-wider hover:scale-105 transition-all">
                        Education
                    </h2>
                    <ul className="space-y-6">
                        <li className="section4container p-4 bg-slate-700/50 rounded-lg transition-transform transform hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <strong className="text-xl">OFPPT Mohammed El Fassi, Errachidia</strong>
                            <p>Diploma DEVOWFS (Developpement Web Option Web Full Stack)</p>
                            <p>Graduated: 2025</p>
                        </li>
                        <li className="section4container p-4 bg-slate-700/50 rounded-lg transition-transform transform hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <strong className="text-xl">Abdelmoumn High School, Tounfite</strong>
                            <p>Bachelor's Degree Physics and Chemistry</p>
                            <p>Graduated: 2023</p>
                        </li>
                    </ul>
                </div>

                {/* Skills Section */}
                <div className="skills"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2 className="text-3xl ml-8 font-semibold mb-4 text-purple-300 underline hover:tracking-wider hover:scale-105 transition-all">
                        Skills
                    </h2>
                    <ul className="grid grid-cols-2 gap-4">
                        {["HTML, CSS, JavaScript", "Bootstrap", "Tailwind CSS", "jQuery, Ajax", "React, Node Js", "UI/UX Design", "PHP, MySQL", "MongoDB, JSON", "Python", "Git, GitHub"].map((skill, index) => (
                            <li key={index} className="section4container bg-slate-700/50 p-3 rounded-lg transition-transform transform hover:scale-105"
                                data-aos="fade-left"
                                data-aos-delay={800 + index * 100}
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Languages Section */}
                <div className="languages"
                    data-aos="zoom-in"
                    data-aos-delay="900"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2 className="text-3xl ml-8 font-semibold mb-4 text-purple-300 underline hover:tracking-wider hover:scale-105 transition-all">
                        Languages
                    </h2>
                    <ul className="space-y-3">
                        {["Arabic - Native", "Tamazight - Native", "English - Advanced", "French - Advanced", "German - Intermediate"].map((language, index) => (
                            <li key={index} className="section4container bg-slate-700/50 p-3 rounded-lg transition-transform transform hover:scale-105"
                                data-aos="fade-right"
                                data-aos-delay={1000 + index * 100}
                                data-aos-mirror="true"
                                data-aos-offset="-200"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                            >
                                {language}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Resume;
