<template>
  <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Your home</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Quick report</div>
    </nav>
  </div> 

   <!-- -->

     <div class="w-full min-h-[150px] "> 
<div  class=" w-[60%] min-h-[100px] mx-auto ">
<h1  class="text-[42px] text-[#20407c] font-black-custom mt-16">Quick report</h1> 
<p class="text-[18px] text-[#1d1d33] font-regular-custom">Short introductory summary for the page goes here like so</p>
</div>
</div>

    <div class="w-full mx-auto flex justify-center">
      <div class="  w-[60%] flex flex-col">
        <div class="flex">
          <h1 class="font-black-custom text-[30px] mt-12 text-trisec">Please select one</h1>
        </div>
        <div class="flex justify-between gap-2 flex-wrap py-10">
       <div class="grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1 py-8 gap-6 mx-auto ">
          <ContactCard :message="message" />
        </div>
        <div class=" bg-[#ec254e] p-9  max-w-sm  mx-auto">
          <img src="../assets/Icon.png" alt="ariticle">
          <h1  class="text-[24px] font-black-custom text-white">In case of emergencies</h1>
          <p   class="text-[18px] text-white font-regular-custom">If you or someone else is seriously injured, contact the emergency services on <span class="font-bold-custom text-[18px]">999</span>. <br> <br> If there is a fire at 
             the property you must immediately evacuate the property and then contact the emergency services on <span class="font-bold-custom text-[18px]">999</span>.</p>
        </div>

  </div>
       
      </div>
   
  </div>
   <!-- -->
  <div
  class="max-w-5xl w-[60%] mx-auto py-20 xxs:py-10 bg-[#EC254E]/10 my-20 xxs:my-10 lg:px-20 sm:px-16 xxs: px-12 xxxs:px-7"
>
  <div class="max-w-4xl mx-auto">
    <h1 class="block py-4 font-light-custom md:text-[36px] xxs:text-[30px] text-third">
      Out of hours
      <span class="font-black-custom md:text-[36px] xxs:text-[28px]">emergencies</span>
    </h1>
    <p class="font-regular-custom text-[18px]">
      Little into here, out of hours are Weekends, Bank Holidays and between
      6pm - 7am daily
    <br>
      If it’s not urgent, the quickest way to report an issue and get it
      fixed, is using <span class="text-primary font-bold-custom text-[18px]">our online form </span> now
    </p>
    <div class="flex flex-wrap md:gap-5 xxs:gap-1 pt-4">
      <img class="lg:max-w-sm" src="../assets/phone.png" alt />
      <div
        class="mt-8 text-third font-semibold font lg:text-4xl sm:text-2xl xxxs:text-md"
      >
        <pre class="font-black-custom text-[24px]">020 00000 000</pre>
      </div>
    </div>

    <button
      type="button"
      class="bg-trisec font-xbold-custom md:text-[16px] xxs:text-[14px] xxs:py-3 md:py-4 xxs:px-4 md:px-8 mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      What is an emergencey
    </button>
  </div>
</div>
 <!--  -->
  <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
  <div class="w-[60%]">
  <h1   class="text-[30px] text-[#20407c] font-black-custom pb-10">Other ways to report</h1>
  <Accordion :activeIndex="2" >
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
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
const message = [
{
  text:"Repairs & maintenance",
  img:'src/assets/CompositeLayer3.png'
},
{
  text:"Anti-social behaviour",
  img:'src/assets/CompositeLayer4.png'
},

{
  text:"Any other issue",
  img:'src/assets/Icon1.png'
},
{
  text:"Council tax and utilities",
  img:'src/assets/CompositeLayer5.png'
},
]
</script>
<style >
.p-accordion-header-text{
  color:#20407c; font-size:18px; font-weight:900;
}
.p-accordion-toggle-icon{
  position: absolute; right: 0%;  padding: 2px; color:#20407c;
}
.p-accordion-header-link{
  background-color: white;
}
@media(max-width:500px){
.emergency{
  font-size: 26px;
  
}
.number{
  font-size:18px;
}
.btn{
  font-size:12px;

}

}
</style>