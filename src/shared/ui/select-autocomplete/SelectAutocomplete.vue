<template>
  <div class="flex justify-center">
    <div class="w-full relative">
      <div
        class="relative border border-gray-300 overflow-hidden rounded-md shadow-sm"
      >
        <InputDefault
          placeholder="Select currency"
          :value="searchValue"
          @input="setSearchValue"
          @focus="focus"
          @blur="blur"
        />
      </div>
      <div
        class="absolute w-full border mt-1 max-height-48 overflow-hidden overflow-y-scroll z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 max-h-[300px]"
        v-show="isOpen"
      >
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li
            v-for="option in filteredOptions()"
            :key="option.value"
            @click="setInput(option)"
            class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import { InputDefault } from "@/shared/ui/input-default";

interface IOption {
  value: string;
  label: string;
}

const props = withDefaults(
  defineProps<{
    options?: IOption[];
    value?: string;
  }>(),
  {
    options: () => [],
    value: "",
  },
);

const emit = defineEmits(["set-autocomplete-value"]);

const searchValue = ref(props.value as string);
const setSearchValue = (value: string) => {
  searchValue.value = value;
};

const isOpen = ref(false as boolean);
const setInput = (option: IOption) => {
  isOpen.value = false;
  emit("set-autocomplete-value", option.value);
};
const focus = () => {
  isOpen.value = true;
  searchValue.value = "";
};

const blur = () => {
  setTimeout(() => {
    isOpen.value = false;
    searchValue.value = props.value;
  }, 200);
};

const filteredOptions = () => {
  if (searchValue.value !== props.value) {
    return props.options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.value.toLowerCase()),
    );
  }
  return props.options;
};

watch(
  () => props.value,
  () => {
    searchValue.value = props.value;
  },
);
</script>
