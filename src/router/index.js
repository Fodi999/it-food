import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store' // добавьте эту строку

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',name: 'home',component: HomeView},
    {path: '/about',name: 'about',component: () => import('../components/AboutView.vue')},
    {path: '/list',name: 'list',component: () => import('../components/ListVue.vue')},
    {path: '/calendar',name: 'calendar',component: () => import('../components/CalendarVue.vue')},
    {path: '/drawer',name: 'drawer',component: () => import('../components/DrawerVue.vue')},
    {path: '/itcook',name: 'itcook',component: () => import('../components/ITcook.vue')},
    {path: '/registration',name: 'registration',component: () => import('../components/RegistrationVue.vue')},
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'home' && !store.state.a.isAuthenticated) next({ name: 'home' }) // обратите внимание на изменение здесь
  else next()
})

export default router