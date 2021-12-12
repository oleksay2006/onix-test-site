import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    redirect: "tasks",
    children: [
      {
        path: "tasks",
        name: "tasks",
        component: () => import("../views/Tasks.vue"),
      },
      {
        path: "kanban",
        name: "kanban",
        component: () => import("../views/Kanban.vue"),
      },
      {
        path: "activity",
        name: "activity",
        component: () => import("../views/Activity.vue"),
      },
      {
        path: "calendar",
        name: "calendar",
        component: () => import("../views/Calendar.vue"),
      },
      {
        path: "files",
        name: "files",
        component: () => import("../views/Files.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    meta: { layout: "empty" },
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
