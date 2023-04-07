<template>
  <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[70%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" to="/home">Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" to="/your-home">Your home</div>
        <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Report an issue</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" to="/hours-emergency">Out of Hours Emergencies</div>
    </nav>
  </div> 
    <div class="w-full min-h-[150px] "> 
<div  class=" w-[70%] min-h-[100px] mx-auto ">
<h1  class="text-[42px] text-[#20407c] font-black-custom mt-16">Out of hours emergencies</h1> 
<p class="text-[18px] text-[#1d1d33] font-regular-custom">Short introductory summary for the page goes here like so</p>
</div>
</div>
   <div class="w-full mx-auto flex justify-center">
     <div class="  w-[70%] flex flex-col">
       <div class="flex">
         <h1 class="text-[30px] mt-12 text-trisec font-black-custom">What is an emergency repair?</h1>
       </div>
       <div class="flex justify-between gap-5 sm:flex-wrap py-10  lg:flex-nowrap  xs:flex-wrap xxs:flex-wrap ">
      <div class="max-w-[500px] w-full ">
        <Accordion :message="message" />
       </div>
       <div class=" bg-[#ec254e] p-9 w-[304px] h-[500px] mx-auto">
        <img src="../assets/Icon.png" alt="ariticle">
        <h1  class="text-[24px] font-black-custom py-2 text-white leading-snug">In case of emergencies</h1>
        <p   class="text-[18px] text-white font-regular-custom ">If you or someone else is seriously injured, contact the emergency services on <span class="font-bold-custom text-[18px]">999</span>. <br> <br> If there is a fire at 
           the property you must immediately evacuate the property and then contact the emergency services on <span class="font-bold-custom text-[18px]">999</span>.</p>
      </div>

 </div>
      
     </div>
  
 </div>
  
 <div
 class="w-[70%] mx-auto py-20 xxs:py-10  my-20 xxs:my-10 lg:px-20 sm:px-16 xxs: px-12 xxxs:px-7"
>
 <div class="mx-auto">
   <h1 class="block py-4 font-light-custom md:text-[36px] xxs:text-[30px] text-third">
     Out of hours
     <span class="font-black-custom md:text-[36px] xxs:text-[28px]">emergencies</span>
   </h1>
   <p class="font-regular-custom text-[18px]">
     Little into here, out of hours are Weekends, Bank Holidays and between
     6pm - 7am daily
    </p>
    <br>
     <p class="font-regular-custom text-[18px]">
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

</template>
<script setup>
import Accordion from '../components/Accordion.vue';
const message = [
  { index:0,
    header:'Etectrical',
    text:' Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.'
  },
  { index:1,
    header:'Water',
    text:' Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.'
  },
  { index:2,
    header:'Locked out of property',
    text:' Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.',
    text2:'Report an issue (if not urgent)'
  },
  { index:3,
    header:'Other',
    text:' Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.'
  },
  { index:4,
    header:'Other',
    text:' Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.'
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
.p-accordion .p-accordion-header .p-accordion-header-link{
 background-color: white !important;
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