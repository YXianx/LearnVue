<template>
  <div>
    <h1 @click="pageClick">Home组件</h1>
    <p>{{name}} - {{age}}</p>
  </div>
</template>
 
<script>
export default {
  name:"HomeCpn",

  props:{
    name:{
      type:String,
      dafault(){
        return ""
      }
    },
    age:0
  },

  methods:{
    pageClick(){
      this.$emit('pageClick')
    }
  }
}
</script>

<style>

</style>