<template>
  <div :class="isDark ? 'dark' : ''" class="antialiased">
    <div
      class="flex min-h-screen flex-col bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    >
      <Header @toggleDarkMode="changeDarkLightMode" :isDark="isDark" />
      <main class="mx-auto w-full max-w-screen-lg">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import { useCurrencyListModel } from "@/entities/currency-list";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const changeDarkLightMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("darkMode", String(isDark.value));
};

const hasDarkModeSetted = () => {
  if (localStorage.getItem("darkMode")) {
    return localStorage.getItem("darkMode") == "true";
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return false;
  }

  return true;
};

let isDark = ref(hasDarkModeSetted() as boolean);

const currencyListModel = useCurrencyListModel();
onMounted(() => {
  currencyListModel.fetchCurrencyList();
});
</script>
