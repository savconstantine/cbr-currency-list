<template>
  <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
    <td
      v-for="(column, key) in columns"
      :key="key"
      :class="column.classTd"
      :style="column.styleTd"
      scope="row"
      class="px-6 py-4"
    >
      <component
        :is="getColumnComponent(column.component)"
        v-bind="getCellValue(key, item)"
      />
    </td>
  </tr>
</template>

<script setup lang="ts">
import { TextCell, ComparedRateCell, CurrencyRateCell } from "./cells";

interface IProps {
  columns: Record<string, any>;
  item: Record<string, any>;
  getCellValue: (key: string, item: Record<string, any>) => Record<string, any>;
}

withDefaults(defineProps<IProps>(), {
  getCellValue: () => ({}),
});

interface IComponents {
  [key: string]: any;
}

const components: IComponents = {
  TextCell,
  ComparedRateCell,
  CurrencyRateCell,
};

const getColumnComponent = (key: string) =>
  components[key] ?? components.TextCell;
</script>
