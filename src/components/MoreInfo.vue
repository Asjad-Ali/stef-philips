<template>
<div class=" pt-11 w-[70%] mx-auto">
<h1  class="lg:text-[30px] xxxs:text-[25px] text-[#20407c] font-black-custom">More Information</h1> 
 <p class="lg:text-[18px] xxxs:text-[16px] text-[#20407C] font-black-custom  mt-3">Select the option that best describes your issue</p>
 <p class="lg:text-[18px] xxxs:text-[15px] text-[#1D1D33] font-regular-custom lg:mt-3 lg:mb-3  xxxs:mt-1 xxxs:mb-1 ">Select on</p>
 <Dropdown v-model="selectedOption"  inputId="dd-city" :options="cities" optionLabel="name" placeholder="select..." class="w-full lg:max-w-[632px] min-h-[50px]" />

      <p class="lg:text-[18px] xxxs:text-[16px] text-[#20407C] font-black-custom mt-11">Please describe the issue</p>
    <p class="lg:text-[18px] xxxs:text-[16px]  text-[#1D1D33] font-regular-custom mt-3">Be as detailed as possible</p>
    <Textarea v-model="value" rows="5" cols="30" class="lg:mt-8 xxxs:mt-4 w-full max-w-[632px] min-h-[180px]" />
     <p class="lg:text-[18px] xxxs:text-[14px] text-[#20407C] font-black-custom mt-11">Upload any supporting images or documents that may be helpful</p>
    <p class="lg:text-[18px] xxxs:text-[16px] text-[#1D1D33] font-regular-custom mt-3">Maximum file size 3MB</p>
     <div class="mt-3 flex flex-wrap xxxs:flex-nowrap justify-start">
        <FileUpload mode="basic" name="demo[]" cl url="./upload.php"  chooseLabel="Choose file"  class="bg-[#0559B7] lg:w-[140px] font-xbold-custom text-[14px] lg:h-[44px]" />
        <div class="font-regular-custom text-[18px] ml-6 mt-3 flex  ">
        <div class="w-full pr-3 lg:text-[18px] xxxs:text-[9px] xxxs:mt-2 lg:mt-0 font-black-custom" >Upload file name.jpg</div>
        <img class="xxxs:max-w-xs" src="../assets/Svg/DeleteIcon.svg" alt="">
        </div>
    </div>
    <div class="mt-3 flex flex-wrap justify-start" v-for="chooseFile in chooseFile" :key="chooseFile.name">
        <FileUpload mode="basic" name="demo[]" url="./upload.php"  chooseLabel="Choose file" accept="image/*" v-model="chooseFile.name"  :maxFileSize="1000000" @upload="onUpload" class="lg:w-[140px] font-xbold-custom text-[14px] lg:h-[44px]" />
        <div class="font-regular-custom text-[18px] ml-6 mt-3 ">{{chooseFile.name}}</div>
    </div>
</div>
   
  



</template>




<script setup>
import { ref } from "vue";


const value = ref('');
const selectedOption = ref('');
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
// const onUpload = () => {console.log(' i am chossing')
//     toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
// };


const chooseFile=[
    { 

        id:'1',
        name:'No file chosen'
  },
    {
     id:'2',
      name:'No file chosen'
  },
    {
     id:'3',
      name:'No file chosen'
  },
]
</script>



<style>
.p-dropdown {
    border: 0.16rem solid #20407C;
}
.p-dropdown .p-dropdown-trigger {
 background-color: #20407C;
  color: white;
  width: 50px;
  
}
.p-dropdown .pi{
    display: inline-block;
    color: white;
   
}
.p-dropdown .p-dropdown-label.p-placeholder {
    color: #20407C; 
    border-color:  #20407C;
    background:#E1EFFF;
    font-size: 18px;
    font-family: "Black",sans-serif;
}
.p-inputtext{
     border:  0.16rem solid #20407C;
     background:#E1EFFF;
}
.p-button.p-fileupload-choose .pi{
 display: none;
}
</style>