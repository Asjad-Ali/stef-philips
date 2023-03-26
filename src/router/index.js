import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../pages/Home.vue'; 
import ContactView from '../pages/Contact.vue';
import AboutUsView from '../pages/AboutUs.vue';
import MeetTheTeam from "../pages/MeetTheTeam.vue"
import CommunityView from "../pages/Community.vue";
import NewsArticleView from '../pages/NewsArticle.vue';
import NewsView from '../pages/News.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homeIndex",
      exact: true,
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
    {
      path: "/meet-the-team",
      name: "Meet the Team",
      component: MeetTheTeam,
    },
    {
      path: "/community",
      name: "Community",
      component: CommunityView,
    },
    {
      path: "/news-article",
      name: "newsArticle",
      component: NewsArticleView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
  ],
});

export default router;
