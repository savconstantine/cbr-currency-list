<template>
  <table
    class="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right"
  >
    <thead
      class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
    >
      <slot name="thead" />
    </thead>
    <tbody>
      <slot name="tbody" />
    </tbody>
  </table>
</template>
