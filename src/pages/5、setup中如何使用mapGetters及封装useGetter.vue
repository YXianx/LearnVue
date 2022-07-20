<template>
  <div>setup中使用getters的基础做法:{{sNameInfo}}</div>
  <div>setup中使用getters的封装做法:{{getCounterInfo}}</div>
  <div>setup中使用getters的封装做法:{{getNameInfo}}</div>
</template>

<script>
import { mapGetters, useStore } from 'vuex'
import {computed} from 'vue'

import {useGetters} from '../hooks/useGetters'

export default {
    setup(){
        // setup中使用getters的基础做法
        const store = useStore()
        const sNameInfo = computed(()=>store.getters.getNameInfo)

        // setup中使用getters的封装做法 做法和mapState的封装一样 
        const storeGetters = useGetters(["getCounterInfo","getNameInfo"])

        return{
            sNameInfo,
            ...storeGetters
        }
    }
}
</script>

<style>

</style>