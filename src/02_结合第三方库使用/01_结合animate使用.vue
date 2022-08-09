<template>
  <div class="app-content"> 
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br>

    <!-- animate.css文档 https://animate.style/ -->
    <!-- transition结合animate库实现动画效果 -->
    <!-- 通过transition设置动画 -->
    <transition name="why" appear>
        <h2 v-if="isShow">Hello World</h2>
    </transition>

    <br>
    <!-- 直接通过class设置动画 class名称可去文档直接复制 animate__animated基础类必须加上 否则动画不生效 -->
    <!-- 直接通过class设置的优先级比transiton name设置的优先级高 -->
    <!-- 离开的动画最好时做反转 否则动画出来一下然后就突然消失 这样很突兀 应该是先慢慢消失再动画 需要自己将动画class进行反转 -->
    <transition name="cod" enter-active-class="animate__animated animate__swing" leave-active-class="animate__animated animate__jello">
        <h2 v-if="isShow">你好呀 李银河</h2>
    </transition>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:true
        }
    },

    methods:{
 
    }
}
</script>

<style>
    .app-content{
        width: 50%;
        margin: 0 auto;
    }
    .app-content h2{
        display: inline-block;
    }

    /* 引用animate.css内部写好的@keyframes 再自定义过渡时间 */
    /* 进入和离开可以设置不同的动画 */
    .why-enter-active{
        animation: rubberBand 1s ease;
    }
    .why-leave-active{
        animation: bounceInUp 1s reverse;
    }


    /* 离开动画反转 */
    .animate__jello{
        animation-direction: reverse;
    }
</style>