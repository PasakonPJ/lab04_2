import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PassengerDetails from '../views/PassengerDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({ page: parseInt(route.query.page) || 0, size: parseInt(route.query.size) || 10 })
  },
  {
    path: '/about',
    name: 'About',

  },{
    path: '/passenger/:id',
    name: 'PassengerDetails',
    component: PassengerDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
