<template>
    <ul>
        <!-- 用于父子组件间的通讯 -->
        <slot></slot>
    </ul>
</template>
<script>
    export default{
        name:'my-ul',//组件的名称 到时候用的时候作为标签名使用如<my-ul/>
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    ul{
        margin-top: 10px;
    }
</style>