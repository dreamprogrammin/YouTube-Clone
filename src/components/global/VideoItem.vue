<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  index: Number
});
</script>

<template>
  <a href="#" class="group mb-7">
    <div class="relative">
      <img :src="`https://picsum.photos/seed/image${props.index}/720/404`" />
      <span
        class="absolute right-0 top-0 m-1 rounded-sm bg-black bg-opacity-60 p-1 text-white opacity-0 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span
        class="absolute right-0 top-10 m-1 rounded-sm bg-black bg-opacity-60 p-1 text-white opacity-0 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span
        class="absolute bottom-0 right-0 m-1 rounded-sm bg-black p-1 text-sm font-semibold text-white opacity-100 duration-500 group-hover:opacity-0"
        >4:32</span
      >
    </div>
    <div class="mt-5 flex items-start">
      <img
        :src="`https://picsum.photos/seed/avatar${props.index}}/68`"
        class="mr-3 h-9 w-9 rounded-full"
        alt="avatar"
      />
      <div class="text-sm">
        <span class="font-semibold text-gray-800">Video title 1</span>
        <div class="mt-1 flex items-center">
          <span>Channel name1</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <span>1K views</span>
          &middot;
          <span>1 day ago</span>
        </div>
      </div>
      <button
        class="-mt-1 ml-auto pl-1 text-gray-800 opacity-0 hover:text-gray-600 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      </button>
    </div>
  </a>
</template>

<style scoped></style>
