<template>
    <li>
        <slot></slot>
    </li>
</template>
<script>
    export default{
        name:'my-li', //组件名称
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    li {
        float:left;
        display: block;
        height: 100px;
        width: 33%;
        text-align: center;
    }
    my-li a{
        text-decoration: none;
    }
    my-li img{
        height:50px;
        /* 使用这种方法可以为img标签动态添加图片 */
        content: url('../../assets/02.jpg');
        width: 50px;
    }  
    
</style>