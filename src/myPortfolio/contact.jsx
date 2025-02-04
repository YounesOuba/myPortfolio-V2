import React from "react";
import "./style.css";
import 'boxicons';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Contact() {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
            anchorPlacement: "top-center",
            offset: -100,
        });
    }, []);

    
    return (
        <div className="contact -mt-8 p-12 py-40 w-full min-h-screen flex flex-col items-center text-white">
            <h1 className="text-5xl font-extrabold text-center mb-10 tracking-wide"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
            >
                Contact Me
            </h1>

            <section className="contact-content w-full bg-slate-700/30 p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-10 items-center"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
            >
                {/* Contact Information */}
                <div className="contact-info flex flex-col gap-8 w-2/6"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    <h2 className="text-4xl font-semibold tracking-wide text-white">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-400">Feel free to reach out to me through any of the following methods:</p>
                    <ul className="space-y-6">
                        <li className="bg-gray-700 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-all"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                             <box-icon type='solid' name='envelope' color="white"></box-icon><span>Email: <a href="mailto:oubayounesouba@gmail.com" className="text-purple-400 hover:underline">oubayounesouba@gmail.com</a></span>
                        </li>
                        <li className="bg-gray-700 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-all"
                            data-aos="fade-right"
                            data-aos-delay="700"
                        >
                            <box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon><span>LinkedIn: <a href="https://www.linkedin.com/in/younes-ouba-4560292a9" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">younes-ouba</a></span>
                        </li>
                        <li className="bg-gray-700 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-all"
                            data-aos="fade-left"
                            data-aos-delay="600"
                        >
                            <box-icon name='telegram' type='logo' color='#ffffff' ></box-icon><span>Telegram: <a href="https://t.me/YounesOuba" target="_blank" className="text-purple-400 hover:underline">@YounesOuba</a></span>
                        </li>
                        <li className="bg-gray-700 p-4 rounded-lg flex items-center gap-4 hover:scale-105 transition-all"
                            data-aos="fade-left"
                            data-aos-delay="800"
                        >
                            <box-icon name='instagram-alt' type='logo' color='#ffffff' ></box-icon><span>Instagram: <a href="https://www.instagram.com/younes__ouba/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">@younes__ouba</a></span>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="contact-form w-3/4"
                    data-aos="zoom-in"
                    data-aos-delay="900"
                >
                    <h2 className="text-4xl font-semibold tracking-wide text-white mb-2">
                        Send Me a Message
                    </h2>
                    <form className="flex flex-col gap-6 mt-6"
                    action="https://formspree.io/f/mrbekgyq"
                    method="POST"
                    accept-charset="UTF-8"
                    >
                        <input type="text" name="Name" placeholder="Your Name" className="p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" required/>
                        <input type="email" name="Email" placeholder="Your Email" className="p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all" required/>
                        <textarea placeholder="Your Message" name="message" rows="5" className="p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"></textarea>
                        <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-all mt-4">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
