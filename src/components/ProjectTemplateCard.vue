<template>
    <div class="" v-for="items in message">
      <img :src="items.img" class="mb-[20px]" alt="">
      <h1  class="text-[20px] font-black-custom text-[#20407c] mb-[10px]">
        {{items.header}}
      </h1>
      <p class="text-[18px] font-regular-custom text-[#1d1d33] ">{{ items.description }}</p>
    </div>
  </template>
  <script setup>
  const props = defineProps(["message"])
  </script>