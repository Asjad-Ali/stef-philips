<template>

  <div class>
    <div class="w-full min-h-[600px] bg-red-400 bgImg">
      <div class="w-[70%] h-[600px] mx-auto flex items-center">
        <div class="max-w-sm">
          <h1 class="font-light-custom text-[42px] leading-none text-white ">
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
    <div class="w-[70%]">
      <div class="py-20">
      <div class=" flex gap-20 md:flex-nowrap flex-wrap items-center justify-center">
        <div class="md:w-[45%] w-full ">
          <h1 class="leading-none text-trisec">
            <span class="font-light-custom lg:text-[36px] text-[25px]">Working towards a world<br><span class="font-black-custom lg:text-[36px] text-[25px]">without<br>homelessness</span></span>
            
          </h1>
          <p
            class="mt-3 font-regular-custom lg:text-[18px] text-[12px]">
            At Stef & Philips, we strive to make the lives of <br> vulnerable people safer and more secure.<br>We do this by delivering safe, suitable homes <br>and vital services for tenants, authorities and<br> partners, while providing secure investments for<br> private and corporate investors.</p>
          <button
            type="button"
            class="bg-[#20407C] h-[50x] w-[164px] py-4 px-12 font-xbold-custom text-[16px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >About us</button>
        </div>
        <div class="flex justify-center md:w-[55%] w-full"> 
          <img src="../assets/Svg/HorizontalFlex.svg" alt >
     
        </div>
      </div>
    </div>
    </div>
    </div>
    <Cards />
    
    
    <!--  -->
   
    <div class="py-20 w-[70%] mx-auto">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1 ">
        <div >
          <img src="../assets/Svg/Media.svg"  alt />
        </div>
        <div class="flex items-center justify-center ">
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
        <div class="w-[70%] mx-auto grid grid-cols-1">
          <div class="max-w-lg">
            <div class="">
              <h1 class="font-light-custom sm:text-[36px] text-[30px]  text-white leading-none">
                Striving to make the lives of vulnerable people
                <span class="font-black-custom sm:text-[36px] text-[30px]">safer</span> and
                <span class="font-black-custom sm:text-[36px] text-[30px]">more secure</span>
              </h1>
              <p
                class="mt-4 text-white font-regular-custom sm:text-[18px] text-[12px]"
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

    <div class="flex justify-center bg-second py-48">
      <div class="w-[70%]">
        <h1 class="text-white font-light-custom text-[36px]">Key S&P stats e.g. broad</h1>
        <div class="grid md:grid-cols-3 gap-12 grid-cols-1 sm:grid-cols-2 mt-10">
          <div class>
            <img src="../assets/Svg/WhiteHouseN.svg" alt />
            <h1 class="py-4 text-white font-black-custom text-[20px]">17 years experience</h1>
            <p
              class="text-white font-regular-custom text-[18px]"
            >Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class>
            <img src="../assets/Svg/WhiteHouseM.svg" alt />
            <h1 class="py-4 text-white font-black-custom text-[20px]">Properties Managed</h1>
            <p
              class="text-white font-regular-custom text-[18px]"
            >Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class>
            <img src="../assets/Svg/WhiteHouseN.svg" alt />
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

    <div class=" w-[70%] mx-auto px-8 py-20 bg-[#EC8B7E]/10 my-28">
      <div class="lg:ml-20 mx-auto">
        <img src="../assets/Svg/PinkHouse.svg" alt />
        <h1 class="font-light-custom text-[36px] py-4 text-[#20407C]">
          Need help
          <span class="font-black-custom text-[36px]">with your home</span>
        </h1>
        <span
          class="pb-4 font-regular-custom text-[18px]"
        >Use our quick online form.</span>
        <span class="font-bold-custom text-[18px]">The quickest way to report an issue and get it fixed.</span>
        <div class="flex flex-wrap items-center gap-5">
          <button
            type="button"
            class="bg-[#2A8CFB] py-4 px-8 font-xbold-custom lg:text-[16px] xxs:text-[14px] mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >Quick report</button>
          <button
            type="button"
            class="bg-trisec py-4 px-8 font-xbold-custom lg:text-[16px] xxs:text-[14px] mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
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
import BackgroundSVG from "../assets/Background-1.svg"
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
  background-image: url("../assets/Svg/HeaderBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyG {
  background-image: url("../assets/Svg/MiddleBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.happyS {
  background-image: url("../assets/Svg/MidBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>