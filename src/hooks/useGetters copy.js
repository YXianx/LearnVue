import { useStore,mapGetters } from "vuex"
import { computed } from "vue" 

const useGetters = function(mapper){
    const store = useStore()
    
    const storeGettersFns = mapGetters(mapper)
    const storeGettersRefs = {}

    Object.keys(storeGettersFns).forEach(fnKey=>{       
        const fn = storeGettersFns[fnKey]
        storeGettersRefs[fnKey] = computed(fn.bind({$store:store}))
    })

    return storeGettersRefs
}

export {
    useGetters
}