import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
//advice
import AdviceIndex from '@/components/Advice/Index'
import AdviceCreate from '@/components/Advice/CreateAdvice'
import AdviceEdit from '@/components/Advice/EditAdvice'
import AdviceShow from '@/components/Advice/ShowAdvice'
//window
import WindowIndex from '@/components/Window/Index'
import WindowCreate from '@/components/Window/CreateWindow'
import WindowEdit from '@/components/Window/EditWindow'
import WindowShow from '@/components/Window/ShowWindow'
// Authen
import Login from '@/components/Login'
//Admin
import MainAdmin from '@/components/MainAdmin'
//User
import MainUser from '@/components/MainUser'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    // authen
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    //MainAdmin
    {
      path: '/MainAdmin',
      name: 'MainAdmin',
      component: MainAdmin
    },
    //MainUser
    {
      path: '/MainUser',
      name: 'MainUser',
      component: MainUser
    },
    // advice
    {
      path: '/advices',
      name: 'advices',
      component: AdviceIndex
    },
    {
      path: '/advice/create',
      name: 'advices-create',
      component: AdviceCreate
    },
    {
      path: '/advice/edit/:adviceId',
      name: 'advice-edit',
      component: AdviceEdit
    },
    {
      path: '/advice/:adviceId',
      name: 'advice',
      component: AdviceShow
    },
    {
      path: '/advice/edit/:adviceId',
      name: 'advice-edit',
      component: AdviceEdit
    },
    //windows
    {
      path: '/windows',
      name: 'windows',
      component: WindowIndex
    },
    {
      path: '/window/create',
      name: 'windows-create',
      component: WindowCreate
    },
    {
      path: '/window/edit/:windowId',
      name: 'window-edit',
      component: WindowEdit
    },
    {
      path: '/window/:windowId',
      name: 'window',
      component: WindowShow
    },
    {
      path: '/window/edit/:windowId',
      name: 'window-edit',
      component: WindowEdit
    },
  ]
})