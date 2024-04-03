<template>
  <div>
    <div
      class="flex items-center justify-between space-x-2"
      :class="{
        'text-red-500': isNegative,
        'text-green-500': isPositive,
      }"
    >
      {{ difference }}
      <component :is="isPositive ? upSvg : downSvg" class="w-[20px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import upSvg from "./up.svg?component";
import downSvg from "./down.svg?component";

import { sub } from "@/shared/lib/decimal-calc";

interface IProps {
  currentValue: number;
  previousValue: number;
}

const props = withDefaults(defineProps<IProps>(), {
  currentValue: 0,
  previousValue: 0,
});

const difference = computed(() =>
  sub(props.currentValue, props.previousValue, 6),
);
const isPositive = computed(() => difference.value > 0);
const isNegative = computed(() => difference.value < 0);
</script>
