<template>
    <loader v-if="store.loader" />
    <!-- Step 1 -->
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
      <nav class="container flex items-center justify-start gap-3 inner">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="home">Home</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="help-and-advice">Help & advice</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="national-helplines">National Helplines</router-link>
        </div>
      </nav>
    </div>
    <!-- Step 1 -->
    <!-- Step 2 --> 
    <div class="w-full min-h-[600px]">
      <PageBanner v-if="Object.keys(store.national_helplines).length" :Banner="store.national_helplines" />
    </div>
    <!-- Step 2 -->
    <!-- Step 3 -->
    <div class="lg:pt-8 sm:pt-8 ml-[0.5rem]"> 
      <div class="pt-3 container">
      <div class="text-center">
        <div class="grid md:grid-cols-3 grid-cols-1 items-start gap-[24px]">
          <div v-for="Card in store.national_helplines.national_helpline_topcards?.data" :key="Card" class="bg-[#EC254E]/10">
            <img class="h-50 w-full object-cover" :src="Card.attributes.image.data.attributes.url" alt />
            <div class="flex flex-col justify-between">
              <div class="p-[30px]">
                <h3 class=" mt-0 text-[20px] font-black-custom text-left text-[#20407C]">{{ Card.attributes.title }}</h3>
                <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">{{ Card.attributes.description }}</p>
            
              </div>
              <div class="text-left p-[30px]">
                <button class="bg-[#EC254E] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-regular-custom text-[16px} text-white shadow-sm hover:bg-[#EC254E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"> 
                  Call Someone now
                </button>
              </div>
            </div>
          </div>

          
          <div class="bg-[#EC254E] py-9 pl-9 pr-4 text-left"> 
            <img  class="icon" src="../assets/Icon.png" alt="ariticle">
            <h1 class="pt-4 text-[24px] font-black-custom text-white">{{ store.national_helplines.emergency_title }}</h1>
            <p class="text-[18px] text-white font-regular-custom mt-4">{{ store.national_helplines.emergency_desc }}</p>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    <!-- Step 3 -->

    <!-- Step 4 -->
    <div class="container pt-[100px]">
      <h1 class="mb-10 text-[36px] text-[#20407C] font-regular-custom">
        More help and advice
      </h1> 
      <div class="w-full mx-auto flex justify-center">      
        <div class="grid md:grid-cols-2 grid-cols-1 gap-[24px] gap-y-[60px]"> 
          <Cards  :Cards="store.national_helplines.national_helpline_bottomcards?.data"/>
        </div>
      </div>
    </div>
    <!-- Step 4 -->
    
    <NeedHelp />
    
</template>

<script setup>
import Cards from "../components/NationalHelplinesCard.vue"; 
import NeedHelp from "../components/NeedHelp.vue";
import PageBanner from "../components/PageBanner.vue";
import { useAppStore } from "../store/index";
import { onMounted } from "vue";
import loader from "../components/loader.vue";

const store = useAppStore();


onMounted(() => {  
  if(!Object.keys(store.national_helplines).length)
    store.nationalHelplines()
})
</script>


<style scoped>

</style>