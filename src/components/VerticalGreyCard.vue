<template>
       <Card style="max-width: 28em; width:100%; " v-for="items in props.message" :class="items.bgclass">
            <template #header>
                <img alt="user header" :src="items.img" />
            </template>
            <template #title  > <h1 class="text-[20px] text-[#20407c] font-[900]">  {{items.heading}} </h1> </template>
            <template #subtitle> <button v-if="items.subButton" class="bg-[#896bff81] text-[12px] font-[900] p-1 text-[#886bff]">{{items.subButton}}</button> </template>
            
            <template #content>
                <p  class="text-[18px] text-[#1d1d33] font-[400]">
                    Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" class="bg-[#2a8cfb] text-white w-40 p-2 text-[16px] font-[400]">Read more</Button>
                
            </template>
        </Card>
</template>
<script setup>
import Card from 'primevue/card';
const props = defineProps(["message"])
</script>