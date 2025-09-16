export type Tech = {
    name: string,
    iconLink: string,
  }
  // Define the type for a single project
export type Project = {
    name: string;
    subheading: string;
    description: string;
    images: string[];
    techStack: Tech[];
    link: string;
  };
