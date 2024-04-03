<script setup>
import MoonSvg from "@/assets/dark-light-mode/moon.svg?component";
import SunSvg from "@/assets/dark-light-mode/sun.svg?component";
import { ref } from "vue";

const props = defineProps({
  isDark: {
    type: Boolean,
    required: true
  },
});

const emits = defineEmits(["toggleDarkMode"]);

let isOpenMenu = ref(false);
</script>

<template>
  <header
    class="bg-gray-100 dark:bg-gray-700 sm:px-4 sm:py-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
  >
    <div
      class="max-w-screen-lg mx-auto sm:flex sm:justify-between sm:items-center"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <h1
            class="text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
          >
            vue3 boilerplate
          </h1>
        </div>
        <div class="sm:hidden">
          <button
            @click="isOpenMenu = !isOpenMenu"
            type="button"
            class="block text-gray-500 hover:text-gray-500 focus:text-gray-500 shadow-none fill-gray-900 dark:fill-white"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-if="isOpenMenu"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
              <path
                v-if="!isOpenMenu"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        :class="isOpenMenu ? 'block' : 'hidden'"
        class="px-2 pt-2 pb-4 sm:flex sm:p-0"
      >
        <RouterLink
          class="block px-2 py-1 text-gray-900 dark:text-white font-semibold sm:mt-0 sm:ml-2"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="block px-2 py-1 text-gray-900 dark:text-white font-semibold sm:mt-0 sm:ml-2"
          to="/about"
          >About</RouterLink
        >
        <div class="flex items-center justify-center sm:ml-4">
          <button
            @click="emits('toggleDarkMode')"
            class="flex items-center justify-center w-8 h-8 rounded-full focus:outline-none"
          >
          <transition name="fade" mode="out-in">
            <template v-if="props.isDark">
              <SunSvg class="w-4" />
            </template>
            <template v-else>
              <MoonSvg class="w-4" />
            </template>
          </transition>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
