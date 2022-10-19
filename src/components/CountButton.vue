<template>
    <div class="count-button">
        <div>
            <button @click="handleClick">Change StoreData store</button>
        </div>
        <div>
            <button @click="handlePatchClick">Change StoreData $Patch</button>
        </div>
        <div>
            <button @click="handlePatchMethodClick">Change StoreData Method</button>
        </div>
        <div>
            <button @click="handleActionClick">Change StoreData Actions</button>
        </div>
        <div>
            <button @click="handleGettersClick">Change Getters</button>
        </div>
        <div>
            <button @click="handleModuleClick">Get HomeStore</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import mainStore from '../store/index'
import homeStore from '../store/module/home'

const store = mainStore()

// 修改数据的4种方法
// 方法1 store.xxx
const handleClick = () => {
    store.count += 1
}

// 方法2 store.$patch({ xxx: xxx, xxx: xxx }) 
const handlePatchClick = () => {
    // $patch方法的作用也更改store的数值，那为什么不直接用store.xxx=xxx呢？
    // 1、$patch方法在需要统一对多个值进行改变的时候比较方便，可以写一块，一起改变，逻辑清晰
    // 2、官方文档中明确说过，特别对$patch做过优化，使得一次要改变多个数据时，用$patch的执行效率比较高
    store.$patch({
        count: store.count += 2,
        message: store.message === 'Hello World' ? 'Hello Pinia' : 'Hello World'
    })
}

// 方法3 store.$patch((state) => { state.xxx = xxx })  $patch传入函数时可以写业务逻辑，更灵活
const handlePatchMethodClick = () => {
    store.$patch((state) => {
        state.count += 5
        state.message = store.message === 'Hello World' ? 'Hello Pinia' : 'Hello World'
    })
}

// 方法4 store.actions() 业务逻辑复杂时可用actions
const handleActionClick = () => {
    store.changeCountAction()
}

// Getters
// 体现getters的缓存机制
const handleGettersClick = () => {
    store.phone = '15220149801'
}

// Module 不同Store之间的调用
const handleModuleClick = () => {    
    homeStore().homeList = ['约翰', '科比', '杰克', '露丝']
}
</script>

<style lang="scss" scoped>

</style>