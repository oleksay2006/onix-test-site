import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "tasks",
        component: () => import("../views/Tasks.vue"),
      },
      {
        path: "kanban",
        component: () => import("../views/Kanban.vue"),
      },
      {
        path: "activity",
        component: () => import("../views/Activity.vue"),
      },
      {
        path: "calendar",
        component: () => import("../views/Calendar.vue"),
      },
      {
        path: "files",
        component: () => import("../views/Files.vue"),
      },
    ],
  },

  // {
  //   path: "/",
  //   name: "Tasks",
  //   meta: { layout: "main" },
  //   component: () => import("../views/Tasks.vue"),
  // },
  // {
  //   path: "/kanban",
  //   name: "Kanban",
  //   meta: { layout: "main" },
  //   component: () => import("../views/Kanban.vue"),
  // },
  // {
  //   path: "/activity",
  //   name: "Activity",
  //   meta: { layout: "main" },
  //   component: () => import("../views/Activity.vue"),
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   meta: { layout: "main" },
  //   component: () => import("../views/Calendar.vue"),
  // },
  // {
  //   path: "/files",
  //   name: "Files",
  //   meta: { layout: "main" },
  //   component: () => import("../views/Files.vue"),
  // },
  {
    // path: "/:pathMatch(.*)*",
    path: "/:pathMatch(.*)",
    name: "404",
    meta: { layout: "empty" },
    component: () => import("../views/NotFound.vue"),
  },

  // {
  //   path: '*',
  //   redirect: '/404'
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
