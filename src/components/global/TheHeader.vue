<script setup>
import TheDropdownApps from '@/components/global/TheDropdownApps.vue';
import TheDropdownSettings from '@/components/global/TheDropdownSettings.vue';
import LogoMain from '@/components/LogoMain.vue';
import TheSearch from '@/components/global/TheSearch.vue';
import ButtonLogin from '@/components/global/ButtonLogin.vue';
import BasicIcon from '@/components/global/BasicIcon.vue';
import BaseTooltip from '@/components/global/BaseTooltip.vue';
import TheSearchMobile from '@/components/global/TheSearchMobile.vue';
import { computed, onMounted, ref } from 'vue';

const isSmallScreen = ref(false);
const isMobileSearchActive = ref(false);
const classes = computed(() => ['flex', 'w-full', 'justify-between', 'bg-white', 'bg-opacity-95']);

const onResize = () => {
  if (window.innerWidth < 640) {
    isSmallScreen.value = true;
  } else {
    closeMobileSearch();
    isSmallScreen.value = false;
  }
};

const isMobileSearchShown = computed(() => isSmallScreen.value && isMobileSearchActive.value);

const closeMobileSearch = () => (isMobileSearchActive.value = false);

onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});

defineEmits({
  toggleSidebar: null
});
</script>

<template>
  <header :class="classes">
    <!-- Начало -->
    <div :class="['flex', 'lg:w-1/4', isMobileSearchShown ? 'opacity-0' : 'opacity-100']">
      <div class="flex items-center pl-4 xl:w-64 xl:bg-white">
        <button @click="$emit('toggleSidebar')" class="mr-3 focus:outline-none sm:ml-2 sm:mr-6">
          <basic-icon name="menu" />
        </button>
        <logo-main />
      </div>
    </div>
    <!-- Мобильный поиск -->
    <the-search-mobile v-if="isMobileSearchShown" @close-mobile-search="closeMobileSearch" />
    <!-- Центр -->
    <div
      v-else
      class="hidden max-w-screen-md flex-1 items-center justify-end p-2.5 pl-8 sm:flex md:px-8 md:pl-12 lg:w-1/2 lg:px-0"
    >
      <the-search />
      <BaseTooltip text="Search with your voice">
        <button class="ml-4 p-2 focus:outline-none">
          <basic-icon class="h-5 w-5" name="microphone" />
        </button>
      </BaseTooltip>
    </div>
    <!-- Конец -->
    <div
      :class="[
        'flex',
        'items-center',
        'justify-end',
        'p-2',
        'sm:space-x-3',
        'sm:px-4',
        'lg:w-1/4',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100'
      ]"
    >
      <!-- Иконки для мобильной версии -->
      <base-tooltip text="Search with your voice">
        <button class="p-2 focus:outline-none sm:hidden">
          <basic-icon name="microphone" class="h-4 w-4" />
        </button>
      </base-tooltip>

      <base-tooltip text="Search">
        <button @click.stop="isMobileSearchActive = true" class="p-2 focus:outline-none sm:hidden">
          <basic-icon name="search" class="h-4 w-4" />
        </button>
      </base-tooltip>

      <base-tooltip text="YouTube apps">
        <TheDropdownApps />
      </base-tooltip>

      <base-tooltip text="Settings">
        <the-dropdown-settings />
      </base-tooltip>

      <button-login />
    </div>
  </header>
</template>

<style scoped></style>
