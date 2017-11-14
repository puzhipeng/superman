import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import List from '@/pages/list/index'
import Content from '@/pages/content/content-home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
    	path:'/list',
    	name:'list',
    	component:List
    },
    {
    	path:'/content',
    	name:'content',
    	component:Content
    }
  ]
})
