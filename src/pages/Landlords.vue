<template>
    <div class>
        <div class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent">
            <nav class="w-[70%]  mx-auto flex items-center justify-start gap-3 inner ">
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
        <div class="w-full min-h-[500px] bg-red-400 bgImg">
            <div class="w-[60%] h-[500px] mx-auto flex items-center">
                <div class="w-[365px] h-[380px] contentImg lg:ml-14"></div>
                <div class="w-[409px] h-[45px] min-h-[60px] max-w-sm groupImg lg:ml-[4rem] lg:mt-[8rem]">
                    <h1 class="font-light-custom text-[34px] leading-none text-white content">
                         <span class="font-black-custom text-[34px]">Landlords </span>
                    </h1>
                    <p class="text-white mt-4 font-regular-custom text-[15px] content2">
                        Short introductory summary for the page goes here like so
                    </p>
                </div>
            </div>
        </div>
  
        <div class="min-h-[600px]  w-full ">
            <div class="mx-auto w-[70%] ">
                <div class="lg:py-36 xxxs:py-10">           
                    <div class="flex">
                        <div class="lg:w-[50%] pt-10">
                        <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]">
                            <span class="font-light-custom text-[36px]">Our mission through the</span>
                            <span class="font-black-custom text-[36px]"> Landlords </span>
                            <span class="font-light-custom text-[36px]">prism</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-5 pr-[8rem]">
                            At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.
                        </p>
                        <button type="button" class="bg-[#2A8CFB] h-[50x] w-[230px] py-4 px-14 ml-5 text-[15px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                            Speak to our team
                        </button>
                        </div>
                        <div class="lg:w-[50%] flex-auto">
                            <img src="../assets/Landlords-right-img.png" alt />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


        <div class="obligation-background min-h-[300px]  w-full ">
            <div class="mx-auto w-[65%] ">
                <div class="lg:py-16 xxxs:py-10">           
                    <div class="">
                        <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-white leading-[40px]">
                            Free, no obligations <span class="font-black-custom text-[36px]">lettings valuation</span> 
                        </h1>
                        <p class="text-[18px] text-white font-regular-custom mt-4 px-5 pr-[8rem]">
                            Got a house you want to convert to an HMO? Want to sell an HMO?
                        </p>
                        <button class=" xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 ml-5 border border-white font-bold-custom text-[16px] text-white ">
                            Get a free valuation
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div class="happyG2 min-h-[600px]  w-full ">
            <div class="mx-auto w-[70%] ">
                <div class="lg:py-16 xxxs:py-10">           
                    <div class="flex">
                        <div class="lg:w-[50%]">
                            <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-white leading-[40px]">
                                <span class="font-black-custom text-[36px]">Why invest </span>with <br>Stef & Philips
                            </h1>
                            <p class="text-[18px] text-white font-regular-custom mt-4 px-5 pr-[8rem]">
                                Stef & Philips has been a leading provider of quality accommodation for over 15 years. We manage a property portfolio worth over £600m on behalf of more than 200 investors, have contracts with 60+ UK councils and currently house close to 10,000 tenants.
                            </p>
                        </div>
                        <div class="lg:w-[50%] grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 xxs:grid-cols-1">
                            <div class="lg:w-[70%] flex-auto">
                                <img class="w-[50px]" src="../assets/icon-1.png" alt />
                                <h1 class="text-[16px] text-white font-black-custom ">
                                    No management & maintenance costs 
                                </h1>
                                <p class="text-[14px] text-white mt-1">
                                    Lorem
                                </p>
                            </div>
                            <div class="lg:w-[70%]">
                                <img class="w-[38px]" src="../assets/icon-2.png" alt />
                                <h1 class="text-[16px] text-white font-black-custom ">
                                    Capital & investment yields protected 
                                </h1>
                                <p class="text-[14px] text-white mt-1">
                                    Lorem
                                </p>
                            </div>
                            <div class="lg:w-[70%] flex-auto mt-5">
                                <img class="w-[50px]" src="../assets/icon-3.png" alt />
                                <h1 class="text-[16px] text-white font-black-custom ">
                                    Stability of income 
                                </h1>
                                <p class="text-[14px] text-white mt-1">
                                    Lorem
                                </p>
                            </div>
                            <div class="lg:w-[70%] flex-auto mt-5">
                                <img class="w-[38px]" src="../assets/icon-4.png" alt />
                                <h1 class="text-[16px] text-white font-black-custom ">
                                    Profit with purpose
                                </h1>
                                <p class="text-[14px] text-white mt-1">
                                    Lorem
                                </p>
                            </div>
                            <div class="lg:w-[70%] flex-auto mt-5">
                                <img class="w-[50px]" src="../assets/icon-5.png" alt />
                                <h1 class="text-[16px] text-white font-black-custom ">
                                    Capital appreciation
                                </h1>
                                <p class="text-[14px] text-white mt-1">
                                    Lorem
                                </p>
                            </div>
                            <div class="lg:w-[70%] flex-auto mt-5">
                                <img class="w-[38px]" src="../assets/icon-6.png" alt />
                                <h1 class="text-[16px] text-white font-black-custom ">
                                    Highest standards maintained, right across the board 
                                </h1>
                                <p class="text-[14px] text-white mt-1">
                                    Lorem
                                </p>
                            </div>
                            <div class="lg:w-[70%] flex-auto mt-5">
                                <img class="w-[50px]" src="../assets/icon-7.png" alt />
                                <h1 class="text-[16px] text-white font-black-custom ">
                                    Guaranteed returns 
                                </h1>
                                <p class="text-[14px] text-white mt-1">
                                    Lorem
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 

        
        <div class="global-impact min-h-[300px]  w-full ">
            <div class="mx-auto w-[70%] ">
                <div class="lg:py-16 xxxs:py-10">           
                    <div class="">
                        <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-white leading-[40px]">
                            For investors who want to make a <span class="font-black-custom text-[36px]">global impact</span> 
                        </h1>
                        <p class="text-[18px] text-white font-regular-custom mt-4 px-5 pr-[8rem]">
                            Stress-free property ownership delivering a guaranteed<br>income stream and tangible social impact.
                        </p>
                        <button class=" xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 ml-5 border border-white font-bold-custom text-[16px] text-white ">Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
         

        <div class="bg-image-update min-h-[650px] w-full">
            <div class="mx-auto w-[70%] ">
                <div class="lg:py-20 xxxs:py-10">           
                    <div class="lg:w-full">
                        <h1 class="px-8 text-[32px] lg:font-[400] xxxs:font-[200] text-white leading-[40px]">
                            Our <span class="font-black-custom text-[32px]">seven step </span>investing process
                        </h1>
                        <p class="text-[18px] text-white font-regular-custom mt-4 px-5 pr-[8rem]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices<br>condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor.<br> Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </div> 
                    <div class="min-h-[300px] text-white w-full">
                        <div class="mx-auto w-full lg:py-10">
                            <div class="card">
                                <Carousel :value="getsevenstepprocess" :numVisible="6" :numScroll="6" :responsiveOptions="responsiveOptions">
                                    <template #item="slotProps">
                                        <div class="m-2 px-10  lg:w-[22rem] lg:h-[285px] bg-[#886BFF]">
                                            <div>
                                                <img class="w-[55px] py-5 pt-[3rem]" :src= slotProps.data.image alt />
                                                <h4 class="mb-3 font-black-custom">{{ slotProps.data.name }}</h4>
                                                <h6 class="mt-0 mb-3">{{ slotProps.data.description }}</h6>
                                            </div>
                                        </div>  
                                    </template>
                                </Carousel> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="flex justify-center">
            <div class="bgColor1 text-white w-[70%] lg:p-16 xxs:p-8 m-10">
                <span class="text-[42px] font-black-custom text-[#2a8cfb]">"</span>
                <p class="font-light-custom text-[20px]">
                    Stef & Philips have been short quote goes here like so in this featured
                    element element lore ipsum short quote goes here like so in this
                    featured element element lore ipsum short quote goes here like so in
                    this.
                </p>
                <p class="mt-5 font-regular-custom text-[18px]">Name here</p>
                <p class="font-black-custom text-[18px]">Title here</p>
            </div>
        </div>
        
        
        <div class="min-h-[500px]  w-full ">
            <div class="mx-auto w-[70%] ">
                <div class="lg:py-16 xxxs:py-10">           
                    <div class="flex">
                        <div class="lg:w-[50%] pt-10 mt-[5rem]">
                            <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]">
                                <span class="font-light-custom text-[36px]">Working towards a<br>world</span>
                                <span class="font-black-custom text-[36px]"> without<br>homelessness</span>
                            </h1>
                            <p class="text-[18px] font-regular-custom mt-4 px-5 pr-[8rem]">
                                At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.
                            </p>
                            <button type="button" class="bg-[#20407C] h-[50x] w-[170px] py-4 px-14 ml-5 text-[15px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                                About us
                            </button>
                        </div>
                        <div class="lg:w-[50%] flex-auto">
                            <img src="../assets/corporate-right-img.png" alt />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
            <div class="w-[70%]">
            <h1   class="text-[30px] text-[#20407c] font-black-custom pb-10">Corporate investors FAQs</h1>
            <Accordion :activeIndex="2" >
                <AccordionTab header="Frequently asked question goes here?" class="font-black-custom text-[18px] text-[#20407c]" color="white">
                <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                    Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                </AccordionTab>
                <AccordionTab header="Frequently asked question goes here?" class="font-black-custom text-[18px] text-[#20407c]">
                <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                    Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                </AccordionTab>
                <AccordionTab header="Frequently asked question goes here?" class="font-black-custom text-[18px] text-[#20407c]">
                    <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                    Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                    <p class="text-[18px] font-black-custom text-[#2a8cfb] py-8">Link call to action</p>
                </AccordionTab>
                <AccordionTab header="Frequently asked question goes here?" class="font-black-custom text-[18px] text-[#20407c]">
                    <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                    Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p> 
                </AccordionTab>
            </Accordion>
            </div>
        </div>
        
        <InvestorSelectOneCard /> 
  
    </div>
  </template>
  
<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '../Service/ProductService';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { useAppStore } from "../store/index"
import { computed } from "vue"; 
import InvestorSelectOneCard from '../components/InvestorSelectOneCard.vue'

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