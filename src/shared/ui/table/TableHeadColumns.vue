<template>
  <tr>
    <th
      v-for="(column, key) in columns"
      :key="key"
      :class="column.classTh"
      :style="column.styleTh"
      class="px-6 py-3"
      scope="col"
    >
      {{ column.title }}
    </th>
  </tr>
</template>

<script setup lang="ts">
interface IColumn {
  title: string;
  classTh: string[];
  styleTh: Record<string, string>;
}

interface IProps {
  columns: Record<string, IColumn>;
}

defineProps<IProps>();
</script>
