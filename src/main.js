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
//缩略图
import VuePreview from 'vue-preview'
Vue.use(MintUI)
Vue.use(VuePreview)


//引入自定义组件
import MyUl from '@/components/Common/MyTagUl'
import MyLi from '@/components/Common/MyLi'
import Navibar from '@/components/Common/Navibar'
import Comment from '@/components/Common/Comment'
//注册全局组件或挂载属性
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
Vue.component(Navibar.name, Navibar)
Vue.component(Comment.name,Comment)


//导入日期处理 moment
import Moment from 'moment'
//自定义日期过滤器：名称dateConvert
Vue.filter('dateConvert',function(date, dateFormatStr){
  return Moment(date).format(dateFormatStr);
});

//定义页面信息加载过滤器 loadding  //开启拦截器 配合axios的请求使用
/* Axios.interceptors.request.use(config => {
  MintUI.Indicator.open({
    text: 'kdsjbfkdzg加载中...',
    spinnerType: 'fading-circle'
  });
return config;
},error => {
return Promise.reject(error);
});
//得到相应数据后，关闭加载中
Axios.interceptors.response.use(response => {
  MintUI.Indicator.close();
return response;
},error => {
// Do something with response error
return Promise.reject(error);
}); */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
