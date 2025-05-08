export interface ProjectsType {
  name: string;
  image: string;
  description: string;
  links: {
    github: string;
    website: string;
  },
  stack: string[];
}