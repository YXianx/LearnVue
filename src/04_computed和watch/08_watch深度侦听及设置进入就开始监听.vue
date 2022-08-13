<template>
  <div>
    <h2>{{info.name}} - {{info.age}}</h2>
    <button @click="changeClick">改变值</button>
  </div>
</template>

<script>
import {watch,reactive, ref} from 'vue'

// deep深度侦听
export default {
    setup(){
        const info = reactive({
            name:"why",
            age:17,
            friend:{
                name:"xian"
            }
        })

        // 1、reactive对象深度侦听: 传入的如果是reactive对象默认就会有deep深度侦听，当friend.name改变就会触发watch回调
        // watch(info,(newValue,oldValue)=>{
        //     console.log(newValue,oldValue);
        // })

        // 2、普通对象深度侦听: 解构对象默认情况是不会deep深度监听的，需要设置deep参数为true才会深度监听到friend.name的改变
        watch(()=>{return {...info}},(newValue,oldValue)=>{
            console.log(newValue,oldValue);
        },{
            deep:true,  // 设置深度侦听
            immediate:true  // 设置第一次进入就开始侦听
        })

        const changeClick = ()=>{
            info.friend.name = "coder why"
        }
        return{
            info,
            changeClick
        }
    }
}
</script>

<style>

</style>