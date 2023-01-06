import { createApp } from 'vue'
import App from './App.vue'
import ui from '@/components/ui/index.js';
import './assets/main.css'

const app=createApp(App);

ui.forEach(el=>{
    console.log('e',el);
     app.component(el.__name, el);
})



app.mount('#app')
