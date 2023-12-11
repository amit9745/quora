import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage'

import MyProfile from '../components/MyProfile';
import AnswerQuestion from '@/components/AnswerQuestion.vue'
import AddProfile from "../components/AddProfile.vue"
import AddCategory from "../components/CategoryPage.vue"
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'

import AddQuestionDialog from '@/components/AddQuestionDialog.vue'
 import QuestionInfoPage from '@/components/QuestionInfoPage.vue'
import UserProfilePage from '@/components/UserProfilePage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {

    path: '/profile',
    name: 'profile',
    component: MyProfile
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
    path: '/addProfile',
    name: 'addProfile',
    component: AddProfile
  },
  {
    path: '/addCategory',
    name: 'addCategory',
    component: AddCategory
  },

  {
    path: '/questioninfopage',
    name: 'questioninfopage',
    component : QuestionInfoPage 
  },{
  path: '/userprofile',
  name: 'userprofile',
  component : UserProfilePage
  }

   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
