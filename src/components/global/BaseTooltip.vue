<script setup>
import { computed, ref } from 'vue';

const isShown = ref(false);

const { text, top, left, right } = defineProps({
  text: String,
  top: Boolean,
  left: Boolean,
  right: Boolean
});

const classes = computed(() => {
  return [
    'bg-gray-600',
    'bg-opacity-80',
    'rounded-sm',
    'text-white',
    'text-sm',
    'whitespace-nowrap',
    'p-2',
    'absolute',
    'transform',
    ...getPositionClasses()
  ];
});

const getPositionClasses = () => {
  const topClass = top ? 'bottom-12' : 'top-14';

  if (right) {
    return [topClass, 'left-0'];
  }

  if (left) {
    return [topClass, 'right-0'];
  }

  return [topClass, '-translate-x-1/2', 'left-1/2'];
};
</script>

<template>
  <div class="relative">
    <div
      class="flex h-full items-center"
      @mouseenter="isShown = true"
      @mouseleave="isShown = false"
      @click="isShown = !isShown"
    >
      <slot />
    </div>
    <transition
      enter-active-class="duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-75"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isShown" :class="classes">{{ text }}</div>
    </transition>
  </div>
</template>

<style scoped></style>
