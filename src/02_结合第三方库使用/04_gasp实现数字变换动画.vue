<template>
  <div class="app-content"> 
    <!-- step 阶段 距离 设置每次增长数量 -->
    <input type="number" step="100" v-model="counter">
    <br>
    <h2>数字动画：{{showCunter}}</h2>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
    data(){
        return{
            counter:0,
            showNumber:0
        }
    },

    methods:{

    },

    computed:{
        showCunter(){
            return this.showNumber.toFixed(0)
        }
    },

    watch:{
        counter(newValue){
            // this -> vue对象
            gsap.to(this,{
                // 动画时间
                duration:1,
                showNumber:newValue
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