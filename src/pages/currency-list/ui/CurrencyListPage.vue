<template>
  <div class="relative overflow-x-auto p-[20px] w-full">
    <InputDefault
      placeholder="Search currency"
      :value="searchValue"
      @input="setSearchValue"
    />
  </div>
  <div class="relative overflow-x-auto w-full">
    <TableBase>
      <template #thead>
        <TableHeadColumns :columns="columns" />
      </template>
      <template #tbody>
        <TableRow
          v-for="currency in filteredCurrencyList"
          :key="currency.ID"
          :item="currency"
          :columns="columns"
          :getCellValue="getCellValue"
        />
      </template>
    </TableBase>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCurrencyListModel, ICurrency } from "@/entities/currency-list";

import { TableBase, TableHeadColumns, TableRow } from "@/shared/ui/table";
import { InputDefault } from "@/shared/ui/input-default";

import { div } from "@/shared/lib/decimal-calc";

const searchValue = ref("");
const setSearchValue = (value: string) => (searchValue.value = value);

const currencyListModel = useCurrencyListModel();

const filteredCurrencyList = computed((): ICurrency[] => {
  return !searchValue.value
    ? currencyList.value
    : currencyList.value.filter(
        (currency) =>
          currency.Name.toLowerCase().includes(
            searchValue.value.toLowerCase(),
          ) ||
          currency.CharCode.toLowerCase().includes(
            searchValue.value.toLowerCase(),
          ),
      );
});

const currencyList = computed((): ICurrency[] =>
  Object.values(currencyListModel.getCurrencies),
);


const columns = {
  currencyCode: {
    title: "code",
    classTh: [],
    styleTh: {},
    classTd: ["font-medium", "text-gray-900", "dark:text-white"],
    styleTd: {},
    component: "TextCell",
  },
  currencyName: {
    title: "name",
    classTh: [],
    styleTh: {},
    classTd: ["font-medium", "text-gray-900", "dark:text-white"],
    styleTd: {},
    component: "TextCell",
  },
  currencyRate: {
    title: "rate",
    classTh: [],
    styleTh: {},
    classTd: [],
    styleTd: {},
    component: "CurrencyRateCell",
  },
  currencyRateReversed: {
    title: "",
    classTh: [],
    styleTh: {},
    classTd: [],
    styleTd: {},
    component: "CurrencyRateCell",
  },
  exchangeRate: {
    title: "Compare",
    classTh: [],
    styleTh: {},
    classTd: [],
    styleTd: {},
    component: "ComparedRateCell",
  },
};

const getCellValue = (key: string, item: ICurrency) => {
  switch (key) {
    case "currencyCode":
      return {
        text: item.CharCode,
      };
    case "currencyName":
      return {
        text: item.Name,
      };
    case "currencyRate":
      return {
        nominal: item.Nominal,
        value: item.Value,
        charCodeLeft: item.CharCode,
        charCodeRight: "RUB",
      };
    case "currencyRateReversed":
      return {
        nominal: 1,
        value: div(item.Nominal, item.Value, 4),
        charCodeLeft: "RUB",
        charCodeRight: item.CharCode,
      };
    case "exchangeRate":
      return {
        currentValue: item.Value,
        previousValue: item.Previous,
      };
    default:
      return {
        text: String(item[key]),
      };
  }
};
</script>
