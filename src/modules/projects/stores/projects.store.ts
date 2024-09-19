import { defineStore } from 'pinia';

import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

/*const initialload = (): Project[] => {
  const projects = localStorage.getItem('projects') ?? [];

  return [
    {
      id: uuidv4(),
      name: 'Project 1',
      tasks: [],
    },
    {
      id: uuidv4(),
      name: 'Project 2',
      tasks: [],
    },
  ];
};*/

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: String) => {
    if (name.length === 0) return;

    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
  };

  const addTaskToProject = (projectId: String, taskName: String) => {
    if (taskName.trim().length === 0) return;

    const project = projects.value.find((p) => p.id === projectId);
    if (!project) return;

    project.tasks.push({
      id: uuidv4(),
      name: taskName,
    });
  };

  return {
    //Properties
    projects,
    //Getters
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),
    //Actions
    addProject,
    addTaskToProject,
  };
});
