import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from  './HelloWorld.vue'
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/helloworld',
      component: HelloWorld
    }
  ] // short for `routes: routes`
})
new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
