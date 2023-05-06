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
                <router-link to="project-template">Project Template</router-link></div>
        </nav>
    </div>

    <!-- section 1 -->
    <div class="container"> 
      <div  class="pt-[140px] pb-[100px]">
        <h1  class="text-[46px] text-[#20407c] font-light-custom"><span class="font-black-custom">Project</span> template</h1> 
        <p class="text-[18px] text-[#20407c] font-regular-custom">Location  &nbsp; | &nbsp; XX Units</p>
      </div>
    </div>


    <!-- section 2 -->
    <div class="w-full  bg-[#1d1d33] mb-50px">
        <div  class=" w-[50%] min-h-[360px] mx-auto  bg-[url('src/assets/project-template-slide')] bg-no-repeat bg-cover bg-center hidden sm:flex" >
        </div>
    </div> 


    <!-- section 3 -->
    <div class="container py-[50px]"> 
        <div class="grid md:grid-cols-2 gap-[63px]">
            <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">
                Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
            </p>
            <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">
                Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
            </p>
        </div>
    </div>

    <div class="container py-[50px]">
      <h1 class="text-[36px] text-[#20407C] font-regular-custom">
        <span class="font-black-custom">Key stats </span>
        for this project
      </h1>
      <div class="grid md:grid-cols-3 gap-[24px] mt-[38px]">
        <ProjectTemplateCard :message="card2"/>
      </div>
    </div>

    <div class="container py-[50px]">
      <SectionContentImage/>
    </div>
    
    
    <div class="container py-[50px]">
      <div class="card generic-slider carousel-btn-colored">
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
          <template #item="slotProps">
            <div class="m-2 px-10 min-h-[304px] bg-[#20407C]"> </div> 
          </template>
        </Carousel> 
      </div> 
    </div>
  
  
    <div class="container py-[50px] mb-[150px]">
      <Quotes/>
    </div>
        
    <PartnerUs/>
    
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '../Service/ProductService';
import ProjectTemplateCard from '../components/ProjectTemplateCard.vue';
import { useAppStore } from "../store/index";
import { computed } from "vue";
import PartnerUs from "../components/PartnerUs.vue";
import SectionContentImage from "../components/SectionContentImage.vue";
import Quotes from "../components/Quotes.vue";

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