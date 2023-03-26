<template>
     <div class="w-full min-h-[200px] "> 
<div  class="max-w-[1440px] w-[60%] h-[250px] mx-auto p-3">
<h1  class="text-[42px] text-[#20407c] font-[900] mt-16">Quick report</h1> 
<p class="text-[18px] text-[#1d1d33] font-[400]">Short introductory summary for the page goes here like so</p>
</div>
</div>

  
  
    <div class="w-full mx-auto flex justify-center">
      <div class="w-[60%] flex flex-col">
        <div class="flex">
          <h1 class="text-3xl mt-12 text-trisec leading-[50px]"  style="font-weight:900">Please select one</h1>
        </div>
        <div class="flex justify-between">
       <div class="grid grid-cols-2 my-8 gap-6 w-[40%]">
          <ContactCard :message="message" />
        </div>
        <div class="w-[35%] bg-[#ec254e] p-9">
          <img src="../assets/Icon.png" alt="ariticle">
          <h1  class="text-[24px] font-[900] text-white">In case of emergencies</h1>
          <p   class="text-[18px] text-white font-[400]">If you or someone else is seriously injured, contact the emergency services on 999. <br> <br> If there is a fire at 
             the property you must immediately evacuate the property and then contact the emergency services on 999.</p>
        </div>

  </div>
  <div class="w-[60%] mx-auto px-10 py-28 bg-[#EC8B7E]/10 my-32">
    
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
          class="bg-sky-600 py-4 mt-32 xxs:px-3 md:px-8 text-[16px] font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Quick report
        </button>
        <button
          type="button"
          class="bg-trisec  py-4 mt-32 xxs:px-3 md:px-8 text-[16px] font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          Report a repair or maintainance
        </button>
     
    </div>
  </div>
      </div>
   
  </div>
  
</template>
<script setup>
import { ref } from "vue";
import ContactCard from "../components/Contactcard2.vue";

const message = [
{
  text:"Repairs & maintenance",
  img:'../src'
},
{
  text:"Anti-social behaviour",
  img:'../src'
},
{
  text:"Council tax and utilities",
  img:'../src'
},
{
  text:"Any other issue",
  img:'../src'
}
]
</script>