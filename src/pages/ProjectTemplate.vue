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
                <router-link to="project-template">Project Template</router-link></div>
        </nav>
    </div>

    <!-- section 1 -->
    <div class="w-full min-h-[250px] "> 
        <div  class=" w-[70%] h-[250px] mx-auto p-3">
        <h1  class="text-[46px] text-[#20407c] font-light-custom mt-16"><span class="font-black-custom">Project</span> Template</h1> 
        <p class="text-[18px] text-[#20407c] font-regular-custom">Location  &nbsp; | &nbsp; XX Units</p>
        </div>
    </div>


    <!-- section 2 -->
    <div class="w-full  bg-[#1d1d33]">
        <div  class=" w-[50%] min-h-[360px] mx-auto  bg-[url('src/assets/project-template-slide')] bg-no-repeat bg-cover bg-center hidden sm:flex" >
        </div>
    </div> 


    <!-- section 3 -->
    <div class="w-full min-h-[100px] pt-8"> 
        <div  class=" w-[70%] mx-auto p-3">
            <div class="card flex items-start justify-content-between gap-5 w-full " >
                <div class="flex flex-col justify-between h-[250px]">
                    <div class="py-4 px-10 ">
                        <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    
                    </div> 
                </div>
                <div class="flex flex-col justify-between h-[250px]">
                    <div class="py-4 px-10 ">
                        <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    
                    </div> 
                </div>
            </div>
        </div>
    </div>

    <h1 class="lg:ml-[20rem] text-[36px] text-[#20407C]">
        <span class="font-black-custom">Key stats </span><span>for this project</span>
    </h1>
    <div class=" w-[70%] mx-auto flex flex-col justify-center">
        <div class="card flex items-start justify-center mx-auto flex-wrap gap-[4rem] w-full ">
          <ProjectTemplateCard :message="card2"/>
        </div>
    </div>
 
    <div class="min-h-[500px]  w-full ">
        <div class="mx-auto w-[70%] ">
        <div class="pb-[2rem]">
            <div class="lg:flex">
            <div class="lg:w-[50%]  flex-auto">
                <img src="../assets/left-img-project-template.png" alt />
            </div>
            <div class="lg:w-[50%] pt-[11rem] ml-6">
                <p class="text-[18px] font-regular-custom mt-4 px-8">
                    Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                </p>
            </div>
            </div> 
        </div>
        </div>
    </div>
    
    
    <div class="min-h-[300px] text-white w-full ">
        <div class="mx-auto w-[70%]  lg:py-10">
            <div class="card ">
                <Carousel :value="products" :numVisible="6" :numScroll="6" :responsiveOptions="responsiveOptions">
                    <template #item="slotProps">
                        <div class="m-2 px-10  lg:w-[22.5rem] lg:h-60 bg-[#20407C]"> </div> 
                    </template>
                </Carousel> 
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
import { ref, onMounted } from "vue";
import { ProductService } from '../Service/ProductService';
import ProjectTemplateCard from '../components/ProjectTemplateCard.vue';
import { useAppStore } from "../store/index";
import { computed } from "vue";

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

.nav-bar-tranparent{
  position: absolute;
  opacity: 0.50;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
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