'use client'

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const name = "Jhon Barry D. Gutang";
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024); 
        };
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            async ([entry]) => {
                if (entry.isIntersecting) {
                    await controls.start({
                        opacity: 0,
                        transition: { duration: 0.3 }
                    });
                    setDisplayText("");
                    setCurrentIndex(0);
                    await controls.start({
                        opacity: 1,
                        transition: { duration: 0.3 }
                    });
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [controls]);

    useEffect(() => {
        if (currentIndex < name.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + name[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, name]);

    return ( 
        <motion.div 
            ref={containerRef} 
            className="w-full h-[100vh] flex flex-col lg:flex-row-reverse items-center justify-center overflow-x-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="lg:w-full"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <img src="/thumbnail/hero.png" alt="" width={isDesktop ? 600 : 400}/>
            </motion.div>
            <motion.div 
                className="w-full text-center lg:text-start lg:pl-30  px-5 "
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <motion.div 
                    className="text-3xl lg:text-5xl mb-1"
                    initial={{ opacity: 1 }}
                    animate={controls}
                >
                    {displayText}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                        |
                    </motion.span>
                </motion.div>
                <motion.div 
                    className="text-md lg:text-2xl mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Software Engineer | Full Stack Web Developer
                </motion.div>
                <motion.div 
                    className="text-sm lg:text-xl italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    &quot;Transforming Ideas into Scalable, High-Performance Web Solutions&quot;
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Hero;
