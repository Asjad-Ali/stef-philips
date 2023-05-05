<template>
    <div class>
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
        <nav class="container mx-auto flex items-center justify-start gap-3 inner ">
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="home">Home</router-link>
          </div>
          <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="housing-partners">Housing partners</router-link>
          </div>
          <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="accommodation-types">Accommodation Types</router-link>
          </div> 
        </nav>
    </div>
    
     <!-- section 1 -->
     <div class="w-full min-h-[500px] mb-[100px]">
      <PageBanner/>
    </div>
  
    <div class="container py-[30px]">
      <SectionContentImage direction="image-last"/>
    </div>

    <div class="container py-[30px]">
      <SectionContentImage/>
    </div>
    
    <div class="container py-[30px]">
      <SectionContentImage direction="image-last"/>
    </div>

    <div class="container py-[30px]">
      <SectionContentImage/>
    </div>
    
    <div class="container py-[30px]">
      <SectionContentImage direction="image-last"/>
    </div>

    <div class="container py-[30px]">
      <SectionContentImage/>
    </div>

    <div class="container py-[30px]">
      <SectionContentImage direction="image-last"/>
    </div>
   
    <div class="container py-[100px] bg-[#FFFBE5] my-[80px] mb-[245px]">
      <div class="w-4/6 mx-auto">
        <img class="block mx-auto" src="../assets/IconYell.png" alt />
        <div class="text-center">
          <h1 class="block py-[12px] m-0 font-weight-medium md:text-[36px] text-[24px] text-[#20407C]">
            <span class="font-black-custom">Where we operate</span>
          </h1>
          <p class="font-regular-custom text-[18px]">
            Stef & Philips provides temporary, emergency and PRS accommodation to 
            housing partners across the UK.
          </p>
          <button  type="button" class="mt-[30px] bg-trisec font-xbold-custom md:text-[16px] xxs:text-[14px] xxs:py-3 md:py-4 xxs:px-4 md:px-8 mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
            Find out more
          </button>
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
</div>
  </template>
  
  <script setup>
  import Cards from "../components/Cards.vue";
  import { Icon } from "@iconify/vue";
  import { useAppStore } from "../store/index"
  import { computed } from "vue";
  import NeedHelp from "../components/NeedHelp.vue";
  import BackgroundSVG from "../assets/Background-1.svg"
  import PageBanner from "../components/PageBanner.vue";
  import SectionContentImage from "../components/SectionContentImage.vue";
  const hover = useAppStore();
  const state = computed(() => {
    return hover.hover;
  });
  const people = [
    {
      name: "Help in your home",
      role: "Short description excerpt here",
      imageUrl:
        new URL("../assets/Svg/ThreeCardFlexN.svg", import.meta.url).href,
      twitterUrl: "#",
      linkedinUrl: "#",
      btnName: "Find out more"
    },
    {
      name: "Quick report form",
      role: "Use our quick online form. The quickest way to report an issue and get it fixed.",
      imageUrl:
        new URL("../assets/Svg/ThreeCardFlexM.svg", import.meta.url).href,
      twitterUrl: "#",
      linkedinUrl: "#",
      btnName: "Report an issue"
  
    },
    {
      name: "Report repair or maintainance",
      role: "Short description excerpt here",
      imageUrl:
        new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
      twitterUrl: "#",
      linkedinUrl: "#",
      btnName: "Report now"
    }
    // More people...
  ];
  const peopleM = [
    {
      name: "Career",
      role: "Keen to join our team?",
      imageUrl:
        new URL("../assets/career.png", import.meta.url).href,
      twitterUrl: "#",
      linkedinUrl: "#",
      btnName: "Find out more"
    },
    {
      name: "News",
      role: "Latest updates from Stef & Philips",
      imageUrl:
        new URL("../assets/news.png", import.meta.url).href,
      twitterUrl: "#",
      linkedinUrl: "#",
      btnName: "Report an issue"
  
    },
    {
      name: "FAQ's",
      role: "Commonly asked questions",
      imageUrl:
        new URL("../assets/faqs.png", import.meta.url).href,
      twitterUrl: "#",
      linkedinUrl: "#",
      btnName: "Report now"
    }
    // More people...
  ];
  </script>
  
  <style  scoped>



  .bcrumbs {
    background-color: rgba(29, 29, 51, 0.5)
  }
  
  .bgImg {
    background-image: url("../assets/acc-types-slider.png");
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
    background-image: url("../assets/prs-element.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .happyG2 {
    background-image: url("../assets/aim-move-people.png");
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