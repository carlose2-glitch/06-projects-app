import ProjectsLayouts from '@/modules/projects/layout/ProjectsLayouts.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjectsLayouts,
    },
  ],
});

export default router;
