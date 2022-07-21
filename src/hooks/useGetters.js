import { mapGetters,createNamespacedHelpers } from "vuex";
import { useMapper } from "./useMapper";

export function useGetters(moduleName,mapper){
    let mapFn = mapGetters

    if(typeof moduleName === 'string' && moduleName.length>0){
        mapFn = createNamespacedHelpers(moduleName).mapGetters
    }

    return useMapper(mapper,mapFn)
}