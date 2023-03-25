import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import Carousel from "primevue/carousel";
const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component("Carousel", Carousel);
app.mount('#app')
