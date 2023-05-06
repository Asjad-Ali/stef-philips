<template>
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
          <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
              <router-link to="Where-we-operate">Where we operate</router-link></div>
      </nav>
  </div>

    <!-- section 1 -->
    <div class="container"> 
      <div class="grid md:grid-cols-2">
        <div  class="pt-[140px] pb-[20px]">
          <h1  class="text-[46px] text-[#20407c] font-light-custom"><span class="font-black-custom">Where</span> we operate</h1> 
          <p class="text-[18px] text-[#20407c] font-regular-custom">
            Stef & Philips provides high-quality housing  for a wide range of communities, right across the UK. For more detail about the accommodation we offer in specific areas, click on the map below.
          </p>
        </div>
      </div>
    </div>


    <!-- section 2 -->
    <div class="pb-[50px]">
      <div class="">
        <img src="../assets/map-img-full.png" alt />
      </div>
    </div> 

    <div class="container py-[50px]">
      <h1 class="text-[36px] text-[#20407C] font-regular-custom">
        <span class="font-black-custom">National reach </span>
        Statistics
      </h1>
      <div class="grid md:grid-cols-3 gap-[24px] mt-[38px]">
        <ProjectTemplateCard :message="card2"/>
      </div>
    </div>

    <div class="container pt-[50px] pb-[220px]">
      <SectionContentImage/>
    </div>

    <PartnerUs/>
</template>

<script setup> 
import ProjectTemplateCard from '../components/ProjectTemplateCard.vue';
import SectionContentImage from "../components/SectionContentImage.vue";
import PartnerUs from "../components/PartnerUs.vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
return hover.hover;
});


const card2=[
{
    header:'Key stat', 
    description:'Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    img:'src/assets/IconYell.png'
},
{
    header:'Key stat', 
    description:'Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    img:'src/assets/Icons-center-yell.png'
},
{
    header:'Key stat', 
    description:'Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    img:'src/assets/IconYell.png'
}

]

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
    top: -38%;
}

.bgpartner {
  background-image: url("../assets/Graphic.png");
  right: 18%;
  background-repeat: no-repeat;
  background-position: left;
  position: relative;
  width: 100%;
  height: 434.7px;
  /* margin-left: 15%; */
  /* margin-top: 5%; */
  opacity: 90%;
  top: -44.1%;
}

.bgColor1 {
  background-color: #1d1d33;
  background-image: url("../assets/full_quote.png");
  background-repeat: no-repeat; 
}
</style>