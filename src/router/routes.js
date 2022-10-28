const routes = [
  {
    path:"/vending-machine",
    vueRouterMode: 'history',
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "HomePage",
        component: () => import("pages/HomePage.vue"),
      },
    ]

  },
  {
    path:"/vending-machines",
    vueRouterMode: 'history',
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "PageConversion",
        component: () => import("pages/PageCoversion.vue"),
      },
    ]

  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
