<template>
    <div class="max-w-[304px] w-full p-8 h-[380px]" v-for="items in message">
             <img :src="items.img" class="py-3" alt="">
             <h1  class="text-[20px] font-[500] text-[#20407c] py-2"><span class="font-black-custom">{{items.header}}</span></h1>
             <p class="text-[18px] font-[400] text-[#1d1d33] ">{{ items.description }}</p>
           </div>
  </template>
  <script setup>
  const props = defineProps(["message"])
  </script>