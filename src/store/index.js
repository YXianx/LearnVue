import {createStore} from "vuex"
import home from './modules/home'
import user from './modules/user'

import { INCREMENT_N } from "./mutation-types"

const store = createStore({
    state:{
        rootDesc:"我是来自根Store的变量",
        counter:10086,
        name:"贤先生",
        books:[
            {name:"深入Vuejs",price:200,count:3},
            {name:"深入Webpack",price:130,count:5},
            {name:"深入Nodejs",price:20,count:3},
            {name:"深入React",price:100,count:9},
        ]
    },
    mutations:{
        // 利用常量使得vue文件和store文件的mutations名字一致
        [INCREMENT_N](state,payload){
            state.counter += payload.n
        },

        decrement(state,payload){
            state.counter -= 1
        }
    },
    getters:{
        // 总金额
        getBooksTotal(state,getters){
            let totalPrice = 0
            for(let i of state.books)
                totalPrice+=i.price
            
            return totalPrice * getters.currentDiscount
        },
        // 打五折
        currentDiscount(state){
            return 0.5
        },
        getBookPriceGreaterN(state,getters){
            return (n)=>{
                return state.books.filter(item=>item.price>=n)
            }
        },
        getNameInfo(state){
            return `name:${state.name}`
        },
        getCounterInfo(state){
            return `counter:${state.counter}`
        }
    },
    actions:{

    },
    // 键值对方式，也可增强写法
    modules:{
        home,
        user
    }
})

export default store