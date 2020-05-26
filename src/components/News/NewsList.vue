<template>
    <div class="tmp1">
        <div class="cms-news-header">
            <!-- <h1>&nbsp<</h1>
            <h1 class="page-title">Pull up</h1> -->
            <nav-bar title="新闻列表"></nav-bar>
        </div>

        <div class="demo">
            <ul v-for="item in news" :key="item.id">
                <li>
                    <router-link :to="{name:'newsDetail',query:{id:item.id}}">
                        <img  :src="item.newsimg">
                        <div>
                            <span>{{item.title}}</span>
                            <div class="news-desc">
                                <p>点击数：{{item.clickamount}}</p>
                                <!-- 这里的时间使用了自定义过滤器 -->
                                <p>发表时间：{{item.time|dateConvert('YYYY年/MM月/DD日')}}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
                <li class="line"></li>

                <!-- <li>
                    <a href="/">
                        <img class="" src="../../assets/01.jpg">
                        <div>
                            <span>我爱你中国</span>
                            <div class="news-desc">
                                <p>点击数：2223333</p>
                                <p>发表时间： 2012-12-21 24:12:21</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="line"></li>

                <li>
                    <a href="/">
                        <img class="" src="../../assets/01.jpg">
                        <div>
                            <span>我爱你中国</span>
                            <div class="news-desc">
                                <p>点击数：2223333</p>
                                <p>发表时间： 2012-12-21 24:12:21</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="line"></li> -->
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                //下面的代码目前是写死的 正常情况下通过axios请求服务端数据
                news:[
                    {
                        id:1,
                        title:'十三届全国人大三次会议举行二次通过 老师的可能否收到了法国的森林覆盖',
                        time:'2012-12-21 23:01:02',
                        clickamount:3000,
                        newsimg: require('@/assets/news/news01.jpg'),
                    },
                    {
                        id:2,
                        title:'普京：要？特朗普：要！',
                        time:'2013-12-09 15:11:36',
                        clickamount:5550,
                        newsimg: require('@/assets/news/news02.jpg')
                    },
                    {
                        id:4,
                        title:'巴基斯坦客机失事初步调查疑问重重，完整报告3个月内公布',
                        time:'2020-05-25 09:11:36',
                        clickamount:15550,
                        newsimg: require('@/assets/news/news03.jpg')
                    },
                    {
                        id:5,
                        title:'巴基斯坦客机失事初步调查疑问重重，完整报告3个月内公布',
                        time:'2020-05-25 09:11:36',
                        clickamount:15550,
                        newsimg: require('@/assets/news/news03.jpg')
                    },
                    {
                        id:6,
                        title:'巴基斯坦客机失事初步调查疑问重重，完整报告3个月内公布',
                        time:'2020-05-25 09:11:36',
                        clickamount:15550,
                        newsimg: require('@/assets/news/news03.jpg')
                    },
                    {
                        id:7,
                        title:'巴基斯坦客机失事初步调查疑问重重，完整报告3个月内公布',
                        time:'2020-05-25 09:11:36',
                        clickamount:15550,
                        newsimg: require('@/assets/news/news03.jpg')
                    },
                    {
                        id:8,
                        title:'巴基斯坦客机失事初步调查疑问重重，完整报告3个月内公布',
                        time:'2020-05-25 09:11:36',
                        clickamount:15550,
                        newsimg: require('@/assets/news/news03.jpg')
                    },
                    {
                        id:9,
                        title:'巴基斯坦客机失事初步调查疑问重重，完整报告3个月内公布',
                        time:'2020-05-25 09:11:36',
                        clickamount:15550,
                        newsimg: require('@/assets/news/news03.jpg')
                    }
                ]
            }
        }
    }
</script>
<style scoped>
ul{
    overflow: hidden;
    
}
li{
    margin-bottom: -25px;
}
.demo{
    position: absolute;
}
.demo a{
    display: block;
    width:340px;
    position: relative;
    top:10px;
    height:150px;
    color: purple;
    padding: 10px 25px;
}
.demo img{
    float: left;
    width: 50px;
    height: 60px;
    margin-right: 5px;
}
.demo a div{
    float: left;
    width: 275px;
    margin-right: 10px;
}
.demo span{
    display: block;
    white-space: nowrap;/*文本不换行，直到遇到<br>为止*/
    width:100%;
    font-size: 17px;
    line-height: 20px;
}
.demo a p{
    float: left;
    color: red;
    font-size: 14px;
    line-height: 25px;
}
.demo p:nth-child(2){
    float: left;
}
.cms-news-header{
    background-color: silver;
}
.tmp1 h1{
    display: inline-block;
}
.page-title{
    margin-left: 20%;
}
.line{
    position: relative;
    top:0px;
    margin-bottom: 0px;
    transform: scaleY(.5);
    border-bottom: 1px solid silver;
}
/* .news-desc p{
    text-align: left;
} */

</style>