import { createApp } from 'vue'
import App from './08_setup顶层编写方式/App.vue'

const app = createApp(App)
// app.mixin({
//     created(){
//         console.log("全局mixin混入 created执行");
//     }
// })
app.mount('#app')
