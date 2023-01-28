export default [
  {
    path: "/add-project/:id?",
    name: "Add Project",
    component: () => import("@/views/pages/PGC/index"),
    // meta: { pageTitle: "users", breadcrumb: [{ text: "users" }] },
  },


  {
    path: "/projects",
    name: "projects",
    component: () => import("@/views/pages/PGC/project_view"),
    // meta: { pageTitle: "users", breadcrumb: [{ text: "users" }] },
  },

  {
    path: "/addRealty/:id",
    name: "addRealty",
    component: () => import("@/views/pages/PGC/addRealty"),
    // meta: { pageTitle: "users", breadcrumb: [{ text: "users" }] },
  },
  {
    path: "/Realty",
    name: "Realtys",
    component: () => import("@/views/pages/PGC/realtyslist"),
    // meta: { pageTitle: "users", breadcrumb: [{ text: "users" }] },
  },
  {
    path: "/viewRealty/:id?",
    name: "view",
    component: () => import("@/views/pages/PGC/view"),
    // meta: { pageTitle: "users", breadcrumb: [{ text: "users" }] },
  },
  {
    path: "/building_desc",
    name: "building_desc",
    component: () => import("@/views/pages/PGC/building_desc"),
    // meta: { pageTitle: "users", breadcrumb: [{ text: "users" }] },
  },
]
