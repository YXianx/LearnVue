<template>
  <div class="app-content"> 
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br>
    <!-- 两个元素互相切换 两个动画默认时同时执行(边隐藏边显示) -->
    <!-- (常用)mode设置动画模式 in-out先显示新的再隐藏旧的 out-in先隐藏旧的再显示新的 -->
    <transition name="why" mode="out-in">
        <h2 v-if="isShow">Hello World</h2>
        <h2 v-else>你好呀 李银河</h2>
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

    /* transition */
    .why-enter-from,
    .why-leave-to{
        opacity: 0;
    }
    .why-enter-to,
    .why-leave-from{
        opacity: 1;
    }
    .why-enter-active,
    .why-leave-active{
        transition: opacity 1s ease;
    }

    /* animation */
    .why-enter-active{
        animation: bounce 1s;
    }
    .why-leave-active{
        animation: bounce 1s reverse;
    }
    @keyframes bounce {
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.2);
        }
        100%{
            transform: scale(1);
        }
    }
</style>