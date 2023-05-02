<template>
  <div class>
    <div class="w-full bg-red-400 bgImg">
      <div class="container">
        <div class="columns-1 md:pt-[70px] md:pb-[90px] py-[40px]">
          <div class="bannerContent">            
            <div class="contentSec">
              <h1 class="font-light-custom text-[40px] leading-none text-white content">
                <span>Foundations for</span>
                <br />
                <span class="font-black-custom text-[40px]">better lives</span>
              </h1>
              <p class="text-white mt-4 font-regular-custom text-[18px]">Safe, suitable homes and vital services for tenants,
                authorities and partners, backed by investors who care.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Step 2 -->
    <div class="w-full flex justify-center">
      <div class="container">
        <div class="py-20">
          <div class="grid md:grid-cols-2 items-center lg:gap-[110px] md:gap-[70px]">
            <div class="md:mb-0 mb-9">
              <h1 class="leading-none text-trisec font-light-custom text-[32px]">
                Our vision is to see
                <strong class="font-black-custom">a world without<br>homelessness</strong>
              </h1>
              <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
                For over a decade, we have been working with local authorities, housing associations and charitable
                organisations to help people all around the country get the housing help they need.</p>
              <button type="button" class="bg-[#20407C] h-[50x] w-[154px] py-4 px-5 font-[400] text-[16px] mt-5 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                <router-link to="/about-us">Hear our story</router-link>
              </button>
            </div>
            <div class="">
              <img src="../assets/Card_Image.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="min-h-[400px]  w-full bg-[#20407C]">
      <div class="container">
        <div class="lg:py-26 xxxs:py-20">
          <div class="grid md:grid-cols-2 items-center lg:gap-[110px] md:gap-[70px]">
            <div class="md:mb-0 mb-9">
              <img src="../assets/Card_Image-1.png" alt>
            </div>
            <div class="text-white">
              <h1 class="leading-none font-black-custom lg:text-[42px] text-[24px]">
                Stef & Philips at a glance
              </h1>
              <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
                We pride ourselves on building trusted relationships with tenants, housing partners and investors alike. The value we deliver goes beyond bricks and mortar: we ensure tenants’ ongoing support and care, for the duration of their lease; we provide housing partners with a wide range of much-needed accommodation solutions; and we offer private investors and corporate entities a unique approach to social impact investing.  
              </p>
              <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
                Since first opening our doors in 2006, we have grown from being a small, family-run lettings agency into a one of the UK’s leading social housing providers. We are proud of what we have achieved to date, but our ambition is to do much more.
              </p>
            </div>
          </div> 
        </div>
      </div>
    </div>

    <div class="min-h-[600px]  w-full fnf-image">
      <div class="container pt-20">
        <div class="grid grid-cols-5">
          <div class="single-point">
            <div class="mt-[5rem] text-white">
              <h1 class="font-light-custom text-[36px] px-5 text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                17 years
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-5">
                <strong class="font-black-custom">Leading private provider </strong>for social housing across the UK since 2006.
              </p>
              <img class="px-5" src="../assets/Keyline.png" alt />
            </div>
          </div>
          <div class="single-point">
            <div class="mt-[2rem] text-white">
              <h1 class="font-light-custom text-[36px] px-5 text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                9,500
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-5">
                <strong class="font-black-custom">Delivered homes </strong>to 9,500 tenants
              </p>
              <img class="px-5" src="../assets/Keyline.png" alt />
            </div>
          </div>
          <div class="single-point">
            <div class="mt-[5rem] text-white">
              <h1 class="font-light-custom text-[36px] px-5 text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                60
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-5">
                <strong class="font-black-custom">Trusted provider </strong>to 60+ local authorities
              </p>
              <img class="px-5" src="../assets/Keyline.png" alt />
            </div>
          </div>
          <div class="single-point">
            <div class="mt-[4rem] text-white">
              <h1 class="font-light-custom text-[36px] px-5 text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                200+
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-5">
                <strong class="font-black-custom">Investors </strong>to date
              </p>
              <img class="px-5" src="../assets/Keyline.png" alt />
            </div>
          </div>
          <div class="single-point">
            <div class="mt-[2rem] text-white">
              <h1 class="font-light-custom text-[36px] px-5 text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                3717
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-5">
                <strong class="font-black-custom">Units</strong> in our portfolio
              </p>
              <img class="px-5" src="../assets/Keyline.png" alt />
            </div>
          </div>
        </div> 
      </div>
    </div>

    <div class="py-20 container mt-[3rem] mb-[12rem]">      
      <Testimonial />
    </div>

    <!-- image -->
    <div class="happyG">
      <div class="min-h-[640px] flex items-center justify-center happyS">
        <div class="container">
          <div class="w-full">
            <div class="w-full md:w-[50%] md:pr-10 text-white">
              <h1 class="font-light-custom sm:text-[36px] text-[30px] leading-none">
                Striving to make the lives<br>of vulnerable people
                <span class="font-black-custom">safer</span><br> and
                <span class="font-black-custom">more secure</span>
              </h1>
              <p class="mt-4  font-regular-custom sm:text-[18px] text-[12px]">We construct and manage
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

    <NeedHelp />

    <div class="pb-20 pt-3 mt-20">
      <div class="container">
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
import { useAppStore } from "../store/index"
import { computed } from "vue";
import NeedHelp from "../components/NeedHelp.vue";
import Testimonial from "../components/Testimonial.vue";
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
.fnf-image {
  background-image: url("../assets/bg-image-home.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.fnf-image .container {
  max-width: 1180px;
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

.bannerContent {
  background-image: url("../assets/sliderlogo.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  max-width: 420px;
  padding: 160px 16px 75px 50px;
}
.bannerContent .contentSec {
  padding: 15px;
}

.happyG {
  background-image: url("../assets/MiddleBackground.png");
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
@media(max-width: 767px) {
  .bannerContent {
    padding: 110px 16px 55px 16px
  }
}
</style>