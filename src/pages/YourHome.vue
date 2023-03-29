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

  <div class="lg:w-full bg-red-400 bgImg">
    <div class="w-full h-[600px] flex justify-center items-center manOverlayBg">
      <div class="w-[60%]">
        <div class="text-5xl text-white leading-snug">
          <div>Your <span class="text-white font-bold">Home</span></div>
        </div>
        <p class="text-white mt-4 tracking-wide leading-snug">
          Short Introductory summary for the page<br />goes here like so
        </p>
      </div>
    </div>
  </div>
  <!-- step 2 -->
  <YourHomeCard />
  <!-- step 3 -->
  <div class="bg-sky-50 py-28 min-h-[400px]">
    <div class="max-w-5xl mx-auto w-[60%]">
      <div class="text-second text-4xl font-semibold">
        What happens in your home?
      </div>
      <div class="py-6 text-lg">
        Excerpt for the page goes in here like so lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </div>
    </div>
    <YourCard />
  </div>

  <!-- step 4 -->
  <YourHomeCard />
  <!-- step 5 -->
  <div
    class="max-w-5xl w-[60%] mx-auto py-20 xxs:py-10 bg-[#EC8B7E]/10 my-20 xxs:my-10 lg:px-20 sm:px-16 xxs: px-12 xxxs:px-7"
  >
    <div class="max-w-4xl mx-auto">
      <h1 class="block py-4 text-4xl xxs:text-3xl text-third">
        Out of hours
        <span class="font-bold">emergencies</span>
      </h1>
      <p class="">
        Little into here, out of hours are Weekends, Bank Holidays and between
        6pm - 7am daily
      </p>
      <p class="pb-4">
        If it’s not urgent, the quickest way to report an issue and get it
        fixed, is using <span class="text-primary">our online form </span> now
      </p>
      <div class="flex gap-10 xxs:gap-2">
        <img class="lg:max-w-sm" src="../assets/phone.png" alt />
        <div
          class="mt-8 text-third font-semibold font lg:text-4xl sm:text-2xl xxxs:text-md"
        >
          <pre>020 00000 000</pre>
        </div>
      </div>

      <button
        type="button"
        class="bg-trisec py-4 px-8 text-sm xxxs:px-5 mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        What is an emergencey
      </button>
    </div>
  </div>
</template>

<script setup>
import YourHomeCard from "../components/YourHomeCards.vue";
import YourCard from "../components/YourCard.vue";
import { Icon } from "@iconify/vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
</script>

<style scoped>
.Bg {
  background-image: url("../assets/manBg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.manOverlayBg {
  background-image: url("../assets/Overlay");
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