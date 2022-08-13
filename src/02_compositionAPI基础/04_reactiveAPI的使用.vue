<template>
  <div>
    <h1>{{topic}}</h1>
    <h1>当前计数：{{state.counter}}</h1>
    <button @click="subClick">-</button>
    <button @click="addClick">+</button>
  </div>
</template>

<script>
// 使用reactive(adj.响应的)函数处理数据，数据再次被使用(修改值操作)就会进行依赖收集
// 当数据改变时，所有收集到的依赖都会进行对应的响应式操作(比如更新界面)
// 事实上，我们之前编写的data(){}选项也是在内部交给了reactive函数将其编成响应式对象

// reactive对传入的数据类型是有限制的，只能穿入对象或者数组类型，这就代表着reactive的作用场景是声明多个值
import {reactive} from 'vue'

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
        const state = reactive({
            counter:100
        })

        const addClick = ()=>{
            state.counter++
        }
        const subClick = ()=>{
            state.counter--
        }

        // setup可返回data变量也可返回函数，这些内容都可以做template模版中使用
        return{
            // 当data和setup中有相同的变量名时，vue会首选用setup的
            topic:"hello world",
            state,

            addClick,
            subClick
        }
    }
}
</script>

<style>

</style>