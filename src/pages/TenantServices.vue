<template>
    <!-- section 1 -->
<div class="w-full min-h-[400px] bg-[url('src/assets/Image.png')]">
    <div class="max-w-[1440px] w-[60%]  mx-auto p-3  flex flex-col justify-center">
        <h1 class="text-[42px] text-white font-[300] mt-16">Tenant services</h1>
        <p class="text-[18px] text-white font-[400]">Short introductory summary for the page <br> goes here like so</p>
    </div>
</div>
<!-- section 2 -->
<div class="w-full min-h-[400px] p-3">
    <div class="max-w-[1440px] w-[60%]  mx-auto py-14 flex flex-col justify-center">
        <div class="card flex items-start justify-content-between gap-5 w-full " >
        <Card :message="card1" style="background-color:white;"/>
    </div>
    </div>
    <div class="max-w-[1440px] w-[60%]  mx-auto py-14 flex flex-col justify-center">
        <div class="card flex items-start justify-center mx-auto flex-wrap gap-5 w-full ">
          <TenantCard :message="card2"/>
        </div>
     </div>
    <div class="max-w-[1440px] w-[60%]  mx-auto py-14 flex flex-col justify-center">
     <CardsVue></CardsVue>
    </div>
    <div class="max-w-[1440px] w-[60%] mx-auto px-10  py-28 bg-[#EC8B7E]/10 my-32">
   <NeedHelp />
  </div>
</div>
</template>
<script setup>
import Card from '../components/VerticalGreyCard.vue'
import NeedHelp from "../components/NeedHelp.vue";
import TenantCard from '../components/TenantCard.vue';
import CardsVue from '../components/Card.vue';
const card1=[{ heading:'Temporary accommodation', img:'src/assets/community-tab.png'},{ heading:'Private rented sector', img:'src/assets/community-tab.png'}]
const card2=[{header:'Managing your ' , bold:'utility bills', img:'src/assets/Shape A.png'},{header:'Paying your ' , bold:'concil tax', img:'src/assets/Shape G.png'},{header:'Paying your ' , bold:'rent', img:'src/assets/ShapeD.png'}]


</script>
<style>

@media(max-width:750px){
    .card{
        flex-wrap: wrap;
    }
}
</style>