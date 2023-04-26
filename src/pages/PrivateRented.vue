<template>
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav
      class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] h-full mx-auto flex items-center justify-start gap-3 inner"
    >
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
        <router-link to="your-home">Your Home</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="tenant-services">Tenant Services</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="prs">PRS</router-link>
      </div>
    </nav>
  </div>
  <div class="w-full min-h-[460px] bgImg">
    <div
      class="lg:w-[70%] xxs:w-[95%] sm:w-[75%] md:w-[94%] lg:h-[500px] xxs:h-[500px] mx-auto flex items-center"
    >
      <!-- mx-auto p-3 -->
      <div
        class="lg:w-[440px] xxs:w-[250px] h-[auto] lg:ml-14px xxs:ml-[7px] p-10 contentImg"
      >
        <h1 class="lg:text-[36px] xxs:text-[18px] text-white font-[300]">
          Private rented sector<br />(PRS)
        </h1>
        <p class="text-[18px] text-white font-[400]">
          Short introductory summary for the page <br />
          goes here like so
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="lg:w-full min-h-[600px] bg-red-400 bgImg">
    <div class="w-full h-[600px] flex justify-center items-center">
      <div class="mx-auto w-[70%]">
        <h1 class="text-[42px] text-white font-light mt-16">
          Private rented sector<br />(PRS)
        </h1>
        <p class="text-[18px] text-white font-regular">
          Short introductory summary for the page <br />
          goes here like so
        </p>
      </div>
    </div>
  </div> -->

  <!-- component -->
  <HorizontalCardVue :message="card" />
  <HorizontalCardVue :message="card2" />
  <!-- component -->
  <!-- step-3 -->
  <div class="min-h-[400px] w-full bg-[#1d1d33] lg:py-28 xxxs:py-16">
    <div class="w-[70%] mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Your</span> responsibility
      </p>

      <Accordion :message="message" />
    </div>
  </div>

  <!-- step-4 -->
  <div class="w-full min-h-[400px] bg-[#20407C] lg:py-28 xxxs:py-16">
    <div class="w-[70%] mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Stef & Philips’</span>
        responsibility
      </p>
      <Accordion :message="nmessage" />
    </div>
  </div>

  <!-- step 5 -->
  <div class="min-h-[400px] w-full bg-[#1d1d33] lg:py-28 xxxs:py-16">
    <div class="w-[70%] mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Your local council’s</span>
        responsibility
      </p>
      <Accordion :message="omessage" />
    </div>
  </div>
  <!-- step 6 -->
  <div class="min-h-[600px] w-full">
    <div class="mx-auto w-[70%]">
      <div class="w-full flex justify-center">
        <div class="lg:py-20 xxxs:py-10">
          <div class="grid md:grid-cols-2 grid-cols-1 gap-12">
            <div class="font-black lg:px-6 lg:py-40">
              <h1 class="text-[36px] text-trisec">
                <span class="font-light">During </span>your stay
              </h1>
              <p
                class="text-[18] font-regular mt-4 leading-loose tracking-wide"
              >
                Paragraph style fusce laoreet lorem id consequat rhoncus.
                Curabitur ultrices condimentum enim, id fringilla libero rutrum
                vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus
                odio. Quisque mauris nisi, cursus id dictum id, laoreet quis
                libero.
              </p>
              <button
                type="button"
                class="bg-[#2A8CFB] py-4 px-11 text-sm font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Report a repair
              </button>
              <button
                type="button"
                class="bg-[#20407C] ml-5 py-4 px-11 text-sm font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Your team
              </button>
            </div>
            <div class="lg:py-20 xxxs:py-10 px-6">
              <!-- svg image -->
              <img src="../assets/Svg/ManHouseCard.svg" alt="" />
              <!-- svg image -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- step 7 -->
  <div class="min-h-[400px] w-full bg-[#EDEDEE] lg:py-28 xxxs:py-16">
    <div class="w-[70%] mx-auto flex flex-wrap items-center">
      <p class="text-[#20407C] text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">During your stay FAQs</span>
      </p>
      <Accordion :message="pmessage" />
    </div>
  </div>
  <!-- step 8 -->

  <HorizontalCardVue :message="card3" />

  <NeedHelp />
</template>

<script setup>
import Accordion from "../components/Accordion.vue";

import HorizontalCardVue from "../components/HorizontalCard.vue";
import NeedHelp from "../components/NeedHelp.vue";
const card = {
  header: "What is a ",
  boldheader: " PRS",
  lighttext: " tenant?",
  img: new URL("../assets/Svg/BoyWithPort.svg", import.meta.url).href,
  paragraph:
    "Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
};
const card2 = {
  direction: "rtl",
  header: "Moving in or out of",
  boldheader: " PRS accommodation",
  img: new URL("../assets/Svg/LeftUpCard.svg", import.meta.url).href,
  paragraph:
    "Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
};

const card3 = {
  direction: "rtl",
  img: new URL("../assets/Svg/Media.svg", import.meta.url).href,
  header: "Was your tenancy",
  boldheader: " cancelled ?",
  bgclass: "bg-[#f0f7fe]",
  btn: ["Find my concil"],
  paragraph:
    "(Look at wording), we have a clear process of managing your belongings, anything to do with the tenancy contact the council.",
};

const message = [
  {
    index: 0,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];
const nmessage = [
  {
    index: 0,
    header: "Your Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];

const omessage = [
  {
    index: 0,
    header: "Council responsibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];
const pmessage = [
  {
    index: 0,
    header: "Frequently asked question goes here?",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
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
.bgImg {
  background-image: url("../assets/Svg/HeaderBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
