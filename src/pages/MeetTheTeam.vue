<template>
  <div class="h-[40px] w-full bg-[#707070] bl flex justify-center">
    <nav class="w-[60%] mx-auto flex items-center justify-start gap-3 inner   ">
      <div exact-active-class="exact-active" class="text-white text-sm font-bold-custom text-[14px]" >Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white text-sm dropbtn font-bold-custom text-[14px]" >About us</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white text-sm font-bold-custom text-[14px]" >Meet the team</div>
    </nav>
  </div> 

<!-- -->
  <div class="w-full flex justify-center">
   
    <HorizontalCardVue :message="card2"/>

  </div>
  <div class="w-full  flex justify-center">
    <div class="w-[60%] my-10 flex gap-5 flex-wrap">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
    </div>
  </div>
  <div class="py-20 w-[60%] mx-auto">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1  mx-auto">
        <div class>
          <img src="../assets/Background.png" class="z-50 h-full w-full object-cover" alt />
        </div>
        <div class="flex items-center justify-center">
          <div class="w-4/5 mt-6 md:mt-0 ">
            <span class="text-2xl    text-primary">
              <Icon icon="ooui:quotes-ltr" />
            </span>
            <h1
              class="md:text-xl text-white mt-5 leading-snug"
            >Stef & Philips have been short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this.</h1>
            <div class="my-5">
              <h1 class="text-xl text-white">Name here</h1>
              <h1 class="text-xl text-white font-semibold">Title here</h1>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="w-full  flex justify-center">
    <div class="w-[60%] my-10 flex gap-5 flex-wrap">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full  flex justify-center">
    <div class="w-[60%] my-10 flex gap-5 flex-wrap">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
    </div>
  </div>
  <div class="py-20 w-[60%] mx-auto">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1  mx-auto">
        <div class>
          <img src="../assets/Background.png" class="z-50 h-full w-full object-cover" alt />
        </div>
        <div class="flex items-center justify-center">
          <div class="w-4/5 mt-6 md:mt-0 ">
            <span class="text-2xl    text-primary">
              <Icon icon="ooui:quotes-ltr" />
            </span>
            <h1
              class="md:text-xl text-white mt-5 leading-snug"
            >Stef & Philips have been short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this.</h1>
            <div class="my-5">
              <h1 class="text-xl text-white">Name here</h1>
              <h1 class="text-xl text-white font-semibold">Title here</h1>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="w-full  flex justify-center">
    <div class="w-[60%] my-10 flex gap-5 flex-wrap">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full  flex justify-center">
    <div class="w-[60%] my-10 flex gap-5 flex-wrap">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full  flex justify-center">
    <div class="w-[60%] my-10 flex gap-5 flex-wrap">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
    </div>
  </div>
  <div class="py-20 w-[60%] mx-auto">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1  mx-auto">
        <div class>
          <img src="../assets/Background.png" class="z-50 h-full w-full object-cover" alt />
        </div>
        <div class="flex items-center justify-center">
          <div class="w-4/5 mt-6 md:mt-0 ">
            <span class="text-2xl    text-primary">
              <Icon icon="ooui:quotes-ltr" />
            </span>
            <h1
              class="md:text-xl text-white mt-5 leading-snug"
            >Stef & Philips have been short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this.</h1>
            <div class="my-5">
              <h1 class="text-xl text-white">Name here</h1>
              <h1 class="text-xl text-white font-semibold">Title here</h1>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="w-full  flex justify-center">
    <div class="w-[60%] my-10 flex gap-5 flex-wrap">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full  flex justify-center">
    <div class="w-[60%] my-10 flex gap-5 flex-wrap">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full min-h-[250px] h-auto bg-[#1d1d33] flex items-center"> 
<div  class="max-w-[1440px] w-[60%] min-h-[315px] mx-auto p-3">
<h1  class="text-[36px] text-white font-[300] mt-16"> <span class="font-[900]">Community</span> ethos is what we all have in common</h1> 
<p class="text-[18px] text-white font-[400]">Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div class="flex gap-4"><button class="w-40 p-2 my-3 border border-white text-[16px] font-[300] text-white ">Carriers</button>
<button class="w-40 p-2 my-3 border border-white text-[16px] font-[300] text-white ">Meet the team</button></div>
</div>
</div>
</template>
<script setup>
import MeetTheTeamCard from "../components/MeetTheTeamCard.vue"
import HorizontalCardVue from '../components/HorizontalCard.vue';
const card2= { header:'Meet the', boldheader:' team', img:'src/assets/Card-Image2.png', paragraph:'Find out how to report a repair, how long it will take and whether its your resposibility or ours'}

</script>
<style scoped>

</style>
