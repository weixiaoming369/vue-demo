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
import Share from '@/components/photo/Share'
import PhotoDetail from '@/components/photo/Detail'
import GoodsList from '@/components/goods/GoodsList'
import GoodsDetail from '@/components/goods/GoodsDetail'

//注册vuepreview测试效果
import vp from '@/components/testDemo/vuePreview'
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
      },
      //图文分享
      {
        path:'/share/list/:categoryId',
        name:'share',
        component:Share
      },
      //图文详细
      {
        path:'/photo/detail',
        name:'photoDetail',
        component:PhotoDetail
      },
      {
        path:'/photo/detail2',
        name:'photoDetails2',
        component:vp
      },
      //商品展示
      {
        path:'/goods/list',
        name:'goodsList',
        component:GoodsList
      },
      //商品详情
      {
        path:'/goods/detail/:id',
        name:'goodsDetail',
        component:GoodsDetail
      }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
