<template>
  <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
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
<div  class=" w-[60%] min-h-[100px] mx-auto ">
<h1  class="text-[42px] text-[#20407c] font-[900] mt-16">Out of hours emergencies</h1> 
<p class="text-[18px] text-[#1d1d33] font-[400]">Short introductory summary for the page goes here like so</p>
</div>
</div>
   <div class="w-full mx-auto flex justify-center">
     <div class="  w-[60%] flex flex-col">
       <div class="flex">
         <h1 class="text-3xl mt-12 text-trisec leading-[50px]"  style="font-weight:900">What is an emergency repair?</h1>
       </div>
       <div class="flex justify-between gap-5 sm:flex-wrap py-10  lg:flex-nowrap  xs:flex-wrap xxs:flex-wrap ">
      <div class="max-w-[500px] w-full ">
        <Accordion :message="message" />
       </div>
       <div class=" bg-[#ec254e] p-9 max-w-[300px] max-h-[450px]  mx-auto">
         <img src="../assets/Icon.png" alt="ariticle">
         <h1  class="text-[24px] font-[900] text-white">In case of emergencies</h1>
         <p   class="text-[18px] text-white font-[400]">If you or someone else is seriously injured, contact the emergency services on 999. <br> <br> If there is a fire at 
            the property you must immediately evacuate the property and then contact the emergency services on 999.</p>
       </div>

 </div>
      
     </div>
  
 </div>
 <div class="w-full mx-auto max-w-[1440px] py-20">
 <div class="w-[60%]  mx-auto flex flex-col gap-8 bg-[#ec254d17] p-10">
 <h1 class="text-[36px] font-[400] text-[#ec254e] emergency">Out of hours <span class="font-[900]">emergencies</span> </h1>
 <div>
   <p  class="text-[#1d1d33] text-[18px] font-[400]">Little into here, out of hours are Weekends, Bank Holidays and between 6pm - 7am daily</p>
 <br><p  class="text-[#1d1d33] text-[18px] font-[400]">If it’s not urgent, the quickest way to report an issue and get it fixed, is using  <span  class="font-[600] text-[#2a8cfb]">our online form</span>  now</p>
  
 </div>
<div class="flex flex-wrap items-center gap-4">
  <img src="../assets/CompositeLayer6.png" alt="">
   <p  class="text-[24px] font-[900] text-[#ec254e] number">020 00000 000</p>
  </div>
  <button  class="bg-[#20407c] text-white btn  max-w-xs  p-2 text-[16px] font-[400]">What is an emergency</button>
  
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