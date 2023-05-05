<template>
  <div
    class="lg:max-w-[310px] sm:max-w-[275px] md:max-w-[245px] w-full bg-[#f0f7fe] p-8 h-[436px] grid justify-between"
    v-for="items in props.message"
    :key="items.name"
  >
    <img :src="items.img" class="py-3 imagesCard" alt="" />
    <h1 class="text-[20px] font-[400] text-[#20407c] py-2">
      {{ items.header }}
      <b class="font-[900] font-black-custom">{{ items.bold }}</b>
    </h1>
    <p class="text-[18px] font-[400] text-[#1d1d33]">
      {{ items.description }}
    </p>
    <Button class="bg-[#2A8CFB] h-[44px] text-white w-[140px] p-2 text-[14px]"
      >Find out more</Button
    >
  </div>
</template>
<script setup>
const props = defineProps(["message"]);
</script>
<style scoped>
.imagesCard {
  width: 100%;
  height: auto;
  max-width: 35%;
}
</style>
