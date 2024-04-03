<template>
  <header
    class="bg-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:bg-gray-700 sm:px-4 sm:py-3"
  >
    <div
      class="mx-auto max-w-screen-lg sm:flex sm:items-center sm:justify-between"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <h1
            class="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            vue3 boilerplate
          </h1>
        </div>
        <div class="sm:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="block fill-gray-900 text-gray-500 shadow-none hover:text-gray-500 focus:text-gray-500 dark:fill-white"
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
        class="px-2 pb-4 pt-2 sm:flex sm:p-0"
      >
        <RouterLink
          v-for="route in menuList"
          :key="route.path"
          class="block px-2 py-1 font-semibold text-gray-900 dark:text-white sm:ml-2 sm:mt-0"
          :to="route.path"
        >
          {{ route.meta.title }}
        </RouterLink>
        <div class="flex items-center justify-center sm:ml-4">
          <button
            @click="emits('toggleDarkMode')"
            class="flex h-8 w-8 items-center justify-center rounded-full focus:outline-none"
          >
            <transition name="fade" mode="out-in">
              <template v-if="isDark">
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

<script setup lang="ts">
import MoonSvg from "./moon.svg?component";
import SunSvg from "./sun.svg?component";
import { ref, computed } from "vue";
import { useRouter, RouterLink } from "vue-router";

const router = useRouter();

const menuList = computed(() =>
  router.getRoutes().filter((route) => route.meta?.menu),
);

interface IProps {
  isDark: boolean;
}
defineProps<IProps>();

const emits = defineEmits(["toggleDarkMode"]);

let isOpenMenu = ref(false);
const toggleMenu = () => (isOpenMenu.value = !isOpenMenu.value);
</script>
