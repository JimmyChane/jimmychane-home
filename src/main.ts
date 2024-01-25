import { createApp } from 'vue';
import App from '@/app/App.vue';
import router from './routes/router';
import '@/main.css';

createApp(App).use(router).mount('#app');
