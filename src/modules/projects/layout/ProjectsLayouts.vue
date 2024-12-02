<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <TopMenu />
    <main>
      <!-- Side menu -->
      <SideMenu />
      <!-- Router Vue -->
      <Router-view></Router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>
