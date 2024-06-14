<script setup>
import { ref } from 'vue';
import CategoryItem from '@/components/global/CategoryItem.vue';

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
</script>

<template>
  <section class="fixed z-10 w-full bg-white bg-opacity-95 pt-14 md:pl-24 xl:pl-64">
    <div class="m-auto max-w-screen-2xl border-b border-t px-4">
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
