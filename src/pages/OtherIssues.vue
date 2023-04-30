<template>
  <div
    class="h-[40px] w-full breadCrum-bg bl flex justify-center nav-bar-tranparent"
  >
    <nav
      class="lg:w-[70%] xxxs:w-[80%] sm:w-[93%] h-full mx-auto flex items-center justify-start gap-3 inner lg:pl-[15px]"
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
        <router-link to="your-home">Your home</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[grey]"></i>

      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="0ther-issues">Other Issues</router-link>
      </div>
    </nav>
  </div>
  <div
    class="w-full flex justify-center items-center lg:mt-[10rem] sm:mt-[8rem] xxs:mt-[5rem]"
  >
    <div class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] mx-auto">
      <div
        class="lg:text-[42px] xxs:text-[20px] xxxs:text-[38px] text-[#20407c] font-black-custom w-[60%]"
      >
        Other queries
      </div>
      <p
        class="text-[18px] xxs:text-[16px] text-custom-color font-regular-custom mt-3"
      >
        Is there an issue with your home that doesn’t come under Repairs &
        Maintenance <br />or Anti-Social Behaviour? Please provide as much
        detail as possible in the <br />form below and we will look into it.
      </p>
    </div>
  </div>
  <div class="pt-11 lg:w-[70%] xxxs:w-[90%] sm:w-[93%] mx-auto">
    <h1
      class="lg:text-[30px] xxxs:text-[25px] text-[#20407c] font-black-custom"
    >
      More Information
    </h1>
    <p
      class="lg:text-[18px] xxxs:text-[16px] text-[#20407C] font-black-custom mt-11"
    >
      Please describe the issue
    </p>
    <p
      class="lg:text-[18px] xxxs:text-[16px] text-custom-color font-regular-custom mt-3"
    >
      Be as detailed as possible
    </p>
    <Textarea
      v-model="value"
      rows="5"
      cols="30"
      class="lg:mt-8 xxxs:mt-4 w-full max-w-[632px] min-h-[180px]"
    />
    <p
      class="lg:text-[18px] xxxs:text-[14px] text-[#20407C] font-black-custom mt-11"
    >
      Upload any supporting images or documents that may be helpful
    </p>
    <p
      class="lg:text-[18px] xxxs:text-[16px] text-custom-color font-regular-custom mt-3"
    >
      Maximum file size 3MB
    </p>
    <!-- <div class="mt-3 flex flex-wrap xxxs:flex-nowrap justify-start">
      <FileUpload
        mode="basic"
        name="demo[]"
        cl
        url="./upload.php"
        chooseLabel="Choose file"
        class="bg-[#0559B7] lg:w-[140px] font-xbold-custom text-[14px] lg:h-[44px]"
      />
      <div class="font-regular-custom text-[18px] ml-6 mt-3 flex">
        <div
          class="w-full pr-3 lg:text-[18px] xxxs:text-[9px] xxxs:mt-2 lg:mt-0 font-black-custom"
        >
          Upload file name.jpg
        </div>
        <img class="xxxs:max-w-xs" src="../assets/Svg/DeleteIcon.svg" alt="" />
      </div>
    </div> -->
    <div
      class="mt-3 flex flex-wrap justify-start"
      v-for="chooseFile in chooseFile"
      :key="chooseFile.name"
    >
      <FileUpload
        mode="basic"
        name="demo[]"
        url="./upload.php"
        chooseLabel="Choose file"
        accept="image/*"
        v-model="chooseFile.name"
        :maxFileSize="1000000"
        @upload="onUpload"
        class="lg:w-[140px] font-xbold-custom text-[14px] lg:h-[44px]"
      />
      <div class="font-regular-custom text-[18px] ml-6 mt-3">
        {{ chooseFile.name }}
      </div>
    </div>
    <div
      class="mt-3 flex flex-wrap justify-start"
      v-for="item in chooseFile"
      :key="item.name"
    >
      <FileUpload
        mode="basic"
        name="demo[]"
        url="./upload.php"
        chooseLabel="Choose file"
        class="bg-[#2A8CFB] lg:w-[140px] font-xbold-custom text-[14px] lg:h-[44px]"
      />
      <div class="font-regular-custom text-[18px] ml-6 mt-3">
        {{ item.name }}
      </div>
    </div>
  </div>
  <YourDetails />
  <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
    <div class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%]">
      <p class="text-[#20407C] text-[30px] font-light pb-6">
        <span class="text-[28px] font-black-custom">Other ways to report</span>
      </p>
      <Accordion :message="message" />
    </div>
  </div>
</template>

<script setup>
import MoreInfo from "../components/MoreInfo.vue";
import YourDetails from "../components/YourDetails.vue";
import Accordion from "../components/Accordion.vue";
const chooseFile = [
  {
    id: "1",
    name: "No file chosen",
  },
  {
    id: "2",
    name: "No file chosen",
  },
  {
    id: "3",
    name: "No file chosen",
  },
  {
    id: "4",
    name: "No file chosen",
  },
  {
    id: "5",
    name: "No file chosen",
  },
];
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

<style>
@media (min-width: 1200px) {
  .lg\:w-\[70\%\] {
    max-width: 1140px;
  }
}
.nav-bar-tranparent {
  position: absolute;
  opacity: 1.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.breadCrum-bg {
  background-color: #1d1d33 !important;
}
.text-custom-color {
  color: #1d1d33 !important;
}
</style>
