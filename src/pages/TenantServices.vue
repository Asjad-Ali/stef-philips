<template>
  <div
    class="h-[40px] w-full bg-[#1D1D33] opacity-50 bl flex justify-center nav-bar-tranparent"
  >
    <nav
      class="container h-full mx-auto flex items-center justify-start gap-3 inner lg:pl-[15px]"
    >
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[grey]"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="your-home">Your Home</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[grey]"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="tenant-services">Tenant services</router-link>
      </div>
    </nav>
  </div>
  <!-- section 1 -->
  <div class="w-full min-h-[460px] bgImg">
    <div class="container lg:h-[500px] xxs:h-[500px] mx-auto flex items-center">
      <!-- mx-auto p-3 -->
      <div
        class="lg:w-[480px] xxs:w-[250px] h-[auto] lg:ml-[14px] xxs:ml-[35px] sm:ml-[7px] lg:p-[5rem] sm:p-[3rem] xxs:p-[2rem] contentImg"
      >
        <!-- <h1 class="lg:text-[36px] xxs:text-[18px] text-white font-[300]">
          Tenant services
        </h1> -->
        <h1
          class="font-light-custom lg:text-[38px] xxs:text-[18px] leading-none text-white content mb-4"
        >
          <span>Tenant </span>
          <span class="font-black-custom lg:text-[38px] xxs:text-[18px]"
            >services</span
          >
        </h1>
        <p class="text-[18px] text-white font-[400]">
          High-quality temporary, emergency and PRS accommodation across the UK.
        </p>
      </div>
    </div>
  </div>
  <!-- section 2 -->
  <!-- <div class="w-full min-h-[400px] p-3"> -->
  <div
    class="container sm:w-[93%] mx-auto py-14 flex flex-col justify-center my-[4rem]"
  >
    <div class="card flex items-start justify-content-between gap-5 w-full">
      <Card :message="card1" style="background-color: white" />
    </div>
  </div>
  <div class="container mx-auto py-14 flex flex-col justify-center">
    <!--  -->
    <div
      class="card flex items-start justify-start mx-auto flex-wrap lg:gap-[1rem] xxxs:gap-5 w-full"
    >
      <TenantCard :message="card2" />
    </div>
  </div>
  <div class="w-full bg-custom">
    <HorizontalCardVue :message="card3" />
  </div>

  <NeedHelp />
  <!-- </div> -->
</template>
<script setup>
import Card from "../components/VerticalGreyCard.vue";
import NeedHelp from "../components/NeedHelp.vue";
import TenantCard from "../components/TenantCard.vue";
import HorizontalCardVue from "../components/HorizontalCard.vue";
const card1 = [
  {
    heading: "Temporary accommodation",
    description: "Quality short-term accommodation for singles and families.",
    img: new URL("../assets/YourHome/kidTenantCard.png", import.meta.url).href,
    bgclass: "bg-[#ededee]",
  },
  {
    heading: "Private rented sector",
    description:
      "Affordable, long-term housing solutions covering a wide range of needs.",
    img: new URL("../assets/Svg/CardImage2.svg", import.meta.url).href,
    bgclass: "bg-[#ededee]",
  },
];
const card2 = [
  {
    header: "Managing your ",
    bold: "utility bills",
    description:
      "Do you need help understanding or managing your utility bills?",
    img: new URL("../assets/YourHome/tenantTap.png", import.meta.url).href,
  },
  {
    header: "Paying your ",
    bold: "concil tax",
    description:
      "Do you need help understanding your council tax responsibilities?",
    img: new URL("../assets/YourHome/tenantBuildong.png", import.meta.url).href,
  },
  {
    header: "Paying your ",
    bold: "rent",
    description:
      "Do you need to pay rent? This may depend on the type of accommodation you’re in.",
    img: new URL("../assets/YourHome/tenantReferal.png", import.meta.url).href,
  },
];
const card3 = {
  direction: "rtl",

  img: new URL("../assets/YourHome/headicPerson.png", import.meta.url).href,
  header: "?Was your tenancy ",
  boldheader: " cancelled  ",
  bgclass: "bg-[#f0f7fe]",
  btn: ["Find my concil"],
  paragraph:
    "Housing partners are responsible for all tenancy cancellations. If you have any questions about this, you should contact them directly.",
  btnimg: "src/assets/Svg/Path51.svg",
  buttonIcon: true,
  flex: "items-end",
};
</script>
<style scoped>
.bg-custom {
  background-color: #f0f7fe;
}
.contentImg {
  /* background-image: url("../assets/outline-house@4.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 100%;
  /* height: 40%; */
  /* background-color: #000126;
  background-image: linear-gradient(-48deg, #000000 20%, #422418 55%); */
  border-color: #000000;
  /* border-width: 1px; */
  /* border-style: dashed; */

  background: #1d1d33;
  background: linear-gradient(161deg, #1d1d33 0%, rgba(29, 29, 51, 0.44) 100%);
}
@media (max-width: 750px) {
  .card {
    flex-wrap: wrap;
  }
}


.bgImg {
  background-image: url("../assets/YourHome/tenantbg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
@media (min-width: 1200px) {
  .lg\:w-\[70\%\] {
    max-width: 1140px;
  }
}
</style>
Footer © 2023 GitHub, Inc.
