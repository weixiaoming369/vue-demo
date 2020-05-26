<template>
    <div id="lunbo">
        <!--显示的轮播图  -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in images" :key="index">
                <img class="lunboimg" :src="item.url">
            </mt-swipe-item >
        </mt-swipe>

        <ul>
            <li>
                <router-link to="newslist">
                    <img src="../../assets/xinwen.jpg">
                    <div class="p">新闻资讯</div>
                </router-link>
            </li>
            <li>
                <img src="../../assets/fenxiang.jpg">
                <div class="p">图文分享</div>
            </li>
            <li>
                <img src="../../assets/zhanshi.jpg">
                <div class="p">商品展示</div>
            </li>
            <li>
                <img src="../../assets/liuyan.jpg">
                <div class="p">留言反馈</div>
            </li>
            <li>
                <img src="../../assets/sousuo.jpg">
                <div class="p">搜索资讯</div>
            </li>
            <li>
                <img src="../../assets/daohang.jpg">
                <div class="p">导航</div>
            </li>
            <li>
                <img src="../../assets/lvyou.jpg">
                <div class="p">旅游</div>
            </li>
            <li>
                <img src="../../assets/jiudian.jpg">
                <div class="p">酒店</div>
            </li>
            <li>
                <img src="../../assets/lianxi.jpg">
                <div class="p">联系我们</div>
            </li>
            
            <!-- <li>
                <img/>
            </li> -->
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
        images:[
            {
                "id":1,
                "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590389353684&di=3b4512920e43e3e40a18eb1e40171c84&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F48%2F11%2F16pic_4811790_b.jpg"
            },
            {
                "id":2,
                "url":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4147480226,3583698002&fm=15&gp=0.jpg"
            },
            {
                id:3,
                "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590392343259&di=07a9dc112d582b9a478503839b4e80df&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9539263b5bf8f2e5aa0cb311883b6ab812ad21fcd8ad-ZCBc1L_fw658"
            },
            {
                id:4,
                "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590392343258&di=10c02e1296a4959bf83c6bd586829bcb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F52b8252bf3abfbafe16eec660b28d3791612031ad4f93-jvbGcW_fw658"
            },
            {
                id:5,
                //使用这种方法require('@/assets/01.jpg')可以为img的src属性添加图片
                "url": require('@/assets/lun01.jpg')
            }
        ]
    }
  },
    //created创建组件的生命周期函数中，可以操作数据
//   created() {
//       this.$axios.get('http://localhost:8082/vueUrl/img')
//       .then(res => {
//           console.log(res)//返回的json响应数据
//           this.images=res.data; //将返回的json响应数据赋予images数组
//           console.log(this.images)
//       })
//       .catch(err => {
//           console.error(err); 
//       })
//   }
}
</script>
<style scoped>
    *{
        margin: 0px;
        padding:0px;
    }
    .mint-swipe{
        height:270px;
        width:100%;
    }
    .lunboimg{
        width:100%;
        text-align: center;
        height:270px;
    }
    #lunbo{
        /* 按比例铺满空间 */
        background-size: cover;
    }
    ul{
        margin-top: 10px;
    }
    li {
        float:left;
        display: block;
        height: 100px;
        width: 33%;
        text-align: center;
    }
    li a{
        text-decoration: none;
    }
    li img{
        height:50px;
        /* 使用这种方法可以为img标签动态添加图片 */
        /* content: url('../../assets/02.jpg'); */
        width: 50px;
    }  
    
</style>