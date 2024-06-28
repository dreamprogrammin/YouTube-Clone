<script setup>
import { computed, ref } from 'vue';

const isShown = ref(false);

const props = defineProps({
  text: String
});

const toggle = () => (isShown.value = !isShown.value);

const classes = computed(() => {
  return [
    'bg-gray-600',
    'bg-opacity-80',
    'rounded-sm',
    'text-white',
    'text-sm',
    'whitespace-nowrap',
    'p-2',
    'absolute',
    'top-14',
    'left-1/2',
    'transform',
    '-translate-x-1/2'
  ];
});
</script>

<template>
  <div class="relative">
    <div class="h-full" @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <div v-show="isShown" :class="classes">{{ props.text }}</div>
  </div>
</template>

<style scoped></style>
