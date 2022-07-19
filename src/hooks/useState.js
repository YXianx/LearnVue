/**
 * 获取指定state变量并转换成computed计算属性
 */
import {mapState,useStore} from 'vuex'
import {computed} from 'vue'

const useState = function(mapper){
    const store = useStore()

    // mapState参数支持数组也支持对象
    const storeStatesFn = mapState(mapper)
    const storeStatse = {}
    Object.keys(storeStatesFn).forEach(fnKey=>{
        const fn = storeStatesFn[fnKey]
        storeStatse[fnKey] = computed(fn.bind({$store:store}))
    })

    return storeStatse
}

export default useState