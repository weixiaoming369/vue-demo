<template>
    <div>
        <nav-bar title="图片详情"></nav-bar>
        <div class="photo-title">
            <p>{{info.title}}</p>
            <span>发起日期:{{info.time|dateConvert('YYYY年-MM月-DD日')}}</span>
            <span>{{info.clickAmount}}次浏览</span>
            <span>分类:{{info.categoryName}}</span>
        </div>
        <ul>

            <vue-preview :slides="thumbnail"></vue-preview>
            <!-- <li v-for="(item,index) in thumbnail" :key="index">
                <img :src="item.imgSrc"/>
            </li> -->
        </ul>
        <div class="photo-desc">
            <p v-html="info.content"></p>
        </div>

        <my-comment/>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                info:{
                    id:1,
                    title:'图文标题是短款发货款的价格好',
                    time:'2012-12-06',
                    clickAmount:3000,
                    categoryName:'军事',
                    content:`kdshfkdgh是肯德基啊好烦谁看见对方还UE忒汝等打卡时间不开的`
                },
                thumbnail:[
                        {
                            src: require('@/assets/preview/p01.jpg'),
                            msrc: require('@/assets/preview/pb01.jpg'),
                            alt: 'picture1',
                            title: 'Image Caption 1',
                            w: 600,
                            h: 400
                        },
                        {
                            src: require('@/assets/preview/p02.jpg'),
                            msrc: require('@/assets/preview/pb02.jpg'),
                            alt: 'picture2',
                            title: 'Image Caption 2',
                            w: 600,
                            h: 400
                        },
                        {
                            src: require('@/assets/preview/p03.jpg'),
                            msrc: require('@/assets/preview/pb03.jpg'),
                            alt: 'picture3',
                            title: 'Image Caption 3',
                            w: 600,
                            h: 400
                        },
                        {
                            src: require('@/assets/preview/p04.jpg'),
                            msrc: require('@/assets/preview/pb04.jpg'),
                            alt: 'picture4',
                            title: 'Image Caption 4',
                            w: 600,
                            h: 400
                        },
                        {
                            src: require('@/assets/preview/p05.jpg'),
                            msrc: require('@/assets/preview/pb05.jpg'),
                            alt: 'picture5',
                            title: 'Image Caption 5',
                            w: 670,
                            h: 400
                        },
        
                ]

            }
        },
        created() {
 
            //获取id 请求服务端数据
            // let id=this.$route.query.id;
            // console.log(id);
            // this.axios.get(infoUrl)
            // .then(res => {
            //     this.info=res.data[0];
            // })
            // .catch(err => {
            //     console.error('图文信息获取失败',err); 
            // })

            // this.axios.get(thumbnail)
            // .then(res => {
            //     this.thumbnail=res.data
            // })
            // .catch(err => {
            //     console.error('缩略图获取失败',err); 
            // })
        },
    }
</script>
<style scoped>
li{
    list-style: none;
}

ul{
    margin: 0px;
    padding: 0px;
}
.photo-title{
    /* overflow: hidden; */
}
.photo-title,.photo-desc{
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}
.photo-title p{
    color: #13c3f7;
    font-weight: bold;
    font-size: 20px;
}
.photo-title span{
    margin-right: 0px;
}
.photo-desc p{
    font-size: 22px;
}
.photo-desc p{
    margin-bottom: 10px;
}
</style>