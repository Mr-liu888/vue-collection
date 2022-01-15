import Vue from 'vue'
import Router from 'vue-router'
import menuRouter from './routes/menu.js'

Vue.use(Router)
// 注意：name与组件保持一致，避免埋点页面收集title有误
const routes = [
  ...menuRouter,
]
const router = new Router({
  mode: 'history',
  routes
})
export default router
