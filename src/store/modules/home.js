// 当多个模块的getters、mutations、actions里有相同的函数名时，默认的调用方法是无法进行区分的
// 为了解决这个问题，也为了让模块更加的独立化，则需要用到namespaced命名空间参数

const homeModule = {
    // 也为了让模块更加的独立化，则需要用到namespaced命名空间参数
    namespaced:true,
    state:{
        homeDesc:"我是来自home模块的Store变量",
        counter:3
    },
    getters:{
        // rootState,rootGetters参数可以获取到根模块的state和getters
        getDoubleCounter(state,getters,rootState,rootGetters){
            return state.counter * 2
        }
    },
    mutations:{
        decrement(state,payload){
            state.counter -= 1
        },
        increment(state,payload){
            state.counter += 1
        },
    },
    actions:{
        // context对象包含commit,dispatch,state,rootState,getters,rootGetters
        incrementAction({commit,dispatch,state,rootState,getters,rootGetters}){
            // 从子模块派发commit事件去执行root根模块的increment的mutation事件
            commit("increment",null,{root:true})
        }
    }
}

export default homeModule