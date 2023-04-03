<template>
    <div class="contact-card h-[270px] p-6 w-full max-w-[230px] text-[#22427A]" v-for="items in props.message">
        <img :src='items.img' alt="contact-home">
        <p class="lg:text-[18px] xxs:text-[14px] font-xbold-custom mt-6">{{ items.text }}</p>
    </div>
    </template>
    <script setup>
    const props = defineProps(["message"])
    </script>
    <style scoped>
    .contact-card{
        background-color: #F0F7FE;
        border: 2px solid #4D6896;
    }
    </style>