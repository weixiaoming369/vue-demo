<template>
  <div id="app">
    <!-- 顶部的header -->
    <mt-header class="hederFont" title="我的vue信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!-- 进行路由的点击跳转 -->
    <router-view class="tabbarHeight" />

    <!-- 底部tabbar的菜单 -->
    <mt-tabbar v-model="selected">
      <!-- 这里的id home对应路由的名称 -->
      <mt-tab-item id="home">
        <img
          @click="changClickTabBarPosition"
          slot="icon"
          src="./assets/01.jpg"
        />
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img
          @click="changClickTabBarPosition"
          slot="icon"
          src="./assets/02.jpg"
        />
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img
          @click="changClickTabBarPosition"
          slot="icon"
          src="./assets/03.jpg"
        />
        购物车
        <!-- 使用mintui组件  badge -->
        <mt-badge size="normal" type="error" v-if="catAmount > 0">{{
          catAmount
        }}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="search">
        <img
          @click="changClickTabBarPosition"
          slot="icon"
          src="./assets/04.jpg"
        />
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  //导入自己的js文件
import EventBus from './EventBus.js'
export default {

  name: 'App',
  data(){
     return {
      //msg:'我的vue信息管理系统',
      selected:'',
      catAmount:1
     }
  },
  created() {
    EventBus.$on('addCatCount', data=>{
        this.catAmount=data;
    });
  },
  methods: {
    changClickTabBarPosition:function(){
      /*该早于了 子组件复制给父组件的selected*/
      /*console.log('之前',this.selected)*/
      setTimeout(() => {
        //console.log('之后',this.selected)
        this.$router.push({
          name:this.selected
        })
      }, 20);

      /*这个写法不起作用，用上面的方法替代*/
      //   this.$nextTick(function () {
      //   console.log('之后', this.selected)
      // });
    }
  }
  // watch: {
  //   //*监听 vue实例的成员属性：selected的值的变化*/
  //   selected:function(newValue,oldValue){
  //     console.log(newValue);
  //     /*这里虽然可以实现跳转，但是在子组件中点击首页时会不起作用*/
  //     /*导航到不同的url*/
  //     this.$router.push({
  //       name: newValue
  //     })
  //   }
  // },
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
.hederFont {
  font-size: 18px;
}
.mint-tabbar {
  position: fixed;
  bottom: 0px;
}
</style>
