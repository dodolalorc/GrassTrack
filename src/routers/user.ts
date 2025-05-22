import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    name: 'Home',
    path: '/',
    meta: { requiresAuth: true },
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/Dashboard/DashboardView.vue'),
      },
      {
        name: 'Cattle',
        path: 'Cattle',
        component: () => import('@/views/Cattle/CattleManager.vue'),
      },
      {
        name: 'Forage',
        path: 'forage',
        component: () => import('@/views/Forage/ForageView.vue'),
      },
      {
        name: 'Balance',
        path: 'balance',
        component: () => import('@/views/Balance/BalanceStatus.vue'),
      },
      {
        name: 'Submit',
        path: 'question/submit',
        component: () => import('@/views/Submissions/SubmissionsView.vue'),
      },
      {
        name: 'History',
        path: 'question/history',
        component: () => import('@/views/Submissions/HistoryView.vue'),
      },
      {
        name: 'Profile',
        path: 'profile',
        component: () => import('@/views/Accounts/userProfile.vue'),
      },
      {
        name: 'Account',
        path: 'account',
        component: () => import('@/views/Accounts/userAccount.vue'),
      },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    meta: { requiresAuth: false },
    component: () => import('@/views/LogReg/LogIn/LoginIndex.vue'),
  },
  {
    name: 'Register',
    path: '/signup',
    meta: { requiresAuth: false },
    component: () => import('@/views/LogReg/SignUp/SignUpIndex.vue'),
  },
] as RouteRecordRaw[]
