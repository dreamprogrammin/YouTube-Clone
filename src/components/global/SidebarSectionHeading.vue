<script setup>
const props = defineProps({
  title: String
});
</script>

<template>
  <div class="mr-6 px-6 py-2 text-sm font-bold uppercase">{{ props.title }}</div>
</template>

<style scoped></style>
