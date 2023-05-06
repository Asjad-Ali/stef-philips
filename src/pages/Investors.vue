<template>
  <div class>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center  nav-bar-tranparent">
      <nav class="container flex items-center justify-start gap-3 inner ">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">                
          <router-link to="home">Home</router-link></div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="investors">Investors</router-link>
        </div> 
      </nav>
    </div>
    
    <!-- Step 2 --> 
    <div class="w-full min-h-[500px] mb-[50px]">
      <PageBanner/>
    </div>
    <!-- Step 2 -->

    <div class="container py-[50px]">
      <SectionContentImage direction="image-last"/>
    </div>

    <div class="container py-[50px]"> 
      <div class="grid md:grid-cols-3 gap-[24px]">
        <Cards :message="people"/>
      </div>
    </div>


    <WhyInvest /> 
    
    <div class="container py-[50px]">
      <SectionContentImage />
    </div>
    
    <ImpactSection />
      

    <div class="bg-[#1D1D33]">
      <div class="container pt-[125px] pb-[80px]">
        <h1 class="text-[36px] font-light-custom text-white leading-[40px]">
          <span class="font-black-custom">Our full-service solution</span> 
        </h1>
        <div class="grid md:grid-cols-2 gap-[24px] text-white text-[18px] mt-[24px]">
          <p>
            We are the only company with an end-to-end, full-service offering. This includes sourcing, constructing/renovating, managing and maintaining each property, all overseen by our dedicated in-house teams.
          </p>
          <p>
            Our unique approach gives investors security and peace of mind that their capital investments and yields are protected, and the reassurance that Stef & Philips’ high standards of quality and social responsibility will be managed, monitored and always delivered.
          </p>
        </div>
        <div class="card generic-slider mt-[35px]">
          <Carousel :value="products" :numVisible="2" :numScroll="2" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="m-2 p-[30px] bg-white h-full">
                    <div class="text-[#20407C]">
                        <img class="w-[50px] py-5" :src= slotProps.data.image alt />
                        <h4 class="font-black-custom mb-[10px] text-[20px]">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 text-[18px]">{{ slotProps.data.description }}</h6>
                    </div>
                </div>  
            </template>
          </Carousel> 
        </div> 
      </div>
    </div>


    <div class="py-[100px]">
      <div class="container">
        <h1 class="text-[36px] font-light-custom text-[#20407c] mt-[2rem] ml-[4rem]">
          <span class="font-black-custom">Housing</span> schemes and solutions
        </h1>
        <div class="card generic-slider carousel-btn-colored">
          <Carousel :value="gethousingscheme" :numVisible="2" :numScroll="2" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
              <div class="m-2 bg-[#EDEDEE] h-full">
                <div class="p-[30px]">
                  <img class="w-[50px] mb-[20px]" :src= slotProps.data.image alt />
                  <h4 class="mb-[10px] font-black-custom text-[#20407C]">{{ slotProps.data.name }}</h4>
                  <h6 class="mt-0 text-[#1D1D33]">{{ slotProps.data.description }}</h6>
                </div>
              </div>  
            </template>
          </Carousel> 
        </div> 
      </div>
    </div>

    <InvestorSelectOneCard /> 

  </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '../Service/ProductService';
import Cards from "../components/Cards.vue";
import { useAppStore } from "../store/index"
import { computed } from "vue";
import YourDetails from '../components/YourDetails.vue'
import InvestorSelectOneCard from '../components/InvestorSelectOneCard.vue'
import PageBanner from "../components/PageBanner.vue";
import SectionContentImage from "../components/SectionContentImage.vue";
import ImpactSection from "../components/ImpactSection.vue";
import WhyInvest from "../components/WhyInvest.vue";

const hover = useAppStore();
    const state = computed(() => {
    return hover.hover;
});

onMounted(() => {
  ProductService.getfullservice().then((data) => (products.value = data.slice(0, 9)));
  ProductService.gethousingscheme().then((data) => (gethousingscheme.value = data.slice(0, 9)));
})

const products = ref();
const gethousingscheme = ref();
const responsiveOptions = ref([

  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '991px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
]);


const people = [
{
    name: "Landlords",
    role: "Giving housing partners the help, they need",
    imageUrl: new URL("../assets/card-1.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    button_url: '#'
},
{
    name: "Private Investors",
    role: "Safe homes, sound investments",
    imageUrl: new URL("../assets/card-2.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    button_url: '#'

},
{
    name: "Corporate Investors",
    role: "Meet corporate and ESG goals responsibly",
    imageUrl: new URL("../assets/card-3.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    button_url: '#'
}
// More people...
];
  
</script>
  
  <style  scoped>
  .bcrumbs {
    background-color: rgba(29, 29, 51, 0.5)
  }
  
  .bgImg {
    background-image: url("../assets/overlay-investor.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* width: 1920px; */
  /* height: 600px; */
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
    /* Path 543 */
  
    position: absolute;
  width: 409px;
  height: 425px;
  
    /* background: #2a8cff */
  }
  
  .happyG {
    background-image: url("../assets/bg-uk-need.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .happyS {
    background-image: url("../assets/Svg/MidBackground.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  .content {
    margin-top: 35%;
    margin-left: 10%;
    opacity: 100%;
  }
  
  .content2 {
    /* margin-top: 35%; */
    margin-left: 10%;
  }
  
  .bg-third {
    background: #20407c
  }
  
  .px-8 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .bgpartner {
  background-image: url("../assets/Graphic.png");
  right: 18%;
  background-repeat: no-repeat;
  background-position: left;
  position: relative;
  width: 100%;
  height: 434.7px; 
  opacity: 90%;
  top: -44.1%;
}
  </style>