
import TechStack from "../TechStack";
import { Button } from "../ui/button";
import { projectList } from "@/config/ProjectData";
const Projects = () => {
 

  return (
    <div className="w-full flex flex-col h-fit">
      <div className="text-3xl capitalize flex items-end justify-center h-[20vh] mb-10 lg:h-[25vh] w-full py-5 lg:mb-10" style={{backgroundColor: '#29232E'}}>projects</div>
      <div className="flex flex-wrap justify-center gap-5">
        {projectList.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:items-center lg:flex-nowrap gap-10 mb-15" >
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
