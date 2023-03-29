<template>
    <div class="contact-card h-[170px] p-5 w-[150px]" v-for="items in props.message">
        <img :src='items.img' class="h-[50px] w-[50px]" alt="contact-home">
        <p class="text-[18px] font-xbold-custom mt-4">{{ items.text }}</p>
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