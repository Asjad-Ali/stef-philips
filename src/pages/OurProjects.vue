<template>
    <!-- Step 1 -->
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
      <nav class="w-[70%]  mx-auto flex items-center justify-start gap-3 inner ">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="home">Home</router-link></div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="housing-partners">Housing Partners</router-link></div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="our-projects">Our Projects</router-link></div>
      </nav>
    </div>
    <!-- Step 1 -->
    <!-- Step 2 --> 
    <div class="w-full min-h-[500px] bg-red-400 bgImg">
      <div class="w-[60%] h-[500px] mx-auto flex items-center">
        <div class="w-[365px] h-[380px] contentImg lg:ml-14"></div>
        <div class="w-[409px] h-[45px] min-h-[60px] max-w-sm groupImg lg:ml-[6rem]">
          <h1 class="font-light-custom text-[36px] leading-none text-white content">
            <span>Our </span>
            <span class="font-black-custom text-[36px]">Projects</span>
          </h1>
          <p class="text-white mt-4 font-regular-custom text-[15px] content2">Short Introductory summary for the page<br />goes here lilke so</p>
        </div>
      </div>
    </div>
    <!-- Step 2 -->
    
    <div class="w-full mx-auto flex justify-center px-20 py-20 min-h-[500px]">      
        <div class="grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1  gap-6"> 
            <OurProjectCards :message="projects"/>
        </div>
    </div>

    <div class="w-full mx-auto flex justify-center px-18 pb-20 min-h-[500px]">      
      <div class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1  gap-6"> 
        <OurProjectCards :message="people"/>
      </div>
    </div>
    <!-- Step 4 -->
    
     
    
</template>

<script setup>
import OurProjectCards from "../components/OurProjectsCard.vue";  
import Cards from "../components/Cards.vue";  
import { useAppStore } from "../store/index";
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
return hover.hover;
});
const projects = [
{
  name: "Featured project with its own page",
  role: "Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href, 
  btnName: "View Project",
  height: "h-[500px]",
  width: "w-[440px]"  
},
{
  name: "Featured project with its own page",
  role: "Excerpt for the page goes in here like so loren ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href, 
  btnName: "View Project",
  height: "h-[500px]",
  width: "w-[440px]"  
}
  // More people...
];


const people = [
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
  height: "h-[380px]",
  width: "w-[283px]" 
},
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
  height: "h-[380px]",
  width: "w-[283px]" 
},
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
  height: "h-[380px]",
  width: "w-[283px]"
},
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
  height: "h-[380px]",
  width: "w-[283px]" 
},
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
  height: "h-[380px]",
  width: "w-[283px]" 
},
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
  height: "h-[380px]",
  width: "w-[283px]"
}
  // More people...
];

</script>


<style scoped>


.nav-bar-tranparent{
  position: absolute;
  opacity: 0.50;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}

.bgImg {
background-image: url("../assets/our-project-img.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center; 
}
.contentImg {
background-image: url("../assets/outline-house@4.png");
background-repeat: no-repeat;

background-size: cover;
background-position: center;  
opacity: 100%;
}

.groupImg {
background-image: url("../assets/Group\ 96.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
position: absolute; 
}
</style>