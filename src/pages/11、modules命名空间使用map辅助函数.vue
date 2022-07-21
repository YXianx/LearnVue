<template>
  <h1>mudules模块化Store 利用map辅助函数操作子模块内容</h1>
  <div>mapState展示home模块的Desc：{{homeDesc}}</div>

  <h2>模块化Getters</h2>
  <div>mapGetters展示home模块的双倍counter：{{getDoubleCounter}}</div>

  <h2>模块化mutations</h2>
  <div>home counter: {{counter}}</div>
  <button @click="decrement">index -</button>
  <button @click="increment">index +</button>
</template>

<script>
// 方法1、2依赖该import
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

// 方法3 创建属于单个模块的map辅助函数，则不需要像方法1、2那样每次填写模块名称。(适用于组件内只使用单个模块的内容时)
import {createNamespacedHelpers} from 'vuex' 
const {mapState,mapGetters,mapMutations,mapActions} = createNamespacedHelpers("home")

export default {
    computed:{
        // 写法1：
        // ...mapState({
        //     rootDesc:state=>state.rootDesc,
        //     homeDesc:state=>state.home.homeDesc,
        //     userDesc:state=>state.user.userDesc
        // }),
        // ...mapGetters({
        //     homeDoubleCounter:"home/getDoubleCounter"
        // }),

        // 写法2 map一个参数填写模块名称
        // ...mapState("home",["homeDesc","counter"]),
        // ...mapState("user",["userDesc"]),
        // ...mapState(["rootDesc"]),
        // ...mapGetters("home",["getDoubleCounter"]),

        // 写法3 
        ...mapState(["homeDesc","counter"]),
        ...mapGetters(["getDoubleCounter"])
    },
    methods:{
        // 写法1 有问题不生效
        // ...mapMutations({
        //     increment:"home/increment"
        // })

        // 写法2
        // ...mapMutations("home",["increment","decrement"])

        // 写法3
        ...mapMutations(["increment","decrement"])

        // mapActions同理
    }
}
</script>

<style>

</style>