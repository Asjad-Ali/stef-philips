<template>
    <div class>
        <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
            <nav class="w-[70%]  mx-auto flex items-center justify-start gap-3 inner ">
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
    <div class="w-full min-h-[500px] bg-red-400 bgImg">
      <div class="w-[60%] h-[500px] mx-auto flex items-center">
        <div class="w-[365px] h-[380px] contentImg lg:ml-14"></div>
        <div class="w-[409px] h-[45px] min-h-[60px] max-w-sm groupImg lg:ml-[4rem] lg:mt-[5rem]">
          <h1 class="font-light-custom text-[34px] leading-none text-white content">
            <span>Accommodation <br><span class="font-black-custom text-[34px]">Types</span></span>
          </h1>
          <p class="text-white mt-4 font-regular-custom text-[15px] content2">Short Introductory summary for the page<br />goes here lilke so</p>
        </div>
      </div>
    </div>
  
    <div class="min-h-[600px]  w-full ">
        <div class="mx-auto w-[70%] ">
            <div class="lg:py-36 xxxs:py-20">
                <div class="lg:flex">
                    <div class="lg:w-[50%] pt-40">
                        <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]">
                            <span class="font-black-custom text-[36px]">Adapted units</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-5 pr-[8rem]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </div>
                    <div class="lg:w-[50%] flex-auto">
                        <img src="../assets/acctype-right-1.png" alt />
                    </div>
                </div>
                <div class="flex">
                    <div class="lg:w-[45%]  flex-auto">
                        <img src="../assets/acctype-left-1.png" alt />
                    </div>
                    <div class="lg:w-[50%] pt-[15rem] ml-15">
                        <h1 class="px-10 text-[32px]  lg:font-[400] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                            <span class="font-black-custom text-[36px]"> Care Homes</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-5 pl-[3rem]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </div>
                </div>          
            </div>
        </div>
    </div> 

    <div class="min-h-[600px]  w-full ">
        <div class="mx-auto w-[70%] ">
            <div class="">
                <div class="lg:flex">
                    <div class="lg:w-[50%] pt-40">
                        <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]">
                            <span class="font-black-custom text-[36px]">Flats</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-5 pr-[8rem]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </div>
                    <div class="lg:w-[50%] flex-auto">
                        <img src="../assets/acctype-right-2.png" alt />
                    </div>
                </div>
                <div class="flex lg:pt-36 xxxs:py-20">
                    <div class="lg:w-[45%]  flex-auto">
                        <img src="../assets/acctype-left-2.png" alt />
                    </div>
                    <div class="lg:w-[50%] pt-[15rem] ml-15">
                        <h1 class="px-10 text-[32px]  lg:font-[400] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                            <span class="font-black-custom text-[36px]">Gender specific unit</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-5 pl-[3rem]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </div>
                </div>          
            </div>
        </div>
    </div>

    <div class="min-h-[600px]  w-full ">
        <div class="mx-auto w-[70%] ">
            <div class="">
                <div class="lg:flex">
                    <div class="lg:w-[50%] pt-40">
                        <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]">
                            <span class="font-black-custom text-[36px]">Hotels</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-5 pr-[8rem]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </div>
                    <div class="lg:w-[50%] flex-auto">
                        <img src="../assets/acctype-right-3.png" alt />
                    </div>
                </div>
                <div class="flex lg:py-36 xxxs:py-20">
                    <div class="lg:w-[45%]  flex-auto">
                        <img src="../assets/acctype-left-3.png" alt />
                    </div>
                    <div class="lg:w-[50%] pt-[15rem] ml-15">
                        <h1 class="px-10 text-[32px]  lg:font-[400] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                            <span class="font-black-custom text-[36px]"> Houses in multiple occupation (HMOs)</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-5 pl-[3rem]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </div>
                </div>          
            </div>
        </div>
    </div>

    <div class="min-h-[600px]  w-full ">
        <div class="mx-auto w-[70%] ">
            <div class="">
                <div class="lg:flex">
                    <div class="lg:w-[50%] pt-40">
                        <h1 class="px-8 text-[32px]  lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]">
                            <span class="font-black-custom text-[36px]">Supported housing</span>
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-5 pr-[8rem]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </div>
                    <div class="lg:w-[50%] flex-auto">
                        <img src="../assets/acctype-right-4.png" alt />
                    </div>
                </div>    
            </div>
        </div>
    </div>
   
    <div class="w-[70%] mx-auto py-20 xxs:py-10 bg-[#FFD600]/10 my-20 lg:px-20 sm:px-16 xxs: px-12 xxxs:px-7 ">
        <div class="mx-auto w-[10%]">
            <img class="lg:max-w-sm" src="../assets/IconYell.png" alt />
        </div>
        <div class="mx-auto text-center">
            <h1 class="block py-4 font-weight-medium md:text-[36px] xxs:text-[30px] text-[#20407C]">
            Out of hours
            <span class="font-black-custom md:text-[36px] xxs:text-[28px]">emergencies</span>
          </h1>
          <p class="font-regular-custom text-[18px] px-[4.2rem]">
            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
          </p>
          <button  type="button" class="bg-trisec font-xbold-custom md:text-[16px] xxs:text-[14px] xxs:py-3 md:py-4 xxs:px-4 md:px-8 mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
            Find out more
          </button>
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


.nav-bar-tranparent{
  position: absolute;
  opacity: 0.50;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
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