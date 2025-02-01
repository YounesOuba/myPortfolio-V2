import React from 'react';
import 'boxicons';
import 'tailwindcss/tailwind.css';

function ScLinks() {
    const linksData = [
        {
            href: "https://github.com/YounesOuba",
            label: "Github",
            icon: "github",
            delay: 400,
        },
        {
            href: "https://www.linkedin.com/in/younes-ouba-4560292a9",
            label: "Linkedin",
            icon: "linkedin-square",
            delay: 600,
        },
        {
            href: "https://www.instagram.com/younes__ouba/",
            label: "Instagram",
            icon: "instagram-alt",
            delay: 800,
        },
        {
            href: "https://t.me/YounesOuba",
            label: "Telegram",
            icon: "telegram",
            delay: 1000,
        },
    ];

    const linkStyles = {
        Github: "bg-gray-800 hover:bg-gray-700",
        Linkedin: "bg-blue-700 hover:bg-blue-600",
        Instagram: "bg-pink-600 hover:bg-pink-500",
        Telegram: "bg-blue-500 hover:bg-blue-400",
    };

    return (
        <div className="sc-Links w-full flex flex-wrap gap-8 justify-center mt-10 px-4">
            {linksData.map((link, index) => (
                <a
                    key={index}
                    className={`relative text-xl font-bold block p-8 border border-gray-100 rounded-xl mt-6 shadow-lg ${linkStyles[link.label]}`}
                    href={link.href}
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Add security protection
                    data-aos="zoom-in-down"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay={link.delay}
                    style={{ width: '20%' }}
                >
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 rounded-b-2xl opacity-60"></span>
                    <div className="divLiks my-4 flex flex-col items-center">
                        <box-icon
                            name={link.icon}
                            type="logo"
                            color="white"
                            className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:scale-110"
                        ></box-icon>
                        <span className="mt-2 text-white">{link.label}</span>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default ScLinks;