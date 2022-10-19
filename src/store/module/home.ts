import { defineStore } from 'pinia'

const homeStore = defineStore('home',{
    state: () => {
        return {
            homeList: ['john', 'kobe', 'jack', 'rose']
        }
    }
})

export default homeStore