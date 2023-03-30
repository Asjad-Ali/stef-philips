<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center">
        <nav class="md:w-[60%] xxxs:w-[100%] h-full mx-auto flex items-center justify-start gap-3 inner ">
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Home</div>
          <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Your home</div>
            <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Report an issue</div>
            <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Repairs & maintenance</div>
        </nav>
      </div> 

       <!-- -->
        <div class="w-full leading-snug"> 
          <div  class="w-[70%] min-h-[100px] mx-auto ">
            <h1  class="lg:text-[42px] xxs:text-[33px] text-[#20407c] font-black-custom mt-16">Repairs & maintenance</h1> 
            <p class="pt-4 lg:text-[18px] xxs:text-[16px] text-[#1d1d33] font-regular-custom">Short introductory summary for the page goes here like so</p>
          </div>
        </div>
        
          <!-- -->

            <div class="w-full mx-auto flex justify-center">
              <div class="w-[70%] flex flex-col">
                <div class="flex">
                  <h1 class="font-black-custom lg:text-[30px] xxs:text-[24px] mt-12 text-trisec">Please click on the relevant picture</h1>
                </div>
                <div class="pt-2">
                <span class="p-input-icon-right">
                    <InputText class="p-inputtext lg:text-[18px] xxs:text-[14px] font-xbold-custom text-[#1D1D33]" v-model="value1" placeholder="What is the issue?" />
                    <i class="pi pi-search" />
                </span>
                </div>
                <div class="flex justify-start gap-5 flex-wrap py-10">
               <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8">
                  <ContactCard :message="message" />
                </div>
               </div>
              </div>
            </div>

             <!-- -->
            <MoreInfo />

             <!-- -->
            <YourDetails />

             <!-- -->
             <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
              <div class="w-[70%]">
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
                  <p class="text-[18px] font-black-custom text-[#2a8cfb] py-8">Link call to action</p>
              </AccordionTab>
            </Accordion>
              </div>
              </div>
     
</template>
<script setup>
import ContactCard from "../components/ContactCard.vue";
import MoreInfo from "../components/MoreInfo.vue";
import YourDetails from "../components/YourDetails.vue";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const value1 = ref(null);
const message = [
{
  text:"Bathroom and toilet",
  img:'src/assets/Group-13.png'
},
{
  text:"Kitchen",
  img:'src/assets/Group-16.png'
},
{
  text:"Heating and boiler",
  img:'src/assets/Group-17.png'
},
{
  text:"Water and leaks",
  img:'src/assets/Group-18.png'
},
{
  text:"Doors, garages and locks",
  img:'src/assets/Group-19.png'
},
{
  text:"Internal floors, walls and ceilings",
  img:'src/assets/Group-20.png'
},
{
  text:"Lighting",
  img:'src/assets/Group-21.png'
},
{
  text:"Window",
  img:'src/assets/Group-22.png'
},
{
  text:"Exterior and garden",
  img:'src/assets/Group-23.png'
},
{
  text:"Furniture",
  img:'src/assets/Group-24.png'
},
{
  text:"Communal / shared facilities",
  img:'src/assets/Group-25.png'
},
{
  text:"Other",
  img:'src/assets/Group-26.png'
},
]
</script>
<style >
.p-inputtext{
    background-color: #F0F7FE;
    border: 2px solid #4D6896;
    border-radius: 25px;
    padding-left: 10px;
}
.p-inputtext::placeholder{
    color: #1D1D33;
}
.pi::before{
    padding-right: 8px;
   
}
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