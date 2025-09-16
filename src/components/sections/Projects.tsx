
import TechStack from "../TechStack";
import { Button } from "../ui/button";
import { projectList } from "@/config/ProjectData";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const slideVariants = {
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 20 } },
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 20 } },
  },
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const direction = index % 2 === 0 ? "right" : "left";
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          await controls.start("visible");
        } else {
          await controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap lg:items-center lg:flex-nowrap gap-10 mb-15"
      variants={slideVariants[direction]}
      initial="hidden"
      animate={controls}
    >
      <div className="lg:w-fit h-fit">
        <img
          src={project.images[0]}
          alt={project.name}
          className="lg:w-[35vw] lg:h-80 rounded-lg"
        />
      </div>
      <div className="text-center lg:text-left lg:px-0 px-8 lg:w-[40vw]  h-fit">
        <div className="text-2xl">{project.name}</div>
        <div className="text-lg mb-3">{project.subheading}</div>
        <p>{project.description}</p>
        <div className="lg:flex lg:justify-between ">
          <TechStack techStack={project.techStack} />
          <Button className="mt-7" style={{backgroundColor: "#6C63FF"}}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="w-full flex flex-col h-fit">
      <div className="text-3xl capitalize flex items-end justify-center h-[20vh] mb-10 lg:h-[25vh] w-full py-5 lg:mb-10" style={{backgroundColor: '#29232E'}}>projects</div>
      <div className="flex flex-wrap justify-center gap-5">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
