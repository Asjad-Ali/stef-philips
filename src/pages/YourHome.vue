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
      <div class="contentImg">
      <div class="w-full h-[600px] flex justify-center items-center">
        <div class="mx-auto w-[70%] ">
          <h1 class="text-white w-[100%]">
            <div class="font-light-custom text-[42px]">Your <strong>Home</strong></div>
          </h1>
          <p class="text-white font-regular-custom text-[18px] ">
            “We are really proud to have become a leading provider of safe, secure accommodation for those who need it the
            most.” <br> <strong>- Philip Philippou, Chairman</strong>
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
  <!-- step 2 -->
  <div class=" py-28 min-h-[400px]">
    <div class=" mx-auto w-[70%]">
      <div class="text-[#20407C] text-[30px] font-black-custom">
        About Your Home
      </div>
      <div class="py-6 text-[18px] font-regular-custom">
        Introduction around the types of accommodation, to get more detail, please click on whether you’re on temporary or PRS.. Copy to include: we care about your well-being, comfort etc. Find out everything from check-in to check out, how to manage your home, utilities etc.
      </div>
    </div>
    <div class="card flex items-start justify-content-between gap-5 w-full " >
        <Card :message="card1" style="background-color:white;"/>
    </div>
  </div>
  <Cards  :message="message" />
  <!-- step 3 -->
  <div class="bg-sky-50 py-28 min-h-[400px] bgImg1">
    <div class=" mx-auto w-[70%]">
      <div class="text-white text-[30px] font-black-custom">
        You’re always fully supported
      </div>
      <p class="text-white font-regular-custom text-[18px] ">
        Different areas of the business <br> Colloborative etc
      </p>
    </div>
    <Cards :message="people"/>
  </div>

  <!-- step 4 -->
 
  <!-- step 5 -->
  <div
    class=" w-[70%] mx-auto py-20 xxs:py-10 my-20 xxs:my-10 lg:px-20 sm:px-16 xxs: px-12 xxxs:px-7"
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
import Card from '../components/VerticalGreyCard.vue'
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
    new URL("../assets/RectangularFlex.png", import.meta.url).href,
    btnName: "Find out more"
  },
  {
    name: "FAQs",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/faqs1.png", import.meta.url).href,
   btnName: "Find out more"
  },
  {
    name: "Help in your home",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/home4.png", import.meta.url).href,
   btnName: "Find out more"
  }
  // More people...
];
</script>

<style scoped>
.Bg {
  background-image: url("../assets/ManBg.png");
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
.bgImg1
 {
  background-image: url("../assets/homebackground.png");
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
  /* background-position: center; */
  /* Path 543 */

  /* position: absolute; */
  width: 434px;
  height: 452px;
  margin-left: -40%;
  /* margin-top: 5%; */
  opacity: 90%;
}

.bgImg {
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>

