<template>
  <div>
    <button :class="{'active':currentTab==item}" v-for="(item,index) in tabs" :key="index" @click="btnClick(item)">{{item}}</button>

    <!-- 动态组件相当于动态路由 在一些简单的场景可以用动态组件component代替vue-router -->

    <!-- （掌握）component方式实现动态组件   is标识当前使用哪个组件(<home/> or <about/>...)  当前动态显示哪个组件就将参数传给哪个，事件监听也是一样-->
    <!-- （掌握）keep-alive 保存缓存状态 得益于keep-alive About动态组件的counter在离开该组件时counter不会给销毁重制 -->
    <keep-alive include="AboutCpn" exclude="CategoryCpn">
      <component :is="currentTab"   
              name="张三"
              :age="20"
              @pageClick="pageClick">
      </component>  
    </keep-alive>
    
    
    <!-- （繁琐）if方式实现动态组件 -->
    <!-- <template v-if="currentTab === 'home'">
      <home/>
    </template>

    <template v-else-if="currentTab === 'about'">
      <about/>
    </template>

    <template v-else>
      <category/>
    </template> -->
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'

export default {
    data(){
        return{
            tabs:['home','about','category'],
            currentTab:'home'
        }
    },

    components:{
      Home,
      About,
      Category,
    },

    methods:{
      btnClick(item){
        this.currentTab = item
      },
      pageClick(){
        console.log('page内部发生点击事件');
      }
    }
}
</script>

<style>
  .active{
    color: red;
  }
</style>