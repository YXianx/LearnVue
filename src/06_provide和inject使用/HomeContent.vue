<template>
    <div>
        <h3>HomeContent</h3>
        <h4>Provide隔代传递(App->HomeContent)：{{name}} - {{age}} - {{length}}</h4>
    </div>
</template>

<script>
    export default{
        inject:["name","age","length"]
    }
</script>

<style lang="scss" scoped>

</style>