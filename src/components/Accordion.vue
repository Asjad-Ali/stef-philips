<template>
  <Accordion :activeIndex="2" v-for="items in props.message" :key="tabindex"  >
    <AccordionTab :header="items.header"  style="color:#20407c; font-size:18px; font-weight:900" color="white">
      <p class="text-[18px] font-[400] text-[#1d1d33]">
         {{ items.text }}
      </p> <p class="text-[18px] font-[900] text-[#2a8cfb]">{{ items.text2 }}</p></AccordionTab>
   </Accordion>
</template>
<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
let count= 0;
const props = defineProps(["message"]);
</script>
<style>
.p-accordion-header-text{
 color:#20407c; font-size:18px; font-weight:900;
}
.p-accordion-toggle-icon{
 position: absolute; right: 0%;  padding: 2px; color:#20407c;
}
.p-accordion .p-accordion-header .p-accordion-header-link{
 background-color: white !important;
}
</style>