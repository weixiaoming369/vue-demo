import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/global.css'
//配置axios  注册全局变量
import Axios from 'axios'
//配置公共url
Axios.defaults.baseURL='http://localhost:8082/vueUrl/img/'
Vue.prototype.$axios=Axios
Vue.config.productionTip = false

//引入mintUi 以及样式  mint-ui/lib/style.css路径说明在资源node-model目录下面
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入自定义组件
import MyUl from '@/components/Common/MyTagUl'
import MyLi from '@/components/Common/MyLi'
import Navibar from '@/components/Common/Navibar'
//注册全局组件
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
Vue.component(Navibar.name, Navibar)

//导入日期处理 moment
import Moment from 'moment'
//自定义日期过滤器：名称dateConvert
Vue.filter('dateConvert',function(date, dateFormatStr){
  return Moment(date).format(dateFormatStr);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
