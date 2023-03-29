<template>
       <Card style="max-width: 28em; width:100%; " v-for="items in props.message" :class="items.bgclass">
            <template #header>
                <img alt="user header" :src="items.img" />
            </template>
            <template #subtitle> <button v-if="items.subButton" class="bg-[#ebe4f9] text-[12px] font-black-custom xxs:py-2 md:py-2 xxs:px-2 md:px-3  text-[#886bff]">{{items.subButton}}</button> </template>
            <template #title> <h1 class="text-[24px] text-[#2A8CFB] font-black-custom"> {{items.heading}} </h1> </template>
            <template #content>
                <p  class="text-[18px] text-[#1d1d33] font-regular-custom">
                    Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" class="bg-[#2a8cfb] text-white xxs:py-3 md:py-3 xxs:px-6 md:px-8 text-[14px] font-xbold-custom">Read more</Button>
                
            </template>
        </Card>
</template>
<script setup>
import Card from 'primevue/card';
const props = defineProps(["message"])
</script>