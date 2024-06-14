<script setup>
import VideoItem from '@/components/global/VideoItem.vue';
</script>

<template>
  <main class="px-5 pb-5 pt-32 md:ml-24 xl:ml-64">
    <div
      class="m-auto grid max-w-screen-2xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      <video-item v-for="i in 20" :key="i" :index="i" />
    </div>
  </main>
</template>

<style scoped></style>
