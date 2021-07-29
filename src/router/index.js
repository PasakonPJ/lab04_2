import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventAirline from '@/views/event/Airline.vue'
import EventDeatil from '@/views/event/Detail.vue'
import NotFound from '@/views/NotFound.vue'
import EventEdit from '@/views/event/Edit.vue'
import NProgress from 'nprogress'
import PassengerService from '@/services/PassengerService.js'
import GStore from '@/store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({
      page: parseInt(route.query.page) || 0 ,size: parseInt(route.query.size) || 4
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
    beforeEnter: (to) => {
      return PassengerService.getEvent(to.params.id)
        .then((response) => {
          // still need to set the data here
          GStore.passenger = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 204) {
            return {
              name: '404Resource',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
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
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
