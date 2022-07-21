import {createStore} from "vuex"
import axios from 'axios'
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
        ],
        banners:[]
    },
    mutations:{
        // 利用常量使得vue文件和store文件的mutations名字一致
        [INCREMENT_N](state,payload){
            state.counter += payload.n
        },

        decrement(state,payload){
            state.counter -= 1
        },
        increment(state,payload){
            state.counter += 1
        },

        addBannerData(state,payload){
            state.banners = payload
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
    // 异步操作都放在actions中去做,如果请求的内容本身就要存到store的话那直接在actions写即可
    // 如果在actions中想要调用其他的action函数，context对象中本身有dispatch函数
    actions:{
        incrementAction({commit},payload){
            setTimeout(()=>{
                commit(INCREMENT_N,payload)
            },1000)
        },
        decrementAction({commit},payload){
            // 由于action执行异步操作，使用promise封装可以知道什么时候异步操作完毕
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    commit("decrement")
                    resolve("执行完毕")
                },1000)
            })
        },
        // 在组件内想要知道actions什么时候执行结束的话，action函数就得利用promise，执行结束resolve
        getBannersDataAction({commit},payload){
            return new Promise((resolve,reject)=>{
                axios.get("http://123.207.32.32:8000/home/multidata").then(res=>{
                    commit("addBannerData",res.data.data.banner.list)
                    resolve("异步请求banner数据执行完毕")
                }).catch(err=>{
                    reject("异步请求执行失败")
                })
            })
        }
    },
    // 键值对方式，也可增强写法
    modules:{
        home,
        user
    }
})

export default store