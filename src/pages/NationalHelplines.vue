<template>
    <!-- Step 1 -->
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
      <nav class="w-[70%]  mx-auto flex items-center justify-start gap-3 inner ">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Home</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Help & advice</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >National Helplines</div>
      </nav>
    </div>
    <!-- Step 1 -->
    <!-- Step 2 --> 
    <div class="w-full min-h-[500px] bg-red-400 bgImg">
      <div class="w-[60%] h-[500px] mx-auto flex items-center">
        <div class="w-[365px] h-[380px] contentImg lg:ml-14"></div>
        <div class="w-[409px] h-[45px] min-h-[60px] max-w-sm groupImg lg:ml-20">
          <h1 class="font-light-custom text-[36px] leading-none text-white content">
            <span>National </span>
            <span class="font-black-custom text-[36px]">helplines</span>
          </h1>
          <p class="text-white mt-4 font-regular-custom text-[15px] content2">Short Introductory summary for the page<br />goes here lilke so</p>
        </div>
      </div>
    </div>
    <!-- Step 2 -->

    <!-- Step 3 -->
      <div class="lg:pt-8 sm:pt-8 ml-[0.5rem]"> 
        <div class="pb-10 pt-3 w-[60%] mx-auto">
        <div class="text-center">
          <div role="list" class="mx-auto flex lg:flex-nowrap flex-wrap gap-8">
            <div class="h-[425px] w-[288px] bg-[#EC254E]/10">
              <img class="h-50 w-full object-cover" src="../assets/logo-samaritans.jpg" alt />
              <div class="flex flex-col justify-between h-[288px]">
                <div class="py-4 px-6 ">
                  <h3 class=" mt-0 text-[20px] font-black-custom text-left text-[#20407C]">Samaritans</h3>
                  <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">
                    This Samaritans 24-hour service to talk to right now call <span class="text-primary font-bold-custom text-[18px] underline">116 123</span> or <span class="text-primary font-bold-custom text-[18px] underline">jo@samaritans.org</span>
                  </p>
              
                </div>
                <div class="text-left py-4 px-6 pb-[2rem]">
                  <button
                    type="button"
                    class="bg-[#EC254E] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-xbold-custom text-[16px} text-white shadow-sm hover:bg-[#EC254E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  > Call Someone now</button>
                </div>
              </div>
            </div>
            <div class="h-[425px] w-[288px] bg-[#EC254E]/10">
              <img class="h-50 w-full object-cover" src="../assets/logo-shout.jpg" alt />
              <div class="flex flex-col justify-between h-[288px]">
                <div class="py-4 px-6 ">
                  <h3
                    class=" mt-0 text-[20px] font-black-custom text-left text-[#20407C]"
                  >Shout 85258</h3>
                  <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">
                    24/7 crisis supprt across the UK. Text <span class="font-bold-custom text-[18px]">SHOUT</span> to <span class="text-primary font-bold-custom text-[18px] underline">85258</span> if  you are experiencing a mental health crisis and need support.
                  </p>              
                </div>
                <div class="text-left py-4 px-6 pb-[4rem]">
                  <button type="button" class="bg-[#EC254E] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-xbold-custom text-[16px} text-white shadow-sm hover:bg-[#EC254E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  > Text Someone now</button>
                </div>
              </div>
            </div>
            <div class="min-h-[530px] w-[288px] bg-[#EC254E] py-9 pl-9 pr-4 text-left"> 
              <img  class="icon" src="../assets/Icon.png" alt="ariticle">
              <h1  class="pt-4 text-[24px] font-black-custom text-white">If you need immediate help</h1><br>
              <h3  class="text-[20px] font-black-custom text-white">In and emergency:</h3>
              <p   class="text-[18px] text-white font-regular-custom">
                Call <span class="font-bold-custom text-[18px]">999</span> or go to your local A&E department.  <br> <br>
                If you're in crisis and neesd to speak to someone: <br>
                Call NHS <span class="font-bold-custom text-[18px]">111</span> (for when you need help but are not in immediate danger).
                <br> Contact your GP and ask for an emergency appointment. <br> Contact the Samaritans (details below).</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- Step 3 -->


    <!-- Step 4 -->
    <h1 class="lg:ml-[22rem] mb-10 text-[36px] text-[#20407C]">
      <span>More help and advice </span>
    </h1> 
    <div class="w-full mx-auto flex justify-center">      
      <div class="grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1  gap-6"> 
        <Cards :message="people"/>
      </div>
    </div>
    <!-- Step 4 -->
    
    
    <NeedHelp />
    
</template>

<script setup>
import Cards from "../components/NationalHelplinesCard.vue"; 
import NeedHelp from "../components/NeedHelp.vue";
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


.bgImg {
background-image: url("../assets/overlay-image-i.jpg");
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