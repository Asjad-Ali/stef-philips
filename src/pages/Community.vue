<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center">
        <nav class="w-[60%]  mx-auto flex items-center justify-start gap-3 inner  ">
          <router-link exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom" to="/home">Home</router-link>
          <i class="pi pi-angle-right text-white"></i>
            <router-link active-class="active" class="text-white font-semibold text-sm dropbtn font-bold-custom" to="/about-us">About us</router-link>
            <i class="pi pi-angle-right text-white"></i>
            <router-link active-class="active" class="text-white font-semibold text-sm font-bold-custom" to="/community">Community</router-link>
        </nav>
      </div> 
    <!-- section 1 -->
 <div class="w-full min-h-[250px] "> 
<div  class="max-w-[1440px] w-[60%] h-[250px] mx-auto p-3">
<h1  class="text-[42px] text-[#20407c] font-[300] mt-16">Community</h1> 
<p class="text-[18px] text-[#1d1d33] font-[400]">Short introductory summary for the page goes here like so</p>
</div>
</div>


<!-- section 2 -->


<div class="w-full min-h-[600px] bg-[#1d1d33]    ">
<div class="max-w-[1440px] w-full flex justify-center items-center mx-auto">
<div  class=" w-[50%] h-[600px] mx-auto p-3 relative text1" >
    <div  class="  w-[60%] min-h-[250px] p-3 absolute  right-0 my-40 text  ">
<h1  class="text-[18px] text-white font-[900]">Upcoming event</h1> 
<h1 class="text-[42px] text-white font-[300]">Tough Mudder</h1>
<p class="text-[18px] text-white font-[300]">15 April 2023, Finsbury Park.</p> <br>
<p class="text-[18px] text-white font-[400]">Want to join our team? We’re raising funds for XXXXX (tbc).</p>
<button class="w-40 p-2 my-3 border border-white text-[16px] font-[300] text-white ">Read more</button>
</div>
</div>
<div  class=" w-[50%] h-[600px] mx-auto  bgImg" >
 <!-- <img class="w-full h-full" src="../assets/Background.png" alt=""> -->
 </div>
 </div>
</div>


<!-- section 3 -->
<div class="w-full min-h-[600px] "> 
<div  class="max-w-[1440px] w-[60%]  mx-auto p-3">
 <h1 class="text-[36px] font-[300] text-[#20407c] my-4">Past events</h1>
  
    <div class="card flex items-start justify-content-between gap-5 w-full " >
        <Card :message="card1" class="bg-[#ededee]" />
    </div>

</div>
</div>

<!-- section 4  -->
<div class="w-full min-h-[450px] h-auto bg-[#1d1d33] flex items-center"> 
<div  class="max-w-[1440px] w-[60%] min-h-[315px] mx-auto p-3">
<h1  class="text-[36px] text-white font-[300] mt-16"> <span class="font-[900]">Community</span> ethos is what we all have in common</h1> 
<p class="text-[18px] text-white font-[400]">Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div class="flex gap-4"><button class="w-40 p-2 my-3 border border-white text-[16px] font-[300] text-white ">Carriers</button>
<button class="w-40 p-2 my-3 border border-white text-[16px] font-[300] text-white ">Meet the team</button></div>
</div>
</div>
<!-- section 5 -->
<div class="w-full min-h-[450px] h-auto "> 
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
    </div> </div>
<!-- section 6 -->
<div class="w-full min-h-[600px] "> 
<div  class="max-w-[1440px] w-[60%]  mx-auto p-3">
 <h1 class="text-[36px] font-[300] text-[#20407c] my-4">Latest community news</h1>
  
    <div class="card flex items-start justify-content-between gap-5 w-full ">
        <Card :message="card2" style="background-color: white ;"/>
    </div>

</div>
</div>
</template>

<script setup>
// import Card from 'primevue/card';
import Card from '../components/VerticalGreyCard.vue'
const card1=[{ heading:'Bowling', img:'src/assets/rock.png'},{ heading:'Christmas Jumper Day', img:'src/assets/community-tab.png'}]
const card2=[{ heading:'Media title here', img:'src/assets/bgblue.png', subButton:'Commmunity'},{ heading:'Media title here', img:'src/assets/bgblue.png',subButton:'Commmunity'}]

</script>
<style scoped> 
.bl{
  background-color: rgba(29, 29, 51, 0.5);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

@font-face {
  font-family: "Bold-Custom";
  src: url("../assets/Aktiv-Grotesk/TTF/AktivGrotesk-Bold.ttf");

}
.font-bold-custom{
    font-family: "Bold-Custom";
  font-size: 14px;
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
</style>