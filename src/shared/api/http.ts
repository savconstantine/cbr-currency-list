import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_CBR_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
