<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="demoClick">mixin</button>
  </div>
</template>

<script>
// mixin的主要作用是代码复用
// vue3项目很少用mixin
import {demoMixin} from './mixins/demoMixin'

export default {
    mixins:[demoMixin],
}
</script>

<style>

</style>