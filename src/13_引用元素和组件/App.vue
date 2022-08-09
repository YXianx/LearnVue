<template>
  <div>
    <h1 ref="h1Ref">App.vue</h1>
    <nav-bar ref="navRef"></nav-bar>

    <br>
    <button @click="getH1Ref">获取h1元素</button>
    <button @click="getNavRef">获取Nav元素</button>
    <button @click="getNavFn">执行navbar子组件的data及函数</button>
    <button @click="getRootEL">获取navbar的根元素</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    components:{
        NavBar
    },

    methods:{
        getH1Ref(){
            console.log(this.$refs.h1Ref);
        },

        getNavRef(){
            console.log(this.$refs.navRef);
        },

        getNavFn(){
            console.log(this.$refs.navRef.message);
            this.$refs.navRef.showMessage()
        },

        getRootEL(){
            console.log("获取navbar的根元素",this.$refs.navRef.$el);
        }
    }
}
</script>

<style>

</style>