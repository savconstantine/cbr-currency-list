<template>
  <div>
    <div class="grid grid-flow-col grid-rows-2 gap-4 py-14">
      <div class="col-span-2">
        <SelectAutocomplete
          :options="currencyListForSelect"
          :value="selectedCurrencyCodeLeft"
          @set-autocomplete-value="selectCurrencyCodeLeft"
        />
      </div>
      <div class="col-span-2">
        <InputDefault
          :value="amountLeft"
          @input="setAmountLeft"
          :type="'number'"
        />
      </div>
      <div class="row-span-2 flex items-center justify-center">
        <button
          type="button"
          @click="switchSides"
          class="aspect-square min-h-20 rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 p-5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
        >
          <SwitchArrowsSvg />
        </button>
      </div>
      <div class="col-span-2">
        <SelectAutocomplete
          :options="currencyListForSelect"
          :value="selectedCurrencyCodeRight"
          @set-autocomplete-value="selectCurrencyCodeRight"
        />
      </div>
      <div class="col-span-2">
        <InputDefault disabled :value="amountRight" :type="'number'" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { InputDefault } from "@/shared/ui/input-default";
import { SelectAutocomplete } from "@/shared/ui/select-autocomplete";
import SwitchArrowsSvg from "./switch-arrows.svg?component";

import { useCurrencyListModel, ICurrency } from "@/entities/currency-list";

const currencyListModel = useCurrencyListModel();

const currencyListForSelect = computed(() =>
  Object.values(currencyListModel.getCurrencies).map((currency: ICurrency) => ({
    value: currency.CharCode,
    label: `${currency.CharCode} - ${currency.Name}`,
  })),
);

const amountLeft = computed(() => currencyListModel.getAmountLeft);
const setAmountLeft = (value: number) => currencyListModel.setAmountLeft(value);

const selectedCurrencyCodeLeft = computed(
  () => currencyListModel.getSelectedCurrencyCodeLeft,
);
const selectCurrencyCodeLeft = (value: string) =>
  currencyListModel.setSelectedCurrencyCodeLeft(value);

const selectedCurrencyCodeRight = computed(
  () => currencyListModel.getSelectedCurrencyCodeRight,
);
const selectCurrencyCodeRight = (value: string) =>
  currencyListModel.setSelectedCurrencyCodeRight(value);

const amountRight = computed(() => currencyListModel.getAmountRight);

const switchSides = () => currencyListModel.switchSides();

onMounted(() => {
  currencyListModel.setSelectedCurrencyCodeLeft("USD");
  currencyListModel.setSelectedCurrencyCodeRight("EUR");
});
</script>
