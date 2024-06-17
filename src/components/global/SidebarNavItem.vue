<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import { computed } from 'vue';

const props = defineProps({
  label: String,
  name: String,
  isActive: Boolean
});

const classes = computed(() => {
  const classes = ['flex', 'items-center', 'px-6', 'py-2', 'text-sm'];

  return props.isActive
    ? [...classes, 'bg-gray-200', 'font-medium', 'text-gray-800', 'hover:bg-gray-300']
    : [...classes, 'hover:bg-gray-100'];
});

const iconClasses = computed(() => {
  return props.isActive ? 'mr-6 h-6 w-6 text-red-500' : 'mr-6 h-6 w-6"';
});
</script>

<template>
  <li>
    <a href="#" :class="classes">
      <basic-icon :class="iconClasses" :name="props.name" />
      <span>{{ props.label }}</span>
    </a>
  </li>
</template>

<style scoped></style>
