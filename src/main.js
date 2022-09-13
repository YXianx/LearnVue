import { createApp } from 'vue'
import App from './05_plugin插件/App.vue'

import registerDirectives from './directives/index'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'

const app = createApp(App)
// 全局直接注册，在全局的directive中只能写单个指令，不能一次写多个
// app.directive("mydirective",{
//     mounted(el,bindings,vnode,preVnode){
//         console.log("我是mydirective全局指令");
//     }
// })

// 封装注册全局自定义指令，传入app对象使得封装的js中可以直接调用app.directive封装自定义全局指令
registerDirectives(app)

// 安装自定义插件
app.use(pluginObject)
app.use(pluginFunction)

app.mount('#app')
