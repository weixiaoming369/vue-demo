import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//导入自己的组件
import Home from '@/components/home/Home';
import Member from '@/components/member/Member';
import Cart from '@/components/cart/Cart';
import Search from '@/components/search/Search';
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'

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
      },
      //新闻列表路由地址
      {
        path:'/newslist',
        name:'newsList',
        component: NewsList
      },
      //新闻详细路由地址
      {
        path:'/news/detail',
        name:'newsDetail',
        component:NewsDetail
      }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
