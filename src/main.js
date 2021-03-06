import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
	routes,
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
