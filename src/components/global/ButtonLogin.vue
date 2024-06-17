<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import { computed, useAttrs } from 'vue';

const attrs = useAttrs();

const classes = computed(() => {
  return (
    attrs.class ||
    'flex items-center whitespace-nowrap rounded-sm border border-blue-700 px-2 py-1 text-sm uppercase text-blue-700'
  );
});
</script>

<template>
  <button :class="classes">
    <basic-icon class="mr-2 h-7 w-7" name="login" />
    Sign in
  </button>
</template>

<style scoped></style>
