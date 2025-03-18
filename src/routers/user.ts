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
        name: 'Balance',
        path: 'balance',
        component: () => import('@/views/Balance/Balance.vue'),
      },
      {
        name: 'Submit',
        path: 'question/submit',
        component: () => import('@/views/Submissions/Submissions.vue'),
      },
      {
        name: 'History',
        path: 'question/history',
        component: () => import('@/views/Submissions/History.vue'),
      },
      {
        name: 'Profile',
        path: 'profile',
        component: () => import('@/views/Accounts/Profile.vue'),
      },
      {
        name: 'Account',
        path: 'account',
        component: () => import('@/views/Accounts/Account.vue'),
      }
    ],
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/LogReg/index.vue'),
  }
] as RouteRecordRaw[];