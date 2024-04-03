export const routes = [
  {
    path: "/",
    name: "currency-list",
    component: () => import("@/pages/currency-list"),
    meta: {
      title: "Currency List",
      menu: true,
    },
  },
  {
    path: "/converter",
    name: "currency-converter",
    component: () => import("@/pages/currency-converter"),
    meta: {
      title: "Currency Converter",
      menu: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/not-found"),
  },
];
