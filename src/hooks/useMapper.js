// 由于useGetters和useState两个hook函数的内容就map函数不一样所以将相同的内容单独封装起来

import {useStore} from 'vuex'
import {computed} from 'vue'

export function useMapper(mapper,mapFn){
    const store = useStore()

    const storeMapperFns = mapFn(mapper)
    const storeMapperRefs = {}
    Object.keys(storeMapperFns).forEach(fnKey=>{
        const fn = storeMapperFns[fnKey]
        storeMapperRefs[fnKey] = computed(fn.bind({$store:store}))
    })

    return storeMapperRefs
}