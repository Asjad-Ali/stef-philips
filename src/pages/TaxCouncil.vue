<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom" to="/home">Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom" to="/your-home">Your home</div>
        <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom" >Report an issue</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom" to="/tax-council">Tax Council and Utilities</div>
    </nav>
  </div> 
<div class="w-full  flex justify-center items-center mt-20">
<div  class=" w-[60%]  mx-auto ">
<div  class="text-[42px]  text-[#20407c] xxxs:text-center lg:text-start lg:font-[900] xxxs:font-[500]">Tax council and Utilities</div> 
<p class="text-[18px] xxs:text-[16px] text-[#1d1d33] font-[400] xxxs:text-center  lg:text-start mt-3">Short introductory summary for the page goes here like so</p>

</div>
</div>
<SelectOne />
<YourDetails />
 <Accordion />
</template>



<script setup>
import MoreInfo from '../components/MoreInfo.vue'
import YourDetails from '../components/YourDetails.vue'
import SelectOne from '../components/SelectOne.vue'
</script>
