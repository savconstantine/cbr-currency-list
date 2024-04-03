import { http } from "@/shared/api";

export const fetchCurrencyList = async () =>
  (await http.get(`/daily_json.js`)).data;
