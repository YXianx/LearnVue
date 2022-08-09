<template>
<!-- 多个根节点，父组件传递非props的attribute参数时，需要手动指定到底绑定在哪个上面,不指定则会浏览器报警告 -->
  <h2 :class="$attrs.class">MultiRootElement</h2>
  <h2 :id="$attrs.id">MultiRootElement</h2>
  <h2>MultiRootElement</h2>
</template>

<script>
export default {

}
</script>

<style>

</style>