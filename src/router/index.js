import Vue from 'vue'
import Router from 'vue-router'

//use Vue Router in Vue JS
Vue.use(Router);

//import pages
import AuthIndex from '@/views/auth/Index'
import DahsboardIndex from '@/views/dashboard/Index'
import DahsboardData from '@/views/dashboard/Dashboard'
import ProduksiIndex from '@/views/produksi/Index'
import ProduksiCreate from '@/views/produksi/Create'
import ProduksiUpdate from '@/views/produksi/Update'

const routes = [
      {
        path: '/',
        name: 'login',
        component: AuthIndex
      },
      {
        path: '/home',
        name: 'home',
        component: DahsboardIndex,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: DahsboardData, 
            },
            {
                path: '/produksi',
                name: 'produksi',
                component: ProduksiIndex,         
            },
            {
                path: '/produksi-create',
                name: 'produksi-create',
                component: ProduksiCreate,         
            },
            {
                path: '/produksi-update/:id',
                name: 'produksi-update',
                component: ProduksiUpdate,
            }
          ],
      }
]

const router = new Router ({
    routes:routes,
    linkActiveClass: 'active'
})

export default router