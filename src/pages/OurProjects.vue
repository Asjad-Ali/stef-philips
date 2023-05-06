<template>
  <!-- Step 1 -->
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav class="container flex items-center justify-start gap-3 inner ">
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
  <div class="w-full min-h-[500px] mb-[50px]">
    <PageBanner/>
  </div>
  <!-- Step 2 -->
  
  <div class="container py-[100px]">      
    <div class="grid md:grid-cols-2 grid-cols-1 gap-[24px]"> 
      <OurProjectCards :message="projects"/>
    </div>
  </div>

  <div class="container pb-[100px]">      
    <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px]"> 
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
import PageBanner from "../components/PageBanner.vue";

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
},
{
  name: "Featured project with its own page",
  role: "Excerpt for the page goes in here like so loren ipsum dolor sit amet, consectetur adipiscing elit.",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href, 
  btnName: "View Project",
}
  // More people...
];


const people = [
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
},
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
},
{
  name: "Project Title",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/feature-card.png", import.meta.url).href,
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