<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center">
        <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-3 inner ">
          <router-link exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom" to="/home">Home</router-link>
          <i class="pi pi-angle-right text-white"></i>
            <router-link active-class="active" class="text-white font-semibold text-sm font-bold-custom" to="/your-home">Your home</router-link>
            <i class="pi pi-angle-right text-white"></i>
            <router-link active-class="active" class="text-white font-semibold text-sm font-bold-custom" to="/repair-and-maintenance">Repairs & maintenance</router-link>
        </nav>
      </div> 

       <!-- -->
        <div class="w-full"> 
          <div  class="max-w-5xl w-[60%] min-h-[100px] mx-auto ">
            <h1  class="text-4xl text-[#20407c] font-[900] mt-16">Repairs & maintenance</h1> 
            <p class="pt-4 text-lg text-[#1d1d33] font-[300]">Short introductory summary for the page goes here like so</p>
          </div>
        </div>
        
          <!-- -->

            <div class="w-full mx-auto flex justify-center">
              <div class="max-w-5xl w-[60%] flex flex-col">
                <div class="flex">
                  <h1 class="text-2xl mt-12 text-trisec leading-[50px]"  style="font-weight:900">Please click on the relevant picture</h1>
                </div>
                <div class="pt-2">
                <span class="p-input-icon-right">
                    <InputText class="p-inputtext" v-model="value1" placeholder="What is the issue?" />
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
            <Accordion />
     
</template>
<script setup>
import ContactCard from "../components/Contactcard2.vue";
import MoreInfo from "../components/MoreInfo.vue";
import YourDetails from "../components/YourDetails.vue";
import Accordion from "../components/Accordion.vue";
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const value1 = ref(null);
const message = [
{
  text:"Bathroom and toilet",
  img:'src/assets/Group 13.png'
},
{
  text:"Kitchen",
  img:'src/assets/Group 16.png'
},
{
  text:"Heating and boiler",
  img:'src/assets/Group 17.png'
},
{
  text:"Water and leaks",
  img:'src/assets/Group 18.png'
},
{
  text:"Doors, garages and locks",
  img:'src/assets/Group 19.png'
},
{
  text:"Internal floors, walls and ceilings",
  img:'src/assets/Group 20.png'
},
{
  text:"Lighting",
  img:'src/assets/Group 21.png'
},
{
  text:"Window",
  img:'src/assets/Group 22.png'
},
{
  text:"Exterior and garden",
  img:'src/assets/Group 23.png'
},
{
  text:"Furniture",
  img:'src/assets/Group 24.png'
},
{
  text:"Communal / shared facilities",
  img:'src/assets/Group 25.png'
},
{
  text:"Other",
  img:'src/assets/Group 26.png'
},
]
</script>
<style >
.p-inputtext{
    background-color: #F0F7FE;
    border: 2px solid #4D6896;
    border-radius: 20px;
    padding-left: 15px;
}
.pi {
    padding-right: 10px;
}
</style>