import { createRouter, createWebHistory } from 'vue-router'
import PKIndexView from '../views/pk/PKIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RanklistIndexView from '../views/ranklist/RanklistIndexView'
import UserBotIndexView from '../views/user/bot/UserBotIndexView'
import NotFound from '../views/error/NotFound'
import UserAccountLogin from '../views/user/account/UserAccountLogin'
import UserAccountRegister from '../views/user/account/UserAccountRegister'

const routes = [
  {
    path:'/',
    name:'home',
    redirect:'/pk/',
  },
  {
    path:"/pk/",
    name:"pk_index",
    component:PKIndexView,
  },
  {
    path:"/user/account/login/",
    name:"user_account_login",
    component:UserAccountLogin,
  },
  {
    path:"/user/account/register/",
    name:"user_account_register",
    component:UserAccountRegister,
  },
  {
    path:"/record/",
    name:"record_index",
    component:RecordIndexView,
  },  
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component:RanklistIndexView,
  },
  {
    path:"/user/bot/",
    name:"user_bot_index",
    component:UserBotIndexView,
  },
  {
    path:"/404/",
    name:"404",
    component:NotFound,
  },
  {
    path:'/:catchAll(.*)',
    redirect:'/404/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
