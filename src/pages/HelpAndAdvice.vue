<template>
  <!-- Step 1 -->
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav class="w-[70%] mx-auto flex items-center justify-start gap-3 inner">
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
        <router-link to="help-and-advice">Help & advice</router-link>
      </div>
    </nav>
  </div>
  <!-- Step 1 -->
  <!-- Step 2 -->
  <div class="w-full min-h-[500px] bg-red-400 bgImg">
    <div class="w-[60%] h-[500px] mx-auto flex items-center">
      <div class="w-[365px] h-[380px] contentImg lg:ml-14"></div>
      <div
        class="w-[409px] h-[45px] min-h-[60px] max-w-sm groupImg lg:ml-[6rem]"
      >
        <h1
          class="font-light-custom text-[40px] leading-none text-white content"
        >
          <span class="font-black-custom text-[40px]">Help </span>
          <span>and advice</span>
        </h1>
        <p class="text-white mt-4 font-regular-custom text-[15px] content2">
          Short Introductory summary for the page<br />goes here lilke so
        </p>
      </div>
    </div>
  </div>
  <!-- Step 2 -->

  <!-- Step 3 -->
  <div class="pb-10 pt-3 w-[60%] mx-auto mt-[8rem] mb-10">
    <div class="justify-center">
      <div
        class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"
      >
        <Cards :message="people" />
      </div>
    </div>
  </div>

  <!-- Step 3 -->

  <!-- Step 4 -->
  <NeedHelp />
  <!-- Step 4 -->

  <!-- Step 5 -->
  <HourEmergencies />
  <!-- Step 5 -->
</template>

<script setup>
import Cards from "../components/YourHomeCards.vue";
import HourEmergencies from "../components/HourEmergencies.vue";
import NeedHelp from "../components/NeedHelp.vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});

const people = [
  {
    name: "National helplines",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/RectangularFlex.svg", import.meta.url)
      .href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-sky-50",
    buttonPadding: "pb-[2rem]",
  },
  {
    name: "Local services",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/RectangularFlex.svg", import.meta.url)
      .href,
    btnName: "Find my council",
    btnIcon: new URL("../assets/Svg/Large.svg", import.meta.url).href,
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-sky-50",
    buttonPadding: "pb-[2rem]",
  },
  {
    name: "Help in your home",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/RectangularFlex.svg", import.meta.url)
      .href,
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-sky-50",
    buttonPadding: "pb-[2rem]",
  },
  // More people...
];
</script>
<style scoped>
.nav-bar-tranparent {
  position: absolute;
  opacity: 0.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.bgImg {
  background-image: url("../assets/overlay-image-l.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  position: absolute;
}
</style>
