import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Tasks",
    meta: { layout: "main" },
    component: () => import("../components/Tasks.vue"),
  },
  {
    path: "/kanban",
    name: "Kanban",
    meta: { layout: "main" },
    component: () => import("../components/Kanban.vue"),
  },
  {
    path: "/activity",
    name: "Activity",
    meta: { layout: "main" },
    component: () => import("../components/Activity.vue"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    meta: { layout: "main" },
    component: () => import("../components/Calendar.vue"),
  },
  {
    path: "/files",
    name: "Files",
    meta: { layout: "main" },
    component: () => import("../components/Files.vue"),
  },
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
