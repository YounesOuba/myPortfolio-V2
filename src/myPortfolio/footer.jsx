import React, { useEffect } from "react";
import 'boxicons';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: false,
            mirror: true, 
        });
    }, []);

    const linkStyles = {
        github: "bg-gray-800 hover:bg-gray-700",
        linkedin: "bg-blue-700 hover:bg-blue-600",
        instagram: "bg-pink-600 hover:bg-pink-500",
        telegram: "bg-blue-500 hover:bg-blue-400",
    };

    return (
        <footer className="footer flex flex-col items-center justify-center w-full bg-slate-800/30 rounded-2xl p-6 text-white" data-aos="fade-up">
            <p className="text-2xl font-bold mb-6" data-aos="fade-up" data-aos-delay="200">Made By Me </p>
            <div className="footer-links flex flex-wrap gap-6" data-aos="fade-up" data-aos-delay="400">
                {[
                    { name: 'github', url: "https://github.com/YounesOuba" },
                    { name: 'linkedin', url: "https://www.linkedin.com/in/younes-ouba-4560292a9" },
                    { name: 'instagram', url: "https://www.instagram.com/younes__ouba/" },
                    { name: 'telegram', url: "https://t.me/YounesOuba" },
                ].map((item, index) => (
                    <a 
                        key={index} 
                        href={item.url} 
                        className={`group flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${linkStyles[item.name]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-up"
                        data-aos-delay={600 + index * 100}
                    >
                        <box-icon 
                            name={item.name} 
                            type="logo" 
                            color="white" 
                            className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:scale-110"
                        ></box-icon>
                        <span className="ml-2 max-w-0 overflow-hidden opacity-0 translate-x-[-10px] transition-all duration-500 ease-in-out group-hover:max-w-xs group-hover:opacity-100 group-hover:translate-x-0">
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        </span>
                    </a>
                ))}
            </div>
            <p className="mt-6 text-sm text-gray-400" data-aos="fade-up" data-aos-delay="800">© 2023 My Portfolio. All rights reserved.</p>
        </footer>
    );
}

export default Footer;