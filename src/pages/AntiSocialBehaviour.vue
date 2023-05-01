<template>
  <div
    class="h-[40px] w-full breadCrum-bg flex justify-center nav-bar-tranparent"
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
        <router-link to="anti-social-behaviour"
          >Anti-Social Behaviour</router-link
        >
      </div>
    </nav>
  </div>
  <div
    class="mx-auto w-full flex justify-center items-center lg:mt-[10rem] sm:mt-[8rem] xxs:mt-[5rem] pb-10"
  >
    <div class="container mx-auto">
      <div
        class="lg:text-[42px] xxs:text-[20px] xxxs:text-[38px] text-[#20407c] font-black-custom"
      >
        Anti-social behaviour
      </div>
      <p
        class="lg:text-[18px] xxs:text-[16px] text-custom-color font-regular-custom mt-3"
      >
        Are you experiencing anti-social behaviour from someone in your
        property? <br />
        Please complete all fields below and we will endeavour to sort this for
        you<br />
        as quickly as possible – we understand how important it is <br />
        for you to feel safe in your home.
      </p>
    </div>
  </div>
  <MoreInfo />
  <YourDetails />
  <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
    <div class="container">
      <p class="text-[#20407C] text-[30px] font-light pb-6">
        <span class="text-[30px] font-black-custom">Other way to report</span>
      </p>
      <Accordion :message="message" />
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1200px) {
  .lg\:w-\[70\%\] {
    max-width: 1140px;
  }
} */
.p-dropdown.p-component.p-inputwrapper.w-full {
  border-radius: 6px;
}
.p-dropdown-label.p-inputtext.p-placeholder {
  border-radius: 0;
}
.p-inputtextarea.p-inputtext.p-component.w-full {
  border-radius: 0;
}
.p-inputtext.p-component.my-4.w-full {
  border-radius: 0;
}
.nav-bar-tranparent {
  position: absolute;
  opacity: 1.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.text-custom-color {
  color: #1d1d33 !important;
}
</style>

<script setup>
import MoreInfo from "../components/MoreInfo.vue";
import YourDetails from "../components/YourDetails.vue";
import Accordion from "../components/Accordion.vue";

const message = [
  {
    index: 0,
    header: "Call us",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Link call to action",
  },
  {
    index: 1,
    header: "Emergency out of hours repairs",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Link call to action",
  },
  {
    index: 2,
    header: "Repair responsibilities",
    text: "Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Link call to action",
  },
];
</script>
<style scoped>
.breadCrum-bg {
  background-color: #1d1d33 !important;
}
</style>
