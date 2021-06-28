import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/income',
    name: 'Income',
    component: () => import(/* webpackChunkName: "about" */ '../views/Income.vue')
  },
  {
    path: '/expense',
    name: 'Expense',
    component: () => import(/* webpackChunkName: "about" */ '../views/Expense.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
