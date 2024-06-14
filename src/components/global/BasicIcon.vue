<script setup>
import { computed } from 'vue';
import icons from '@/icons.js';

const props = defineProps({
  name: String
});

const path = computed(() => (props.name in icons ? icons[props.name] : null));
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="$attrs.class || 'h-6 w-6'"
    viewBox="0 0 20 20"
    fill="currentColor"
    v-html="path"
  ></svg>
</template>

<style scoped></style>
