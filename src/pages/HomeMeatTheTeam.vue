<template>
    <div class="lg:w-full min-h-[400px] bg-[url('src/assets/Background.png')] bg-center bg-no-repeat bg-cover">
    <div class="max-w-[1440px] w-full p-3  flex flex-col justify-center items-center ">
       <div class="w-[60%]  mx-auto "> <h1 class="text-[42px] text-white font-[300] mt-16">Meet your team</h1>
        <p class="text-[18px] text-white font-[400]">Short introductory summary for the page <br> goes here like so</p>
    </div>
</div></div>

    <div class="  min-h-[600px]  w-full ">
    <div class=" mx-auto w-[60%] ">
    <HorizontalCardVue :message="card1"/>
    <HorizontalCardVue :message="card2" />
    <HorizontalCardVue :message="card3" />

</div>
    <div class="w-full flex justify-center">
 
 <NeedHelp/>
 
</div></div>
</template>
<script setup>
import HorizontalCardVue from '../components/HorizontalCard.vue';
import NeedHelp from '../components/NeedHelp.vue';
const card1={ bgclass:' white ' , header:'Meet your', boldheader:' Housing Officer', btn:['Read out more'], img:'src/assets/Card Image3.png',paragraph:'At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.'}
const card2={ direction:'rtl',class:' flex flex-row-reverse ' , header:'Field worker', boldheader:' Housing Officer', btn:['Read out more'], img:'src/assets/Card Image3.png', paragraph:'At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.'}
const card3={ class:' flex flex-row-reverse ' , header:'Maintainance worker', boldheader:' Housing Officer', btn:['Read out more'], img:'src/assets/Card Image3.png', paragraph:'At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.'}
</script>