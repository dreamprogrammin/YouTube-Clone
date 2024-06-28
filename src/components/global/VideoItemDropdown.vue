<script>
import BasicIcon from '@/components/global/BasicIcon.vue';
import VideoDropdownListItem from '@/components/global/VideoDropdownListItem.vue';

export default {
  components: {
    BasicIcon,
    VideoDropdownListItem
  },
  data() {
    return {
      isOpen: false,
      positionClasses: []
    };
  },
  computed: {
    buttonClasses() {
      return [
        'pl-1',
        'text-gray-800',
        'hover:text-gray-600',
        'group-hover:opacity-100',
        this.isOpen ? 'opacity-100' : 'opacity-0'
      ];
    },
    dropdownClasses() {
      return [
        'z-30',
        'absolute',
        'w-48',
        'rounded',
        'bg-white',
        'shadow',
        'focus:outline-none',
        ...this.positionClasses
      ];
    }
  },
  methods: {
    toggle(event) {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        this.$nextTick(() => (this.positionClasses = this.getPositionClasses(event)));
      }
    },

    getPositionClasses(event) {
      return [
        this.getTopClasses(event),
        this.getRightClasses(event),
        this.getBottomClasses(event),
        this.getLeftClasses(event)
      ];
    },
    getTopClasses(event) {
      const clickCordY = event.clientY;
      const buttonHeight = event.currentTarget.offsetHeight;
      const dropdownHeight = this.$refs.dropdown.offsetHeight;

      if (window.innerHeight - clickCordY < dropdownHeight) {
        return 'top-auto';
      }
      if (window.innerHeight - clickCordY < dropdownHeight + buttonHeight) {
        return 'top-0';
      }
      return 'top-8';
    },

    getBottomClasses(event) {
      const clickCordY = event.clientY;
      const dropdownHeight = this.$refs.dropdown.offsetHeight;
      if (window.innerHeight - clickCordY < dropdownHeight) {
        return 'bottom-9';
      }
      return 'bottom-auto';
    },

    getRightClasses(event) {
      const clickCoordY = event.clientY;
      const clickCoordX = event.clientX;
      const dropdownWidth = this.$refs.dropdown.offsetWidth;
      const dropdownHeight = this.$refs.dropdown.offsetHeight;
      const buttonHeight = event.currentTarget.offsetHeight;

      if (window.innerWidth - clickCoordX > dropdownWidth) {
        return 'right-auto';
      }

      if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return 'right-0';
      }
      if (window.innerHeight - clickCoordY > dropdownHeight) {
        return 'right-8';
      }
      return 'right-0';
    },
    getLeftClasses(event) {
      const clickCoordX = event.clientX;
      const clickCoordY = event.clientY;
      const dropdownWidth = this.$refs.dropdown.offsetWidth;
      const dropdownHeight = this.$refs.dropdown.offsetHeight;
      const buttonHeight = event.currentTarget.offsetHeight;

      if (window.innerWidth - clickCoordX < dropdownWidth) {
        return 'left-auto';
      }

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return 'left-auto';
      }
      if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return 'left-auto';
      }
      return 'left-8';
    }
  },
  watch: {
    isOpen() {
      document.body.classList.toggle('overflow-hidden');
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus());
    }
  },
  mounted() {
    window.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  }
};
</script>

<template>
  <div class="relative -mt-1 ml-auto">
    <button @click="toggle" :class="buttonClasses">
      <basic-icon class="h-5 w-5" name="dotsVertical" />
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
        <section class="py-2">
          <ul>
            <video-dropdown-list-item label="Add to queue" icon="menuAlt3" />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
