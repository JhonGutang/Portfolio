'use client'

import { useState, useEffect } from "react";

const Hero = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024); 
        };
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return ( 
        <div className="w-full h-[100vh] flex flex-col lg:flex-row-reverse items-center justify-center">
            <div className="lg:w-full">
                <img src="/thumbnail/hero.png" alt="" width={isDesktop ? 600 : 400}/>
            </div>
            <div className={`w-full text-center ${isDesktop ? "lg:text-start headline-pl" : ""}`}>
                <div className="text-3xl lg:text-5xl mb-2">Jhon Barry D. Gutang</div>
                <div className="text-lg lg:text-2xl mb-3">Software Engineer | Full Stack Web Developer</div>
                <div className="text-md lg:text-xl">Transforming Ideas into Scalable, High-Performance Web Solutions</div>
            </div>
        </div>
    );
}

export default Hero;
