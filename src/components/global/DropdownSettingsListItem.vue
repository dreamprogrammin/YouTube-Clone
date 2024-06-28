<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';

const props = defineProps({
  label: String,
  icon: String,
  withSubMenu: Boolean
});
</script>

<template>
  <li>
    <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
      <basic-icon class="mr-2 h-5 w-5 text-gray-500" :name="props.icon" />
      <span>{{ props.label }}</span>
      <basic-icon v-if="withSubMenu" class="ml-auto h-5 w-5" name="chevron" />
    </a>
  </li>
</template>

<style scoped></style>
