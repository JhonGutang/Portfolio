
import TechStack from "../TechStack";
import { Button } from "../ui/button";
const Projects = () => {
  const projectList = [
    {
      name: "GradeQSlot",
      subheading: "A Web-Based Grade Inquiry and Appointment Management System",
      link: 'https://github.com/GradeQSlot',
      description:
        "GradeQSlot is a revolutionary web-based system designed for Consolatrix College of Toledo City students, offering real-time grade access, effortless appointment scheduling, and a personalized dashboard.  This innovative platform streamlines your academic experience, saving you time and energy so you can focus on your studies.  Join GradeQSlot and experience a smoother, more efficient academic journey!",
      images: ["/projects/gradeqslot.png"],
      techStack: [
        { name: "Vue", iconLink: "/tech_stack/vue.png" },
        { name: "Vuetify", iconLink: "/tech_stack/vuetify.png" },
        { name: "Laravel", iconLink: "/tech_stack/laravel.png" },
      ],
    },
    {
      name: "Quiz Studio",
      subheading: "Interactive Quiz Content Management System",
      link: 'https://dev.play.passafund.com',
      description:
      "QuizStudio is a powerful quiz content management system that empowers you to create engaging and diverse quizzes with unparalleled flexibility. Design your quizzes with ease, choosing from a variety of formats and layouts, and customize the content to perfectly match your vision. Whether you're building a comprehensive assessment or a fun, interactive learning experience, QuizStudio gives you the freedom to create quizzes that are truly your own.",
      images: ["/projects/quiz_studio.png"],
      techStack: [
        { name: "Vue", iconLink: "/tech_stack/vue.png" },
        { name: "Vuetify", iconLink: "/tech_stack/vuetify.png" },
        { name: "Laravel", iconLink: "/tech_stack/laravel.png" },
      ],
    },
    {
      name: "CollabIT",
      subheading: "Interactive Quiz Content Management System",
      link: 'https://github.com/JhonGutang/CollabIT_CCTC',
      description:
        "CollabIT CCTC is more than just a platform—it’s a thriving community where IT students from Consolatrix College of Toledo City come together to share ideas, exchange knowledge, and grow in the world of technology. Whether you're posting insights, exploring the latest tech trends, or collaborating with fellow students through our chat system, you'll always find support and inspiration from like-minded peers.",
      images: ["/projects/collabit.png"],
      techStack: [
        { name: "React", iconLink: "/tech_stack/react.png" },
        { name: "Typescript", iconLink: "/tech_stack/typescript.png" },
        { name: "Tailwind", iconLink: "/tech_stack/tailwind.png" },
        { name: "Django", iconLink: "/tech_stack/django.png" },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col h-fit">
      <div className="text-3xl capitalize flex items-end justify-center h-[20vh] mb-10 lg:h-[25vh] w-full py-5 lg:mb-10" style={{backgroundColor: '#29232E'}}>projects</div>
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
              <div className="lg:flex lg:justify-between ">

            <TechStack techStack={project.techStack} />
              <Button className="mt-7" style={{backgroundColor: "#6C63FF"}}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
