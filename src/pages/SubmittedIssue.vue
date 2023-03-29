<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center">
        <nav class="w-[60%]  mx-auto flex items-center justify-start gap-3 inner  ">
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Home</div>
          <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm dropbtn font-bold-custom text-[14px]" >Your home</div>
            <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm dropbtn font-bold-custom text-[14px]" >Reprt an issue</div>
            <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Submitted</div>
        </nav>
      </div> 

         <!--  -->

    <div class=" w-[60%] mx-auto px-8 py-20 bg-[#EC8B7E]/10 my-20">
        <div class="max-w-4xl mx-auto ">
          <img src="../assets/Group 14.png" />
          <h1 class="font-black-custom text-[36px] py-4 text-[#20407C]">
            Report submitted
            <br>
            <span class="font-black-custom text-[18px]"> Ref: [S-FORCE ID]</span>
          </h1>
          <span class="font-bold-custom text-[18px]">Thank you for submitting your report.</span>
          <span
            class="pb-4 font-regular-custom text-[18px]"
          > You will also receive an email confirming submission of your report, and someone from Stef & Philips will be in touch soon to follow up. Routine repairs are completed within XX days.
          </span>
        </div>
      </div>
</template>


<script setup>
 
</script>
<style scoped> 
 
</style>