import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import naive from "naive-ui";
import App from './App.vue'
import router from './router'


createApp(App).use(router).use(naive).mount('#app')

import "bootstrap/dist/js/bootstrap.js"