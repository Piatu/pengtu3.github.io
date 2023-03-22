import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from './views/Home.vue'

import jingdong from '../components/Demo/jingdong.vue'
import shouye from '../view/shouye'
import xxbutton from '../view/xxbutton/index.vue'
import lunbo from '../view/lunbo/index.vue'
import sfq from '../view/shoufenqing/index.vue'
import wb from '../view/weibo/index.vue'

console.log(VueRouter);
//2.注册组件
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/shouye'
  },
    {
      name: 'shouye',
      path: '/shouye',
      component: shouye
      
  },
    {
      name:'jingdong',
      path: '/jingdong',
      component:jingdong
      
    },
    {
      name: 'xxbutton',
      path: '/xxbutton',
      component:xxbutton
    },
    {
      name: 'lunbo',
      path: '/lunbo',
      component:lunbo
    },
    {
      name: 'sfq',
      path: '/sfq',
      component:sfq
    },
    {
      name: 'wb',
      path: '/wb',
      component:wb
    }
]
})
// console.log(router);


