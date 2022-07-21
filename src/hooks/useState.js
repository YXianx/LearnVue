import { mapState, createNamespacedHelpers} from "vuex";
import { useMapper } from "./useMapper";

// 考虑到多模块的场景使用useState,新增moduleName参数,利用方法3去实现分模块操作
// moduleName不为string或长度为0则默认使用mapState提取根的内容
export function useState(moduleName,mapper){
    let mapFn = mapState

    if(typeof moduleName === 'string' && moduleName.length>0){
        mapFn = createNamespacedHelpers(moduleName).mapState
    }

    return useMapper(mapper,mapFn)
}