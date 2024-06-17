<script setup>
import { defineProps } from 'vue';
import VideoItemThumbnail from '@/components/global/VideoItemThumbnail.vue';
import VideoItemInfo from '@/components/global/VideoItemInfo.vue';

const props = defineProps({
  index: Number
});
</script>

<template>
  <a href="#" class="group mb-7">
    <video-item-thumbnail :index="props.index" />
    <video-item-info :index="props.index" />
  </a>
</template>

<style scoped></style>
