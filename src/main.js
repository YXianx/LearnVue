import { createApp } from 'vue'
import App from './03_列表动画的使用/02_列表的交替动画(delay).vue'
import "animate.css" // 添加animate到webpack依赖图，打包才会一并打包

createApp(App).mount('#app')
