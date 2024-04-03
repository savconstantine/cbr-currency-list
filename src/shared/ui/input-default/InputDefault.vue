<template>
  <div class="relative w-full">
    <input
      ref="inputRef"
      v-model="inputValue"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
      @click="onClick"
      @keydown.enter="onEnter"
      :disabled="disabled"
      :type="type"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface IProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  type?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: "",
  value: "",
  disabled: false,
  type: "text",
});

const emit = defineEmits([
  "input",
  "click",
  "focus",
  "blur",
  "input-click",
  "enter",
]);

const inputRef = ref(null as HTMLInputElement | null);
const inputValue = ref(props.value as string);

const onFocus = (e: FocusEvent) => emit("focus", e);
const onBlur = (e: FocusEvent) => emit("blur", e);
const onEnter = (e: KeyboardEvent) => emit("enter", e);
const onClick = (e: MouseEvent) => {
  emit("input-click", e);
  emit("click", e);
};

const focus = () => {
  const input = inputRef.value;
  if (input) {
    input.focus();
  }
};
const blur = () => {
  const input = inputRef.value;
  if (input) {
    input.blur();
  }
};

watch(
  () => props.value,
  () => {
    inputValue.value = props.value;
  },
);

watch(inputValue, (value) => {
  emit("input", value);
});

defineExpose({
  focus,
  blur,
});
</script>
