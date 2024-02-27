// main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(router).use(i18n).use(Toast).mount('#app');
