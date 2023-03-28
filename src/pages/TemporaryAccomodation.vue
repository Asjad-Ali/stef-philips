<template>
  <div class="w-full min-h-[600px] bg-red-400 bgImg">
      <div class="w-[60%] h-[600px] mx-auto flex items-center">
        <div class="max-w-xl">
          <h1 class=" font-[300] text-[42px] text-white leading-snug   ">
           Temporary or emergency accommodation</h1>
          <p
            class="text-white font-[400] text-[18px] mt-3 tracking-wide leading-snug  "
          >Safe, suitable homes and vital services for tenants, authorities and partners, backed by investors who care.</p>
        </div>
      </div>
    </div>
    <Accordion :message="message" />

</template>





<script setup>
import Accordion from '../components/Accordion.vue';
</script>



<style scoped>
.bgImg {
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>