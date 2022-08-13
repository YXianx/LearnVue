<template>
  <div>
    <h2>{{name}} - {{age}} - {{height}}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import {reactive,toRefs,toRef} from 'vue'
export default {
    setup(){
      // 解构reactive的意义我的理解是，当要传入一个对象时，只能用reactive，但是我们想拿到对象中的某些值，或者觉得template中要写info.name太麻烦啥的。
      // 如何对reactive对象进行解构？
      const info = reactive({name:"coderxian",age:21,height:1.7})

      // 1、普通结构方式
      // 普通方式相当于是直接拿到值赋值，是死的值不是响应式的，那么我们想结构又想值响应式该怎么办，就得用到toRefs or toRef 这两个API，并且传入的对象必须是响应式对象
      // let {name,age} = info

      // 2、toRefs(object)解构，对多个参数进行解构
      // toRefs相当于将reactive整体转换为一个个ref对象，由于是ref对象所以template会直接解包拿值，而逻辑代码中要.value拿值
      let {name,age} = toRefs(info)

      // 3、toRef(object,key)解构，对单个参数进行解构
      // 有时候我们不需要拿多个数据，只需要拿其中一个时将可以用toRef
      let height = toRef(info,"height")

      const changeAge = ()=>{
        age.value++
        height.value += 0.1
        console.log("toRefs方式：",age);
      }
      
      return{
        info,
        name,
        age,
        height,
        changeAge
      }
    }
}
</script>

<style>

</style>