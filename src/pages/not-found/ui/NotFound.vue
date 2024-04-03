<template>
  <div>
    <div class="flex justify-center items-center py-10 px-2" >
      <h1>{{ title }}</h1>
    </div>
  </div>

</template>

<script setup lang="ts">
import { computed } from "vue";

const title = computed((): string => "404 - page not found");

</script>
