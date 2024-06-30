<script>
export default {
  data() {
    return {
      classes: [
        'w-full',
        'rounded-tl-sm',
        'border',
        'border-gray-300',
        'px-3',
        'shadow-inner',
        'focus:border-blue-700',
        'focus:outline-none'
      ]
    };
  },
  mounted() {
    if (window.innerWidth < 640) {
      this.$el.focus();
    }
  }
};
</script>

<template>
  <input type="text" :class="classes" placeholder="search" />
</template>

<style scoped></style>
