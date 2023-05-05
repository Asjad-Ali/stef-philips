<template>
  <div class="container mt-[3rem] mb-[40px] md:mb-[100px]">
    <div class="bg-help">
      <div class="card-background py-[30px]">
        <h1 class="block mb-[18px] font-light-custom lg:text-[36px] xxxs:text-[30px] font-light text-[#EC254E]">
          Out of hours
          <span class="font-black-custom lg:text-[36px] xxs:text-[30px]">emergencies</span>
        </h1>
        <p class="pb-4 lg:text-[18px] xxxs:text-[16px] font-regular-custom text-[#1D1D33]">
          If you are experiencing an emergency during out of hours (Weekends, Bank Holidays and between 6pm-7am daily) and need assistance - 
          the quickest way to report and issue and get it fixed, is by using our <router-link to="/">online form</router-link> here
        </p>

        <div class="flex flex-wrap md:gap-5 xxs:gap-1 pt-4 pb-4">
          <img class="lg:max-w-sm" src="../assets/Svg/PhoneIcon.svg" alt />
          <div class="mt-8 text-third lg:text-4xl sm:text-2xl xxxs:text-md">
            <pre class="font-black-custom text-[24px]">+44 (0) 20 8882 8372</pre>
          </div>
        </div>
        <div class="flex items-center gap-6 flex-wrap">
          <button
            type="button"
            class="bg-[#20407C] py-4 px-6 lg:text-[16px] xxxs:text-[14px] h-50px lg:mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            What is an emergency
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .bg-help {
    background: url("../assets/emergencies.png") no-repeat;
    background-size: 100% 100%;
  }
  .card-background {
    padding: 65px 80px;
  }

  @media(max-width: 767px) {
    .card-background {
      padding: 25px 15px
    }
  }
</style>
