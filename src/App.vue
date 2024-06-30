<script setup>
import TheSidebarCompact from '@/components/global/TheSidebarCompact.vue';
import { ref, onMounted } from 'vue';
const isCompactSidebarOpenActive = ref(false);
const isCompactSidebarOpen = ref(false);
const isMobileSidebar = ref(false);
const isSidebarOpen = ref(false);

onMounted(() => {
  onResize();

  window.addEventListener('resize', onResize);
});

const toggleSidebar = () => {
  if (window.innerWidth >= 1280) {
    isCompactSidebarOpenActive.value = isCompactSidebarOpenActive.value =
      !isCompactSidebarOpenActive.value;
    onResize();
  } else {
    openMobileSidebar();
  }
};

const onResize = () => {
  if (window.innerWidth < 768) {
    isCompactSidebarOpen.value = false;
    isSidebarOpen.value = false;
  } else if (window.innerWidth < 1280) {
    isCompactSidebarOpen.value = true;
    isSidebarOpen.value = false;
  } else {
    isCompactSidebarOpen.value = isCompactSidebarOpenActive.value;
    isSidebarOpen.value = !isCompactSidebarOpenActive.value;
    isMobileSidebar.value = false;
  }
};
const openMobileSidebar = () => (isMobileSidebar.value = true);
const closeMobileSidebar = () => (isMobileSidebar.value = false);
</script>

<template>
  <div class="fixed z-30 w-full">
    <the-header @toggle-sidebar="toggleSidebar" />
    <the-category :is-sidebar-open="isSidebarOpen" />
  </div>
  <the-sidebar-compact v-if="isCompactSidebarOpen" />
  <the-sidebar v-if="isSidebarOpen" />
  <the-sidebar-mobile :is-open="isMobileSidebar" @close-mobile-sidebar="closeMobileSidebar" />
  <the-main-video :is-sidebar-open="isSidebarOpen" />
  <!--  <Channel />-->
</template>

<style scoped></style>
