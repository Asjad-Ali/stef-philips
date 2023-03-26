<template>
  <div class="h-12 w-full bg-[#707070] bl " v-if="state">
        <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-4 inner p-3 ">
          <router-link exact-active-class="exact-active" class="text-white font-semibold text-sm" to="/home">Home</router-link>
          <i class="pi pi-angle-right text-white"></i>
          <div class="dropdown">
            <router-link active-class="active" class="text-white font-semibold text-sm dropbtn" to="/contact">Contact</router-link>
            <div class="dropdown-content">
              <router-link active-class="active" class="font-semibold text-sm" to="">FAQS</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Press & media</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Community</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Housing partners</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Investors</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Media</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Generral</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Lettings valuation</router-link>
              <router-link active-class="active" class="font-semibold text-sm" to="">Submitted</router-link>
            </div>
          </div>
        </nav>
      </div> 
  <div class="w-full min-h-[600px] bg-red-400 bgImg">
    <div class="w-full px-8 h-full py-40 mx-auto flex justify-center items-center">
      <div class="w-[60%] mr-6">
        <h1 class="text-[42px] text-white font-normal tracking-wide leading-snug" >
          Contact
        </h1>
        <p class="text-white mt-4 tracking-wide leading-snug font-semibold" >
          Short introductory summary for the page
          <br />
          goes here like so
        </p>
      </div>
    </div>
  </div>
<div class="m-3">
  
  <div class="w-full flex justify-center">
    <div class="w-full mx-auto flex justify-center">
      <div class="w-[60%] flex flex-col">
        <div class="flex">
          <h1 class="text-3xl mt-12 text-trisec leading-[50px]"  style="font-weight:900">How can we help?</h1>
        </div>
        <div class="flex flex-wrap gap-6 mt-2 ">
          <ContactCard :message="message" />
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center">
  
  <div class="xs:w-[60%] mx-auto px-10 py-28 bg-[#EC8B7E]/10 my-32">
    <div class="max-w-4xl mx-auto">
      <img src="../assets/pink.png" alt />
      <h1 class="block py-4 text-4xl text-second">
        Need help
        <span class="font-bold">with your home</span>
      </h1>
      <p class="pb-4">
        Use our quick online form. The quickest way to report an issue and get it fixed.
      </p>
      <div class="flex items-center gap-6 flex-wrap">
        <button
          type="button"
          class="bg-sky-600 py-4 xxs:px-3 md:px-8 text-[16px] font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Quick report
        </button>
        <button
          type="button"
          class="bg-trisec py-4 xxs:px-3 md:px-8 text-[16px] font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Report a repair or maintainance
        </button>
      </div>
    </div>
  </div>
  </div>

</div>
<div class="grid grid-cols-2">
      <div class=" blue-cards h-[350px] " >
          <div class="relative top-5 md:left-28 xxs:left-5">
              <h6 class="text-[18px]"><b>Head Office</b></h6>
              <h6 class="mt-2 text-[42px]">London</h6>
              <h6 class="mt-2">Address line one</h6>
              <h6 class="text-[18px]">Address line two</h6>
              <h6 class="text-[18px]">Address line three</h6>
              <h6 class="text-[18px]">Address line four</h6>
              <button
              type="button"
              class="text-[16px] bg-transparent whitespace-nowrap xxs:w-30 sm:w-52 ring-2 ring-white xxs:py-1 sm:py-3.5 xxs:px-2 sm:px-8 text-sm font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >View on Google Maps</button>
          </div>
      </div>
          <div class=" black-cards"></div>
  </div>
  <div class="grid grid-cols-2">
      <div class=" black-cards"></div>
      <div class=" blue-cards h-[350px] " >
          <div class="relative top-5 md:left-28 xxs:left-5">
              <h6 class="text-[18px]"><b>Essex Office</b></h6>
              <h6 class="mt-2 text-[42px]">Colchester</h6>
              <h6 class="mt-2 text-[18px]">Address line one</h6>
              <h6  class="text-[18px]">Address line two</h6>
              <h6  class="text-[18px]">Address line three</h6>
              <h6  class="text-[18px]">Address line four</h6>
              <button
              type="button"
              class="  text-[16px] bg-transparent whitespace-nowrap xxs:w-30 sm:w-52 ring-2 ring-white xxs:py-1 sm:py-3.5 xxs:px-2 sm:px-8 text-sm font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >View on Google Maps</button>
          </div>
      </div>
  </div>
  <div class="w-full flex justify-center mx-auto my-10">
  <div class="w-[60%]">
  <Accordion :activeIndex="0">
  <AccordionTab header="Header I">
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
      </p>
  </AccordionTab>
  <AccordionTab header="Header II">
      <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
      </p>
  </AccordionTab>
  <AccordionTab header="Header III">
      <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
      </p>
  </AccordionTab>
</Accordion>
  </div>
  
  </div>
</template>
<script setup>
import { ref } from "vue";
import ContactCard from "../components/ContactCard.vue";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import {useAppStore} from "../store/index"
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
const message = ref([
"Help for tenants",
"Neighbors & the wider community",
"Housing partners",
"Investors and landlords",
"Media enquiries",
"General enquiries",
]);
</script>
<style scoped>

.blue-cards{
  background-image: url("../assets/CompositeLayer (1).png");
  background-repeat: no-repeat;
background-size: cover;
background-position: center;
color: aliceblue;
}
.bgImg {
background-image: url("../assets/Background.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
}
.black-cards{
  background-image: url("../assets/CompositeLayerBlack.png");
  background-repeat: no-repeat;
background-size: cover;
background-position: center;
}
</style>
