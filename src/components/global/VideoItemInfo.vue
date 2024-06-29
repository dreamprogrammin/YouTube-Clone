<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import { computed, ref } from 'vue';
import VideoItemDropdown from '@/components/global/VideoItemDropdown.vue';
import BaseTooltip from '@/components/global/BaseTooltip.vue';

const { index } = defineProps({
  index: Number
});

const channelName = ref(`Channel name ${index} `);

const days = index === 1 ? 'day' : 'days';

const summory = computed(
  () => `<span>${index}K views</span> &middot; <span>${index} ${days} ago</span>`
);
</script>

<template>
  <div class="mt-5 flex items-start">
    <img
      :src="`https://picsum.photos/seed/avatar${index}}/68`"
      class="mr-3 h-9 w-9 rounded-full"
      alt="avatar"
    />
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title {{ index }}</span>
      <div class="mt-1 flex">
        <base-tooltip :text="channelName" top>
          <span>{{ channelName }}</span>
        </base-tooltip>
        <base-tooltip text="verified" top>
          <basic-icon class="ml-1 h-3.5 w-3.5" name="check" />
        </base-tooltip>
      </div>
      <div v-html="summory"></div>
    </div>
    <video-item-dropdown />
  </div>
</template>

<style scoped></style>
