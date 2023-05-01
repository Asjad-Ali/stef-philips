<template>
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent bg-nav">
    <nav
      class="lg:w-[70%] xxxs:w-[80%] sm:w-[93%]] mx-auto flex items-center justify-start gap-3 inner lg:pl-[15px]"
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
      <i class="pi pi-angle-right font-bold text-[grey]"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="meet-the-team">Meet the team</router-link>
      </div>
    </nav>
  </div>

  <div class="w-full min-h-[460px] bgImg-custom">
    <div
      class="lg:w-[70%] xxs:w-[95%] sm:w-[75%] md:w-[94%] lg:h-[500px] xxs:h-[500px] mx-auto flex items-center"
    >
      <!-- mx-auto p-3 -->
      <div
        class="lg:w-[480px] xxs:w-[250px] h-[auto] lg:ml-[14px] xxs:ml-[35px] sm:ml-[7px] lg:p-[2rem] sm:p-[2rem] xxs:p-[2rem] contentImg"
      >
        <h1 class="lg:text-[38px] xxs:text-[18px] text-white font-[300]">
          <span class="font-black-custom lg:text-[38px] xxs:text-[18px]"
            >Meet your Team
          </span>
        </h1>
        <p class="text-[18px] text-white font-[400]">
          Short Introductory summary for the page goes here lilke so
        </p>
      </div>
    </div>
  </div>

  <div class="w-full">
    <HorizontalCardVue :message="card1" />
    <HorizontalCardVue :message="card2" />
    <HorizontalCardVue :message="card3" />
  </div>
  <div class="pt-3 lg:w-[70%] sm:w-[90%] xxxs:w-[75%] mx-auto mt-7">
    <h1 class="text-trisec leading-[50px] font-semibold text-left mb-[4rem]">
      <span
        class="font-light-custom lg:text-[36px] xxxs:text-[23px] sm:text-[30px] mr-2"
        >Reasons they may need to
      </span>
      <span
        class="font-black-custom lg:text-[36px] xxxs:text-[23px] sm:text-[30px]"
        >enter your home:</span
      >
    </h1>
    <div class="justify-center">
      <div
        class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"
      >
        <HomeMeetTeamCard :message="peoplecards" />
      </div>
    </div>
  </div>
  <div class="mb-2">
    <NeedHelp />
  </div>
</template>
<script setup>
import HorizontalCardVue from "../components/HorizontalCard.vue";
import NeedHelp from "../components/NeedHelp.vue";
import HomeMeetTeamCard from "../components/HomeMeetTeamCard.vue";

const card1 = {
  bgclass: " white ",
  header: "Meet your",
  boldheader: " Housing Officer",
  // btn: ["Read out more"],
  img: "src/assets/Card-Image2.png",
  paragraph:
    "At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.",
  b: true,
};
const card2 = {
  direction: "rtl",
  class: " flex flex-row-reverse ",
  header: "Field worker",
  boldheader: " Housing Officer",
  // btn: ["Read out more"],
  img: "src/assets/Card-Image2.png",
  paragraph:
    "At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.",
  flex: "items-end",
  b: true,
};
const card3 = {
  class: " flex flex-row-reverse ",
  header: "Maintainance worker",
  boldheader: " Housing Officer",
  // btn: ["Read out more"],
  img: "src/assets/Card-Image2.png",
  paragraph:
    "At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.",
  b: true,
};
const peoplecards = [
  {
    name: "Cleaning services",
    // role: "Short description excerpt here",
    imageUrl: new URL("../assets/need-help-Shape-G.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    // btnName: "Report now",
    height: "h-auto",
    width: "w-[340px]",
    button_url: "",
    // color: "bg-sky-50",
    // buttonPadding: "pb-[2rem]",
  },
  {
    name: "Occupancy checks",
    // role: "Short description excerpt here",
    imageUrl: new URL(
      "../assets/YourHome/OccupancyCheckShape.png",
      import.meta.url
    ).href,
    // btnName: "Report now",
    height: "h-auto",
    width: "w-[340px]",
    button_url: "",
    // color: "bg-sky-50",
    // buttonPadding: "pb-[2rem]",
  },
  {
    name: "Weekly house officer visits",
    // role: "Short description excerpt here",
    imageUrl: new URL("../assets/need-help-Shape-G.png", import.meta.url).href,
    // btnName: "Report now",
    height: "h-auto",
    width: "w-[340px]",
    button_url: "",
    // color: "bg-sky-50",
    // buttonPadding: "pb-[2rem]",
  },
  // More people...
];
</script>

<style scoped>
.bg-nav {
  background-color: #1d1d33 !important;
}
.nav-bar-tranparent {
  position: absolute;
  opacity: 1.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.bgImg-custom {
  /* background-image: url("../assets/overlay-image-l.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #20407c;
}
</style>
