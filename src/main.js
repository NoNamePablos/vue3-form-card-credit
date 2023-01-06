import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ui from '@/components/ui/index.js';
import './assets/main.css'

const pinia = createPinia()

const app=createApp(App);
app.use(pinia)
ui.forEach(el=>{
    console.log('e',el);
     app.component(el.__name, el);
})



app.mount('#app')
