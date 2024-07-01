<script setup>
import BasicIcon from '@/components/global/BasicIcon.vue';
import { computed } from 'vue';

const props = defineProps({
  active: Boolean,
  label: String,
  icon: { type: String, default: 'checkBtn' },
  withSubMenu: Boolean
});

const isIconShown = computed(() => {
  return props.active || props.icon !== 'checkBtn';
});

const iconName = computed(() => {
  return props.active ? 'checkBtn' : props.icon;
});
</script>

<template>
  <li>
    <a href="#" class="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
      <basic-icon v-if="isIconShown" :name="iconName" class="mr-3 h-5 w-5 text-gray-400" />
      <span :class="{ 'ml-8': !isIconShown }">{{ props.label }}</span>
      <basic-icon v-if="withSubMenu" class="ml-auto h-5 w-5" name="chevron" />
    </a>
  </li>
</template>

<style scoped></style>
