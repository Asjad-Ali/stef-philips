<template>
  <div class="arc-section">
    <div class="arc-cut"></div>
    <div class="arc-content relative">
      <div class="arc-img">
        <img src="/src/assets/arc-img.png" alt="arc-img" />
      </div>
      <div class="container relative z-10 pt-[138px] py-[155px]">
        <div class="grid md:grid-cols-2">
          <div class="content-section md:pl-[40px]">
            <h1 class="font-light-custom md:text-[36px] text-[24px] text-white leading-none">
              The UK’s need for temporary and emergency 
              <span class="font-black-custom">accommodation</span>
            </h1>
            <p class="mt-4 text-white font-regular-custom sm:text-[18px] text-[12px]">
              Paragraph that leads into the About Us / our mission to help CTA
              fusce laoreet lorem id consequat rhoncus. Curabitur ultrices
              condimentum enim, id fringilla libero rutrum vel. Sed efficitur
              risus eu imperdiet auctor.
            </p>

            <button class="mt-[30px] bg-transparent whitespace-nowrap ring-2 ring-white py-3.5 px-10 text-[16px] mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .arc-section {
    position: relative;
  }

  .arc-content .arc-img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  /* .arc-content .arc-img:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4)
  } */

  .arc-content .arc-img img {
    width: 100%;
    height: 100%;
  }
</style>