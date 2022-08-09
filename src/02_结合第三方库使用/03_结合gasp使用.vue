<template>
  <div class="app-content"> 
    <button @click="isShow = !isShow">显示/隐藏</button>
    <br>

    <!-- :css 不检测css 只用js动画 -->
    <transition name="why" appear
                @enter="enter"
                @leave="leave"
                :css="false">
        <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
    data(){
        return{
            isShow:true
        }
    },

    methods:{
        // gsap库 利用js实现动画效果，js可以使得我们动画参数可以用变量，不像css是固定的值
        // el：元素对象 也可用refs获取
        enter(el,done){
            // 从x200进来 离开再回到x200
            gsap.from(el,{
                scale:1,
                x:200,
                onComplete:done // 动画结束的会掉函数 调用done相当于结束当前动画
            })
        },
        leave(el,done){
            gsap.to(el,{
                scale:0,
                x:200,
                onComplete:done
            })
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