<template>
  <div>
    <h1>{{topic}}</h1>
    <h1>当前计数：{{counter}}</h1>
    <button @click="subClick">-</button>
    <button @click="addClick">+</button>
  </div>
</template>

<script>
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
        // 当前的counter只是一个普通的变量，改变时页面也不会响应
        let counter = 100

        const addClick = ()=>{
            counter++
            console.log(counter);
        }
        const subClick = ()=>{
            console.log("sub");
        }

        // setup可返回data变量也可返回函数，这些内容都可以做template模版中使用
        return{
            // 当data和setup中有相同的变量名时，vue会首选用setup的
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