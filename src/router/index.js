import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'home',component: HomeView},
    {path: '/about',name: 'about',component: () => import('../components/AboutView.vue')},
    {path: '/list',name: 'list',component: () => import('../components/ListVue.vue')},
    {path: '/calendar',name: 'calendar',component: () => import('../components/CalendarVue.vue')},
    {path: '/drawer',name: 'drawer',component: () => import('../components/DrawerVue.vue')},
  ]
})

export default router
