<template>
  <div>
      <h1>About组件</h1>
      <button @click="counter++">{{counter}}</button>   
  </div>
</template>

<script>
export default {
  name:"AboutCpn",

  // 缓存组件的生命周期 (注意是activated 不是 activeted)
  // 由于keep-alive保存了当前组件的状态所以只有第一次进入会执行create且因为保存，unmouted一直执行不到
  // 如果我们想每次进入缓存组件时获取数据或者离开缓存组件时保存数据的话就要用 activated 和 deactivated 生命周期函数 
  created(){
    console.log("about created");
  },
  unmounted(){
    console.log("about unmouted");
  },

  activated(){
    console.log("进入about缓存组件");
  },
  deactivated(){
    console.log("离开about缓存组件");
  },

  data(){
    return{
      counter:0
    }
  }
}
</script>

<style>

</style>