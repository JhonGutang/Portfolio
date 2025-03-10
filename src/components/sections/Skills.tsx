import ImageIcon from "../ImageIcons";
const Skills = () => {
  const techStack = [
    { name: "HTML", link: "tech_stack/html.png"},
    { name: "CSS", link: "tech_stack/css.png" },
    { name: "Javascript", link: "tech_stack/js.png" },
    { name: "Typescript", link: "tech_stack/typescript.png" },
    { name: "Bootstrap", link: "tech_stack/bootstrap.png" },
    { name: "Tailwind", link: "tech_stack/tailwind.png" },
    { name: "Vue", link: "tech_stack/vue.png" },
    { name: "Vuetify", link: "tech_stack/vuetify.png" },
    { name: "React", link: "tech_stack/react.png" },
    { name: "Laravel", link: "tech_stack/laravel.png" },
    { name: "Django", link: "tech_stack/django.png" },

  ];
  return (
    <div className=" w-full h-[110vh] flex items-center justify-center distance-from-nav">
      <div className="flex flex-col lg:flex-row gap-12 items-center  w-full justify-center">
        <div className="lg:w-full lg:flex lg:justify-center">
          <img src="/tech_stack/programming.svg" alt="" className="w-[70vw] lg:w-[30vw]" />
        </div>
        <div className="w-full text-center lg:text-start">
            <div className="text-3xl mb-5">Tech Stack</div>
            <div className="flex lg:justify-start justify-center flex-wrap gap-3 px-3">
                
          {techStack.map((tech) => (
            <div key={tech.name}>
              <ImageIcon
                iconLink={tech.link}
                name={tech.name}
                withBorder={true}
                expandWhenHovered={true}
              />
            </div>
          ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
