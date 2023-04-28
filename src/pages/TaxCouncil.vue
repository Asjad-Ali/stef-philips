<template>
  <div
    class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent"
  >
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
        <router-link to="your-home">Your home</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="tax-council">Tax Council and Utilities</router-link>
      </div>
    </nav>
  </div>
  <div class="w-full flex justify-center items-center mt-20">
    <div class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] mx-auto">
      <div
        class="lg:text-[42px] xxs:text-[20px] xxxs:text-[38px] text-[#20407c] font-black-custom"
      >
        Council tax and utilities
      </div>
      <p
        class="text-[18px] xxs:text-[16px] text-[#1d1d33] font-regular-custom mt-3"
      >
        Are you having trouble understanding your council tax or utility bills
        and/or applying for support? <br />Do you need to alert us to an issue
        with a bill you’ve received? <br />
        Our dedicated team is here to help you manage your bills – simply fill
        in the form below.
      </p>
    </div>
  </div>
  <SelectOne />
  <YourDetails />
  <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
    <div class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%]">
      <p class="text-[#20407C] pb-6">
        <span class="text-[25px] font-black-custom">Other ways to report</span>
      </p>
      <Accordion :message="message" />
    </div>
  </div>
</template>

<script setup>
import MoreInfo from "../components/MoreInfo.vue";
import YourDetails from "../components/YourDetails.vue";
import SelectOne from "../components/SelectOne.vue";
import Accordion from "../components/Accordion.vue";

const message = [
  {
    index: 0,
    header: "Call us",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Emergency out of hours repairs",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Repair responsibilities",
    text: "Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Link call to action",
  },
];
</script>

<style>
.nav-bar-tranparent {
  position: absolute;
  opacity: 0.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
</style>
