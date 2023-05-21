<template>
  <loader v-if="store.loader" />
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav class="container mx-auto flex items-center justify-start gap-3 inner">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
        <router-link to="help-and-advice">Help & advice</router-link>
      </div>
    </nav>
  </div>
 
  
  <div class="w-full min-h-[600px]">
    <PageBanner v-if="Object.keys(store.help_and_advices).length" :Banner="store.help_and_advices" />
  </div>
  

  <!-- Step 3 -->
  <div class="pb-10 pt-3 w-[60%] mx-auto mt-[8rem] mb-10">
    <div class="justify-center">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
        <Cards v-if="Object.keys(store.help_and_advices).length" :data="store.help_and_advices.help_and_advice_cards.data" />
      </div>
    </div>
  </div>

  <!-- Step 3 -->

  <!-- Step 4 -->
  <NeedHelp />
  <!-- Step 4 -->

  <!-- Step 5 -->
  <HourEmergencies v-if="Object.keys(store.help_and_advices).length" :data="store.help_and_advices.help_and_advice_emergency.data.attributes" />
  <!-- Step 5 -->
</template>

<script setup>
import Cards from "../components/YourHomeCards.vue";
import loader from "../components/loader.vue";
import PageBanner from "../components/PageBanner.vue";
import HourEmergencies from "../components/HourEmergencies.vue";
import NeedHelp from "../components/NeedHelp.vue";
import { useAppStore } from "../store/index";
import { onMounted } from "vue";

const store = useAppStore();


const people = [
  {
    name: "National helplines",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
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

onMounted(() => {
  if(!Object.keys(store.help_and_advices).length)
    store.helpAndAdvices()
})
</script>

