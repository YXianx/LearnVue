import { defineStore } from 'pinia'

const mainStore = defineStore('main', {
    state: () => {
        return {
            message: 'Hello World',
            count: 0,
            phone: '17665383618'
        }
    },
    getters: {
        // getters 是有缓存的，和vue的computed计算属性一样
        // 当多次调用getters且getters内容没有被修改的时候，只会执行一次
        phoneHidden(state) {
            console.log('Getters被调用')
            
            // 电话分为前三位 中间四位 后四位  $1 $2代表前后 ****中间用*代替
            return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
        }
    },
    actions: {
        // 异步修改或者业务逻辑复杂修改的东西多的时候写在actions中，函数没有参数
        changeCountAction() {
            this.count += 100
        }
    }
})

export default mainStore