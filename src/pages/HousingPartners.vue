<template>
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav class="container flex items-center justify-start gap-3 inner">
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="housing-partners">Housing partners</router-link>
      </div>
    </nav>
  </div>

  <!-- section 1 -->
 
  <div class="w-full min-h-[500px] mb-[50px]">
    <PageBanner/>
  </div>

  <div class="container py-[50px]">
    <SectionContentImage/>
  </div>

  <div class="container py-[50px]">
    <SectionContentImage direction="image-last"/>
  </div>


  <div class="container pt-[50px] pb-[100px]">
    <div class="grid md:grid-cols-3 gap-[24px]">
      <Cards :message="people" />
    </div>
  </div>
  <div class="bg-second min-h-[600px] text-white w-full">
    <div class="container py-[80px]">
      <div class="w-9/12">
        <h1 class="py-4 text-white font-light-custom text-[36px]">
          The Stef & Philips difference <br />
          <span class="font-black-custom">Our full-service solution</span>
        </h1>
        <p>
          End-to-end service that sets S&P apart - accountability, trust and
          control over the entires process , making their life easier.
          Paragraph style fusce laoreet lorem id consequat rhoncus.
          Curabitur ultrices condimentum enim, id fringilla libero rutrum vel.
        </p>
      </div>
      <div class="card generic-slider mt-[20px]">
        <Carousel
          :value="products"
          :numVisible="2"
          :numScroll="2"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            <div class="m-2 px-[30px] pt-[40px] pb-3 lg:h-[380px] bg-white">
              <div class="text-[#20407C]">
                <img class="w-[55px] pb-5" :src="slotProps.data.image" alt />
                <h4 class="mb-3 font-black-custom text-[18px]">
                  {{ slotProps.data.name }}
                </h4>
                <p class="mt-0 mb-3 text-[16px]">
                  {{ slotProps.data.description }}
                </p>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>

  <div class="container py-[70px]">
    <SectionContentImage/>
  </div>

  <div class="container pt-[45px] pb-[235px]">
    <SectionContentImage direction="image-last"/>
  </div>

  <div class="flex justify-center hidden">
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

  <PartnerUs/>
  

  <div class="bg-[#FFFBE5] pt-[84px] pb-[100px]">
    <div class="container">
      <h1 class="font-light-custom text-[36px] text-[#20407C] text-ellipsis leading-[40px]">
        Our
        <span class="font-black-custom"> accreditations</span>
      </h1> 
      <div class="grid md:grid-cols-5 lg:grid-cols-7 grid-cols-2 gap-[38px] pt-[26px] items-center">
        <div>
          <img src="../assets/logo-ico.png" alt="" class="block mx-auto"/>
        </div>
        <div>
          <img src="../assets/logo-prs.png" alt="" class="block mx-auto"/>
        </div>
        <div>
          <img src="../assets/logo-london-.png" alt="" class="block mx-auto"/>
        </div>
        <div>
          <img src="../assets/logo-newham-.png" alt="" class="block mx-auto"/>
        </div>
        <div>
          <img src="../assets/logo-ombudsm.png" alt="" class="block mx-auto"/>
        </div>
        <div>
          <img src="../assets/logo-tsi.png" alt="" class="block mx-auto"/>
        </div>
        <div>
          <img src="../assets/logo-uk-ala.png" alt="" class="block mx-auto"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from "../Service/ProductService";
import { Icon } from "@iconify/vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";
import Cards from "../components/Cards.vue";
import PageBanner from "../components/PageBanner.vue";
import SectionContentImage from "../components/SectionContentImage.vue";
import PartnerUs from "../components/PartnerUs.vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});

onMounted(() => {
  ProductService.getsevenstepprocess().then(
    (data) => (products.value = data.slice(0, 9))
  );
});

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const people = [
  {
    name: "Our projects",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/projects.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnIcon: "",
    button_url: "",
    btnName: "Find out more",
  },
  {
    name: "Where we operate",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/operate.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnIcon: "",
    button_url: "",
    btnName: "Find out more",
  },
  {
    name: "News",
    role: "Latest updates from Stef & Philips",
    imageUrl: new URL("../assets/news.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnIcon: "",
    button_url: "",
    btnName: "Find out more",
  },
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
.bl {
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
.bgaccreditations {
  background-image: url("../assets/bgaccreditations.png");
  background-repeat: no-repeat;
}
</style>
