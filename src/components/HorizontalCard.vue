<template>
    <div class="w-full flex justify-center">  
      <div class="w-[70%]">
      <div class="py-20">
      <div class=" grid lg:grid-cols-2 grid-cols-1 gap-12 " :dir="props.message.direction" :class="props.message.bgclass">
        <div class="flex flex-col justify-center">
          <h1 class="mt-12 text-trisec" v-if="props.message.header">
            <span class="font-light-custom text-[36px]">{{props.message.header}}</span>
            <span class="font-black-custom text-[36px]">{{props.message.boldheader}}</span>
          </h1>
          <p
            class="mt-6 font-regular-custom text-[18px]"
          >{{ props.message.paragraph }}<br>{{ props.message.paragraph2 }}</p>
          <button v-if=" props.message.btn" class="float-left w-40 p-2 my-6 bg-[#2a8cfb] text-white  text-[16px] font-[400]" v-for="items in props.message.btn">{{items}}</button>
        </div>
        <div class="flex justify-end ">
          <img :src="props.message.img">
        </div>
      </div>
    </div>
   </div>
  </div>
</template>
<script setup>

const props = defineProps(["message"])
</script>