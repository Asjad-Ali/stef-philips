<template>
  <div
    class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent"
  >
    <nav
      class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] mx-auto flex items-center justify-start gap-3 inner"
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
        <router-link to="your-home">Your home</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="submitted-issue">Submitted</router-link>
      </div>
    </nav>
  </div>

  <!--  -->

  <div
    class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] mx-auto p-14 py-20 bg-[#00A8A8]/10 my-20 min-h-[443px]"
  >
    <div class="mx-auto">
      <img src="../assets/Svg/Icon2.svg" />
      <h1
        class="font-black-custom lg:text-[36px] xxs:text-[18px] xxxs:text-[32px] py-4 text-[#20407C]"
      >
        Report submitted
      </h1>
      <span class="font-bold-custom text-[18px] text-[#1D1D33]"
        >Thank you for submitting your report.</span
      >
      <span
        class="pb-4 font-regular-custom lg:text-[18px] xxs:text-[17px] xxxs:text-[13px] text-[#1D1D33]"
      >
        You will also receive an email confirming submission of your report, and
        someone from Stef & Philips will be in touch soon to follow up. Routine
        repairs are completed within XX days.
      </span>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.nav-bar-tranparent {
  position: absolute;
  opacity: 0.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
</style>
