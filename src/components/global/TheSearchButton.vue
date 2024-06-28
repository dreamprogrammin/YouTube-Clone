<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import BaseTooltip from '@/components/global/BaseTooltip.vue';
</script>

<template>
  <base-tooltip text="Search">
    <button
      class="flex h-full items-center rounded-br-sm rounded-tl-sm border border-l-0 bg-gray-100 px-6 py-1 text-gray-600 hover:bg-gray-200 focus:outline-none"
    >
      <basic-icon name="search" class="h-5 w-5" />
    </button>
  </base-tooltip>
</template>

<style scoped></style>
