<template>
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav class="container  mx-auto flex items-center justify-start gap-3 inner">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
        <router-link to="home">Home</router-link>
      </div> <i class="pi pi-angle-right text-white"></i>
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
        <router-link to="about-us">About us</router-link>
      </div> <i class="pi pi-angle-right text-white"></i>
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
        <router-link to="community">Community</router-link>
      </div>
    </nav>
  </div>
  <!-- section 1 -->
  <div class="w-full">
    <div class=" container pt-[100px] py-[47px]">
      <h1 class="text-[42px] text-[#20407c] font-light-custom mt-16">Community</h1>
      <p class="text-[18px] text-[#1d1d33] font-regular-custom text-[#1D1D33]"> We are always in it together. Working together to build foundations for better lives – from participating in obstacle courses, and team-building activities to charitable events, we are driven individuals determined to make a difference. </p>
    </div>
  </div>
  <!-- section 2 -->
  <div class="w-full bg-[#1d1d33] relative">
    <div class="container flex items-center min-h-[760px] ">
      <div class="w-[50%] mx-auto flex items-center p-3 relative text1">
        <div class="min-h-[250px] p-3 my-40 text  ">
          <h1 class="text-[18px] text-white font-black-custom">Upcoming event</h1>
          <h1 class="text-[42px] text-white font-light-custom leading-1">Tough Mudder</h1>
          <p class="text-[18px] text-white font-light-custom">15 April 2023, Finsbury Park.</p>
          <br>
          <p class="text-[18px] text-white font-regular-custom">Want to join our team? We’re raising
            <br> funds for XXXXX (tbc).</p>
          <button class="w-40 p-2 my-3 border border-white text-[16px] text-white ">Read more</button>
        </div>
      </div>
      <div class="w-[50%]"></div>
    </div>
    <div class=" w-[50%] min-h-[760px] mx-auto  bg-[url('src/assets/community.png')] bg-no-repeat bg-cover bg-center hidden sm:flex absolute right-0 top-0 bottom-0"> </div>
  </div>
  <!-- section 3 -->
  <div class="w-full min-h-[600px] pt-8">
    <div class="container p-3">
      <h1 class="text-[36px] font-light-custom text-[#20407c] my-4">Past events</h1>
      <div class="grid md:grid-cols-2 gap-y-8">
        <Card :message="card1" /> 
      </div>
        
    </div>
  </div>
  <!-- section 4  -->
  <div class="w-full h-auto bg-[#1d1d33] flex items-center relative mt-[200px]">
    <!-- <div class="contentImg"></div> -->
    <div class="container md:h-[315px] mx-auto p-3">
      <div class="grid md:grid-cols-2">
        <div class="">
          <h1 class="text-[36px] text-white font-light-custom mt-16"> <strong class="font-black-custom">Community</strong> is what we all <br> have in common</h1>
          <!-- <p class="text-[18px] py-2 text-white font-regular-custom">Excerpt for the page goes in here like so lorem ipsum dolor<br> sit amet, consectetur adipiscing elit.</p> -->
          <div class="flex flex-wrap gap-4">
            <button class=" xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white ">Careers</button>
            <button class="xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white ">Meet the team</button>
          </div>
        </div>
        <div class="md:-translate-y-[30%] md:mt-0 mt-8">
          <div class="contentImg"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- section 5 -->
  <div class="py-20 container">      
    <Testimonial />
  </div>
  <!-- section 6 -->
  <div class="w-full min-h-[600px] ">
    <div class="container p-3">
      <h1 class="text-[36px] font-light-custom text-[#20407c] my-4">Latest community news</h1>
      <div class="card grid md:grid-cols-2 gap-y-8 w-full mb-8 ">
        <Card :message="card2" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import Card from 'primevue/card';
import { Icon } from "@iconify/vue";
import Card from '../components/EventCard.vue'
import Testimonial from "../components/Testimonial.vue";


const card1=[{bgclass:'bg-[#F4F9FF]', heading:'Bowling', description: 'Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: new URL("../assets/CardImagek.png", import.meta.url).href},{ bgclass:'bg-[#F4F9FF]',heading:'Christmas Jumper Day', description: 'Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.',img:new URL("../assets/CardImagen.png", import.meta.url).href}]
const card2=[{ heading:'Media title here',description: 'Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.', img:new URL("../assets/Svg/Background3.svg", import.meta.url).href, subButton:'Commmunity'},{ heading:'Media title here', img:new URL("../assets/Svg/Background3.svg", import.meta.url).href,subButton:'Commmunity',description: 'Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.',}]

</script>
<style scoped> 

.bl{
  background-color: rgba(29, 29, 51, 0.5);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

@media (max-width:650px){
.bgImg{
 display:none;
}
.text1{
    width:100%;
}

.text{
   
    position:relative !important;
   margin: 20% auto;
}
}
@media(max-width:750px){
    .card{
        flex-wrap: wrap;
    }
}
.contentImg {
  background-image: url("../assets/footimage.png");
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
  height: 434.7px;
}
</style>