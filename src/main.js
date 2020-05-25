// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//配置axios  注册全局变量
import Axios from 'axios'
//配置公共url
Axios.defaults.baseURL='https://www.sinya.online/api/'
Vue.prototype.$axios=Axios
Vue.config.productionTip = false
//引入mintUi 以及样式  mint-ui/lib/style.css路径说明在资源node-model目录下面
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入自定义组件
import MyUl from '@/components/Common/MyTagUl'
import MyLi from '@/components/Common/MyLi'
//注册全局组件
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
