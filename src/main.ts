import './assets/main.css'
import './assets/styles/element-plus.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
