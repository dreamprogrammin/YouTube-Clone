<script setup></script>

<template>
  <section :class="$attrs.class || 'border-b py-2'">
    <slot></slot>
  </section>
</template>

<style scoped></style>
