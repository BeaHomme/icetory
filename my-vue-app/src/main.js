import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';


App.use(createPinia());

createApp(App).mount('#app');
