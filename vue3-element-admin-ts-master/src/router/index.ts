import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: {
      title: '401'
    }
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      },
      {
        path: '/thirdChapter',
        name: 'thirdChapter',
        component: () => import('@/views/menu/index.vue'),
        meta: { title: '第三章', icon: 'el-icon-menu', roles: ['admin', 'editor'] },
        redirect: '/v3-3.5',
        children: [
          // {
          //   path: '/menu1',
          //   name: 'Menu1',
          //   component: () => import('@/views/menu/menu10.vue'),
          //   meta: { title: '菜单1', roles: ['admin', 'editor'] },
          //   redirect: '/menu1-2',
          //   children: [
          //     {
          //       path: '/menu1-1',
          //       component: () => import('@/views/menu/menu11.vue'),
          //       name: 'Menu1-1',
          //       meta: { title: '菜单1-1', roles: ['admin'] }
          //     },
          //     {
          //       path: '/menu1-2',
          //       component: () => import('@/views/menu/menu12.vue'),
          //       name: 'Menu1-2',
          //       meta: { title: '菜单1-2', roles: ['admin', 'editor'] }
          //     }
          //   ]
          // },
          {
            path: '/v3-3.5',
            component: () => import('@/views/menu/thirdChapter/v3-3.5.vue'),
            name: 'v3-3.5',
            meta: { title: '第5节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.6',
            component: () => import('@/views/menu/thirdChapter/v3-3.6.vue'),
            name: 'v3-3.6',
            meta: { title: '第6节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.7',
            component: () => import('@/views/menu/thirdChapter/v3-3.7.vue'),
            name: 'v3-3.7',
            meta: { title: '第7节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.8',
            component: () => import('@/views/menu/thirdChapter/v3-3.8.vue'),
            name: 'v3-3.8',
            meta: { title: '第8节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.9',
            component: () => import('@/views/menu/thirdChapter/v3-3.9.vue'),
            name: 'v3-3.9',
            meta: { title: '第9节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.10',
            component: () => import('@/views/menu/thirdChapter/v3-3.10.vue'),
            name: 'v3-3.10',
            meta: { title: '第10节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.11',
            component: () => import('@/views/menu/thirdChapter/v3-3.11.vue'),
            name: 'v3-3.11',
            meta: { title: '第11节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.12',
            component: () => import('@/views/menu/thirdChapter/v3-3.12.vue'),
            name: 'v3-3.12',
            meta: { title: '第12节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.13',
            component: () => import('@/views/menu/thirdChapter/v3-3.13.vue'),
            name: 'v3-3.13',
            meta: { title: '第13节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.14~15',
            component: () => import('@/views/menu/thirdChapter/v3-3.14~15.vue'),
            name: 'v3-3.14~15',
            meta: { title: '第14-15节', roles: ['admin', 'editor'] }
          },
          {
            path: '/v3-3.16~17',
            component: () => import('@/views/menu/thirdChapter/v3-3.16~17.vue'),
            name: 'v3-3.16~17',
            meta: { title: '第16-17节', roles: ['admin', 'editor'] }
          },
        ]
      }
    ]
  }
]

export const asyncRoutes = []

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
