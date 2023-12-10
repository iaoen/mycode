import { createApp } from 'vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css';
import ArcoVue from '@arco-design/web-vue';
import './style.css';

document.body.setAttribute('arco-theme', 'dark')
createApp(App).use(ArcoVue).mount('#app')
