<template>
<div class="w-full min-h-[300px] flex justify-center items-center mt-20">
<div  class=" w-[60%] min-h-[100px] mx-auto ">
<div  class="text-[42px]  text-[#20407c] xxxs:text-center lg:text-start lg:font-[900] xxxs:font-[500]">Tax council and Utilities</div> 
<p class="text-[18px] xxs:text-[16px] text-[#1d1d33] font-[400] xxxs:text-center  lg:text-start mt-3">Short introductory summary for the page goes here like so</p>
<SelectOne />
<YourDetails />
 <Accordion />
</div>
</div>
</template>



<script setup>
import MoreInfo from '../components/MoreInfo.vue'
import YourDetails from '../components/YourDetails.vue'
import SelectOne from '../components/SelectOne.vue'
</script>
