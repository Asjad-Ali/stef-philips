<template>
  <div class>
    <div class="w-full min-h-[600px] bg-red-400 bgImg">
      <div class="w-[70%] h-[600px] mx-auto flex items-center">
        <div class="contentImg"></div>
        <div class="max-w-sm groupImg">
          <h1 class="font-light-custom text-[40px] leading-none text-white content">
            <span>Foundations for</span>
            <br />
            <span class="font-black-custom text-[40px]">better lives</span>
          </h1>
          <p class="text-white mt-4 font-regular-custom text-[18px] content2">Safe, suitable homes and vital services for tenants,
            authorities and partners, backed by investors who care.</p>
        </div>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="w-full flex justify-center">
      <div class="w-[70%]">
        <div class="py-20">
          <div class=" flex gap-20 md:flex-nowrap flex-wrap items-center justify-center">
            <div class="md:w-[35%] w-full ">
              <h1 class="leading-none text-trisec">
                <span class="font-light-custom text-[32px]">Our vision is to see<br><span
                    class="font-black-custom text-[32px]">a world without<br>homelessness</span></span>

              </h1>
              <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
                For over a decade, we have been working with local authorities, housing associations and charitable
                organisations to help people all around the country get the housing help they need.</p>
              <button type="button" class="bg-[#20407C] h-[50x] w-[154px] py-4 px-5 font-[400] text-[16px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                <router-link to="/about-us">Hear our story</router-link>
              </button>
            </div>
            <div class="flex justify-center md:w-[55%] w-full">
              <img src="../assets/Card_Image.png" alt>

            </div>
          </div>
        </div>
      </div>
    </div>



    <!--  -->

    <div class="min-h-[400px]  w-full bg-[#20407C]">
        <div class="mx-auto w-[60%] ">
            <div class="lg:py-26 xxxs:py-20">
                <div class="lg:flex xl:flex">
                    <div class="lg:w-[50%]">
                        <!-- <img src="../assets/copy.png" alt /> -->
                    </div>
                    <div class="lg:w-[50%] pt-[11rem] ml-10">
                        <h1 class="px-10 text-[32px] lg:font-[400] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                        <span class="font-light-custom text-[36px] text-white">[Copy section - <br>what we do!]</span> 
                        </h1>
                        <p class="text-[18px] font-regular-custom mt-4 px-10 text-white">
                          Really clear, you’re in the right place.
                        </p>
                    </div>
                </div> 
            </div>
        </div>
    </div>

    <div class="min-h-[600px]  w-full bg-image">
        <div class="mx-auto w-[70%] ">
            <div class="lg:py-26 xxxs:py-20 px-20">
                <div class="lg:flex">
                    <div class="lg:w-[50%]">
                      <div class="lg:flex">
                        <div class="lg:w-[50%] mt-[5rem]">
                          <h1 class="px-5 text-[42px] lg:font-[500] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                            <span class="font-light-custom text-[42px] text-white">00 years</span> 
                          </h1>
                          <p class="text-[18px] font-regular-custom mt-4 text-white px-5">
                            <span class="font-black-custom">Experience </span>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <img class="px-5" src="../assets/Keyline.png" alt />
                        </div>
                        <div class="lg:w-[50%] mt-[2rem]">
                          <h1 class="px-5 text-[38px] lg:font-[500] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                            <span class="font-light-custom text-[36px] text-white">000+</span> 
                          </h1>
                          <p class="text-[18px] font-regular-custom mt-4 text-white px-5">
                            <span class="font-black-custom">Properties managed </span>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <img class="px-5" src="../assets/Keyline.png" alt />
                        </div>
                      </div>
                    </div> 
                    <div class="lg:w-[50%]">
                      <div class="lg:flex">
                        <div class="lg:w-[50%] mt-[3rem]">
                          <h1 class="px-5 text-[38px] lg:font-[500] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                            <span class="font-light-custom text-[36px] text-white">60</span> 
                          </h1>
                          <p class="text-[18px] font-regular-custom mt-4 text-white px-5">
                            <span class="font-black-custom">Local authorities  </span>lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipisc.
                          </p>
                          <img class="px-5" src="../assets/Keyline.png" alt />
                        </div>
                        <div class="lg:w-[50%]">
                          <h1 class="px-5 text-[38px] lg:font-[500] xxxs:font-[200]  text-trisec text-ellipsis leading-[40px]">
                            <span class="font-light-custom text-[36px] text-white">00,000+</span> 
                          </h1>
                          <p class="text-[18px] font-regular-custom mt-4 text-white px-5">
                            <span class="font-black-custom">People housed </span>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <img class="px-5" src="../assets/Keyline.png" alt />
                        </div>
                      </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>

    <div class="py-20 w-[960px] mx-auto h-[440px] mt-[3rem] mb-[12rem]">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1">
        <div >
          <img class="w-full"  src="../assets/Background8.png" alt />
        </div>
        <div class="flex items-center justify-center ">
          <div class="w-4/5 mt-6 md:mt-0 ">
            <span class="text-2xl    text-primary">
              <Icon icon="ooui:quotes-ltr" />
            </span>
            <h1 class="font-light-custom text-[20px] text-white mt-5">Stef & Philips have been short quote goes here like
              so in this featured element element lore ipsum short quote goes here like so in this featured element
              element lore ipsum short quote goes here like so in this.</h1>
            <div class="my-5">
              <h1 class="font-regular-custom text-[18px] text-white">Name here</h1>
              <h1 class="font-black-custom text-[18px] text-white">Title here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- image -->
    <div class="happyG w-full min-h-[700px] relative overflow-hidden ">
      <div class="absolute top-0 w-full h-full flex items-center justify-center left-0 happyS">
        <div class="w-[70%] mx-auto grid grid-cols-1">
          <div class="ml-[3.5rem] w-full">
            <div class="w-[50%] pr-10">
              <h1 class="font-light-custom sm:text-[36px] text-[30px]  text-white leading-none">
                Striving to make the lives<br>of vulnerable people
                <span class="font-black-custom sm:text-[36px] text-[30px]">safer</span><br> and
                <span class="font-black-custom sm:text-[36px] text-[30px]">more secure</span>
              </h1>
              <p class="pr-5 mt-4 text-white font-regular-custom sm:text-[18px] text-[12px]">We construct and manage
                fit-for-purpose properties in areas of high demand, providing tangible solutions to the current housing
                crisis and giving vulnerable people a lifeline and an opportunity to get back on their feet.</p>
            </div>

            <div class="flex xxs:flex-wrap xs:flex-nowrap items-center justify-center sm:justify-start gap-4">
              <button type="button" class="h-[50px] w-[150px] mt-8 ring-2 ring-white text-[16px] text-white"> 
                <router-link to="/tenant-services">Tenants</router-link>
              </button>
              <button type="button" class="h-[50px] w-[200px] mt-8 ring-2 ring-white text-[16px] text-white">
                <router-link to="/housing-partners">Housing partners </router-link>
              </button>
              <button type="button" class="h-[50px] w-[180px] mt-8 ring-2 ring-white text-[16px] text-white">
                <router-link to="/investors">For Investors</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Cards :message="people"/> -->


    <!--  -->
    <!--  -->

    <NeedHelp />

  <div class="pb-20 pt-3 w-[60%] mx-auto mt-20">
    <div class="justify-center">
      <div class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"> 
        <Cards :message="peopleM"/>
      </div>
    </div>
  </div>
  
  <!-- <Cards :message="peopleM" /> -->

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
    imageUrl: new URL("../assets/career.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    button_url: "/careers",
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-sky-50",
    buttonPadding:"pb-[2rem]"
  },
  {
    name: "News",
    role: "Latest updates from Stef & Philips",
    imageUrl:
      new URL("../assets/news.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report an issue",
    button_url: "/news",
    height: "h-auto",
width: "w-auto",
button_url: "",
color: "bg-sky-50",
buttonPadding:"pb-[2rem]"

  },
  {
    name: "FAQ's",
    role: "Commonly asked questions",
    imageUrl:
      new URL("../assets/faqs.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report now",
    button_url: "/faqs",
    height: "h-auto",
width: "w-auto",
button_url: "",
color: "bg-sky-50",
buttonPadding:"pb-[2rem]"

  }
  // More people...
];
</script>

<style  scoped>
.bg-image {
    background-image: url("../assets/bg-image-home.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }


.bcrumbs {
  background-color: rgba(29, 29, 51, 0.5)
}

.bgImg {
  background-image: url("../assets/home-bg-slider.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* width: 1920px; */
/* height: 600px; */
}

.contentImg {
  background-image: url("../assets/sliderlogo.png");
  background-repeat: no-repeat;
  
  background-size: cover;
  background-position: center;
  /* Path 543 */

  /* position: absolute; */
  width: 419.3px;
  height: 456px;
  opacity: 50%;
  margin-left: 4rem;
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
margin-left: 5rem;
margin-top: 2rem;

  /* background: #2a8cff */
}

.happyG {
  background-image: url("../assets/Svg/MiddleBackground.svg");
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
</style>