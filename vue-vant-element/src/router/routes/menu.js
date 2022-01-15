export default [
  {
    path: '/',
    name: 'index',
    component: () => import('../../views/index/index'),
    meta: {
      title: 'index',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/login/index'),
    meta: {
      title: 'login',
    }
  }
]
