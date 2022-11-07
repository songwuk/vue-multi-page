/**
 * page1
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from  './HelloWorld.vue'
import AppViews from './views.vue'
import NotFoundComponent from '../NotFoundComponent.vue'
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/page1',
      component: AppViews
    },
    {
      path: '/page1/helloworld',
      component: HelloWorld
    },
    { 
      path: '/:pathMatch(.*)',
      component: NotFoundComponent,
    }
  ] // short for `routes: routes`
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
