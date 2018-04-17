import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import finde from '@/pages/finde'
import me from '@/pages/me'
import x from '@/pages/x'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      component: finde
    },
    {
      path: '/me',
      component: me
    },
    {
      path: '/x',
      component: x
    }
  ]
})
