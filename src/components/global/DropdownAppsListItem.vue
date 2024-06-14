<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';

const props = defineProps({ label: String });
</script>

<template>
  <li>
    <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
      <basic-icon class="mr-3 h-6 w-6 text-red-500" name="play" />
      <span>{{ props.label }}</span>
    </a>
  </li>
</template>

<style scoped></style>
