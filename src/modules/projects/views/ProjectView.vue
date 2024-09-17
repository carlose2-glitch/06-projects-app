<template>
  <bread-crumbs :name="project?.name ?? 'No name'"></bread-crumbs>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../stores/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';
interface Props {
  id: String;
}

const props = defineProps<Props>();
const projectStore = useProjectsStore();

const project = ref<Project | null>();

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
  },
  {
    immediate: true,
  },
);
</script>
