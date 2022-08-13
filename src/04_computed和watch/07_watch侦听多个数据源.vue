<template>
  <div>
    <h2>{{info.name}} - {{info.age}} - {{height}}</h2>
    <button @click="changeClick">改变值</button>
  </div>
</template>

<script>
import {watch,reactive, ref} from 'vue'

export default {
    setup(){
        const info = reactive({name:"why",age:17})
        const height = ref(170)

        // 同时侦听多个数据源，function、getter、reactive、ref都可一块写   newValue and oldValue参数可以写成数组，拆分开来，否则全部的数据源都会放在一块
        watch([info,height,()=>{return{...info}}],([newInfo,newHeight,newInfoFn],[oldInfo,oldHeight,oldInfoFn])=>{
            console.log(newInfo,newHeight,newInfoFn,oldInfo,oldHeight,oldInfoFn);
        })

        const changeClick = ()=>{
            info.name = "coder why"
            height.value = 180
        }
        return{
            info,
            height,
            changeClick
        }
    }
}
</script>

<style>

</style>