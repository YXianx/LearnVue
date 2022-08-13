<template>
  <div>
    <h2>Home.vue</h2>
    <h3>message: {{message}}</h3>
    <button @click="emitClick">发送事件</button>
  </div>
</template>

<script setup>
  // 顶层编写的方式props和emit就要改成defineProps defineEmits defineEmits返回一个事件对象,发送事件则直接调用返回的对象即可
  import {defineProps,defineEmits} from 'vue'

  const emit = defineEmits(["homeClick","laClick"])

  const props = defineProps({
    message:{
      type:String,
      required:true
    }
  })

  const emitClick = ()=>{
    emit("homeClick")
  }
</script>

<style>

</style>