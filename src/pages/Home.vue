<template>
  <!-- <div class="h-12 w-full bcrumbs bl "  >
        <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-4 inner p-3 " >
          <router-link exact-active-class="exact-active" class="text-white font-semibold text-sm" to="/home">Home</router-link>
          <i class="pi pi-angle-right text-white"></i>
          <div class="dropdown">
            <router-link active-class="active" class="text-white font-semibold text-sm dropbtn" to="/your-home">Your home</router-link>
            <div class="dropdown-content">
              <router-link active-class="active" class="font-semibold text-sm" to="">Quick report</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Report an issue</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Repairs $ maintenance</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Anti-social behaviour</router-link> 
            <router-link active-class="active" class="font-semibold text-sm" to="">Other issues</router-link>
            <router-link active-class="active" class="font-semibold text-sm" to="">Out of hours emergencies</router-link>
            <router-link active-class="active" class="font-semibold text-sm" to="">Tenant services</router-link>
            <router-link active-class="active" class="font-semibold text-sm" to="">Temporary accomodation</router-link>
            <router-link active-class="active" class="font-semibold text-sm" to="">PRS</router-link>
            <router-link active-class="active" class="font-semibold text-sm" to="">Repair responsibilities</router-link>
            </div>
          </div>
        </nav>
      </div>  -->
  <div class>
    <div class="w-full min-h-[600px] bg-red-400 bgImg">
      <div class="w-[60%] h-[600px] mx-auto flex items-center">
        <div class="max-w-sm">
          <h1 class="font-light-custom text-[42px] text-white tracking-wide leading-snug">
            <span>Foundations for</span>
            <br />
            <span class="font-black-custom text-[42px]">better lives</span>
          </h1>
          <p
            class="text-white mt-4 font-regular-custom text-[18px]"
          >Safe, suitable homes and vital services for tenants, authorities and partners, backed by investors who care.</p>
        </div>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="w-full flex justify-center">
    <div class="w-[60%]">
      <div class="py-20">
      <div class=" grid md:grid-cols-2 grid-cols-1 gap-20">
        <div >
          <h1 class="mt-12 text-trisec">
            <span class="font-light-custom text-[36px]">Working towards a world</span>
            <span class="font-black-custom text-[36px]"> without homelessness</span>
          </h1>
          <p
            class="mt-6 font-regular-custom text-[18px]"
          >At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.</p>
          <button
            type="button"
            class="bg-trisec py-4 px-12 font-xbold-custom text-[16px] mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >About us</button>
        </div>
        <div class="flex justify-center ">
          <img src="../assets/HeroSection.png" alt >
        </div>
      </div>
    </div>
    </div>
    </div>
    <Cards />
    
    
    <!--  -->
   
    <div class="py-20 w-[60%] mx-auto">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1 ">
        <div class>
          <img src="../assets/Background.png" class="z-50 h-full w-full object-cover" alt />
        </div>
        <div class="flex items-center justify-center py-10">
          <div class="w-4/5 mt-6 md:mt-0 ">
            <span class="text-2xl    text-primary">
              <Icon icon="ooui:quotes-ltr" />
            </span>
            <h1
              class="font-light-custom text-[20px] text-white mt-5"
            >Stef & Philips have been short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this.</h1>
            <div class="my-5">
              <h1 class="font-regular-custom text-[18px] text-white">Name here</h1>
              <h1 class="font-black-custom text-[18px] text-white">Title here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>    

    <!-- image -->
    <div class="happyG w-full min-h-[700px] relative overflow-hidden ">
      <div class="absolute top-0 w-full h-full flex items-center justify-center left-0 happyS">
        <div class="w-[60%] mx-auto grid grid-cols-1">
          <div class="max-w-lg">
            <div class="">
              <h1 class="font-light-custom text-[36px] leading-snug text-white">
                Striving to make the lives of vulnerable people
                <span class="font-black-custom text-[36px]">safer</span> and
                <span class="font-black-custom text-[36px]">more secure</span>
              </h1>
              <p
                class="mt-4 text-white font-regular-custom text-[18px]"
              >We construct and manage fit-for-purpose properties in areas of high demand, providing tangible solutions to the current housing crisis and giving vulnerable people a lifeline and an opportunity to get back on their feet.</p>
            </div>

            <div class="flex xxs:flex-wrap xs:flex-nowrap items-center justify-center sm:justify-start gap-4">
              <button
                type="button"
                class="bg-transparent whitespace-nowrap ring-2 ring-white py-3.5 px-8 font-xbold-custom text-[16px] mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >For housing partners</button>
              <button
                type="button"
                class="bg-transparent ring-2 ring-white py-3.5 px-8 font-xbold-custom text-[16px] mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >For Investors</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center bg-second py-40">
      <div class="w-[60%]">
        <h1 class="text-white font-light-custom text-[36px]">Key S&P stats e.g. broad</h1>
        <div class="grid md:grid-cols-3 gap-12 grid-cols-1 sm:grid-cols-2 mt-10">
          <div class>
            <img src="../assets/shapeg.png" alt />
            <h1 class="py-4 text-white font-black-custom text-[20px]">17 years experience</h1>
            <p
              class="text-white font-regular-custom text-[18px]"
            >Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class>
            <img src="../assets/shapef.png" alt />
            <h1 class="py-4 text-white font-black-custom text-[20px]">Properties Managed</h1>
            <p
              class="text-white font-regular-custom text-[18px]"
            >Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class>
            <img src="../assets/shapei.png" alt />
            <h1 class="py-4 text-white font-black-custom text-[20px]">Housing Experience</h1>
            <p
              class="text-white font-regular-custom text-[18px]"
            >Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!--  -->

    <div class=" w-[60%] mx-auto px-8 py-20 bg-[#EC8B7E]/10 my-20">
      <div class="max-w-4xl mx-auto ">
        <img src="../assets/pink.png" alt />
        <h1 class="font-light-custom text-[36px] py-4 text-[#20407C]">
          Need help
          <span class="font-black-custom text-[36px]">with your home</span>
        </h1>
        <span
          class="pb-4 font-regular-custom text-[18px]"
        >Use our quick online form.</span>
        <span class="font-bold-custom text-[18px]">The quickest way to report an issue and get it fixed.</span>
        <div class="flex flex-wrap items-center gap-6">
          <button
            type="button"
            class="bg-[#2A8CFB] py-4 px-8 font-xbold-custom text-[16px] mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >Quick report</button>
          <button
            type="button"
            class="bg-trisec py-4 px-8 font-xbold-custom text-[16px] mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >Report a repair or maintainance</button>
        </div>
      </div>
    </div>
    <Cards />

  </div>
</template>

<script setup>
import Cards from "../components/Cards.vue";
import { Icon } from "@iconify/vue";
import {useAppStore} from "../store/index"
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
</script>

<style  scoped>
.bcrumbs{
  background-color: rgba(29, 29, 51, 0.5)
}
.bgImg {
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyG {
  background-image: url("../assets/girl.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.happyS {
  background-image: url("../assets/bggray.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>