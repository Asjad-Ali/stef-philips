<template>
  <div
    class="contact-card h-[270px] p-6 w-full max-w-[230px] text-[#22427A]"
    v-for="items in props.message"
  >
    <img :src="items.img" alt="contact-home" />
    <p class="lg:text-[18px] xxs:text-[14px] text-custom mt-6">
      {{ items.text }}
    </p>
  </div>
</template>
<script setup>
const props = defineProps(["message"]);
</script>
<style scoped>
.text-custom {
  font-size: 18px;
  font-weight: normal;
  line-height: 26px;
  font-style: normal;
  text-align: left;
  color: #1d1d33 !important;
}
.contact-card {
  background-color: #f0f7fe;
  border: 2px solid #4d6896;
  border-width: 2px;
}
</style>
