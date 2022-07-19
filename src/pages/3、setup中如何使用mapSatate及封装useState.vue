<template>
    <div>computed获取单个state：{{sCounter}}</div>
    <div>利用mapState获取多个state作为计算属性使用：{{counter}}</div>
    <div>利用mapState获取多个state作为计算属性使用：{{name}}</div>
    <div>对象方式使用mapState：{{sName}}</div>
</template>

<script>
import {useStore} from 'vuex'
import { computed } from 'vue'
import useState from '../hooks/useState'

export default {
    // setup中没有this对象，所以拿不到store，得通过useStore钩子函数
    setup(){
        const store = useStore()
        const sCounter = computed(()=>store.state.counter)

        const statesComputed = useState(["counter","name"])
        const statesComputed2 = useState({
            sName:state=>state.name
        })
 
        return{
            sCounter,
            ...statesComputed,
            ...statesComputed2
        }
    }
}
</script>

<style>

</style>