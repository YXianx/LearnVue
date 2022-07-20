<template>
    <div>图书总价格：{{$store.getters.getBooksTotal}}</div>
    <div>大于价格N筛选出的图书：{{$store.getters.getBookPriceGreaterN(200)}}</div>
    <div>mapGetter辅助函数数组映射：{{getNameInfo}}</div>
    <div>mapGetter辅助函数数组映射：{{getCounterInfo}}</div>
    <div>mapGetter辅助函数对象映射：{{sNameInfo}}</div>
    <div>mapGetter辅助函数对象映射：{{sCounterInfo}}</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters(["getNameInfo","getCounterInfo"]),
        ...mapGetters({
            sNameInfo:"getNameInfo",
            sCounterInfo:"getCounterInfo"
        })
    }
}
</script>

<style>

</style>