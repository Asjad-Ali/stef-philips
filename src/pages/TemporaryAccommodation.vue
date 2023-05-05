<template>
  <div class>
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
      <nav class="container flex items-center justify-start gap-3 inner">
        <div
          exact-active-class="exact-active"
          class="text-white font-semibold text-sm font-bold-custom text-[14px]"
        >
          <router-link to="home">Home</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div
          exact-active-class="exact-active"
          class="text-white font-semibold text-sm font-bold-custom text-[14px]"
        >
          <router-link to="housing-partners">Housing partners</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div
          exact-active-class="exact-active"
          class="text-white font-semibold text-sm font-bold-custom text-[14px]"
        >
          <router-link to="temporary-accommodation"
            >Temporary Accommodation</router-link
          >
        </div>
      </nav>
    </div>

    <!-- section 1 -->
    <div class="w-full min-h-[600px] mb-[30px]">
      <PageBanner />
    </div>

    <div class="container py-[70px]">
      <SectionContentImage/>
    </div>

    
    <ArcContent/>

    <div class="container py-[50px] md:pb-[100px]">
      <SectionContentImage direction="image-last"/>
    </div>

    <ArcContent/>

    <div class="container mt-[100px] mb-[200px]">
      <Testimonial />
    </div>

    <PartnerUs/>
  </div>
</template>

<script setup>
import Cards from "../components/Cards.vue";
import { Icon } from "@iconify/vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";
import NeedHelp from "../components/NeedHelp.vue";
import BackgroundSVG from "../assets/Background-1.svg";
import PageBanner from "../components/PageBanner.vue";
import SectionContentImage from "../components/SectionContentImage.vue";
import ArcContent from "../components/ArcContent.vue";
import Testimonial from "../components/Testimonial.vue";
import PartnerUs from "../components/PartnerUs.vue";
const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
const people = [
  {
    name: "Help in your home",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/ThreeCardFlexN.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
  },
  {
    name: "Quick report form",
    role: "Use our quick online form. The quickest way to report an issue and get it fixed.",
    imageUrl: new URL("../assets/Svg/ThreeCardFlexM.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report an issue",
  },
  {
    name: "Report repair or maintainance",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/RectangularFlex.svg", import.meta.url)
      .href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report now",
  },
  // More people...
];
const peopleM = [
  {
    name: "Career",
    role: "Keen to join our team?",
    imageUrl: new URL("../assets/career.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
  },
  {
    name: "News",
    role: "Latest updates from Stef & Philips",
    imageUrl: new URL("../assets/news.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report an issue",
  },
  {
    name: "FAQ's",
    role: "Commonly asked questions",
    imageUrl: new URL("../assets/faqs.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report now",
  },
  // More people...
];
</script>

<style scoped>

.bcrumbs {
  background-color: rgba(29, 29, 51, 0.5);
}

.bgImg {
  background-image: url("../assets/Overlay-tem-acc.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* width: 1920px; */
  /* height: 600px; */
}

.contentImg {
  background-image: url("../assets/outline-house@4.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 100%;
}
.groupImg {
  background-image: url("../assets/Group\ 96.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* Path 543 */

  position: absolute;
  width: 409px;
  height: 425px;

  /* background: #2a8cff */
}

.happyG {
  background-image: url("../assets/bg-uk-need.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyG2 {
  background-image: url("../assets/aim-move-people.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyS {
  background-image: url("../assets/Svg/MidBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.content {
  margin-top: 35%;
  margin-left: 10%;
  opacity: 100%;
}

.content2 {
  /* margin-top: 35%; */
  margin-left: 10%;
}

.bg-third {
  background: #20407c;
}

.px-8 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.bgpartner {
  background-image: url("../assets/Graphic.png");
  right: 18%;
  background-repeat: no-repeat;
  background-position: left;
  position: relative;
  width: 100%;
  height: 434.7px;
  opacity: 90%;
  top: -44.1%;
}
</style>
