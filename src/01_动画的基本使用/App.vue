<template>
  <div class="app-content"> 
    <button @click="isShow = !isShow">切换组件</button>
    <br>

    <!-- 动画效果作用动态组件 or 路由 -->
    <!-- 默认刷新或者第一次进入页面时，动画效果不生效 加入appear属性设置为true(默认false，不加:则表示赋值为字符串不是布尔)即可第一次进入时动画生效 -->
    <transition name="why" mode="out-in" :appear="true">
        <component :is="isShow ? 'home' : 'about'"></component>
    </transition>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'

export default {
    data(){
        return{
            isShow:true
        }
    },

    components:{
        Home,
        About
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