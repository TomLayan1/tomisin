import { ReactNode } from "react";

export interface ProjectType {
  id: number;
  name: string;
  image: string;
  description: string;
  links: {
    github: string;
    website: string;
  },
  stack: string[];
}

export interface ExperiencesType {
  id: number;
  companyName: string;
  role: string;
  location: string;
  date: string;
  whatIDid: string[];
}

export interface WorkProcessType {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
}