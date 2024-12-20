<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <top-menu />
    <main class="flex flex-row">
      <!-- Side menu -->
      <side-menu />
      <!-- Router Vue -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>
