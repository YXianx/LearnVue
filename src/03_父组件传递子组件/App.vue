<template>
  <h1>App.vue</h1>
  <!-- 绑定props 及 非props的attribute -->
  <show-message class="hyx" title="自定义标题" content="自定义内容" status="success1"></show-message>
  <multi-root-element-vue class="rootClass" id="rootId"></multi-root-element-vue>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
import MultiRootElementVue from './MultiRootElement.vue'

export default {
  name: 'App',
  components: {
    ShowMessage,
    MultiRootElementVue
  }
}
</script>

<style>

</style>
