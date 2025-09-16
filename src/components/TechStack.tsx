import ImageIcon from "./ImageIcons";
import { Tech } from "@/types/global";

interface TechStackProps {
    techStack: Tech[]
}

const TechStack:React.FC<TechStackProps> = ({techStack}) => {
    return (  
        <div className="w-full lg:w-auto text-center lg:text-left mt-6">
            <div className="text-lg mb-3">Tech Stack</div>
            <div className="flex justify-center gap-3 lg:justify-start"> 
                {techStack.map((tech, index) => (
                    <ImageIcon key={index} iconLink={tech.iconLink}/>
                ))}
            </div>
        </div>
    );
}
 
export default TechStack;