<template>
  <div v-for="(Card,index) in Cards" :key="index" class="grid md:grid-cols-2 grid-cols-1 items-center gap-[24px] mb-[50px]">
    <div class="img-section" :class="{'order-last' : index%2 !=0}">
      <img :src="Card.attributes.image.data.attributes.url" alt=""/>
    </div>  
    <div class="content-section md:px-[40px]">
      <h1 class="px-8 font-light-custom text-[36px] text-trisec text-ellipsis leading-[40px]">{{ Card.attributes.title }}</h1>
      <p class="text-[18px] font-regular-custom mt-4 px-8">
        {{ Card.attributes.description }}</p>
      <button class="bg-[#2a8cfb] h-[50x] w-[205px] py-4 px-14 ml-8 text-[16px] mt-5 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
        Meet our team
      </button>
    </div>  
  </div>
</template>

<script setup>
 const props = defineProps(["Cards"]);

</script>