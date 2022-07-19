import {createStore} from "vuex"
import home from './modules/home'
import user from './modules/user'

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