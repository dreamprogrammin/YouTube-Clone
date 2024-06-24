<script setup>
// export default {
//   data() {
//     return {
//       isMobileSidebar: false,
//       sidebarState: null
//     };
//   },
//   mounted() {
//     if (window.innerWidth >= 768 && window.innerWidth < 1280) {
//       this.sidebarState = 'compact';
//       console.log(this.sidebarState);
//     }
//     if (window.innerWidth > 1280) {
//       this.sidebarState = 'normal';
//       console.log(this.sidebarState);
//     }
//   },
//   methods: {
//     openMobileSidebar() {
//       this.isMobileSidebar = true;
//     },
//     closeMobileSidebar() {
//       this.isMobileSidebar = false;
//     },
//     toggleSidebar() {
//       if (window.innerWidth >= 1280) {
//         this.sidebarState = this.sidebarState === 'normal' ? 'compact' : 'normal';
//       } else {
//         this.openMobileSidebar();
//       }
//     }
//   }
// };
import TheSidebarCompact from '@/components/global/TheSidebarCompact.vue';
import { ref, onMounted } from 'vue';
const isCompactSidebarOpenActive = ref(false);
const isCompactSidebarOpen = ref(false);
const isMobileSidebar = ref(false);
const isSidebarOpen = ref(false);

onMounted(() => {
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    isCompactSidebarOpenActive.value = true;
  }

  if (window.innerWidth > 1280) {
    isCompactSidebarOpenActive.value = false;
  }

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
  }
};
const openMobileSidebar = () => (isMobileSidebar.value = true);
const closeMobileSidebar = () => (isMobileSidebar.value = false);
</script>

<template>
  <the-header @toggle-sidebar="toggleSidebar" />
  <the-sidebar-compact v-if="isCompactSidebarOpen" />
  <the-sidebar v-if="isSidebarOpen" />
  <the-sidebar-mobile :is-open="isMobileSidebar" @close-mobile-sidebar="closeMobileSidebar" />
  <the-category :is-sidebar-open="isSidebarOpen" />
  <the-main-video :is-sidebar-open="isSidebarOpen" />
  <!--  <Channel />-->
</template>

<style scoped></style>
