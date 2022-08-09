<template>
  <div id="app">
    <tab-control :tabs=tabList @changePage="handleChangePage"></tab-control>
    <h1>当前页面：{{page}}</h1>
  </div>
</template>

<script>
import TabControl from './TabControl'

export default {
    data(){
      return{
        tabList:["手机","生活","游戏","外卖"],
        page:"手机"
      }
    },

    components:{
        TabControl
    },

    methods:{
      handleChangePage(index){
        this.page = this.tabList[index]
      }
    }
}
</script> 

<style>

</style>