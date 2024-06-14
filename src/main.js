import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import global from '@/components/global'

const app = createApp(App)

app.use(global).mount('#app')

// createApp(App).mount('#app')
