// 插件必须导出对象或者函数，导出对象的话且内部必须要有install函数
// vue use安装插件的时候会回调install函数并且传递app对象进来

// 我们的全局组件、全局指令等等都可以通过插件的方式去实现
export default{
    install(app){
        console.log("plugin object: ",app);

        // app.component()
        // app.mixin()
        // app.directive()

        // 在app配置信息中添加属性，这样可以在全局任何组件或代码中调用到(optionAPI and compsitionAPI都可)
        // 全局属性一般加个$区分，防止和组件内的变量名冲突
        app.config.globalProperties.$globalName = "coder why"

        // 插件方式注册全局自定义指令
        app.directive("xianx",{
            mounted(el,bindings) {
                el.style.background = "#787878"
                el.style.color = "#fff"
            },
        })
    }
}