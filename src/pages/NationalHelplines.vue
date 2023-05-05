<template>
    <!-- Step 1 -->
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
      <nav class="container flex items-center justify-start gap-3 inner">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="home">Home</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="help-and-advice">Help & advice</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="national-helplines">National Helplines</router-link>
        </div>
      </nav>
    </div>
    <!-- Step 1 -->
    <!-- Step 2 --> 
    <div class="w-full min-h-[600px]">
      <PageBanner />
    </div>
    <!-- Step 2 -->

    <!-- Step 3 -->
      <div class="lg:pt-8 sm:pt-8 ml-[0.5rem]"> 
        <div class="pt-3 container">
        <div class="text-center">
          <div class="grid md:grid-cols-3 grid-cols-1 items-start gap-[24px]">
            <div class="bg-[#EC254E]/10">
              <img class="h-50 w-full object-cover" src="../assets/logo-samaritans.jpg" alt />
              <div class="flex flex-col justify-between">
                <div class="p-[30px]">
                  <h3 class=" mt-0 text-[20px] font-black-custom text-left text-[#20407C]">Samaritans</h3>
                  <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">
                    This Samaritans 24-hour service to talk to right now call <span class="text-primary font-bold-custom text-[18px] underline">116 123</span> or <span class="text-primary font-bold-custom text-[18px] underline">jo@samaritans.org</span>
                  </p>
              
                </div>
                <div class="text-left p-[30px]">
                  <button class="bg-[#EC254E] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-regular-custom text-[16px} text-white shadow-sm hover:bg-[#EC254E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"> 
                    Call Someone now
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-[#EC254E]/10">
              <img class="h-50 w-full object-cover" src="../assets/logo-shout.jpg" alt />
              <div class="flex flex-col justify-between">
                <div class="p-[30px]">
                  <h3 class=" mt-0 text-[20px] font-black-custom text-left text-[#20407C]">Shout 85258</h3>
                  <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">
                    24/7 crisis supprt across the UK. Text <span class="font-bold-custom text-[18px]">SHOUT</span> to <span class="text-primary font-bold-custom text-[18px] underline">85258</span> if  you are experiencing a mental health crisis and need support.
                  </p>              
                </div>
                <div class="text-left p-[30px]">
                  <button class="bg-[#EC254E] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-regular-custom text-[16px} text-white shadow-sm hover:bg-[#EC254E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  > Text Someone now</button>
                </div>
              </div>
            </div>
            <div class="bg-[#EC254E] py-9 pl-9 pr-4 text-left"> 
              <img  class="icon" src="../assets/Icon.png" alt="ariticle">
              <h1 class="pt-4 text-[24px] font-black-custom text-white">If you need immediate help</h1>
              <h3 class="text-[18px] font-black-custom text-white mt-3">In and emergency:</h3>
              <p class="text-[18px] text-white font-regular-custom">
                Call <span class="font-bold-custom text-[18px]">999</span> or go to your local A&E department.</p>
              <p class="text-[18px] text-white font-regular-custom mt-4">If you're in crisis and neesd to speak to someone: <br>
                Call NHS <span class="font-bold-custom text-[18px]">111</span> (for when you need help but are not in immediate danger).
                <br> Contact your GP and ask for an emergency appointment. <br> Contact the Samaritans (details below).</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- Step 3 -->

    <!-- Step 4 -->
    <div class="container pt-[100px]">
      <h1 class="mb-10 text-[36px] text-[#20407C] font-regular-custom">
        More help and advice
      </h1> 
      <div class="w-full mx-auto flex justify-center">      
        <div class="grid md:grid-cols-2 grid-cols-1 gap-[24px] gap-y-[60px]"> 
          <Cards :message="people"/>
        </div>
      </div>
    </div>
    <!-- Step 4 -->
    
    
    <NeedHelp />
    
</template>

<script setup>
import Cards from "../components/NationalHelplinesCard.vue"; 
import NeedHelp from "../components/NeedHelp.vue";
import PageBanner from "../components/PageBanner.vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
return hover.hover;
});
const people = [
{
  name: "Mind",
  role: "Excerpt for the page goes in here like so loren ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/logo-mind.jpg", import.meta.url).href,
  twitterUrl: "#",
  linkedinUrl: "#",
  btnIcon: new URL("../assets/Svg/Large.svg", import.meta.url).href,
  btnName: "Visit Website"
},
{
  name: "Young Minds",
  role: "Excerpt for the page goes in here like so loren ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/logo-young-minds.jpg", import.meta.url).href,
  btnIcon: new URL("../assets/Svg/Large.svg", import.meta.url).href,
  btnName: "Visit Website"
},
{
  name: "Citizens Advice Bureau",
  role: "Excerpt for the page goes in here like so loren ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/logo-citizens-advice.jpg", import.meta.url).href,
  btnIcon: new URL("../assets/Svg/Large.svg", import.meta.url).href,
  btnName: "Visit Website"
},
{
  name: "Trussel Trust",
  role: "Excerpt for the page goes in here like so loren ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/logo-trussel-trust.jpg", import.meta.url).href,
  btnIcon: new URL("../assets/Svg/Large.svg", import.meta.url).href,
  btnName: "Visit Website"
},
{
  name: "Salvation Army",
  role: "Excerpt for the page goes in here like so loren ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/logo-salvation-army.jpg", import.meta.url).href,
  btnIcon: new URL("../assets/Svg/Large.svg", import.meta.url).href,
  btnName: "Visit Website"
}
  // More people...
];

</script>


<style scoped>

</style>