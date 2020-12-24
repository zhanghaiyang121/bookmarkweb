import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Router Modules

const routes = [
    {
      path: '/',
      component: () => import('@/views/index'),
    },
    {
      path: '/config',
      component: () => import('@/views/config'),
    },
    {
      path: '/vuetool',
      component: () => import('@/views/vuetool'),
    },
    {
      path: '/music',
      component: () => import('@/views/music'),
    }
]

const router = new VueRouter({
    routes
})

//路由守卫
export default router
