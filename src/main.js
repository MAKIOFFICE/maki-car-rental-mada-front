// main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import store from "./store/store";
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

createApp(App).use(router).use(i18n).use(store).use(Toast).mount('#app');
