<template>
      <div class="w-full flex justify-center flex-row-reverse" >
      <div class="py-20" >
      <div class=" grid lg:grid-cols-2 grid-cols-1 gap-12 justify-center " :dir="props.message.direction" :class="props.message.bgclass">
        <div class="p-6">
          <h1 class="text-4xl mt-12 text-trisec leading-[50px] font-semibold text-left" v-if="props.message.header">
            <span class="font-light-custom text-[36px] lg:text-4xl ">{{props.message.header}}</span>
            <span class="font-black-custom text-[36px] ">{{props.message.boldheader}}</span>
          </h1>
          <p
            class="mt-6 font-regular-custom text-[18px] text-left"
          >{{ props.message.paragraph }}</p>
          <button v-if=" props.message.btn" class="float-left w-40 p-2 my-6 bg-[#2a8cfb] text-white  text-[16px] font-[400]" v-for="items in props.message.btn">{{items}}</button>
        </div>
        <div class="flex justify-center ">
          <img :src="props.message.img">
        </div>
      </div>
    </div>
   </div>
</template>
<script setup>

const props = defineProps(["message"])
</script>