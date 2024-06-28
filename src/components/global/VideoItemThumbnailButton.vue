<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import { computed, ref } from 'vue';

const { icon, label } = defineProps({
  icon: String,
  label: String
});

const isBadgeShown = ref(false);

const toggleBadge = () => (isBadgeShown.value = !isBadgeShown.value);

const classes = computed(() => [
  isBadgeShown.value ? 'rounded-r-sm' : 'rounded-sm',
  'absolute',
  'right-0',
  'm-1',
  'bg-black',
  'bg-opacity-60',
  'p-1',
  'text-white',
  'opacity-0',
  'group-hover:opacity-100'
]);

const badgeClasses = computed(() => [
  isBadgeShown.value ? 'w-28' : 'w-0',
  'transition-width',
  'absolute',
  'right-full',
  'top-0',
  'overflow-hidden',
  'whitespace-nowrap',
  'rounded-l-sm',
  'bg-black',
  'bg-opacity-60',
  'text-xs',
  'font-semibold',
  'uppercase',
  'delay-100'
]);
</script>

<template>
  <span @mouseleave="toggleBadge" @mouseenter="toggleBadge" :class="classes">
    <basic-icon class="h-5 w-5" :name="icon" />
    <span :class="badgeClasses">
      <span class="mx-3 my-1.5 inline-block"> {{ label }} </span></span
    >
  </span>
</template>

<style scoped></style>
