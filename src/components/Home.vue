<template>
    <div class="home">
        <div>
            Pinia count: {{ count }} 
        </div>
        <div>
            Pinia message: {{ message }}
        </div>
        <div>
            Pinia getters: {{ phoneHidden }}
        </div>
        <div>
            (缓存)Pinia getters: {{ phoneHidden }}
        </div>
        <div>
            Pinia Home Store: {{ homeList }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { toRefs, ref } from 'vue'
import mainStore from '../store/index'
import homeStore from '../store/module/home';
import { storeToRefs } from 'pinia'

const store = mainStore()
// 解构是为了template使用数据的时候不需要写store.xxx的前缀
// 直接解构的话是没有响应式的，是个固定的值
// vue3的toRefs及pinia的storeToRefs都能实现解构后响应
const { message, count, phoneHidden } = storeToRefs(store)

// 调用home模块的state
const home = homeStore()
const homeList = ref<any>([])
homeList.value = ref(home.homeList)
</script>

<style lang="scss" scoped>

</style>