<script setup>
import { computed } from 'vue';

const props = defineProps({
  category: String,
  isActive: Boolean
});
const classes = computed(() => {
  const baseClass = ['rounded-full', 'px-3', 'py-1', 'border', 'transition'];

  return props.isActive
    ? [...baseClass, 'text-white', 'hover:bg-gray-500', 'border-gray-700', 'bg-gray-400']
    : [...baseClass, 'hover:bg-gray-200', 'border-gray-300', 'bg-gray-100'];
});
</script>

<template>
  <a :class="classes" href="#">{{ props.category }}</a>
</template>

<style scoped></style>
