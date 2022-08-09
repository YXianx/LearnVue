<template>
  <div class="app-content"> 
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br>
    <transition name="why" type="transition">
        <h2 v-if="isShow">Hello World</h2>
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

    /* 当只使用一种类型的过渡效果（transition or animation），vue默认监听transitionend 或者 animationend */
    /* (了解)当同时使用两种类型的过渡效果时，且两个的动画时间长度不一样，一个结束一个还在继续， 我们就可以设置type属性为animation or transition 明确告知vue监听的类型*/

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
        transition: opacity 2s ease;
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