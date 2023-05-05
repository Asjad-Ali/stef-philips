<template>
  <!-- Step 1 -->
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav
      class="container mx-auto flex items-center justify-start gap-3 inner lg:pl-[15px]"
    >
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[grey]"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="your-home">Your Home</router-link>
      </div>
    </nav>
  </div>
  <!-- Step 1 -->
  <!-- Step 2 -->
  <!-- 360 breakpoint last working check less than -->
  <div class="w-full min-h-[500px] bg-red-400 bgImg">
    <!-- class="w-full h-[460px] flex justify-center items-center"  -->
    <div class="container lg:h-[500px] xxs:h-[500px] mx-auto flex items-center">
      <div
        class="lg:w-[480px] xxs:w-[300px] sm:w-[400px] h-[auto] lg:ml-[14px] xxs:ml-[35px] sm:ml-[7px] lg:p-[5rem] sm:p-[3rem] xxs:p-[2rem] contentImg"
      >
        <!-- <h1 class="text-white">
          <div class="font-light-custom lg:text-[36px] xxs:text-[18px]">
            Meet your Team
          </div>
        </h1> -->
        <h1
          class="font-light-custom lg:text-[38px] xxs:text-[18px] leading-none text-white content"
        >
          <span>Your </span>
          <span class="font-black-custom lg:text-[38px] xxs:text-[18px]"
            >home</span
          >
        </h1>
        <p class="text-white mt-4 font-regular-custom text-[18px]">
          Information and resources to ensure you feel happy and supported in
          your home
        </p>
      </div>
    </div>
  </div>
  <!-- Step 2 -->

  <!-- Step 3 -->
  <div class="lg:pt-8 sm:pt-8 ml-[0.5rem] bg-[#F6F6F6]">
    <div class="pb-10 pt-3 container mx-auto">
      <div class="text-center">
        <div
          class="min-h-[230px] w-full px-1 text-left text-[#20407C] lg:w-[63%] xxxs:w-[100%] sm:w-[75%] md:w-[75%]"
        >
          <h1
            class="pt-4 lg:text-[30px] xxs:text-[18px] font-black-custom text-[#20407C]"
          >
            About your home
          </h1>
          <p
            class="xxxs:text-[12px] md:text-[18px] lg:text-[18px] font-regular-custom font-custom-color mt-4 mb-4"
          >
            At Stef & Philips, we want to help you thrive in your new home.
            That’s why we have dedicated teams in place to provide all the
            support you might need, whenever you need it. Scroll down to find
            out more.
            <br />
          </p>
        </div>
        <div
          class="grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1 gap-6"
        >
          <Yourhome :message="people" />
        </div>
      </div>
    </div>
  </div>

  <!-- Step 3 end -->
  <div class="pb-20 pt-3 container mx-auto mt-20">
    <div class="justify-center">
      <div
        class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"
      >
        <YourhomeButtonCard :message="peoplecards" />
      </div>
    </div>
  </div>

  <div class="bg-image-update min-h-[450px] w-full">
    <div class="mx-auto lg:w-[70%] sm:w-[90%] xxxs:w-[75%]">
      <div class="lg:py-20 xxxs:py-10">
        <div class="container">
          <h1
            class="lg:text-[32px] lg:font-[400] xxxs:font-[200] text-white leading-[40px]"
          >
            <span class="font-black-custom lg:text-[30px] xxxs:text-[18px]"
              >You’re always fully supported
            </span>
          </h1>
          <!-- checck font-regular-custom is tailwind? -->
          <p
            class="text-[18px] text-white font-regular-custom mt-4pr-[8rem] mb-[18px]"
          >
            We know moving into a new home can be stressful; our team is here to
            help make things run as smoothly as possible.
          </p>
        </div>
        <div class="min-h-[300px] text-white w-full">
          <div class="container mx-auto w-full lg:py-10">
            <div
              class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"
            >
              <Yourhome :message="yourValueCards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Step 4 -->
  <HourEmergencies />
  <!-- Step 4 -->
</template>

<script setup>
import Yourhome from "../components/YourHomeCards.vue";
import YourhomeButtonCard from "../components/YourHomeCardButtonOnly.vue";
import HourEmergencies from "../components/HourEmergencies.vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
const people = [
  {
    name: "Temporary and Emergency accommodation",
    role: "If you have become homeless or urgently need somewhere to live, you may be offered the opportunity to stay in temporary or emergency accommodation.",
    imageUrl: new URL("../assets/temp-card-1.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    color: "bg-white",
    buttonPadding: "pb-[2rem]",
  },
  {
    name: "Private rented sector (PRS) accommodation",
    role: "PRS accommodation is affordable housing leased on an assured shorthold tenancy agreement, giving tenants the stability of knowing they will be living there for a longer period of time.",
    imageUrl: new URL("../assets/temp-card-2.png", import.meta.url).href,
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    color: "bg-white",
    buttonPadding: "pb-[2rem]",
  },
  // More people...
];

const peoplecards = [
  {
    name: "Report a repair or maintenance",
    // role: "Short description excerpt here",
    imageUrl: new URL("../assets/YourHome/ReportRepair.png", import.meta.url)
      .href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report now",
    height: "h-auto",
    width: "w-[340]",
    button_url: "",
    color: "bg-sky-50",
    buttonPadding: "pb-[2rem]",
  },
  {
    name: "Report anti-social behaviour",
    // role: "Short description excerpt here",
    imageUrl: new URL("../assets/Card-Image-2.png", import.meta.url).href,
    btnName: "Report now",
    height: "h-auto",
    width: "w-[340]",
    button_url: "",
    color: "bg-sky-50",
    buttonPadding: "pb-[2rem]",
  },
  {
    name: "Need support with anything else",
    // role: "Short description excerpt here",
    imageUrl: new URL("../assets/YourHome/NeedSupport.png", import.meta.url)
      .href,
    btnName: "Report now",
    height: "h-auto",
    width: "w-[340]",
    button_url: "",
    color: "bg-sky-50",
    buttonPadding: "pb-[2rem]",
  },
  // More people...
];

const yourValueCards = [
  {
    name: "Meet your team",
    role: "Every property has a team dedicated to making sure you feel safe and comfortable in your home.",
    imageUrl: new URL("../assets/YourHome/SupportedCard1.png", import.meta.url)
      .href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-[#F0F7FE]",
    buttonPadding: "pb-[2rem]",
  },
  {
    name: "FAQs",
    role: "Here’s where you can find answers to some of the most commonly asked questions.",
    imageUrl: new URL("../assets/YourHome/SupportedCard2.png", import.meta.url)
      .href,
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-[#F0F7FE]",
    buttonPadding: "pb-[2rem]",
  },
  {
    name: "Council tax & utilities",
    role: "Need help understanding or managing your utility bills?",
    imageUrl: new URL("../assets/YourHome/SupportedCard3.png", import.meta.url)
      .href,
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-[#F0F7FE]",
    buttonPadding: "pb-[2rem]",
  },
  // More people...
];
</script>

<style scoped>
/* @media (min-width: 1200px) {
  .lg\:w-\[70\%\] {
    max-width: 1140px;
  }
} */
.bgImg {
  background-image: url("../assets/YourHome/YourHomeBG.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.contentImg {
  /* background-image: url("../assets/outline-house@4.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 100%;
  background: #1d1d33;
  background: linear-gradient(161deg, #1d1d33 0%, rgba(29, 29, 51, 0.44) 100%);
  /* height: 40%; */
  /* background-color: #000126;
  background-image: linear-gradient(-48deg, #000000 20%, #422418 55%); */
}

.groupImg {
  background-image: url("../assets/Group\ 96.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
}

.bg-image-update {
  background-image: url("../assets/you-always-Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.font-custom-color {
  color: #1d1d33 !important;
}
</style>
