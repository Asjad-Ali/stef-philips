<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Your home</div>
        <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Report an issue</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Other Issues</div>
    </nav>
  </div> 
  <div
    class="w-full  flex justify-center items-center mt-20"
  >
    <div class="w-[60%] mx-auto">
      <div
        class="text-[42px] xxxs:text-[38px] text-[#20407c] font-black-custom w-[60%]"
      >
        Other Issues
      </div>
      <p
        class="text-[18px] xxs:text-[16px] text-[#1d1d33] font-regular-custom mt-3"
      >
        Short introductory summary for the page
        goes here like so
      </p>
    </div>
  </div>
  <MoreInfo />
      <YourDetails />
   <div class="min-h-[400px] w-full bg-[#EDEDEE] lg:pt-72 xxxs:pt-40">
    <div class="w-[60%] max-w-5xl mx-auto flex flex-wrap items-center">
      <p class="text-[#20407C] text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">During your stay FAQs</span>
       
      </p>
      <Accordion :message="message" />
    </div>
  </div>
</template>

<script setup>
import MoreInfo from "../components/MoreInfo.vue";
import YourDetails from "../components/YourDetails.vue";
import Accordion from '../components/Accordion.vue';

const message = [
  {
    index: 0,
    header: "Call us",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Emergency out of hours repairs",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
   {
    index: 2,
    header: "Repair responsibilities",
    text: "Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },

];
</script>
