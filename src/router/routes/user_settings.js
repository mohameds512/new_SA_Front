export default [
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/user_settings/users/index"),
    meta: { pageTitle: "users", breadcrumb: [{ text: "users" }] },
  },
  {
    path: "/users/access/:id",
    name: "user-access",
    permission: "user_access_users",
    component: () => import("@/views/user_settings/users/user_access"),
    meta: {
      public: true,
      pageTitle: "access",
      breadcrumb: [
        { to: "/users", text: "Users" },
        { text: "User Access", active: true },
      ],
    },
  },
  {
    path: '/users/add',
    name: "user-add",
    permission: "access_users",
    component: () => import("@/views/user_settings/users/edit"),
    meta: {
      pageTitle: "Add User",
      breadcrumb: [
        { to: "/users", text: "users" },
        { text: "Add User", active: true },
      ],
    },
  },
  {
    path: "/users/:id",
    name: "user-show",
    permission: "access_users",
    component: () => import("@/views/user_settings/users/show"),
    meta: {
      public: true,
      pageTitle: "user",
      breadcrumb: [
        { to: "/users", text: "Users" },
        { text: "user", active: true },
      ],
    },
  },
  {
    path: "/users/edit/:id",
    name: "user-edit",
    permission: "access_users",
    component: () => import("@/views/user_settings/users/edit"),
    meta: {
      pageTitle: "Edit User",
      breadcrumb: [
        { to: "/users", text: "users" },
        { text: "Edit User", active: true },
      ],
    },
  },

  {
    path: "/settings/roles",
    name: "roles",
    component: () => import("@/views/user_settings/roles/index"),
    meta: { pageTitle: "Roles", breadcrumb: [{ text: "Roles" }] },
  },
  {
    path: "/settings/user/role/:id",
    name: "user-role",
    component: () => import("@/views/user_settings/roles/show"),
    meta: {
      pageTitle: "Roles",
      breadcrumb: [{ to: "/users", text: "Users" }, { text: "User Role" }],
    },
  },
  // {
  //     path: '/profile',
  //     name: 'user-profile',
  //     component: () => import('@/views/profile/show'),
  //     meta: {
  //         public: true,
  //         pageTitle: 'profile',
  //         breadcrumb: [{ text: 'profile', active: true }],
  //     },
  // },
];
