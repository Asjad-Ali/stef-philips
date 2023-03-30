<template>
  <div class="max-w-[250px] w-full bg-[#f0f7fe] p-8" v-for="items in message">
           <img :src="items.img" class="py-3" alt="">
           <h1  class="text-[20px] font-[400] text-[#20407c] py-2">{{items.header}} <b class="font-[900]">{{items.bold}}</b></h1>
           <p class="text-[18px] font-[400] text-[#1d1d33] ">Short description goes here like so in this featured icon element lore ipsum.</p>
           <Button  class="bg-[#2a8cfb] text-white w-40 p-2 text-[16px] font-[400] mt-8">Read out more</Button>
         </div>
</template>
<script setup>

const props = defineProps(["message"])
</script>