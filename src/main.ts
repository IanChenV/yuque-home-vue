import { createApp } from 'vue'
import App from './App.vue'
import { createAppRouter } from './router'
import { restoreFallbackPath } from './router/fallback'
import './styles/tokens.css'

const router = createAppRouter()

createApp(App).use(router).mount('#app')

// GitHub Pages 深链接经 404.html 暂存路径后，在此恢复真实导航
void restoreFallbackPath(router)
