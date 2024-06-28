<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import VideoItemThumbnailButton from '@/components/global/VideoItemThumbnailButton.vue';

const props = defineProps({
  index: Number
});
</script>

<template>
  <div class="relative">
    <img :src="`https://picsum.photos/seed/image${props.index}/720/404`" />
    <video-item-thumbnail-button icon="clock" label="Watch latter" class="top-0" />
    <video-item-thumbnail-button icon="menuAlt3" label="Add to queue" class="top-8" />
    <span
      class="absolute bottom-0 right-0 m-1 rounded-sm bg-black p-1 text-sm font-semibold text-white opacity-100 duration-500 group-hover:opacity-0"
      >4:32</span
    >
  </div>
</template>

<style scoped></style>
