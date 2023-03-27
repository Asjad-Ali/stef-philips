import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import Carousel from "primevue/carousel";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import RadioButton from "primevue/radiobutton";
import { createPinia } from 'pinia'
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(PrimeVue);
app.use(pinia);
app.component("Carousel", Carousel);
app.component("Dropdown", Dropdown);
app.component("Textarea", Textarea);
app.component("FileUpload", FileUpload);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.component("RadioButton", RadioButton);
app.mount('#app')







