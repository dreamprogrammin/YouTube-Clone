<script setup>
import TheSidebarContent from '@/components/global/TheSidebarContent.vue';
import LogoMain from '@/components/LogoMain.vue';
import BasicIcon from '@/components/global/BasicIcon.vue';
import TheSidebarMobileOverlay from '@/components/global/TheSidebarMobileOverlay.vue';

const { isOpen } = defineProps({
  isOpen: Boolean
});
defineEmits({ closeMobileSidebar: null });

// watch(isOpen, () => {
//   if (isOpen) {
//     this.$refs.mobileSidebar.focus();
//   }
// });
</script>

<template>
  <transition
    enter-active-class="transition-opacity easy-liner duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity easy-liner duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <the-sidebar-mobile-overlay v-show="isOpen" @click="$emit('closeMobileSidebar')" />
  </transition>

  <transition
    enter-active-class="transition ease-in-out duration-200 translate"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-0"
    leave-active-class="transition ease-in-out duration-200 translate"
    leave-from-class="translate-0"
    leave-to-class="-translate-x-full"
  >
    <aside
      tabindex="-1"
      ref="mobileSidebar"
      @keydown.esc="$emit('closeMobileSidebar')"
      v-show="isOpen"
      class="fixed z-50 max-h-screen w-64 overflow-auto bg-white outline-none"
    >
      <section class="sticky top-0 flex items-center border-b bg-white p-4">
        <button class="mr-3 sm:ml-2 sm:mr-6" @click="$emit('closeMobileSidebar')">
          <basic-icon name="menu" />
        </button>
        <logo-main />
      </section>
      <the-sidebar-content />
    </aside>
  </transition>
</template>

<style scoped></style>
