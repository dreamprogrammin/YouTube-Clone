<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import { computed } from 'vue';

const props = defineProps({
  index: Number
});

const days = props.index === 1 ? 'day' : 'days';

const summory = computed(
  () => `<span>${props.index}K views</span> &middot; <span>${props.index} ${days} ago</span>`
);
</script>

<template>
  <div class="mt-5 flex items-start">
    <img
      :src="`https://picsum.photos/seed/avatar${props.index}}/68`"
      class="mr-3 h-9 w-9 rounded-full"
      alt="avatar"
    />
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title {{ props.index }}</span>
      <div class="mt-1 flex items-center">
        <span>Channel name {{ props.index }}</span>
        <basic-icon class="ml-1 h-3.5 w-3.5" name="check" />
      </div>
      <div v-html="summory"></div>
    </div>
    <button
      class="-mt-1 ml-auto pl-1 text-gray-800 opacity-0 hover:text-gray-600 group-hover:opacity-100"
    >
      <basic-icon class="h-5 w-5" name="dotsVertical" />
    </button>
  </div>
</template>

<style scoped></style>
