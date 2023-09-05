import { createRouter, createWebHistory } from 'vue-router'
import questionA from '../views/QuestionA.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'questionA',
      component: questionA
    },
    {
      path: '/questionB',
      name: 'questionB',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuestionB.vue')
    },
    {
      path: '/questionC',
      name: 'questionC',
      component: () => import('../views/QuestionC.vue')
    }
  ]
})

export default router
