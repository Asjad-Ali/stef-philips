<template>
  <div class="h-12 w-full bg-[#707070] bl ">
    <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-4 inner p-3 ">
      <router-link exact-active-class="exact-active" class="text-white font-semibold text-sm" to="/home">Home</router-link>
      <i class="pi pi-angle-right text-white"></i>
        <router-link active-class="active" class="text-white font-semibold text-sm dropbtn" to="/about-us">About us</router-link>
        <i class="pi pi-angle-right text-white"></i>
        <router-link active-class="active" class="text-white font-semibold text-sm" to="/meet-the-team">Meet the team</router-link>
    </nav>
  </div> 

<!-- -->
  <div class="w-full flex justify-center">
    <div class="w-[60%]   py-28">
      <div class="lg:flex">
        <div
          class="w-half  lg:flex items-cennter"
        >
          <div class="flex flex-col px-8  lg:pt-28   pb-8">
            <h1
              class="lg:text-5xl text-trisec xxs:text-[20px] leading-[50px] text-start font-semibold w-[100%]"
            >
              <span class="font-light"
                >Meet the</span
              >
              <span> team</span>
            </h1>
            <p
              class=" lg:py-8  font-normal mt-2 leading-loose tracking-wide"
            >
              Find out how to report a repair, how
              long it will take and whether it's
              your resposibility or ours
            </p>
          </div>
        </div>

        <div class="w-half flex items-center px-8">
            <img class="lg:w-max-lg" src="../assets/Card-Image2.png" alt="card-image">
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
  <div class="py-20 w-[60%] mx-auto">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1 max-w-5xl mx-auto">
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
      <div class="grid bg-second md:grid-cols-2 grid-cols-1 max-w-5xl mx-auto">
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
      <div class="grid bg-second md:grid-cols-2 grid-cols-1 max-w-5xl mx-auto">
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
</script>
<style scoped></style>
