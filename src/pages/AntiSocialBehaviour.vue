<template>
<div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" to="/home">Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" to="/your-home">Your home</div>
        <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Report an issue</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" to="/anti-social-behaviour">Anti-Social Behaviour</div>
    </nav>
  </div> 
     <div class="mx-auto w-full  flex justify-center items-center mt-20 pb-10">
<div  class=" w-[60%] mx-auto ">
     
<div  class="text-[42px] xxxs:text-[38px] text-[#20407c] font-black-custom">Anti-social behaviour</div> 
<p class="text-[18px] xxs:text-[16px] text-[#1d1d33] font-regular-custom mt-3">Short introductory summary for the page goes here like so</p>
</div>
</div>
<MoreInfo />
<YourDetails />
 <Accordion />
</template>

<style >
.p-dropdown.p-component.p-inputwrapper.w-full{
     border-radius: 6px;
}
.p-dropdown-label.p-inputtext.p-placeholder{
     border-radius: 0;
}
.p-inputtextarea.p-inputtext.p-component.w-full{
     border-radius: 0;
}
.p-inputtext.p-component.my-4.w-full{
     border-radius: 0;
}
</style>




<script setup>
import MoreInfo from '../components/MoreInfo.vue'
import YourDetails from '../components/YourDetails.vue'
import Accordion from '../components/Accordion.vue';

</script>
