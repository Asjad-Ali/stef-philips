<template>
  <div v-for="Card in props.Cards" :key="Card" class="partner-us relative bg-[#20407C]">
    <div class="relative z-10">
      <div class="container">
        <div class="grid md:grid-cols-2 grid-col-1 items-center">
          <div class="img-content">
            <img src="../assets/Graphic.png" alt=""/>
          </div>
          <div class="content-section">
            <h1 class="text-[36px] font-light-custom text-trisec text-ellipsis leading-[40px] text-white mb-[8px]">
              {{ Card.attributes.title }}
            </h1>
            <p class="text-[18px] font-regular-custom mt-4 text-white mb-[30px]">
              {{ Card.attributes.description }}
            </p>
            <button class="xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["Cards"]);
</script>

<style scoped>
  .partner-us .img-content{
    margin-top: -120px
  }
</style>