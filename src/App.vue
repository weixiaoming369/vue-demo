<template>
  <div id="app">
      <!-- <mt-header fixed title=""></mt-header> -->
      <mt-header class="hederFont" title="我的vue信息管理系统">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <router-view/>
      <mt-tabbar v-model="selected">
          <!-- 这里的id home对应路由的名称 -->
          <mt-tab-item id="home">
            <img slot="icon" src="./assets/01.jpg">
            首页
          </mt-tab-item>
          <mt-tab-item id="member">
            <img slot="icon" src="./assets/02.jpg">
            会员
          </mt-tab-item>
          <mt-tab-item id="cart">
            <img slot="icon" src="./assets/03.jpg">
            购物车
          </mt-tab-item>
          <mt-tab-item id="search">
            <img slot="icon" src="./assets/04.jpg">
            查找
          </mt-tab-item>
        </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
     return {
      msg:'我的vue信息管理系统',
      selected:''
     }
  },
  watch: {
    //监听 selected的值的变化
    selected:function(newValue,oldValue){
      //console.log(newValue);
      this.$router.push({
        name: newValue
      })
    }
  },
}
</script>

<style>
 body{
   margin: 0px;
   padding:0px;
 }
 .hederFont{
   font-size: 18px;
 }
</style>
