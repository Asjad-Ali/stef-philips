<template>
     <div class="h-[40px] w-full bg-[#000000] opacity-50 bl flex justify-center">
    <nav class="w-[70%]  mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm dropbtn font-bold-custom text-[14px]">Your home</div> <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm dropbtn font-bold-custom text-[14px]">Meet the team</div>
    </nav>
  </div>  
   
   
   
   <div class="lg:w-full min-h-[460px] bg-red-400 bg-[url('src/assets/Svg/Image7.svg')] bg-cover bg-no-repeat bg-center">
    <div class="w-full h-[460px] flex justify-center items-center">
 <div class="mx-auto w-[70%] ">  
        <h1
          class="text-white w-[100%]"
        >
          <div class="font-light-custom text-[42px]">Meet your Team</div>
        </h1>
        <p
          class="text-white mt-4 font-regular-custom text-[18px] lg:w-[50%]"
        >
          Short Introductory summary for the page<br />goes here lilke so
        </p>
      </div>
    </div>
  </div>

    <div class="  w-full ">
  
    <HorizontalCardVue :message="card1"/>
    <HorizontalCardVue :message="card2" />
    <HorizontalCardVue :message="card3" />


    <div class="w-full flex justify-center">
 
 <NeedHelp/>
 
</div></div>
</template>
<script setup>
import HorizontalCardVue from '../components/HorizontalCard.vue';
import NeedHelp from '../components/NeedHelp.vue';
const card1={ bgclass:' white ' , header:'Meet your', boldheader:' Housing Officer', btn:['Read out more'],  img:'src/assets/Card-Image2.png',paragraph:'At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.', b:true}
const card2={ direction:'rtl',class:' flex flex-row-reverse ' , header:'Field worker', boldheader:' Housing Officer', btn:['Read out more'],  img:'src/assets/Card-Image2.png', paragraph:'At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.', flex:'items-end', b:true}
const card3={ class:' flex flex-row-reverse ' , header:'Maintainance worker', boldheader:' Housing Officer', btn:['Read out more'],  img:'src/assets/Card-Image2.png', paragraph:'At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.', b:true}
</script>