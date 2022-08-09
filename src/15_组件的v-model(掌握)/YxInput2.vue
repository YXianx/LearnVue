<template>
  <div>
    <h2>YxInput2</h2>
    yxinput2 modelValue : <input :value="modelValue" @input="modelValueChange"/>
    yxinput2 title : <input v-model="titleCmp"/>
    <h3>modelValue: {{modelValue}}</h3>
    <h3>title: {{title}}</h3>
  </div>
</template>

<script>
export default {
  props:{
    modelValue:"",
    title:""
  },

  computed:{
    titleCmp:{
      set(value){
        this.$emit("update:title",value)
      },
      get(){
        return this.title
      }
    }
  },

  methods:{
    modelValueChange(event){
      this.$emit("update:modelValue",event.target.value)
    }
  }
}
</script>

<style>

</style>