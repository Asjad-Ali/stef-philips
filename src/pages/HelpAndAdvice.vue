<template>
    <div class="h-[40px] w-full bg-[#1D1D33] opacity-50 bl flex justify-center ">
        <nav class="w-[70%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
          <div exact-active-class="exact-active" class="text-white font-bold-custom text-[14px]">Home</div>
          <i class="pi pi-angle-right text-white"></i>
          <div active-class="active" class="text-white font-bold-custom text-[14px]">Help & advice</div>
        </nav>
      </div> 
        <!-- section 1 -->
        <div class="lg:w-full min-h-[600px] bg-red-400 bgImg">
            <div class="w-full h-[600px] flex justify-center items-center">
         <div class="mx-auto w-[70%] ">
                <h1
                  class="text-white w-[100%]"
                >
                  <div class="font-light-custom text-[42px]">Help & advice</div>
                </h1>
                <p
                  class="text-white mt-4 font-regular-custom text-[18px] lg:w-[50%]"
                >
                  Short Introductory summary for the page<br />goes here lilke so
                </p>
              </div>
            </div>
        </div>
          <!-- section 2 -->
         <div class="lg:pt-8 sm:pt-8"> 
            <Cards :message="people"/>
         </div>
          <!-- section 3 -->
          <NeedHelp />
          <!-- section 4 -->
          <div
          class="w-[70%] mx-auto py-20 xxs:py-10 bg-[#EC254E]/10 my-20 lg:px-20 sm:px-16 xxs: px-12 xxxs:px-7"
        >
          <div class="mx-auto">
            <h1 class="block py-4 font-light-custom md:text-[36px] xxs:text-[30px] text-third">
              Out of hours
              <span class="font-black-custom md:text-[36px] xxs:text-[28px]">emergencies</span>
            </h1>
            <p class="font-regular-custom text-[18px]">
              Little into here, out of hours are Weekends, Bank Holidays and between
              6pm - 7am daily
            </p>
            <br>
             <p class="font-regular-custom text-[18px]">
              If it’s not urgent, the quickest way to report an issue and get it
              fixed, is using <span class="text-primary font-bold-custom text-[18px]">our online form </span> now
            </p>
            <div class="flex flex-wrap md:gap-5 xxs:gap-1 pt-4">
              <img class="lg:max-w-sm" src="../assets/Svg/PhoneIcon.svg" alt />
              <div
                class="mt-8 text-third  lg:text-4xl sm:text-2xl xxxs:text-md"
              >
                <pre class="font-black-custom text-[24px]">020 00000 000</pre>
              </div>
            </div>
            <button
              type="button"
              class="bg-trisec font-xbold-custom md:text-[16px] xxs:text-[14px] xxs:py-3 md:py-4 xxs:px-4 md:px-8 mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              What is an emergencey
            </button>
          </div>
        </div>
</template>

<script setup>
import Cards from "../components/Cards.vue";
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
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more"
  },
  {
    name: "Local services",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find my council",
    btnIcon: 
    new URL("../assets/Svg/Large.svg", import.meta.url).href,
  },
  {
    name: "Help in your home",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/ThreeCardFlexN.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName:"Find out more"
  }
  // More people...
];
</script>
<style scoped>
.bgImg {
    background-image: url("../assets/Svg/HeaderBackground.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>