<template>
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav class="w-[70%] mx-auto flex items-center justify-start gap-3 inner">
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
    <div class="w-[70%] my-10 flex gap-5 flex-wrap">
      <MeetTheTeamCard />
      <MeetTheTeamCard />
      <MeetTheTeamCard />
    </div>
  </div>
  <div class="py-20 w-[70%] mx-auto">
    <div class="grid bg-second md:grid-cols-2 grid-cols-1">
      <div class>
        <img
          src="../assets/Background8.png"
          class="z-50 h-full w-full object-cover"
          alt
        />
      </div>
      <div class="flex items-center justify-center py-10">
        <div class="w-4/5 mt-6 md:mt-0">
          <span class="text-2xl text-primary">
            <Icon icon="ooui:quotes-ltr" />
          </span>
          <h1 class="font-light-custom text-[20px] text-white mt-5">
            Stef & Philips have been short quote goes here like so in this
            featured element element lore ipsum short quote goes here like so in
            this featured element element lore ipsum short quote goes here like
            so in this.
          </h1>
          <div class="my-5">
            <h1 class="font-regular-custom text-[18px] text-white">
              Name here
            </h1>
            <h1 class="font-black-custom text-[18px] text-white">Title here</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-around align-center">
    <div class="w-[70%] my-10 flex gap-5 flex-wrap">
      <MeetTheTeamCard />
      <MeetTheTeamCard />
      <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full flex justify-around align-center">
    <div class="w-[70%] my-10 flex gap-5 flex-wrap">
      <MeetTheTeamCard />
      <MeetTheTeamCard />
      <MeetTheTeamCard />
    </div>
  </div>
  <div class="py-20 w-[70%] mx-auto">
    <div class="grid bg-second md:grid-cols-2 grid-cols-1">
      <div class>
        <img
          src="../assets/Background8.png"
          class="z-50 h-full w-full object-cover"
          alt
        />
      </div>
      <div class="flex items-center justify-center py-10">
        <div class="w-4/5 mt-6 md:mt-0">
          <span class="text-2xl text-primary">
            <Icon icon="ooui:quotes-ltr" />
          </span>
          <h1 class="font-light-custom text-[20px] text-white mt-5">
            Stef & Philips have been short quote goes here like so in this
            featured element element lore ipsum short quote goes here like so in
            this featured element element lore ipsum short quote goes here like
            so in this.
          </h1>
          <div class="my-5">
            <h1 class="font-regular-custom text-[18px] text-white">
              Name here
            </h1>
            <h1 class="font-black-custom text-[18px] text-white">Title here</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-around align-center">
    <div class="w-[70%] my-10 flex gap-5 flex-wrap">
      <MeetTheTeamCard />
      <MeetTheTeamCard />
      <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full flex justify-around align-center">
    <div class="w-[70%] my-10 flex gap-5 flex-wrap">
      <MeetTheTeamCard />
      <MeetTheTeamCard />
      <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full flex justify-around align-center">
    <div class="w-[70%] my-10 flex gap-5 flex-wrap">
      <MeetTheTeamCard />
      <MeetTheTeamCard />
      <MeetTheTeamCard />
    </div>
  </div>
  <div class="py-20 w-[70%] mx-auto">
    <div class="grid bg-second md:grid-cols-2 grid-cols-1">
      <div class>
        <img
          src="../assets/Background8.png"
          class="z-50 h-full w-full object-cover"
          alt
        />
      </div>
      <div class="flex items-center justify-center py-10">
        <div class="w-4/5 mt-6 md:mt-0">
          <span class="text-2xl text-primary">
            <Icon icon="ooui:quotes-ltr" />
          </span>
          <h1 class="font-light-custom text-[20px] text-white mt-5">
            Stef & Philips have been short quote goes here like so in this
            featured element element lore ipsum short quote goes here like so in
            this featured element element lore ipsum short quote goes here like
            so in this.
          </h1>
          <div class="my-5">
            <h1 class="font-regular-custom text-[18px] text-white">
              Name here
            </h1>
            <h1 class="font-black-custom text-[18px] text-white">Title here</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-around align-center">
    <div class="w-[70%] my-10 flex gap-5 flex-wrap">
      <MeetTheTeamCard />
      <MeetTheTeamCard />
      <MeetTheTeamCard />
    </div>
  </div>
  <div class="w-full flex justify-around align-center">
    <div class="w-[70%] my-10 flex gap-5 flex-wrap">
      <MeetTheTeamCard />
      <MeetTheTeamCard />
      <MeetTheTeamCard />
    </div>
  </div>

  <!--  -->
  <div class="w-full h-auto bg-[#1d1d33] flex items-center mt relative">
    <!-- <div class="contentImg"></div> -->
    <div class="w-[70%] h-[315px] mx-auto p-3 ml">
      <h1 class="text-[36px] text-white font-light-custom mt-16">
        <span class="font-black-custom">Community</span> is what we all <br />
        have in common
      </h1>
      <p class="text-[18px] py-2 text-white font-regular-custom">
        Excerpt for the page goes in here like so lorem ipsum dolor<br />
        sit amet, consectetur adipiscing elit.
      </p>
      <div class="flex flex-wrap gap-4">
        <button
          class="xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white"
        >
          Careers
        </button>
        <button
          class="xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white"
        >
          Meet the team
        </button>
      </div>
    </div>
    <div class="contentImg"></div>
  </div>
</template>
<script setup>
import MeetTheTeamCard from "../components/MeetTheTeamCard.vue";
import { Icon } from "@iconify/vue";
import HorizontalCardVue from "../components/HorizontalCard.vue";
const card2 = {
  header: "Meet the",
  boldheader: " team",
  img: "src/assets/Card-Image2.png",
  paragraph: `Find out how to report a repair, how long it will`,
  paragraph2: "take and whether its your resposibility or ours",
};
</script>
<style scoped>
.nav-bar-tranparent {
  position: absolute;
  opacity: 0.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
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
  right: 16%;
  /* background-image: url(/src/assets/footimage.png); */
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-position: right;
  position: absolute;
  width: 100%;
  height: 434.7px;
  /* margin-left: 40%; */
  /* margin-top: 5%; */
  opacity: 90%;
  top: -33%;
}
</style>
