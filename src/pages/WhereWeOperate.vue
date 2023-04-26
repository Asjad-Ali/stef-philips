<template>
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
            <i class="pi pi-angle-right text-white"></i>
            <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
                <router-link to="Where-we-operate">Where we operate</router-link></div>
        </nav>
    </div>

    <!-- section 1 -->
    <div class="w-full min-h-[250px] "> 
        <div  class=" w-[70%] h-[250px] mx-auto p-3">
        <h1  class="text-[46px] text-[#20407c] font-light-custom mt-16"><span class="font-black-custom">Where</span> we operate</h1> 
        <p class="text-[18px] text-[#20407c] font-regular-custom"> 
            Find out how to report a repair, how long it will<br>take and whether it’s your responsibility or ours
        </p>
        </div>
    </div>


    <!-- section 2 -->
    <div class="w-full">
        <div  class=" w-[70%] min-h-[360px] mx-auto  bg-[url('src/assets/project-template-slide')] bg-no-repeat bg-cover bg-center hidden sm:flex" >
            <img src="../assets/map-img-full.png" alt />
        </div>
    </div> 

    <h1 class="lg:ml-[20rem] text-[36px] text-[#20407C] mt-[6rem]">
        <span class="font-black-custom">National reach </span><span>Statistics</span>
    </h1>
    <div class=" w-[70%] mx-auto flex flex-col justify-center">
        <div class="card flex items-start justify-center mx-auto flex-wrap gap-[4rem] w-full ">
          <ProjectTemplateCard :message="card2"/>
        </div>
    </div>
 
    <div class="min-h-[400px]  w-full ">
        <div class="mx-auto w-[70%] ">
            <div class="">
                <div class="lg:flex">
                    <div class="lg:w-[50%]  flex-auto">
                        <img src="../assets/housing-partner-3.png" alt />
                    </div>
                    <div class="lg:w-[50%] pt-[11rem] ml-6">
                        <h1 class="px-8 text-[32px] lg:font-[400] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                        <span class="font-light-custom text-[36px]">Working with our</span><br>
                        <span class="font-black-custom text-[36px]"> partners</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-8">
                        Short paragraph on the custom solutions to meet the needs of local authorities etc. and the turnkey properties that are ready to go
                        </p><br>
                        <button type="button" class="bg-[#2a8cfb] h-[50x] w-[205px] py-4 px-14 ml-8 text-[16px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                        Get in touch
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    
    
    <div class="w-full h-auto bg-[#20407C] flex items-center relative" style="margin-top: 200px;"> 
        <div  class="h-[315px] mx-auto p-3 ml lg:flex">
        <div class="bgpartner"></div>
        <div class="pt-[3rem]">
            <h1 class="text-[32px] lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]">
            <span class="font-light-custom text-white text-[36px]">Partner</span> 
            <span class="font-black-custom text-white text-[36px]"> with us</span>
            </h1>
            <p class="text-[18px] font-regular-custom mt-4 text-white">
            Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button class=" xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white ">Get in touch</button>
        </div>
        </div>
    </div>
</template>

<script setup> 
import ProjectTemplateCard from '../components/ProjectTemplateCard.vue';
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