<template> 
      <div v-for="person in props.message" :key="person.name" class="bg-sky-50" :class="[person.height, person.width]">
        <img class="h-50 w-full object-cover" :src="person.imageUrl" alt />
        <div class="flex flex-col justify-between">
          <div class="py-[30px] px-8">
            <h3 class=" mt-0 text-[18px] font-black-custom text-left text-[#20407C]" >{{ person.name }}</h3>
            <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">{{ person.role }}</p>
          
          </div>
          <div class="text-left px-8 pb-[28px]">
            <button type="button" class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-xbold-custom text-[16px} text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
              <img :src="person.btnIcon" alt=""> {{person.btnName}} </button>
          </div>
        </div>
      </div> 
  </template>
  
  <script setup>
   const props = defineProps(["message"]);
  </script>