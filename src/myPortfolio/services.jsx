import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: -100,
    });
  }, []);

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Developing responsive and dynamic web applications using PHP/MySQL or React/Node.js.",
      icon: "💻",
    },
    {
      title: "Improve Website Design & UI",
      description:
        "Enhancing websites for better user experience with modern UI/UX techniques.",
      icon: "🎨",
    },
    {
      title: "Convert Wireframes to Websites",
      description:
        "Building pixel-perfect, responsive websites using Tailwind CSS and Bootstrap.",
      icon: "📱",
    },
    {
      title: "Fix MySQL Database Issues",
      description:
        "Optimizing MySQL queries and resolving database issues for better performance.",
      icon: "🔧",
    },
  ];

  return (
    <div className="services p-10 w-full min-h-screen flex flex-col items-center bg-transparent text-white">
      <h1
        className="text-5xl font-bold text-center mb-10 text-white"
        data-aos="fade-up"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        🚀 My Services
      </h1>
      <div
        className="service-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-4/5 hover:"
        data-aos="fade-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="services-main-cards p-6 bg-slate-700/50 rounded-xl shadow-lg transform hover:scale-105 transition-all"
            data-aos="zoom-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h2 className="text-3xl font-semibold text-purple-300 flex items-center gap-3">
              {service.icon} {service.title}
            </h2>
            <p className="mt-3 text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
