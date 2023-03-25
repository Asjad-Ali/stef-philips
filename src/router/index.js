import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../pages/Home.vue'; 
import ContactView from '../pages/Contact.vue';
import AboutUsView from '../pages/AboutUs.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "aboutUs",
      component: AboutUsView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
  ],
});

export default router;