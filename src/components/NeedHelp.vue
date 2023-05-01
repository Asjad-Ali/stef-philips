<template>
  <div
    class="lg:w-[70%] xxxs:w-[100%] sm:w-[65%] lg:h-[230px] xxxs:h-[420px] sm:h-[200px] mt-[3rem] mb-[15rem] mx-auto"
  >
    <div class="md:grid-cols-2 grid-cols-2">
      <div class=""></div>
      <!-- <div
        class="lg:w-[145%] xxxs:w-[100%] sm:w-[153%] flex items-center justify-center"
      > -->
      <div class="card-background">
        <img src="../assets/need-help-Shape-G.png" />
        <h1
          class="block py-4 font-light-custom lg:text-[36px] xxxs:text-[30px] font-light text-[#ff671e]"
        >
          Need help
          <span class="font-black-custom lg:text-[36px] xxs:text-[30px]"
            >with your home</span
          >
        </h1>
        <p class="pb-4 lg:text-[18px] xxxs:text-[16px] font-regular-custom">
          Use our quick online form.
          <span class="font-bold-custom"
            >The quickest way to report an issue and get it fixed.</span
          >
        </p>
        <div class="flex items-center gap-6 flex-wrap">
          <button
            type="button"
            class="bg-[#20407C] py-4 px-6 lg:text-[16px] xxxs:text-[14px] h-50px font-xbold-custom lg:mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <router-link to="/repair-and-maintenance"
              >Report a repair or maintenance</router-link
            >
          </button>
          <button
            type="button"
            class="bg-[#20407C] py-4 px-6 lg:text-[16px] xxxs:text-[14px] h-50px font-xbold-custom lg:mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <router-link to="/anti-social-behaviour"
              >Report anti-social behaviour</router-link
            >
          </button>
          <button
            type="button"
            class="bg-trisec py-4 px-6 xxxs:px-2 lg:px-6 lg:text-[16px] xxxs:text-[11px] h-[50px] lg:mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Any other queries
          </button>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>

  <!-- <div class="w-[70%] mx-auto lg:px-20 sm:px-16 xxs: px-12 xxxs:px-7 py-28 bg-[]/10 min-h-[447px]">  
    <div class="">
    <img src="../assets/need-help-Shape-G.png"  />
      <h1 class="block py-4 font-light-custom lg:text-[36px] xxxs:text-[30px] font-light text-[#ff671e]">
        Need help
        <span class="font-black-custom lg:text-[36px] xxs:text-[30px]">with your home</span>
      </h1>
      <p class="pb-4 lg:text-[18px] xxxs:text-[16px] font-regular-custom ">
        Simply click the link below and fill in the online form – <span class="font-bold-custom "> this is the fastest way to get things sorted.</span>
      </p>
      <div class="flex items-center gap-6 flex-wrap">
        <button type="button" class="bg-[#20407C] py-4 px-6  lg:text-[16px] xxxs:text-[14px] h-50px font-xbold-custom lg:mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
          <router-link to="/repair-and-maintenance">Report a repair or maintenance</router-link>
        </button>
        <button type="button" class="bg-[#20407C] py-4 px-6  lg:text-[16px] xxxs:text-[14px] h-50px font-xbold-custom lg:mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
          <router-link to="/anti-social-behaviour">Report anti-social behaviour</router-link>
        </button>
        <button
          type="button"
          class="bg-trisec  py-4 px-6  xxxs:px-2 lg:px-6 lg:text-[16px] xxxs:text-[11px] h-[50px] lg:mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
        Anything else
        </button>
      </div>
    </div>
    </div> -->
</template>

<style scoped>
.card-background {
  /* background-color: pink; */
  padding: 20px 50px 20px 50px;
}
</style>
