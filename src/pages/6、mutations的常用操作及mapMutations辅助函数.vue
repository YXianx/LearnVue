<template>
  <div>store-counter:{{$store.state.counter}}</div>
  <button @click="decrement">-</button>
  <button @click="addClick">普通写法+</button>
  <button @click="INCREMENT_N({n:10})">mapMutations写法+10</button>
</template>

<script>
import { INCREMENT_N } from '@/store/mutation-types'
import { mapMutations } from 'vuex'

export default {
  methods:{
    addClick(){
      this.$store.commit(INCREMENT_N,{
        n:1,
        name:'张三'
      })
    },

    // 通过map映射就不需要再在methods中再写一个函数commit，映射的过程中会自动帮我们commit
    ...mapMutations(['decrement',INCREMENT_N])
  }
}
</script>

<style>

</style> 