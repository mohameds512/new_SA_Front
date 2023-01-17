export default [
  {
    path: '/overview',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index'),
     meta: {
       // requiresAuth: true,
       dashboard: true,
        // permission: 'admin_system'
     },
  },
]
