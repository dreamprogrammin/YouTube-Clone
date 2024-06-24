<script>
import TheSidebarContent from '@/components/global/TheSidebarContent.vue';
export default {
  components: {
    TheSidebarContent
  },
  props: {
    isOpen: Boolean
  },
  computed: {
    classes() {
      console.log(this.isOpen);
      return ['fixed', 'z-20', 'max-h-screen', 'w-64', 'overflow-auto', 'bg-white', 'pt-12'];
    }
  }
};
// import TheSidebarContent from '@/components/global/TheSidebarContent.vue';
// import { computed } from 'vue';
//
// const { isOpen } = defineProps({ isOpen: Boolean });
//
// console.log(isOpen);
//
// const classes = computed(() => {
//   console.log(isOpen);
//   return [
//     isOpen ? 'xl:block' : 'hidden',
//     'fixed',
//     'z-20',
//     'max-h-screen',
//     'w-64',
//     'overflow-auto',
//     'bg-white',
//     'pt-12'
//   ];
// });
</script>

<template>
  <aside :class="classes">
    <the-sidebar-content />
  </aside>
</template>

<style scoped></style>
