import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/Home.vue";
import ContactView from "../pages/Contact.vue";
import AboutUsView from "../pages/AboutUs.vue";
import MeetTheTeam from "../pages/MeetTheTeam.vue";
import CommunityView from "../pages/Community.vue";
import NewsArticleView from "../pages/NewsArticle.vue";
import YourHomeView from "../pages/YourHome.vue";
import NewsView from "../pages/News.vue";
import AntiSocialBehaviour from "../pages/AntiSocialBehaviour.vue";
import OtherIssues from "../pages/OtherIssues.vue";
import TaxCouncil from "../pages/TaxCouncil.vue";
import PrivateRented from "../pages/PrivateRented.vue";
import TemporaryAccomodation from "../pages/TemporaryAccomodation.vue";
import QuickReportView from "../pages/QuickReport.vue";
import RepairAndMaintenanceView from "../pages/RepairAndMaintenance.vue";
import OursEmergency from "../pages/OursEmergency.vue";
import TenantServices from "../pages/TenantServices.vue";
import RepairResponsibilities from "../pages/RepairResponsibilities.vue";
import HomeMeetTheTeam from "../pages/HomeMeetTheTeam.vue";
import SubmittedIssue from "../pages/SubmittedIssue.vue";
import HousingPartners from "../pages/HousingPartners.vue";
import usefulVideos from "../pages/UsefulVideos.vue";
import HelpAndAdvice from "../pages/HelpAndAdvice.vue";
import NationalHelplines from "../pages/NationalHelplines.vue";
import TemporaryAccommodation from "../pages/TemporaryAccommodation.vue";
import PRS from "../pages/PRS.vue";
import AccommodationTypes from "../pages/AccommodationTypes.vue";
import OurProjects from "../pages/OurProjects.vue";
import ProjectTemplate from "../pages/ProjectTemplate.vue";
import WhereWeOperate from "../pages/WhereWeOperate.vue";
import Investors from "../pages/Investors.vue";
import CorporateInvestors from "../pages/CorporateInvestors.vue";
import PrivateInvestors from "../pages/PrivateInvestors.vue";
import Landlords from "../pages/Landlords.vue";
import HousingOfficer from "../pages/HousingOfficer.vue";
import FieldWorker from "../pages/FieldWorker.vue";
import MaintenanceWorker from "../pages/MaintenanceWorker.vue"
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
      component: TaxCouncil,
    },
    {
      path: "/prs",
      name: "PrivateRented",
      component: PrivateRented,
    },
    {
      path: "/temporary-accomodation",
      name: "TemporaryAccomodation",
      component: TemporaryAccomodation,
    },
    {
      path: "/housing-officer",
      name: "HousingOfficer",
      component: HousingOfficer,
    },
    {
      path: "/field-worker",
      name: "FieldWorker",
      component: FieldWorker,
    },
    {
      path: "/maintenance-worker",
      name: "MaintenanceWorker",
      component: MaintenanceWorker,
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
      path: "/hours-emergency",
      name: "HoursEmergency",
      component: OursEmergency,
    },
    {
      path: "/tenant-services",
      name: "tenantServices",
      component: TenantServices,
    },
    {
      path: "/repair-responsibilities",
      name: "repairResponsibilities",
      component: RepairResponsibilities,
    },
    {
      path: "/home-meetTheTeam",
      name: "meetTheTeam",
      component: HomeMeetTheTeam,
    },
    {
      path: "/submitted-issue",
      name: "submittedIssue",
      component: SubmittedIssue,
    },
    {
      path: "/housing-partners",
      name: "HousingPartners",
      component: HousingPartners,
    },
    {
      path: "/useful-videos",
      name: "usefulVideos",
      component: usefulVideos,
    },
    {
      path: "/help-and-advice",
      name: "HelpAndAdvice",
      component: HelpAndAdvice,
    },
    {
      path: "/national-helplines",
      name: "NationalHelplines",
      component: NationalHelplines,
    },
    {
      path: "/temporary-accommodation",
      name: "TemporaryAccommodation",
      component: TemporaryAccommodation,
    },
    {
      path: "/housing-partners-prs",
      name: "PRS",
      component: PRS,
    },
    {
      path: "/accommodation-types",
      name: "AccommodationTypes",
      component: AccommodationTypes,
    },
    {
      path: "/our-projects",
      name: "OurProjects",
      component: OurProjects,
    },
    {
      path: "/project-template",
      name: "ProjectTemplate",
      component: ProjectTemplate,
    },
    {
      path: "/where-we-operate",
      name: "WhereWeOperate",
      component: WhereWeOperate,
    },
    {
      path: "/investors",
      name: "Investors",
      component: Investors,
    },
    {
      path: "/corporate-investors",
      name: "CorporateInvestors",
      component: CorporateInvestors,
    },
    {
      path: "/private-investors",
      name: "PrivateInvestors",
      component: PrivateInvestors,
    },
    {
      path: "/landlords",
      name: "Landlords",
      component: Landlords,
    },
  ],
});

export default router;
