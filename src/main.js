import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Demo from './views/Demo.vue'
import AppViews from './view.vue'
import NotFoundComponent from './NotFoundComponent.vue'
Vue.use(VueRouter)

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: AppViews
    },
    {
      path: '/demo',
      component: Demo
    },
    { 
      path: '/:pathMatch(.*)',
      component: NotFoundComponent,
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
