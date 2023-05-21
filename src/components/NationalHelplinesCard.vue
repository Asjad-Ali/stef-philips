<template> 
      <div v-for="Card in props.Cards" :key="Card" class="bg-sky-50" :class="[obj.height, obj.width]">
        <img class="h-50 w-full object-cover" :src="obj.imageUrl" alt />
        <div class="flex flex-col justify-between">
          <div class="py-[30px] px-8">
            <h3 class=" mt-0 text-[18px] font-black-custom text-left text-[#20407C]" >{{ Card.attributes.title }}</h3>
            <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">{{ Card.attributes.description }}</p>
          
          </div>
          <div class="text-left px-8 pb-[28px]">
            <button type="button" class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-xbold-custom text-[16px} text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
              <img :src="Card.attributes.linkURL" alt=""> {{obj.btnName}} </button>
          </div>
        </div>
      </div> 
  </template>
  
<script setup>
  const props = defineProps(["Cards"]);

const obj =   {
  name: "Mind",
  role: "Excerpt for the page goes in here like so loren ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/logo-mind.jpg", import.meta.url).href,
  twitterUrl: "#",
  linkedinUrl: "#",
  btnIcon: new URL("../assets/Svg/Large.svg", import.meta.url).href,
  btnName: "Visit Website"
}
  </script>