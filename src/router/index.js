import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage'
import UserProfile from '../components/UserProfile';
import FollowersComp from '../components/FollowersComp'
import FollowingComp from '../components/FollowingComp'
import QuestionsComp from '../components/QuestionsComp'
import AnswersComp from '../components/AnswersComp'

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
    path: '/followers',
    name: 'followers',
    component: FollowersComp
  },
  {
    path: '/following',
    name: 'following',
    component: FollowingComp
  },
  {
    path: '/questions',
    name: 'questions',
    component: QuestionsComp
  },
  {
    path: '/answers',
    name: 'answers',
    component: AnswersComp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
