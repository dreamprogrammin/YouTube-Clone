<script setup>
import { computed, ref } from 'vue';
import CategoryItem from '@/components/global/CategoryItem.vue';

const { isSidebarOpen } = defineProps({ isSidebarOpen: Boolean });

const categories = ref([
  'All',
  'Track',
  'Car',
  'Technology',
  'Laptops',
  'Films',
  'Music',
  'Show video',
  'Tennis',
  'Nat Geo Wild',
  'National Geographic',
  'Mars',
  'Games',
  'Warface',
  'Dota 2',
  'Contra Strike',
  'Ocean'
]);

const classes = computed(() => {
  return isSidebarOpen ? 'xl:pl-64' : 'md:pl-14';
});
</script>

<template>
  <section :class="classes">
    <div class="m-auto max-w-screen-2xl border-b border-t bg-white bg-opacity-95 px-4">
      <div class="flex space-x-3 overflow-auto whitespace-nowrap py-3 text-xs">
        <category-item
          v-for="category in categories"
          :key="category"
          :category="category"
          :is-active="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
