<template>
  <div>
    <h2>{{info.name}} - {{info.age}} - {{height}}</h2>
    <button @click="changeClick">改变值</button>
  </div>
</template>

<script>
import {watch,reactive, ref} from 'vue'

// watch懒副作用 第一次不会直接执行会等侦听的数据更新后才执行
// watch侦听函数的数据源有两种类型
// 1、getter函数(但getter函数必须引用可响应式的对象 reactive或ref)
// 2、响应式参数reactive或ref(常用ref) 
export default {
    setup(){
        const info = reactive({name:"why",age:17})
        const height = ref(170)

        // 1、传入getter函数
        // watch(()=>info.name,(newValue,oldValue)=>{
        //     console.log("newValue:",newValue,"oldValue:",oldValue);
        // })

        // 2、传入响应式对象reactive  当直接传入reactive监听，得到的回调函数中的newValue and oldValue都是reactive对象而不是值本身
        // watch(info,(newValue,oldValue)=>{
        //     console.log("newValue:",newValue,"oldValue:",oldValue);
        // })

        // 2-1、传入响应式对象reactive  要想传入reactive对象侦听并且回调函数的参数还是值的本身的话就需要对info进行解构拿到数值作为function函数传给watch
        watch(()=>{
            return {...info}  // return {name:'xxx',age:xx}
        },(newValue,oldValue)=>{
            console.log("newValue:",newValue,"oldValue:",oldValue);
        })

        // 3、传入响应式对象ref  如果侦听的是ref对象，则watch回调函数会直接return ref.value直接返回值回来，所以在回调函数中不需要再写ref.value取值
        watch(height,(newValue,oldValue)=>{
            console.log("newValue:",newValue,"oldValue:",oldValue);
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