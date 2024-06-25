<script>
import SidebarCompactNavItem from '@/components/global/SidebarCompactNavItem.vue';

export default {
  components: { SidebarCompactNavItem },
  data() {
    return {
      navItems: [
        {
          label: 'Home',
          name: 'home',
          isActive: true
        },
        {
          label: 'Trending',
          name: 'fire',
          isActive: false
        },
        {
          label: 'Subscripting',
          name: 'collection',
          isActive: false
        },
        {
          label: 'Trending',
          name: 'library',
          isActive: false
        },
        {
          label: 'Subscripting',
          name: 'clock',
          isActive: false
        }
      ]
    };
  },
  props: {
    isOpen: Boolean
  },
  computed: {
    classes() {
      console.log(this.isOpen);
      return ['fixed', 'z-20', 'min-h-screen', 'overflow-auto', 'bg-white', 'pt-14'];
    }
  }
};
</script>

<template>
  <!-- The mini Sidebar-->
  <aside :class="classes">
    <section>
      <ul>
        <sidebar-compact-nav-item
          v-for="navItem in navItems"
          :key="navItem.label"
          :name="navItem.name"
          :label="navItem.label"
          :is-active="navItem.isActive"
        />
      </ul>
    </section>
  </aside>
</template>

<style scoped></style>
