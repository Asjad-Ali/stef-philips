import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/Home.vue";
import ContactView from "../pages/Contact.vue";
import AboutUsView from "../pages/AboutUs.vue";
import MeetTheTeam from "../pages/MeetTheTeam.vue";
import CommunityView from "../pages/Community.vue";
import NewsArticleView from "../pages/NewsArticle.vue";
import YourHomeView from "../pages/YourHome.vue";
import NewsView from "../pages/News.vue";
import AntiSocialBehaviour from '../pages/AntiSocialBehaviour.vue';
import OtherIssues from '../pages/OtherIssues.vue';
import TaxCouncil from '../pages/TaxCouncil.vue';
import QuickReportView from "../pages/QuickReport.vue";
import RepairAndMaintenanceView from "../pages/RepairAndMaintenance.vue";
import OursEmergency from "../pages/OursEmergency.vue";

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
      path: "/your-home",
      name: "yourHome",
      component: YourHomeView,
    },
    {
      path: "/anti-social-behaviour",
      name: "AntiSocialBEhaviour",
      component: AntiSocialBehaviour,
    },
    {
      path: "/other-issues",
      name: "OtherIssues",
      component: OtherIssues,
    },
    {
      path: "/tax-council",
      name: "TaxCouncil",
      component:TaxCouncil,
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
    {
      path: "/quick-report",
      name: "quickReport",
      component: QuickReportView,
    },
    {
      path: "/repair-and-maintenance",
      name: "repairAndMaintenance",
      component: RepairAndMaintenanceView,
    },
    {
      path: "/ours-emergency",
      name: "oursEmergency",
      component: OursEmergency,
    },
  ],
});

export default router;
