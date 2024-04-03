<template>
  <div>
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  text: string;
}

withDefaults(defineProps<IProps>(), {
  text: "",
});
</script>
