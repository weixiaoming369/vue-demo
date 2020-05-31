<template>
    <div class="tmp1">
        <!-- 引入返回导航 -->
        <nav-bar title="图文分享"></nav-bar>
        <div class="photo-header">
            <ul>
                <li v-for="item in categorys" :key="item.id">
                    <a @click="loadImgsByCategoryId(item.id)" href="javascript:;">{{item.title}}</a>
                </li>
                <!-- <li>
                    <a href="javvasript:;">标题2</a>
                </li>
                <li>
                    <a href="javvasript:;">标题3</a>
                </li> -->
            </ul>
        </div>
        <div class="photo-list">
            <ul v-for="item in message" :key="item.id">
                <li>
                    <router-link :to="{name:'photoDetail',query:{id:item.id}}">
                        <img v-lazy="item.imgUrl"/>
                        <p>
                            <span>{{item.title}}</span>
                            <br/>
                            <span>{{item.digest}}</span>                          
                        </p>
                        <!-- <hr style="border: 3px red solid;"/> -->
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:'share',
        data(){
            return {
                //类目图片信息
                message:[
                    //以下使用preview的属性，缺一不可，否则会报错
                    {
                        id:1,
                        title:'老打瞌睡的很高大让顾客',
                        imgUrl:require('@/assets/lun01.jpg'),
                        digest:`摘要了深刻地啊然后搞io的符合该如何给is啊快点发货`
                    },
                    {
                        id:2,
                        title:'图片标题2',
                        imgUrl:require('@/assets/lun02.jpg'),
                        digest:`摘要2`
                    },
                    {
                        id:3,
                        title:'图片标题3',
                        imgUrl:require('@/assets/lun03.jpg'),
                        digest:`摘要3`
                    },
                    {
                        id:4,
                        title:'图片标题4',
                        imgUrl:require('@/assets/01.jpg'),
                        digest:`摘要4`
                    },
                    {
                        id:5,
                        title:'图片标题5',
                        imgUrl:require('@/assets/02.jpg'),
                        digest:`摘要5`
                    },
                    {
                        id:6,
                        title:'图片标题6',
                        imgUrl:require('@/assets/03.jpg'),
                        digest:`摘要6`
                    }
                ],
                categorys:[
                    {
                        id:1,
                        title:'新闻',
                    },
                    {
                        id:2,
                        title:'军事',
                    },
                    {
                        id:3,
                        title:'财经',
                    },
                    {
                        id:4,
                        title:'科教',
                    },
                    {
                        id:5,
                        title:'国际',
                    }
                ]
                   
                
            }
        },
        //dom还没生成
        created() {
            /*console.log(this.$route.params.categoryId)*/
            var categoryId=this.$route.params.categoryId /* 根据类别id查询图文*/
            this.loadImgs(categoryId);
            //这里通过请求服务器代码将类别信息进行渲染，这里没有给出伪代码，参考loadImgsByCategoryId方法注释部分
            //手动添加一个到最前面
            this.categorys.unshift({
                id:0,title:'全部'
            });
        },
        //组件复用  适用于场景当Rest url只改变了参数的时候
        beforeRouteUpdate(to, from, next) {
            //获取组件修改后的参数id to代表当前路由
            let categoryId=to.params.categoryId;
            //根据类别id查询类目
            this.loadImgs(categoryId);
            next();
        }, 
        methods: {
            /* 当点击类目title后、a标签的点击事件，url后面的参数id发生变化 这会导致组件的复用，即进入beforeRouteUpdate方法 */
            loadImgsByCategoryId:function(categoryId){
                this.$router.push({
                    name:'share',
                    params:{
                        categoryId:categoryId
                    }
                })
            },
            loadImgs:function(categoryId){
                // this.axios.get('restUrl/'+categoryId)
                // .then(res => {
                //     this.message=res.data;
                // if(this.message.length==0){
                //     /* toast是mint-ui的组件，用法参考官网 */
                //     this.$toast({
                //         message:'获取图片失败',
                //     })
                // }
                // })
                // .catch(err => {
                //     console.error(err); 
                // })
            }
        }
    }
</script>
<style scoped>
.photo-header li{
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul{
    /* 强制不换行 */
    white-space: nowrap;
    overflow-x:auto;
    padding-left: 0px;
    margin: 5px;
}
/* 下面的图片 */
.photo-list li{
    list-style: none;
    position: relative;
}


.photo-list li img{
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul{
    padding-left: 0px;
    margin: 0;
}
.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}
.photo-list p span:nth-child(1){
    font-weight: bold;
    font-size: 16px;
}
/* mint-ui组件图片懒加载 */
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>