import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import './utils/style/reset.css'
import './mock/mock'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
