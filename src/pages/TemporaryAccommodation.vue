<template>
  <div class>
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
      <nav class="w-[70%] mx-auto flex items-center justify-start gap-3 inner">
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
        <i class="pi pi-angle-right text-white"></i>
        <div
          exact-active-class="exact-active"
          class="text-white font-semibold text-sm font-bold-custom text-[14px]"
        >
          <router-link to="temporary-accommodation"
            >Temporary Accommodation</router-link
          >
        </div>
      </nav>
    </div>

    <!-- section 1 -->
    <div class="w-full min-h-[500px] bg-red-400 bgImg">
      <div class="w-[60%] h-[500px] mx-auto flex items-center">
        <div class="w-[365px] h-[380px] contentImg lg:ml-14"></div>
        <div
          class="w-[409px] h-[45px] min-h-[60px] max-w-sm groupImg lg:ml-[4rem] lg:mt-[5rem]"
        >
          <h1
            class="font-light-custom text-[34px] leading-none text-white content"
          >
            <span
              >Our
              <span class="font-black-custom text-[34px]">TA </span>/ </span
            ><br />
            <span>emergency service</span>
          </h1>
          <p class="text-white mt-4 font-regular-custom text-[15px] content2">
            Short Introductory summary for the page<br />goes here lilke so
          </p>
        </div>
      </div>
    </div>

    <div class="min-h-[600px] w-full">
      <div class="mx-auto w-[70%]">
        <div class="lg:py-36 xxxs:py-20">
          <div class="lg:flex">
            <div class="lg:w-[45%] flex-auto">
              <img src="../assets/Kettle.png" alt />
            </div>
            <div class="lg:w-[50%] pt-20 ml-10">
              <h1
                class="px-10 text-[32px] lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]"
              >
                <span class="font-light-custom text-[36px]"
                  >Introduction to S&P’s <br />offering for</span
                >
                <span class="font-black-custom text-[36px]">
                  those in <br />need of TA</span
                >
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-10">
                Paragraph style fusce laoreet lorem id consequat rhoncus.
                Curabitur ultrices condimentum enim, id fringilla libero rutrum
                vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus
                odio. Quisque mauris nisi, cursus id dictum id, laoreet quis
                libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- image -->
    <div class="happyG w-full min-h-[700px] relative overflow-hidden">
      <div
        class="absolute top-0 w-full h-full flex items-center justify-center left-0 happyS"
      >
        <div class="w-[70%] mx-auto grid grid-cols-1">
          <div class="max-w-lg">
            <div class="">
              <h1
                class="font-light-custom sm:text-[36px] text-[30px] text-white leading-none"
              >
                The UK’s need for
                <span class="font-black-custom sm:text-[36px] text-[30px]"
                  >TA</span
                >
              </h1>
              <p
                class="mt-4 text-white font-regular-custom sm:text-[18px] text-[12px]"
              >
                Paragraph that leads into the About Us / our mission to help CTA
                fusce laoreet lorem id consequat rhoncus. Curabitur ultrices
                condimentum enim, id fringilla libero rutrum vel. Sed efficitur
                risus eu imperdiet auctor.
              </p>
            </div>

            <div
              class="flex xxs:flex-wrap xs:flex-nowrap items-center justify-center sm:justify-start gap-4"
            >
              <button
                type="button"
                class="bg-transparent whitespace-nowrap ring-2 ring-white py-3.5 px-10 text-[16px] mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="min-h-[600px] w-full">
      <div class="mx-auto w-[70%]">
        <div class="lg:py-36 xxxs:py-10">
          <div class="flex">
            <div class="lg:w-[50%] pt-40">
              <h1
                class="px-8 text-[32px] lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]"
              >
                <span class="font-light-custom text-[36px]"
                  >Communities we help <br />with
                </span>
                <span class="font-black-custom text-[36px]">TA</span>
              </h1>
              <p class="text-[18px] font-regular-custom mt-4 px-5 pr-[8rem]">
                Sed efficitur risus eu imperdiet auctor. Mauris non Temporary
                accommodation odio PRS. Quisque mauris nisi, cursus id dictum
                id. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus
                odio. Quisque mauris nisi, cursus id dictum id.
              </p>
              <button
                type="button"
                class="bg-[#20407C] h-[50x] w-[164px] py-4 px-14 ml-5 text-[15px] mt-5 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Projects
              </button>
            </div>
            <div class="lg:w-[50%] flex-auto">
              <img src="../assets/communities-help-TA.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="happyG2 w-full min-h-[700px] relative overflow-hidden">
      <div
        class="absolute top-0 w-full h-full flex items-center justify-center left-0"
      >
        <div class="w-[70%] mx-auto grid grid-cols-1">
          <div class="max-w-lg">
            <div class="">
              <h1
                class="font-light-custom sm:text-[36px] text-[30px] text-white leading-none"
              >
                Our aim to move people <br />from TA to PRS
              </h1>
              <p
                class="mt-4 text-white font-regular-custom sm:text-[18px] text-[12px]"
              >
                Paragraph style fusce laoreet lorem id consequat rhoncus.
                Curabitur ultrices condimentum enim, id fringilla libero rutrum
                vel. Sed efficitur risus eu imperdiet auctor.
              </p>
            </div>

            <div
              class="flex xxs:flex-wrap xs:flex-nowrap items-center justify-center sm:justify-start gap-4"
            >
              <button
                type="button"
                class="bg-transparent whitespace-nowrap ring-2 ring-white py-3.5 px-10 text-[16px] mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Temporary Accommodation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20 w-[70%] mx-auto">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1">
        <div>
          <img src="../assets/Background8.png" alt />
        </div>
        <div class="flex items-center justify-center">
          <div class="w-4/5 mt-6 md:mt-0">
            <span class="text-2xl text-primary">
              <Icon icon="ooui:quotes-ltr" />
            </span>
            <h1 class="font-light-custom text-[20px] text-white mt-5">
              Stef & Philips have been short quote goes here like so in this
              featured element element lore ipsum short quote goes here like so
              in this featured element element lore ipsum short quote goes here
              like so in this.
            </h1>
            <div class="my-5">
              <h1 class="font-regular-custom text-[18px] text-white">
                Name here
              </h1>
              <h1 class="font-black-custom text-[18px] text-white">
                Title here
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full h-auto bg-[#20407C] flex items-center relative"
      style="margin-top: 200px"
    >
      <div class="h-[315px] mx-auto p-3 ml lg:flex">
        <div class="bgpartner"></div>
        <div class="pt-[3rem]">
          <h1
            class="text-[32px] lg:font-[400] xxxs:font-[200] text-trisec text-ellipsis leading-[40px]"
          >
            <span class="font-light-custom text-white text-[36px]"
              >Partner</span
            >
            <span class="font-black-custom text-white text-[36px]">
              with us</span
            >
          </h1>
          <p class="text-[18px] font-regular-custom mt-4 text-white">
            Excerpt for the page goes in here like so lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <button
            class="xxs:py-3 md:py-3 xxs:px-4 md:px-8 my-3 border border-white font-bold-custom text-[16px] text-white"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cards from "../components/Cards.vue";
import { Icon } from "@iconify/vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";
import NeedHelp from "../components/NeedHelp.vue";
import BackgroundSVG from "../assets/Background-1.svg";
const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
const people = [
  {
    name: "Help in your home",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/ThreeCardFlexN.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
  },
  {
    name: "Quick report form",
    role: "Use our quick online form. The quickest way to report an issue and get it fixed.",
    imageUrl: new URL("../assets/Svg/ThreeCardFlexM.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report an issue",
  },
  {
    name: "Report repair or maintainance",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/RectangularFlex.svg", import.meta.url)
      .href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report now",
  },
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
  },
  {
    name: "News",
    role: "Latest updates from Stef & Philips",
    imageUrl: new URL("../assets/news.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report an issue",
  },
  {
    name: "FAQ's",
    role: "Commonly asked questions",
    imageUrl: new URL("../assets/faqs.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report now",
  },
  // More people...
];
</script>

<style scoped>
.nav-bar-tranparent {
  position: absolute;
  opacity: 1.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}

.bcrumbs {
  background-color: rgba(29, 29, 51, 0.5);
}

.bgImg {
  background-image: url("../assets/Overlay-tem-acc.png");
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
  background: #20407c;
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
