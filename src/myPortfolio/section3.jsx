import React from "react";
import './style.css';
import 'boxicons';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import jsIcon from './icons/javascript.png';
import reactIcon from './icons/react.png';
import tailwindIcon from './icons/tailwind.png';
import phpIcon from './icons/php.png';
import mySqlIcon from './icons/mysql.png';
import mongoIcon from './icons/mongodb.png';
import bootstrapIcon from './icons/bootstrap.png';
import pythonIcon from './icons/python.png';
import githubIcon from './icons/whitegithub.png';
import gitIcon from './icons/git.png';
import vscodeIcon from './icons/vscode.png';
import xamppIcon from './icons/xampp.png';
import mysqlworkbenchIcon from './icons/mysqlworkbench.png';
import sonarQubeIcon from './icons/sonarqube.png';

function Section3() {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: -100,
        });
    }, []);

    const skills = [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "React", icon: reactIcon },
        { name: "Tailwind CSS", icon: tailwindIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "PHP", icon: phpIcon },
        { name: "MySQL", icon: mySqlIcon },
        { name: "MongoDB", icon: mongoIcon },
        { name: "Python", icon: pythonIcon },
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: githubIcon },
        { name: "VS Code", icon: vscodeIcon },
        { name: "XAMPP", icon: xamppIcon },
        { name: "MySQL Workbench", icon: mysqlworkbenchIcon },
        { name: "SonarQube", icon: sonarQubeIcon },
    ];

    return (
        <section className="rdSection w-full min-h-screen bg-transparent py-16">
            <h1
                className="rdTitle text-5xl font-extrabold mb-10 text-center hover:scale-110 transition-transform duration-300 text-white"
                data-aos="fade-up"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                My Dev Toolbox <span className="emoji animate-pulse">🤹‍♂️</span>
            </h1>

            <div className="w-3/4 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 bg-slate-300/10 p-6 rounded-md"
                data-aos="fade-in"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="smallContainer flex flex-col items-center justify-center p-4 bg-gray-700/50 rounded-md shadow-lg hover:shadow-xl transition-transform duration-300 "
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className="w-16 h-16 mb-4 rounded-s-xl"
                        />
                        <p className="paragraph text-center text-lg font-bold text-gray-200">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section3;
