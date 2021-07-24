import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventAirline from '@/views/event/Airline.vue'
import EventDeatil from '@/views/event/Detail.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({
      page: parseInt(route.query.page) || 0,
      size: parseInt(route.query.size) || 10
    })
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/passenger/:id',
    name: 'EventLayout',
    component: EventLayout,
    props: true,
    children: [
      {
        path: '',
        name: 'EventDeatil',
        component: EventDeatil
      },
      {
        path: 'airline',
        name: 'EventAirline',
        component: EventAirline
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
