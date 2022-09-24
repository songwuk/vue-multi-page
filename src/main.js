import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Demo from './views/Demo.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/demo',
      component: Demo
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
