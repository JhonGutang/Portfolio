import ImageIcon from "../ImageIcons";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const TechIcon = ({ tech, index }: { tech: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const popUpVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
        delay: index * 0.07,
      },
    },
  };

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
      variants={popUpVariants}
      initial="hidden"
      animate={controls}
    >
      <ImageIcon
        iconLink={tech.link}
        name={tech.name}
        withBorder={true}
        expandWhenHovered={true}
      />
    </motion.div>
  );
};

const Skills = () => {
  const techStack = [
    { name: "HTML", link: "tech_stack/html.png"},
    { name: "CSS", link: "tech_stack/css.png" },
    { name: "Javascript", link: "tech_stack/js.png" },
    { name: "Typescript", link: "tech_stack/typescript.png" },
    { name: "PHP", link: "tech_stack/php.png" },
    { name: "Bootstrap", link: "tech_stack/bootstrap.png" },
    { name: "Tailwind", link: "tech_stack/tailwind.png" },
    { name: "Vue", link: "tech_stack/vue.png" },
    { name: "Vuetify", link: "tech_stack/vuetify.png" },
    { name: "React", link: "tech_stack/react.png" },
    { name: "Laravel", link: "tech_stack/laravel.png" },
    { name: "Express JS", link: "tech_stack/express_js.svg"},
    { name: "Prisma", link: "tech_stack/prisma.png"},
    { name: "MySQL", link: "tech_stack/mysql.png"},
    { name: "PostgreSQL", link: "tech_stack/postgresql.png"},
    { name: "GraphQL", link: "tech_stack/graphql.png"},
  ];

  return (
    <div className=" w-full h-[130vh] lg:h-[110vh] flex items-center justify-center distance-from-nav">
      <div className="flex flex-col lg:flex-row gap-12 items-center  w-full justify-center">
        <div className="lg:w-full lg:flex lg:justify-center">
          <img src="/tech_stack/programming.svg" alt="" className="w-[70vw] lg:w-[30vw]" />
        </div>
        <div className="w-full text-center lg:text-start">
            <div className="text-3xl mb-5">Tech Stack</div>
            <div className="flex lg:justify-start justify-center flex-wrap gap-3 px-3">
              {techStack.map((tech, i) => (
                <TechIcon key={tech.name} tech={tech} index={i} />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
