<template>
  <div>
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeName">改变名称</button>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>

<script>
import {ref, watchEffect} from 'vue'
export default {
    setup(){
        const name = ref("why")
        const age = ref(22)

        // watchEffect 自动收集响应式对象依赖
        // watchEffect函数返回值是WatchStopHandle 也就是一个停止监听函数，调用后watchEffect停止监听
        const stop = watchEffect(()=>{
            console.log("name:",name.value,"age:",age.value);
        })

        const changeName = ()=>name.value = 'Kobe'
        const changeAge = ()=>{
            age.value++

            if(age.value>25){
                stop()
            }
        }


        return{
            name,
            age,
            changeName,
            changeAge
        }
    }
}
</script>

<style>

</style>