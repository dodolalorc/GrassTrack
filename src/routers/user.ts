import { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/Dashboard/Dashboard.vue'),
      },
      {
        name: 'Cattle',
        path: 'Cattle',
        component: () => import('@/views/Cattle/Cattle.vue'),
      },
      {
        name: 'Forage',
        path: 'forage',
        component: () => import('@/views/Forage/Forage.vue'),
      },
      {
        name: 'Submissions',
        path: 'submit',
        component: () => import('@/views/Submissions/Submissions.vue'),
      },
      {
        name: 'Profile',
        path: '/profile',
        component: () => import('@/views/Profile/Profile.vue'),
      },
      {
        name: 'account',
        path: '/account',
        component: () => import('@/views/Account/Account.vue'),
      },
    ],
  },
] as RouteRecordRaw[];