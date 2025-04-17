import { Project } from "../models/Project";
import projectRepository from "../repositories/ProjectRepository";

export const fetchProjects = async (): Promise<Project[]> => {
  return projectRepository.getProjects();
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  return projectRepository.getProjectById(id);
};
