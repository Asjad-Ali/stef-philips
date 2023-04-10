<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
      <nav class="w-[70%]  mx-auto flex items-center justify-start gap-3 inner ">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Home</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-bold-custom text-[14px]">Housing partners</div> 
      </nav>
    </div>
    
     <!-- section 1 -->
    <div class="w-full min-h-[500px] bg-red-400 bgImg">
      <div class="w-[60%] h-[500px] mx-auto flex items-center">
        <div class="w-[365px] h-[380px] contentImg lg:ml-14"></div>
        <div class="w-[409px] h-[45px] min-h-[60px] max-w-sm groupImg lg:ml-[6rem]">
          <h1 class="font-light-custom text-[36px] leading-none text-white content">
            <span>Working </span>
            <span class="font-black-custom text-[36px]">with you</span>
          </h1>
          <p class="text-white mt-4 font-regular-custom text-[15px] content2">Short Introductory summary for the page<br />goes here lilke so</p>
        </div>
      </div>
    </div>
    
    <div class="min-h-[600px]  w-full ">
      <div class="mx-auto w-[70%] ">
        <div class="lg:py-36 xxxs:py-20">
          <div class="lg:flex">
            <div class="lg:w-[50%]  flex-auto">
              <img src="../assets/housing-partner-1.png" alt />
            </div>
            <div class="lg:w-[50%] pt-20 ml-6">
              <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                <span class="font-light-custom text-[36px]">Our full-service</span>
                <span class="font-black-custom text-[36px]"> end to end <br> </span><span
                  class="font-light-custom text-[36px]">offering overview</span>
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-8">
                Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
              </p>
              <button type="button" class="bg-[#2a8cfb] h-[50x] w-[205px] py-4 px-14 ml-8 text-[16px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                Meet our team
              </button>
            </div>
          </div>          
          <div class="flex pt-20">
            <div class="lg:w-[50%] pt-40">
              <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                <span class="font-light-custom text-[36px]">We make your life </span>
                <span class="font-black-custom text-[36px]">easier</span>
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-8">
                Sed efficitur risus eu imperdiet auctor. Mauris non Temporary accommodation odio PRS. Quisque mauris nisi, cursus id dictum id. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id.
              </p>
              <button type="button" class="bg-[#2a8cfb] h-[50x] w-[290px] py-4 px-14 ml-8 text-[15px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                Temporary accommodation
              </button><br>
              <button type="button" class="bg-[#20407C] h-[50x] w-[290px] py-4 px-14 ml-8 text-[15px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                Private rented sector
              </button>
            </div>
            <div class="lg:w-[50%] flex-auto">
              <img src="../assets/housing-partner-2.png" alt />
            </div>
            
          </div>
        </div>
      </div>
    </div>



    <div class=""> 
      <Cards :message="people"/>
    </div>
    
  <div class=" bg-second  min-h-[600px] text-white w-full ">
    <div class="mx-auto w-[70%]  lg:py-10">
      <div class>
        <h1 class="py-4 text-white font-light-custom text-[36px]">The Stef & Philips difference 
          <br><span class="font-black-custom text-[36px]"> Our full-service solution</span></h1>
        <p>End-to-end service that sets S&P apart - accountability, trust and control over the <br>entires process , 
          making their life easier. Paragraph style fusce laoreet lorem id <br>consequat rhoncus. Curabitur ultrices condimentum enim, 
          id fringilla libero rutrum vel.</p>
      </div>
      <div class="card">
        <Carousel :value="products" :numVisible="6" :numScroll="6" :responsiveOptions="responsiveOptions" >
          <div class="border-1surface-border border border-round m-2 text-center text-black py-20 px-10  lg:w-56  lg:h-60  bg-slate-200">
            <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
              </div>
          </div> 
        </Carousel> 
      </div> 
    </div>
  </div>


  <div class="min-h-[600px]  w-full ">
    <div class="mx-auto w-[70%] ">
      <div class="lg:py-36 xxxs:py-20">
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

  
  <div class="lg:flex justify-center mx-auto max-w-[70%] my-16">
    <div class="bg-[#ededee] flex flex-col xl:w-[840px] justify-center px-8 py-4" >
      <h2 class="font-black-custom text-[24px] text-[#20407C]">Download brochure</h2>
      <p class="my-4 font-regular-custom text-[18px]">
        Excerpt for the page goes in here like so lorem ipsum dolor sit amet,
        consectetur.
      </p>
      <button class="backgroundButton1  text-[16px]">Download</button>
    </div>
    <img class="w-[100%] lg:w-[50%]" src="../assets/broucher-card.png" alt="" />
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
    
  <div class="bgaccreditations h-[290px]">
    <div class="mx-auto w-[70%] "> 
      <div class="lg:flex"> 
        <div class="lg:w-[70%] pt-[4rem]">
          <h1 class="px-8 text-[32px] text-[#20407C] lg:font-[400] xxxs:font-[200]  text-ellipsis leading-[40px]">
            <span class="font-light-custom [36px]">Our</span> 
            <span class="font-black-custom [36px]"> accreditations</span>
          </h1>
        </div>           
      </div>
      <div class="lg:flex pt-[3.5rem] pl-3"> 
        <div class="px-7">
          <img src="../assets/logo-ico.png" alt />
        </div> 
        <div class="px-7">
          <img src="../assets/logo-prs.png" alt />
        </div> 
        <div class="px-7">
          <img src="../assets/logo-london-.png" alt />
        </div> 
        <div class="px-5">
          <img src="../assets/logo-newham-.png" alt />
        </div> 
        <div class="px-5">
          <img src="../assets/logo-ombudsm.png" alt />
        </div> 
        <div class="px-5">
          <img src="../assets/logo-tsi.png" alt />
        </div> 
        <div class="px-5">
          <img src="../assets/logo-uk-ala.png" alt />
        </div>        
      </div>
    </div>
  </div> 
  

  
  
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '../Service/ProductService';
import { Icon } from "@iconify/vue";
import { useAppStore } from "../store/index"
import { computed } from "vue";
import Cards from "../components/Cards.vue"; 


const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});

onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
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
  name: "Our projects",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/projects.png", import.meta.url).href,
  twitterUrl: "#",
  linkedinUrl: "#",
  btnIcon: "",
  btnName: "Find out more"
},
{
  name: "Where we operate",
  role: "Short description excerpt here",
  imageUrl: new URL("../assets/operate.png", import.meta.url).href,
  twitterUrl: "#",
  linkedinUrl: "#",
  btnIcon: "",
  btnName: "Find out more"
},{
  name: "News",
  role: "Latest updates from Stef & Philips",
  imageUrl: new URL("../assets/news.png", import.meta.url).href,
  twitterUrl: "#",
  linkedinUrl: "#",
  btnIcon: "",
  btnName: "Find out more"
}
  // More people...
];

</script>


<style scoped>
@media screen and (min-width: 1000px) {
  .mediaFlex {
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
.bl{
  background-color: rgba(29, 29, 51, 0.5);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.svgImage {
  width: 100%;
  height: 100%;
}
.backgroundButton1 {
  width: 164px;
  height: 50px;
  padding: 8px;
  color: white;
  background: #2a8cfb;
}

.backgroundButton2 {
  width: 260px;
  height: 50px;
  color: white;
  background: #2a8cfb;
}

.backgroundButton3 {
  margin-top: 1rem;
  width: 260px;
  height: 50px;
  color: white;
  background: #20407c;
}
.displayBlock {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.threeButtons {
  width: 164px;
  height: 50px;
  background: #2a8cfb;
}
.bgColor {
  background-color: #1d1d33;
}
.bgColor1 {
  background-color: #1d1d33;
  background-image: url("../assets/full_quote.png");
  background-repeat: no-repeat; 
}

.bgImg {
background-image: url("../assets/overlay-image-c.png");
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
.bgaccreditations{
  background-image: url("../assets/bgaccreditations.png");
  background-repeat: no-repeat;
}
</style>