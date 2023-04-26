<template>
  <div
    class="py-20 lg-w-[70%] xxxs:w-[90%] sm:w-[90%] h-[230px] mt-[3rem] mb-[27rem]"
  >
    <div class="md:grid-cols-2 grid-cols-2">
      <div class=""></div>
      <div
        class="lg:w-[113%] sm:w-[112%] xxxs:w-[120%] flex items-center justify-center"
      >
        <div class="card-background px-[60px] py-[30px]">
          <h1
            class="block py-4 font-light-custom lg:text-[36px] xxxs:text-[30px] font-light text-[#EC254E]"
          >
            Out of hours
            <span class="font-black-custom lg:text-[36px] xxs:text-[30px]"
              >emergencies</span
            >
          </h1>
          <p class="pb-4 lg:text-[18px] xxxs:text-[16px] font-regular-custom">
            Little into here, out of hours are Weekends, Bank Holidays and
            between 6pm - 7am daily
          </p>
          <p class="pb-4 lg:text-[18px] xxxs:text-[16px] font-regular-custom">
            If it’s not urgent, the quickest way to report an issue and get it
            fixed, is using
            <span class="text-primary font-bold-custom text-[18px]"
              >our online form
            </span>
            now
          </p>

          <div class="flex flex-wrap md:gap-5 xxs:gap-1 pt-4 pb-4">
            <img class="lg:max-w-sm" src="../assets/Svg/PhoneIcon.svg" alt />
            <div class="mt-8 text-third lg:text-4xl sm:text-2xl xxxs:text-md">
              <pre class="font-black-custom text-[24px]">020 00000 000</pre>
            </div>
          </div>
          <div class="flex items-center gap-6 flex-wrap">
            <button
              type="button"
              class="bg-[#20407C] py-4 px-6 lg:text-[16px] xxxs:text-[14px] h-50px lg:mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              What is an emergencey
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-background {
  background-color: pink;
}
</style>
