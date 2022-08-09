<template>
  <div>
    <h1>Category组件</h1>
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
export default {
  name:"CategoryCpn",

  data(){
    return{
      counter:0
    }
  }
}
</script>

<style>

</style>