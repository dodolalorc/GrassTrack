import { RouteRecordRaw } from 'vue-router';

export default [
  {
    name: 'Home',
    path: '/',
    redirect: '/farm',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        name: 'Farm',
        path: 'farm',
        component: () => import('@/views/Farm/Farm.vue'),
      },
    ],
  },
  {
    name: 'user',
    path: '/profile',
    component: () => import('@/views/Profile/Profile.vue'),
  }
] as RouteRecordRaw[];