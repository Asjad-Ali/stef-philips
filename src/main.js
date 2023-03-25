import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import Carousel from "primevue/carousel";
import { createPinia } from 'pinia'
const app = createApp(App);
const pinia = createPinia()
app.use(router);
app.use(PrimeVue);
app.use(pinia)
app.component("Carousel", Carousel);
app.mount('#app')







