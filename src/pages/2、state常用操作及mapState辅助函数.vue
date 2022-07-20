<template>
    <div>定义计算属性方式：{{fullName}}</div>
    <div>mapState方式：{{sCounter}}</div>
    <div>mapState方式：{{sName}}</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed:{
    fullName(){
        return this.$store.state.name
    },

    // 利用mapState从Store中导入state变量,通过mapState函数使得调用state无需再写$store.state.xxx很长一串
    ...mapState({
        sCounter:(state)=>state.counter,
        sName:(state)=>state.name
    })
  }
}
</script>

<style>

</style>