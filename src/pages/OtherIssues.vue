<template>
  <div class="h-[40px] w-full bg-[#707070] bl flex justify-center">
    <nav
      class="w-[70%] h-full mx-auto flex items-center justify-start gap-3 inner"
    >
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        Home
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        active-class="active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        Your home
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        active-class="active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        Report an issue
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        active-class="active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        Other Issues
      </div>
    </nav>
  </div>
  <div class="w-full flex justify-center items-center mt-20">
    <div class="w-[70%] mx-auto">
      <div
        class="text-[42px] xxxs:text-[38px] text-[#20407c] font-black-custom w-[60%]"
      >
        Other Issues
      </div>
      <p
        class="text-[18px] xxs:text-[16px] text-[#1d1d33] font-regular-custom mt-3"
      >
        Short introductory summary for the page goes here like so
      </p>
    </div>
  </div>
  <div class="pt-11 w-[70%] mx-auto">
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
      class="lg:text-[18px] xxxs:text-[16px] text-[#1D1D33] font-regular-custom mt-3"
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
      class="lg:text-[18px] xxxs:text-[16px] text-[#1D1D33] font-regular-custom mt-3"
    >
      Maximum file size 3MB
    </p>
    <div class="mt-3 flex flex-wrap xxxs:flex-nowrap justify-start">
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
    </div>
    <div class="mt-3 flex flex-wrap justify-start" v-for="chooseFile in chooseFile" :key="chooseFile.name">
        <FileUpload mode="basic" name="demo[]" url="./upload.php"  chooseLabel="Choose file" accept="image/*" v-model="chooseFile.name"  :maxFileSize="1000000" @upload="onUpload" class="lg:w-[140px] font-xbold-custom text-[14px] lg:h-[44px]" />
        <div class="font-regular-custom text-[18px] ml-6 mt-3 ">{{chooseFile.name}}</div>
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
    <div class="w-[70%]">
      <p class="text-[#20407C] text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Other ways to report</span>
      </p>
      <Accordion :message="message" />
    </div>
  </div>
</template>

<script setup>
import MoreInfo from "../components/MoreInfo.vue";
import YourDetails from "../components/YourDetails.vue";
import Accordion from "../components/Accordion.vue";
const chooseFile=[
    { 

        id:'1',
        name:'No file chosen'
  },
    {
     id:'2',
      name:'No file chosen'
  },

]
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
