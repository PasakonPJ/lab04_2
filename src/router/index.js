import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventAirline from '@/views/event/Airline.vue'
import EventDeatil from '@/views/event/Detail.vue'
import NotFound from '@/views/NotFound.vue'
import EventEdit from '@/views/event/Edit.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({
      page: parseInt(route.query.page) || 0,
      size: parseInt(route.query.size) || 5
    })
  },
  {
    path: '/about',
    name: 'About',
    component: About
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
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit
      },
      {
        path: 'airline',
        name: 'EventAirline',
        component: EventAirline
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
