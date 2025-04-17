import projects from "../data/projects.json";
import { Project } from "../models/Project";

const getProjects = (): Project[] => projects;

const getProjectById = (id: string): Project => {
  const project = projects.find((project) => project.id === id);
  if (!project) throw new Error(`Proyecto no encontrado`);
  return project;
};

export default {
  getProjects,
  getProjectById,
};
