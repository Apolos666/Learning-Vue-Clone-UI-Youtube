import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import router from "@/router/router.js";

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
