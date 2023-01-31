import { createRouter, createWebHistory } from 'vue-router'
import PKIndexView from '../views/pk/PKIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import RecordContentView from '../views/record/RecordContentView'
import RanklistIndexView from '../views/ranklist/RanklistIndexView'
import UserBotIndexView from '../views/user/bot/UserBotIndexView'
import NotFound from '../views/error/NotFound'
import UserAccountLogin from '../views/user/account/UserAccountLogin'
import UserAccountRegister from '../views/user/account/UserAccountRegister'
import store from '@/store'

const routes = [
  {
    path:'/',
    name:'home',
    redirect: '/pk/',
    meta: {
      requestAuth: true,
    }
  },
  {
    path:"/pk/",
    name:"pk_index",
    component: PKIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path:"/user/account/login/",
    name:"user_account_login",
    component: UserAccountLogin,
    meta: {
      requestAuth: false,
    }
  },
  {
    path:"/user/account/register/",
    name:"user_account_register",
    component: UserAccountRegister,
    meta: {
      requestAuth: false,
    }
  },
  {
    path:"/record/",
    name:"record_index",
    component: RecordIndexView,
    meta: {
      requestAuth: true,
    }
  },  
   {
    path:"/record/:recordId/",
    name:"record_content",
    component: RecordContentView,
    meta: {
      requestAuth: true,
    }
  },  
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component: RanklistIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path:"/user/bot/",
    name:"user_bot_index",
    component: UserBotIndexView,
    meta: {
      requestAuth: true,
    }
  },
  {
    path:"/404/",
    name:"404",
    component: NotFound,
    meta: {
      requestAuth: false,
    }
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

router.beforeEach((to, from, next) => {
  if (to.meta.requestAuth && !store.state.user.is_login) {
    next({name: "user_account_login"});
  } else {
    next();
  }
})


export default router
