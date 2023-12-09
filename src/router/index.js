import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage'
import AnswerQuestion from '@/components/AnswerQuestion.vue'
import AddQuestion from '@/components/AddQuestion.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/answer',
    name: 'answer',
    component: AnswerQuestion
  },
  {
    path: '/question',
    name: 'question',
    component: AddQuestion
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
