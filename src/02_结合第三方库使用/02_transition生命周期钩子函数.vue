<template>
  <div class="app-content"> 
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br>

    <!-- 动画进入及离开时会调用相应的钩子函数 一般用在js设置动画的时候 -->
    <transition name="why" appear
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                >
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
        beforeEnter(){
            console.log("before-enter");
        },
        enter(){
            console.log("enter");
        },
        afterEnter(){
            console.log("after-enter");
        },
        beforeLeave(){
            console.log("before-leave");
        },
        leave(){
            console.log("leave");
        },
        afterLeave(){
            console.log("after-leave");
        }
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
</style>