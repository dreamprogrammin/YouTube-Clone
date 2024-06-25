<script setup>
import DropdownAppsListItem from '@/components/global/DropdownAppsListItem.vue';
import BasicIcon from '@/components/global/BasicIcon.vue';
import { onMounted, ref } from 'vue';

const isOpen = ref(false);
const dropdown = ref(document.querySelector('.dropdown'));

onMounted(() => {
  window.addEventListener('click', (event) => {
    if (!document.querySelector('.relative').contains(event.target)) {
      isOpen.value = false;
    }
    dropdown.value.focus();
  });
});
</script>

<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-0">
      <basic-icon class="h-4 w-4" name="grid" />
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
        tabindex="-1"
        @keydown.esc="isOpen = !isOpen"
        v-show="isOpen"
        class="absolute -right-full right-0 top-9 w-60 border border-t-0 bg-white focus:outline-none sm:left-0 sm:right-0"
      >
        <section class="border-b py-2">
          <ul>
            <dropdown-apps-list-item label="YouTube TV" />
          </ul>
        </section>
        <section class="border-b py-2">
          <ul>
            <dropdown-apps-list-item label="YouTube Music" />
            <dropdown-apps-list-item label="YouTube Kids" />
          </ul>
        </section>
        <section class="border-b py-2">
          <ul>
            <dropdown-apps-list-item label="Creator Academy" />
            <dropdown-apps-list-item label="YouTube for Artist" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
