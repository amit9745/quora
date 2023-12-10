import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage'

import UserProfile from '../components/UserProfile';
import AnswerQuestion from '@/components/AnswerQuestion.vue'


import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

import AddQuestionDialog from '@/components/AddQuestionDialog.vue'
 import QuestionInfoPage from '@/components/QuestionInfoPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {

    path: '/profile',
    name: 'profile',
    component: UserProfile
  },
  
  {
    path: '/answer',
    name: 'answer',
    component: AnswerQuestion
  },
  {
    path: '/question',
    name: 'question',
    component: AddQuestionDialog

  },
  {
    path: '/login',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/questioninfopage',
    name: 'questioninfopage',
    component : QuestionInfoPage 
  }  

   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
