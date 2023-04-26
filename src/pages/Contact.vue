<template>
  <div class="h-[40px] w-full bg-[#707070] bl flex justify-center">
    <nav class="w-[70%]  mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="contact">Contact</router-link>
        </div>
    </nav>
  </div>  
            
  <div class="w-full min-h-[600px] bg-red-400 bgImg">
    <div class="w-full px-8 h-full py-40 mx-auto flex justify-center items-center">
      <div class="w-[70%] mr-6">
        <h1 class="text-[42px] text-white font-normal tracking-wide leading-snug">
          Contact
        </h1>
        <p class="text-white mt-4 tracking-wide leading-snug font-semibold">
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
        <div class="w-[70%] flex flex-col">
          <div class="flex">
            <h1
              class="text-3xl mt-12 text-trisec leading-[50px]"
              style="font-weight: 900"
            >
              How can we help?
            </h1>
          </div>
          
          <div class="flex gap-4 flex-wrap mt-2 ">
            <ContactCard :message="message" />
          </div>
         
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
     
        <NeedHelp />
      
    </div>
  </div>
  <div class="sm:grid sm:grid-cols-2 xxs:grid-cols-1  h-auto">
    <div class="blue-cards h-[760px] flex items-center">
      <div class="relative top-5 md:left-28 xxs:left-5 w-[70%] m-auto">
        <h6 class="text-[18px]">
          <b>Head Office</b>
        </h6>
        <h6 class="mt-2 text-[42px]">London</h6>
        <h6 class="mt-2">Address line one</h6>
        <h6 class="text-[18px]">Address line two</h6>
        <h6 class="text-[18px]">Address line three</h6>
        <h6 class="text-[18px]">Address line four</h6>
        <button
          type="button"
          class="text-[16px] bg-transparent whitespace-nowrap xxs:w-30 sm:w-52 ring-2 ring-white xxs:py-1 sm:py-3.5 xxs:px-2 sm:px-8 text-sm font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          View on Google Maps
        </button>
      </div>
    </div>
    <div class="black-cards h-[760px]"></div>
  </div>
  <div class="sm:grid sm:grid-cols-2 xxs:grid-cols-1 h-auto " >
    <div class="black-cards h-[760px] sm:flex xxs:hidden"></div>
    <div class="blue-cards h-[760px] flex items-center">
      <div class="relative top-5 md:left-28 xxs:left-5 w-[70%] m-auto" >
        <h6 class="text-[18px]">
          <b>Essex Office</b>
        </h6>
        <h6 class="mt-2 text-[42px]">Colchester</h6>
        <h6 class="mt-2 text-[18px]">Address line one</h6>
        <h6 class="text-[18px]">Address line two</h6>
        <h6 class="text-[18px]">Address line three</h6>
        <h6 class="text-[18px]">Address line four</h6>
        <button
          type="button"
          class="text-[16px] bg-transparent whitespace-nowrap xxs:w-30 sm:w-52 ring-2 ring-white xxs:py-1 sm:py-3.5 xxs:px-2 sm:px-8 text-sm font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          View on Google Maps
        </button>
      </div>
    </div>
    <div class="black-cards h-[760px] sm:hidden xxs:flex"></div>

  </div>
  <div class="w-full flex justify-center mx-auto py-10 bg-[#ededee]">
    <div class="w-[70%]">
      <Accordion :activeIndex="2" class="pb-2 "  >
  <AccordionTab header="Call us" class="font-black-custom text-[18px] text-[#20407c]" color="white">
    <p class="text-[18px] font-regular-custom text-[#1d1d33]">
        Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
      </p>
  </AccordionTab> 
  <AccordionTab header="Emergency out of hours repairs" class="font-black-custom text-[18px] text-[#20407c]">
    <p class="text-[18px] font-regular-custom text-[#1d1d33]">
        Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
      </p>
  </AccordionTab>
  <AccordionTab header="Repair responsibilities" class="font-black-custom text-[18px] text-[#20407c]">
      <p class="text-[18px] font-regular-custom text-[#1d1d33]">
        Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
      </p>
      <p class="text-[18px] font-black-custom text-[#2a8cfb]">Link call to action</p>
  </AccordionTab>
</Accordion>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ContactCard from "../components/ContactCard.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import { useAppStore } from "../store/index";
import { computed } from "vue";
import NeedHelp from "../components/NeedHelp.vue";
const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
const message = ref([
  {
    text: "Help for tenants",
    img: new URL('../assets/CompositeLayer.png', import.meta.url).href,
    
  },
  {
    text: "Neighbors & the wider community",
    img: new URL('../assets/CompositeLayer.png', import.meta.url).href,
    
  },
  {
    text: "Housing partners",
    img: new URL('../assets/CompositeLayer.png', import.meta.url).href,
    
  },
  {
    text: "Investors and landlords",
    img: new URL('../assets/CompositeLayer.png', import.meta.url).href,
    
  },
  {
    text: "Media enquiries",
    img: new URL('../assets/CompositeLayer.png', import.meta.url).href,
    
  },
  {
    text: "General enquiries",
    img: new URL('../assets/CompositeLayer.png', import.meta.url).href,
  },
]);
</script>
<style >
.blue-cards {
  background-image: url("../assets/CompositeLayer (1).png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: aliceblue;
}
.bgImg {
  background-image: url("../assets/Svg/Image.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.black-cards {
  background-image: url("../assets/CompositeLayerBlack.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.p-accordion-header-text{
 color:#20407c; font-size:18px; font-weight:900;
}
.p-accordion-toggle-icon{
 position: absolute; right: 0%;  padding: 2px; color:#20407c;
}
.p-accordion .p-accordion-header .p-accordion-header-link{
 background-color: white !important; 
 height:70px; border: none;
}
.p-accordion .p-accordion-tab{
margin-bottom: 12px; 
}

</style>
