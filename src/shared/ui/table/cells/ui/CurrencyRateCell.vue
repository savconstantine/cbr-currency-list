<template>
  <div>
    <div>
      {{ nominal }} {{ charCodeLeft }} - {{ value }} {{ charCodeRight }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  nominal: number;
  value: number;
  charCodeLeft: string;
  charCodeRight: string;
}

withDefaults(defineProps<IProps>(), {
  nominal: 0,
  value: 0,
  charCodeLeft: "",
  charCodeRight: "",
});
</script>
