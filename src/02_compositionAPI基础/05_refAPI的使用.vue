<template>
  <div>
    <h1>{{topic}}</h1>
    <!-- template自动解包ref对象的值 ref是个浅层解包 -->
    <h1>当前计数：{{counter}}</h1>
    <button @click="subClick">-</button>
    <button @click="addClick">+</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
    props:{
        message:{
            type:String,
            default(){
                return "hello"
            }
        }
    },

    setup(){
        // 官方更推荐用ref而不是reactive，ref更方便对代码进行解耦
        // 相比于reactive某些情况下我们不需要声明多个响应式数据(reactive构造函数必须传对象或者数组)，ref就能让我们只声明单个数据，两者中template及逻辑代码中的写法各不同
        // 使用ref包裹基本数据类型时，数据会变成响应式，相对的数据也会变成ref类型
        // ref类型在template中会被template自动解包，所以template中无需写ref.value，而在逻辑代码中是不会自动解包的所以需要ref.value取到数据
        const counter = ref(100)
        console.log(counter);

        const addClick = ()=>{
            counter.value++
        }
        const subClick = ()=>{
            counter.value--
        }

        return{
            topic:"hello world",
            counter,

            addClick,
            subClick
        }
    }
}
</script>

<style>

</style>