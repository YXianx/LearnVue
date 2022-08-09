<template>
  <div>
    <h1>NavBar组件</h1>
    <button @click="getParent">获取父组件元素</button>
    <button @click="getRoot">获取根组件元素</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:"halo i from navbar.vue"
        }
    },

    methods:{
        // $parent $root
        showMessage(){
            console.log("let me show you");
        },

        getParent(){
            console.log("NavBar中获取父组件App元素",this.$parent);
        },

        getRoot(){
            console.log("NavBar获取根组件元素",this.$root);
        },
    }
}
</script>

<style>

</style>