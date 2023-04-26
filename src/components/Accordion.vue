<template>
  <div class="w-full flex justify-center items-center mx-auto">
    <div class="w-full mx-auto">
      <Accordion :activeIndex="2" v-for="items in props.message" :key="items">
        <AccordionTab
          :header="items.header"
          class="font-black-custom lg:text-[18px] text-[#20407c]"
          color="white"
        >
          <p class="text-[18px] font-regular-custom text-[#1d1d33]">
            {{ items.text }}
          </p>
          <p class="font-black-custom text-[18px] text-[#2a8cfb] py-8">
            {{ items.text2 }}
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>
<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
let count = 0;
const props = defineProps(["message"]);
</script>
<style>
.p-accordion-header-text {
  color: #20407c;
  font-size: 18px;
  font-weight: 900;
}
.p-accordion-toggle-icon {
  position: absolute;
  right: 0%;
  padding: 2px;
  color: #20407c;
}
.p-accordion .p-accordion-header .p-accordion-header-link {
  background-color: white !important;
  height: 60px;
}
.p-accordion .pi {
  color: #2a8cfb;
}
</style>
