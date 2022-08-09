<template>
    <div>
        <home></home>
        <about></about>
        <button @click="eventClick">send event</button>
    </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'

import emitter from './eventbus'

export default{
    methods:{
        eventClick(){
            emitter.emit("myEvent")
        }
    },

    components:{
        Home,
        About
    }
}

</script>

<style lang="scss" scoped>

</style>