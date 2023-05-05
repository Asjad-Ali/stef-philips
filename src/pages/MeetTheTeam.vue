<template>
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav class="container mx-auto flex items-center justify-start gap-3 inner">
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="about-us">About us</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="meet-the-team">Meet the team</router-link>
      </div>
    </nav>
  </div>

  <!-- -->
  <div class="w-full flex justify-start items-center">
    <HorizontalCardVue :message="card2" />
  </div>
  <!-- -->
  <div class="w-full flex justify-around align-center">
    <div class="container my-10">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px] justify-between">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
      </div>
    </div>
  </div>

  <div class="py-20 container">      
    <Testimonial />
  </div>

  <div class="w-full flex justify-around align-center">
    <div class="container my-10">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px] justify-between">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
      </div>
    </div>
  </div>
  <div class="py-20 container">      
    <Testimonial />
  </div>
  
  <div class="w-full flex justify-around align-center">
    <div class="container my-10">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px] justify-between">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
      </div>
    </div>
  </div>
  
  <div class="py-20 container">      
    <Testimonial />
  </div>

  <div class="w-full flex justify-around align-center">
    <div class="container my-10">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px] justify-between">
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
        <MeetTheTeamCard />
      </div>
    </div>
  </div>

  <div class="w-full h-auto bg-[#1d1d33] flex items-center relative mt-[200px] border-b border-[#fff]">
    <!-- <div class="contentImg"></div> -->
    <div class="container h-[315px] mx-auto p-3">
      <div class="grid grid-cols-2">
        <div class="">
          <h1 class="text-[36px] text-white font-light-custom mt-16"> <strong class="font-black-custom">Community</strong> is what we all <br> have in common</h1>
          <div class="flex flex-wrap gap-4">
            <button class=" xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white ">Careers</button>
            <button class="xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white ">Meet the team</button>
          </div>
        </div>
        <div class="-translate-y-[131px]">
          <div class="contentImg"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MeetTheTeamCard from "../components/MeetTheTeamCard.vue";
import { Icon } from "@iconify/vue";
import HorizontalCardVue from "../components/HorizontalCard.vue";
import Testimonial from "../components/Testimonial.vue";
const card2 = {
  header: "Meet the",
  boldheader: " team",
  img: "src/assets/Card-Image2.png",
  paragraph: `Find out how to report a repair, how long it will`,
  paragraph2: "take and whether its your resposibility or ours",
};
</script>
<style scoped>

.mt {
  margin-top: 10%;
}

.mb {
  margin-bottom: 20%;
}

.relative {
  position: relative;
}

.ml {
  margin-left: 14%;
}

.contentImg {
  background-image: url("../assets/footimage.png");
  /* background-image: url(/src/assets/footimage.png); */
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-position: right;
  width: 100%;
  height: 434.7px;
  /* margin-left: 40%; */
  /* margin-top: 5%; */
  opacity: 90%;
}
</style>
