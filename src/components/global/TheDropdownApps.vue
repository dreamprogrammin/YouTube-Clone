<script setup>
import DropdownAppsListItem from '@/components/global/DropdownAppsListItem.vue';
</script>

<template>
  <div
    class="absolute -right-full right-0 top-9 w-60 border border-t-0 bg-white opacity-0 group-hover:opacity-100 sm:left-0 sm:right-0"
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
</template>

<style scoped></style>
