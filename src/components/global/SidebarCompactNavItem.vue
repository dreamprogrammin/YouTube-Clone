<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import { computed } from 'vue';

const { name, label, isActive } = defineProps({
  isActive: Boolean,
  name: String,
  label: String
});

const classes = computed(() => {
  const classes = ['flex', 'flex-col', 'items-center', 'px-2', 'py-5', 'hover:bg-gray-300'];

  return isActive ? [...classes, 'text-red-500'] : classes;
});
</script>

<template>
  <li>
    <a href="#" :class="classes">
      <basic-icon :name="name" />
      <span class="text-xs">{{ label }}</span>
    </a>
  </li>
</template>

<style scoped></style>
