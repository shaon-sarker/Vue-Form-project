
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  // ... other routes

  {
    path: '/',
    name: 'login',
    component: () => import('../pages/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/register.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/about.vue'),
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/contact.vue'),
  },

  {
    path: '/notfound',
    name: 'notfound',
    component: () => import('../pages/register.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

