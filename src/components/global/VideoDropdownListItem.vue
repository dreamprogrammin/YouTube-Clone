<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import { computed } from 'vue';
const { icon, label } = defineProps({
  icon: String,
  label: String
});

const classes = computed(() => [
  'flex',
  'items-center',
  'py-2',
  'pl-5',
  'pr-8',
  'text-sm',
  'hover:bg-gray-200'
]);
</script>

<template>
  <li>
    <a href="#" :class="classes">
      <basic-icon class="mr-4 h-5 w-5 text-gray-500" :name="icon" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<style scoped></style>
