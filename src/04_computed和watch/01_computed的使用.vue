<template>
  <div>
    <h2>{{fullName2}}</h2>
    <button @click="changeName">改变名称</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
    
    setup(){
        const firstName = ref("Kobe")
        const lastName = ref("Bryant")

        // 直接拼接的话，fullName值时死的不是响应式的
        // const fullName = firstName.value + lastName.value
        
        // setup中写计算属性，computed()返回值是一个ref对象，ref对象设置值的时候都要.value=去设置触发set回调，当值更新时 computed会进行get回调，拿到最新值

        // 1.用法一：传入一个getter函数    对象内的变量都是响应式的ref值对象
        const fullName1 = computed(()=>{return firstName.value + ' ' + lastName.value})

        // 2.用法二：传入一个对象包含getter/setter
        const fullName2 = computed({
            get(){
                return firstName.value + ' ' + lastName.value
            },
            set(newValue){
                const names = newValue.split(' ')
                firstName.value = names[0]
                lastName.value = names[1]
            }
        })

        const changeName = ()=>{
            // 直接设置computed计算属性的值触发set回调
            fullName2.value = "coder why"
        }
        return{
            firstName,
            lastName,
            fullName1,
            fullName2,
            changeName
        }
    }
}
</script>

<style>

</style>