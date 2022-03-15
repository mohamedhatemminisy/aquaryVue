import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Notification from '../views/Notification.vue'
import Properties from '../views/Properties.vue'
import Contact from '../views/Contact.vue'
import Profile from '../views/Profile.vue'
import Account from '../views/Account.vue'
import Property from '../views/Property.vue'
import MakeProperty from '../views/MakeProperty.vue'
import Filter from '../views/Filter.vue'
let lang = window.location.pathname.replace(/^\/([^/]+).*/i, "$1") || 'en';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Properties
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification
  },
  {
    path: '/make-property',
    name: 'MakeProperty',
    component: MakeProperty
  },
  {
    path: '/filter',
    name: 'Filter',
    component: Filter,
  },
  {
    path: '/property/:id',
    name: 'Property',
    component: Property,
    params: true
  }
]

const router = createRouter({
  history: createWebHistory(lang),
  routes,
})

export default router