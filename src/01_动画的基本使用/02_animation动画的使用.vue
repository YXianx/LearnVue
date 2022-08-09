<template>
  <div class="app-content"> 
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br>

    <transition name="cod">
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

    /* animation帧动画 */
    .cod-enter-active{
        animation: bounce 1s ease;
    }
    .cod-leave-active{
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