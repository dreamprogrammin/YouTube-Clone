<script setup>
import DropdownSettingsListItem from '@/components/global/DropdownSettingsListItem.vue';
import { ref } from 'vue';
import BasicIcon from '@/components/global/BasicIcon.vue';

const selectedThemeId = ref(0);
const themes = ref(['Use device theme', 'Dark theme', 'Light theme']);
</script>

<template>
  <section class="flex border-b border-gray-200 text-black">
    <button class="px-3 focus:outline-none">
      <basic-icon name="arrowLeft"></basic-icon>
    </button>
    <span class="py-3">Appearance</span>
  </section>
  <section class="py-2">
    <div class="p-3 text-xs text-gray-500">Setting applies to this browser only</div>
    <ul>
      <dropdown-settings-list-item
        v-for="(theme, themeId) in themes"
        :key="themeId"
        :label="theme"
        :active="themeId === selectedThemeId"
        @click="selectedThemeId = themeId"
      />
    </ul>
  </section>
</template>

<style scoped></style>
