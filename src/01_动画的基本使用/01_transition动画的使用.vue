<template>
  <div class="app-content"> 
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br>
    <transition name="why">
        <!-- 条件：添加或者删除元素的时候才会触发并添加动画！！！ -->
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

    /* transition动画 */
    /* 当transition标签没有添加name 则默认格式是以 v- 为前缀 如v-enter-from */
    /* enter:  v-enter-form -> v-enter-to */
    /* leave:  v-leave-form -> v-leave-to */
    .why-enter-from,
    .why-leave-to{
        opacity: 0;
    }

    .why-enter-to,
    .why-leave-from{
        opacity: 1;
    }

    /* 定义过渡时间 */
    .why-enter-active,
    .why-leave-active{
        transition: opacity 2s ease;
    }
</style>