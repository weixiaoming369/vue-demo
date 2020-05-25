import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//导入自己的组件
import Home from '@/components/home/Home';
import Member from '@/components/member/Member';
import Cart from '@/components/cart/Cart';
import Search from '@/components/search/Search';

Vue.use(Router)
// 解决两次访问相同路由地址报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default new Router({
  mode:'history',
  //添加路由
  routes: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        alias:'/'
      },
      {
        path: '/member',
        name: 'member',
        component: Member
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart
      },
      {
        path: '/search',
        name: 'search',
        component: Search
      }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
