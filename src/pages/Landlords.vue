<template>
  <div class>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent">
      <nav class="container flex items-center justify-start gap-3 inner ">
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
              <router-link to="home">Home</router-link></div>
          <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
              <router-link to="investors">Investors</router-link></div> 
          <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
              <router-link to="landlords">Landlords</router-link></div> 
      </nav>
    </div>
  
      <!-- section 1 -->
    <div class="w-full min-h-[500px] mb-[50px]">
      <PageBanner/>
    </div>

    <div class="container py-[50px]">
      <SectionContentImage direction="image-last"/>
    </div>

    <div class="mt-[80px]">
      <WhyInvest /> 
    </div>

    <div class="pt-[120px] pb-[50px]">
      <div class="container">
        <div class="w-5/6">
          <h1 class="text-[36px] text-[#20407c] font-light-custom mb-[12px]">
            <span class="font-black-custom">Renovations</span> and remodelling
          </h1>
          <p class="text-[#1D1D33] text-[18px]">
            Covering everything from small-scale renovations to full refurbishments, Stef & Philips’ in-house construction team can transform your property into a high-quality living space. Our services include:
          </p>
        </div>
        <div class="mt-[48px] grid md:grid-cols-3 gap-[38px]">
          <div>
            <img src="/src/assets/sketch.png" alt="sketch"/>
            <p class="mt-[15px] text-[18px] text-[#1D1D33]">Unique design specifications for each property, to meet landlords’ requirements. </p>
          </div>
          <div>
            <img src="/src/assets/recycle.png" alt="recycle"/>
            <p class="mt-[15px] text-[18px] text-[#1D1D33]">
              Ongoing maintenance, managed by our in-house team, to ensure [the property remains / all aspects of the property remain] in good working order.  
            </p>
          </div>
          <div>
            <img src="/src/assets/elevator.png" alt="elevator"/>
            <p class="mt-[15px] text-[18px] text-[#1D1D33]">
              Paying due diligence to accessibility considerations, to ensure properties are fit-for-purpose and can cater to tenants specific needs.  
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-[50px] pb-[100px]">
      <SectionContentImage />
    </div>

    <ImpactSection />

  </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '../Service/ProductService';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { useAppStore } from "../store/index"
import { computed } from "vue"; 
import PageBanner from '../components/PageBanner.vue'
import SectionContentImage from '../components/SectionContentImage.vue'
import WhyInvest from '../components/WhyInvest.vue'
import ImpactSection from '../components/ImpactSection.vue'

const hover = useAppStore();
    const state = computed(() => {
    return hover.hover;
});

onMounted(() => {
  ProductService.getfullservice().then((data) => (products.value = data.slice(0, 9)));
  ProductService.getcorporateInvestor().then((data) => (getcorporateInvestor.value = data.slice(0, 9)));
  ProductService.getsevenstepprocess().then((data) => (getsevenstepprocess.value = data.slice(0, 9)));
})

const products = ref();
const getcorporateInvestor = ref();
const getsevenstepprocess = ref();
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
    btnName: "Find out more"
},
{
    name: "Private Investors",
    role: "Safe homes, sound investments",
    imageUrl: new URL("../assets/card-2.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more"

},
{
    name: "Corporate Investors",
    role: "Meet corporate and ESG goals responsibly",
    imageUrl: new URL("../assets/card-3.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more"
}
// More people...
];
  
</script>
  
  <style  scoped>
  .bcrumbs {
    background-color: rgba(29, 29, 51, 0.5)
  }
  
  .bgImg {
    background-image: url("../assets/Landlords-slider.png");
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

  .happyG2 {
    background-image: url("../assets/Background-investor.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bg-image-update{
    background-image: url("../assets/Background-investor.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .bg-color{
    opacity: 0.85;
    background: #1d1d33
  }
  .global-impact {
    background-image: url("../assets/global-impact.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .obligation-background{
    background-image: url("../assets/obligation-background.png");
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

.bgColor1 {
  background-color: #1d1d33;
  background-image: url("../assets/full_quote.png");
  background-repeat: no-repeat; 
}

.backgroundButton1 {
  width: 164px;
  height: 50px;
  padding: 8px;
  color: white;
  background: #2a8cfb;
}
  </style>