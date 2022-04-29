import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import './index.css'

const app = createApp(App)
app.use(VueSmoothScroll)
app.mount('#app')