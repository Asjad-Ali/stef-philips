<template>
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav
      class="lg:w-[70%] xxxs:w-[93%] sm:w-[93%]] mx-auto flex items-center justify-start gap-3 inner"
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
        <router-link to="meet-the-team">Meet the team</router-link>
      </div>
    </nav>
  </div>

  <div class="lg:w-full min-h-[460px] bg-red-400 bgImg">
    <!-- class="w-full h-[460px] flex justify-center items-center"  -->
    <div
      class="lg:w-[70%] xxxs:w-[95%] sm:w-[75%] md:w-[93%] lg:h-[500px] xxs:h-[500px] mx-auto flex items-center"
    >
      <div
        class="lg:w-[365px] xxs:w-[300px] sm:w-[400px] h-[auto] lg:ml-14px xxs:ml-[7px] p-10 contentImg"
      >
        <h1 class="text-white">
          <div class="font-light-custom lg:text-[36px] xxs:text-[18px]">
            Meet your Team
          </div>
        </h1>
        <p class="text-white mt-4 font-regular-custom text-[18px]">
          Short Introductory summary for the page<br />goes here lilke so
        </p>
      </div>
    </div>
  </div>

  <div class="w-full">
    <HorizontalCardVue :message="card1" />
    <HorizontalCardVue :message="card2" />
    <HorizontalCardVue :message="card3" />

    <div
      class="lg:w-[70%] xxxs:w-[100%] sm:w-[95%] mx-auto py-14 flex flex-col justify-center"
    >
      <NeedHelp />
    </div>
  </div>
</template>
<script setup>
import HorizontalCardVue from "../components/HorizontalCard.vue";
import NeedHelp from "../components/NeedHelp.vue";
const card1 = {
  bgclass: " white ",
  header: "Meet your",
  boldheader: " Housing Officer",
  btn: ["Read out more"],
  img: "src/assets/Card-Image2.png",
  paragraph:
    "At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.",
  b: true,
};
const card2 = {
  direction: "rtl",
  class: " flex flex-row-reverse ",
  header: "Field worker",
  boldheader: " Housing Officer",
  btn: ["Read out more"],
  img: "src/assets/Card-Image2.png",
  paragraph:
    "At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.",
  flex: "items-end",
  b: true,
};
const card3 = {
  class: " flex flex-row-reverse ",
  header: "Maintainance worker",
  boldheader: " Housing Officer",
  btn: ["Read out more"],
  img: "src/assets/Card-Image2.png",
  paragraph:
    "At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.",
  b: true,
};
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
  background-image: url("../assets/overlay-image-l.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
