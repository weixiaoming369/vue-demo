<template>
    <div class="cms-s-header">
        <h1 @click="goback">&nbsp<</h1>
        <h1 class="page-title">{{title}}</h1>
    </div>
</template>
<script>
    export default{
        //组件名称
        name:'nav-bar',
        //父传子的参数作为title显示
        props:['title'],
        methods: {
            goback:function(){
                this.$router.go(-1);
            }
        },
    }
</script>
<style scoped>
.cms-s-header{
    height: 40px;
    background-color: #f7f7f7;
}
.page-title{
    margin-left: 25%;;
}
h1,h2{
    display: inline-block;
    height: 40px;
    line-height:40px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.cms-s-header h1:nth-child(2){
    text-align: right;
}
</style>