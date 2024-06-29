<script setup>
import DropdownSettingsListItem from '@/components/global/DropdownSettingsListItem.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import BasicIcon from '@/components/global/BasicIcon.vue';

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

const isOpen = ref(false);
const dropdown = ref(document.querySelector('.dropdown'));

const classes = computed(() => [
  'absolute',
  'right-0',
  'top-9',
  'w-72 ',
  'border',
  'border-t-0',
  'bg-white',
  'focus:outline-none'
]);

onMounted(() => {
  window.addEventListener('click', (event) => {
    if (document.querySelector('.relative').contains(event.target)) {
      isOpen.value = false;
    }
    dropdown.value.focus();
  });
});
</script>

<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-0">
      <basic-icon class="h-4 w-4" name="dotsVertical" />
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        ref="dropdown"
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        tabindex="-1"
        :class="classes"
      >
        <section class="border-b py-2">
          <ul>
            <dropdown-settings-list-item
              v-for="listItem in listItems.slice(0, 7)"
              :key="listItem"
              :label="listItem.label"
              :icon="listItem.icon"
              :withSubMenu="listItem.withSubMenu"
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
        </section></div
    ></transition>
  </div>
</template>

<style scoped></style>
