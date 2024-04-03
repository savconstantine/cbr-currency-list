import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./index.vue";
import { router } from "./providers";

import "./index.scss";

const initApp = createApp(App);

initApp.use(createPinia());
initApp.use(router);

export const app = initApp;
