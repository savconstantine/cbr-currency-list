import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { ICurrencyListModel, ICurrency } from "./types";
import { div } from "@/shared/lib/decimal-calc";

import { CurrencyListApi } from "../index";

export const useCurrencyListModel = defineStore("currencyList", () => {
  const currencyList = ref<ICurrencyListModel>({
    Date: "",
    PreviousDate: "",
    PreviousURL: "",
    Timestamp: "",
    Valute: {},
  });

  const fetchCurrencyList = async (): Promise<void> => {
    const currentDate: string = new Date().toISOString();
    const lastTimeUdatedKey: string = `lastTimeCurrencyListUdated`; // use this key to store the last time the currency list was updated, because the data from api sometimes takes a long time to update, like more than 1 day
    const currencyListKey: string = `currencyList`;

    const fetchCurrencyListFromApi = async (): Promise<void> => {
      currencyList.value = await CurrencyListApi.fetchCurrencyList();
      localStorage.setItem(currencyListKey, JSON.stringify(currencyList.value));
      localStorage.setItem(lastTimeUdatedKey, currentDate);
    };

    try {
      const currencyListFromLocalStorage: string | boolean =
        localStorage.getItem(currencyListKey) ?? false;
      const lastTimeUdated: string | boolean =
        localStorage.getItem(lastTimeUdatedKey) ?? false;

      if (!currencyListFromLocalStorage || !lastTimeUdated) {
        await fetchCurrencyListFromApi();
        return;
      }

      const lastTimeUdatedDate: Date = new Date(lastTimeUdated);
      const currentDateDate: Date = new Date(currentDate);
      const timeDifference: number = Math.abs(
        currentDateDate.getTime() - lastTimeUdatedDate.getTime(),
      );
      const hoursDifference: number = Math.floor(
        timeDifference / 1000 / 60 / 60,
      );

      if (hoursDifference >= 1) {
        await fetchCurrencyListFromApi();
        return;
      }

      currencyList.value = JSON.parse(currencyListFromLocalStorage);
    } catch (error) {
      localStorage.removeItem(currencyListKey);
      console.error(error);
    }
  };

  const getCurrencies = computed(
    (): { [key: string]: ICurrency } => currencyList.value.Valute,
  );

  const amountLeft = ref(1 as number);
  const setAmountLeft = (amount: number) => (amountLeft.value = amount);
  const getAmountLeft = computed((): number => amountLeft.value);

  const selectedCurrencyCodeLeft = ref("" as string);
  const setSelectedCurrencyCodeLeft = (code: string) =>
    (selectedCurrencyCodeLeft.value = code);
  const getSelectedCurrencyCodeLeft = computed(
    (): string => selectedCurrencyCodeLeft.value,
  );

  const selectedCurrencyCodeRight = ref("" as string);
  const setSelectedCurrencyCodeRight = (code: string) =>
    (selectedCurrencyCodeRight.value = code);
  const getSelectedCurrencyCodeRight = computed(
    (): string => selectedCurrencyCodeRight.value,
  );

  const getAmountRight = computed((): number => {
    if (
      selectedCurrencyCodeLeft.value &&
      selectedCurrencyCodeRight.value &&
      amountLeft.value !== 0
    ) {
      const currencyLeft = getCurrencies.value[selectedCurrencyCodeLeft.value];
      const currencyRight =
        getCurrencies.value[selectedCurrencyCodeRight.value];

      if (currencyLeft && currencyRight) {
        const nominalLeft = currencyLeft.Nominal;
        const nominalRight = currencyRight.Nominal;

        return div(
          div(amountLeft.value * currencyLeft.Value, nominalLeft),
          div(currencyRight.Value, nominalRight),
        );
      }
    }
    return 0;
  });

  const switchSides = () => {
    const tempSelectedCurrencyCodeLeft = selectedCurrencyCodeLeft.value;
    setSelectedCurrencyCodeLeft(selectedCurrencyCodeRight.value);
    setSelectedCurrencyCodeRight(tempSelectedCurrencyCodeLeft);
  };

  return {
    currencyList,
    fetchCurrencyList,
    getCurrencies,
    amountLeft,
    setAmountLeft,
    getAmountLeft,
    selectedCurrencyCodeLeft,
    setSelectedCurrencyCodeLeft,
    getSelectedCurrencyCodeLeft,
    selectedCurrencyCodeRight,
    setSelectedCurrencyCodeRight,
    getSelectedCurrencyCodeRight,
    getAmountRight,
    switchSides,
  };
});
