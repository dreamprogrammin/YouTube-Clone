<script setup>
import DropdownSettingsListItem from '@/components/global/DropdownSettingsListItem.vue';
import { reactive } from 'vue';

const listItems = reactive([
  { label: 'Appearance: Device theme', icon: 'sun', withSubMenu: true },
  { label: 'Language: English', icon: 'language', withSubMenu: true },
  { label: 'Location: United States', icon: 'location', withSubMenu: true },
  { label: 'Setting', icon: 'setting', withSubMenu: false },
  { label: 'Your data in Youtube', icon: 'shield', withSubMenu: false },
  { label: 'Help', icon: 'question', withSubMenu: false },
  { label: 'Keyboard shortcuts', icon: 'calculate', withSubMenu: false },
  { label: 'Restricted Mode: off', icon: null, withSubMenu: true }
]);
</script>

<template>
  <section class="border-b py-2">
    <ul>
      <dropdown-settings-list-item
        v-for="listItem in listItems.slice(0, 7)"
        :key="listItem"
        :label="listItem.label"
        :icon="listItem.icon"
        :withSubMenu="listItem.withSubMenu"
        @click.stop="$emit('select-menu', 'appearance')"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <dropdown-settings-list-item
        :label="listItems[7].label"
        :with-sub-menu="listItems[7].withSubMenu"
      />
    </ul>
  </section>
</template>

<style scoped></style>
