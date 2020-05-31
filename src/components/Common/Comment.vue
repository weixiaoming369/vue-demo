<template>
    <div class="temp">

        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span>返回</span>
                    </div>
                </li>
                <li class="text-comment">
                    <textarea></textarea>
                </li>
                <li>
                    <!-- 使用mint-ui按钮组件 -->
                    <mt-button type="primary" size="large">发表评论按钮</mt-button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>44条评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li>匿名用户1：大家好 2012-21-21</li>
                <li>匿名用户2：大家好 2012-21-21</li>
                <li>匿名用户3：大家好 2012-21-21</li>
            </ul>
            <mt-button type="danger" size="large" plain>加载更多</mt-button>
        </div>
    </div>
</template>
<script>
export default{
    name:'my-comment',
    data(){
        return{

        }
    },
    created() {
        this.$axios.get('http://localhost:8080/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    },
}
</script>
<style scoped>
.photo-comment > div span:nth-child(2){
    float:right;
}
.photo-comment{
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
}
.text-comment{
    padding:5 5;
}
.text-comment textarea{
    margin-bottom: 5px;
    width: 100%;
}
.comment-list li{
    border-bottom:1px solid rgba(0, 0, 0, 0.2) ;
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}
li{
    list-style:none
}
ul{
    margin: 0;
    padding:0;
}
</style>
