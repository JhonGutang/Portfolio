import TechStack from "../TechStack";

const Projects = () => {
  const projectList = [
    {
      name: "GradeQSlot",
      subheading: "A Web-Based Grade Inquiry and Appointment Management System",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem consectetur placeat reprehenderit alias, quam ea repellendus incidunt aliquid aliquam beatae!",
      images: ["/projects/gradeqslot.png"],
      techStack: [
        { name: "Vue", iconLink: "tech_stack/vue.png" },
        { name: "Vuetify", iconLink: "tech_stack/vuetify.png" },
        { name: "Laravel", iconLink: "tech_stack/laravel.png" },
      ],
    },
    {
      name: "Quiz Studio",
      subheading: "Interactive Quiz Content Management System",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem consectetur placeat reprehenderit alias, quam ea repellendus incidunt aliquid aliquam beatae!",
      images: ["/projects/quiz_studio.png"],
      techStack: [
        { name: "Vue", iconLink: "tech_stack/vue.png" },
        { name: "Vuetify", iconLink: "tech_stack/vuetify.png" },
        { name: "Laravel", iconLink: "tech_stack/laravel.png" },
      ],
    },
    {
      name: "CollabIT",
      subheading: "Interactive Quiz Content Management System",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem consectetur placeat reprehenderit alias, quam ea repellendus incidunt aliquid aliquam beatae!",
      images: ["/projects/collabit.png"],
      techStack: [
        { name: "React", iconLink: "tech_stack/react.png" },
        { name: "Tailwind", iconLink: "tech_stack/tailwind.png" },
      ],
    },
  ];

  return (
    <div className="w-full distance-from-nav flex flex-col gap-10 items-center h-fit ">
      <div className="text-3xl capitalize sticky top-0 flex items-end justify-center h-[25vh] lg:h-[25vh] w-screen py-5 lg:mb-10" style={{backgroundColor: '#29232E'}}>projects</div>
      <div className="flex flex-wrap justify-center gap-5">
        {projectList.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:items-center lg:flex-nowrap gap-5" style={{marginBottom: '30vh'}}>
            <div className="lg:w-fit  h-fit">
              <img src={project.images[0]} alt={project.name} />
            </div>
            <div className="text-center lg:text-left lg:px-0 px-8 lg:w-[40vw]  h-fit">
              <div className="text-2xl">{project.name}</div>
              <div className="text-lg mb-3">{project.subheading}</div>
              <p>{project.description}</p>
            <TechStack techStack={project.techStack} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
