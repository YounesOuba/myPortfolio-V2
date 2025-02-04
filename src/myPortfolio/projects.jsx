import React from "react";
import "./style.css";
import 'boxicons';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import AOS from 'aos';



function Projects(){
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
            anchorPlacement: "top-center",
            offset: -100,
        });
    }, []);    
    return(
        <div className="projects">
            <section className="w-3/4 mx-auto text-center bg-slate-300/10 p-6 rounded-md mt-14 -mb-10"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
            >
                <h1 className="text-3xl font-bold">Projects comming soon ...</h1>
            </section>
        </div>
    )

}

export default Projects;