import Vue from 'vue'
import Router from 'vue-router'

//use Vue Router in Vue JS
Vue.use(Router);

//import pages
import AuthIndex from '@/views/auth/Index'
import DahsboardIndex from '@/views/dashboard/Index'
import HomeIndex from '@/views/home/Index'

const routes = [
      {
        path: '/',
        name: 'home',
        component: HomeIndex
      },
      {
        path: '/login',
        name: 'login',
        component: AuthIndex
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: DahsboardIndex
      },
]

const router = new Router ({
    routes:routes,
    linkActiveClass: 'active'
})

export default router