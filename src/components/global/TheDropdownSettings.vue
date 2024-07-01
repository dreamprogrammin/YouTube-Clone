<script>
import BasicIcon from '@/components/global/BasicIcon.vue';
import TheDropdownSettingsMain from '@/components/global/TheDropdownSettingsMain.vue';
import TheDropdownSettingsAppearance from '@/components/global/TheDropdownSettingsAppearance.vue';
export default {
  components: {
    BasicIcon,
    TheDropdownSettingsAppearance,
    TheDropdownSettingsMain
  },
  data() {
    return {
      selectedMenu: 'main',
      isOpen: false,
      dropdownClasses: [
        'absolute',
        'right-0',
        'top-9',
        'w-72 ',
        'border',
        'border-t-0',
        'bg-white',
        'focus:outline-none'
      ]
    };
  },
  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus());
    }
  },
  mounted() {
    window.addEventListener('click', (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    });
  },
  methods: {
    showSelectMenu(selectedMenu) {
      this.selectedMenu = selectedMenu;
    }
  }
};
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
        :class="dropdownClasses"
      >
        <the-dropdown-settings-main v-if="selectedMenu === 'main'" @select-menu="showSelectMenu" />
        <the-dropdown-settings-appearance v-else-if="selectedMenu === 'appearance'" />
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
