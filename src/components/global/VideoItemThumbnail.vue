<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';

const props = defineProps({
  index: Number
});
</script>

<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${props.index}/720/404`" />
    <span
      class="absolute right-0 top-0 m-1 rounded-sm bg-black bg-opacity-60 p-1 text-white opacity-0 group-hover:opacity-100"
    >
      <basic-icon class="h-5 w-5" name="clock" />
    </span>
    <span
      class="absolute right-0 top-10 m-1 rounded-sm bg-black bg-opacity-60 p-1 text-white opacity-0 group-hover:opacity-100"
    >
      <basic-icon class="h-5 w-5" name="menuAlt3" />
    </span>
    <span
      class="absolute bottom-0 right-0 m-1 rounded-sm bg-black p-1 text-sm font-semibold text-white opacity-100 duration-500 group-hover:opacity-0"
      >4:32</span
    >
  </div>
</template>

<style scoped></style>
