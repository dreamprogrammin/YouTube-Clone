<script>
import BasicIcon from '@/components/global/BasicIcon.vue';
import BaseTooltip from '@/components/global/BaseTooltip.vue';
import TheSearch from '@/components/global/TheSearch.vue';
export default {
  components: {
    BasicIcon,
    BaseTooltip,
    TheSearch
  },
  emits: ['closeMobileSearch'],
  mounted() {
    window.addEventListener('click', this.onClick);
  },
  beforeUnmount() {
    window.removeEventListener('click', this.onClick);
  },
  methods: {
    onClick(event) {
      if (!this.$el.contains(event.target)) {
        this.$emit('closeMobileSearch');
      }
    }
  }
};
</script>

<template>
  <div class="absolute flex w-full p-2">
    <BaseTooltip text="Back" right>
      <button @click="$emit('closeMobileSearch')" class="mr-2 p-2 focus:outline-none">
        <basic-icon class="h-5 w-5" name="arrowLeft" />
      </button>
    </BaseTooltip>
    <the-search />
    <BaseTooltip text="Search with your voice" left>
      <button class="ml-4 p-2 focus:outline-none">
        <basic-icon class="h-5 w-5" name="microphone" />
      </button>
    </BaseTooltip>
  </div>
</template>

<style scoped></style>
