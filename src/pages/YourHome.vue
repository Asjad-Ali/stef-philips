<template>
  <!-- <div class="dropdown-content">
              <router-link active-class="active" class="font-semibold text-sm" to="">FAQS</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Press & media</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Community</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Housing partners</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Investors</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Media</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Generral</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Lettings valuation</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Submitted</router-link>
            </div> -->
            <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[70%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Your home</div>

    </nav>
  </div> 
  <div class="lg:w-full min-h-[600px] bg-red-400 Bg">
    <div class="w-full h-[600px] flex justify-center items-center manOverlayBg">
      <div class="w-[70%]">
        <div class="font-light-custom text-[42px] text-white leading-snug">
          <div>Your <span class="text-white font-black-custom text-[42px]">Home</span></div>
        </div>
        <p class="text-white mt-4 font-regular-custom text-[18px] leading-snug">
          Short Introductory summary for the page<br />goes here like so
        </p>
      </div>
    </div>
  </div>
  <!-- step 2 -->
  <Cards  :message="message" />
  <!-- step 3 -->
  <div class="bg-sky-50 py-28 min-h-[400px]">
    <div class=" mx-auto w-[70%]">
      <div class="text-[#20407C] text-[30px] font-black-custom">
        What happens in your home?
      </div>
      <div class="py-6 text-[18px] font-regular-custom">
        Excerpt for the page goes in here like so lorem ipsum<br>dolor sit amet,
        consectetur adipiscing elit.
      </div>
    </div>
    <YourCard />
  </div>

  <!-- step 4 -->
  <Cards :message="people"/>
  <!-- step 5 -->
  <div
    class=" w-[70%] mx-auto py-20 xxs:py-10 bg-[#EC254E]/10 my-20 xxs:my-10 lg:px-20 sm:px-16 xxs: px-12 xxxs:px-7"
  >
    <div class=" mx-auto">
      <h1 class="block py-4 font-light-custom md:text-[36px] xxs:text-[30px] text-third">
        Out of hours
        <span class="font-black-custom md:text-[36px] xxs:text-[28px]">emergencies</span>
      </h1>
      <p class="font-regular-custom text-[18px]">
        Little into here, out of hours are Weekends, Bank Holidays and between
        6pm - 7am daily
      <br>
        If it’s not urgent, the quickest way to report an issue and get it
        fixed, is using <span class="text-primary font-bold-custom text-[18px]">our online form </span> now
      </p>
      <div class="flex flex-wrap md:gap-5 xxs:gap-1 pt-4">
        <img class="lg:max-w-sm" src="../assets/Svg/PhoneIcon.svg" alt />
        <div
          class="mt-8 text-third font-semibold font lg:text-4xl sm:text-2xl xxxs:text-md"
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
import YourHomeCard from "../components/YourHomeCards.vue";
import YourCard from "../components/YourCard.vue"
import Cards from "../components/Cards.vue";
import { Icon } from "@iconify/vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
const message = [
  {
    name: "Report a repair or maintenance",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
   btnName: "Report now"
  },
  {
    name: "Report Anti-social Behavior",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    btnName: "Report now"
  },
  {
    name: "Council tax or utilities",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
   btnName: "Report now"
  }
  // More people...
];
const people = [
  {
    name: "Meet your team",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    btnName: "Find out more"
  },
  {
    name: "Report a repair or maintenance",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
   btnName: "Find out more"
  },
  {
    name: "Useful videos",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
   btnName: "Explore now"
  }
  // More people...
];
</script>

<style scoped>
.Bg {
  background-image: url("../assets/Svg/ManBg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.manOverlayBg {
  background-image: url("../assets/Svg/ManOverlay.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.bgImg {
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>

