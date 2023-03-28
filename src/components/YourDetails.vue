<template>
  <div class=" pt-11  pb-24 w-[60%] mx-auto">
<h1  class="lg:text-[30px] xxxs:text-[25px] text-[#20407c] font-[900]">Your details</h1> 
   <div class="w-full">       
            <div class="pt-5">
            <div>
            <label for="username" class="text-[#20407C]  lg:text-[18px] xxxs:text-[14px] font-[900] ">Your full name <sup style="color:red;">*</sup></label>
            </div>
            <InputText type="text" v-model="value" class="my-4 w-full max-w-[632px] min-h-[50px]" />
           </div>
            <div class="pt-1">
             <div>
            <label for="username" class="text-[#20407C]  lg:text-[18px] xxxs:text-[14px] font-[900]">Property address line 1<sup style="color:red;">*</sup></label>
            </div>
            <InputText type="text" v-model="value" class="my-4 w-full max-w-[632px] min-h-[50px]" />
           </div>
           <div class="pt-1">
             <div>
            <label for="username" class="text-[#20407C]  lg:text-[18px] xxxs:text-[14px] font-[900]">Property address line 2 <sup style="color:red;">*</sup></label>
            </div>
            <InputText type="text" v-model="value" class="my-4 w-full max-w-[632px] min-h-[50px]" />
           </div>
        <div class=" flex py-1 gap-2 w-full">
           <div class="w-full max-w-[310px]">
           <div >
            <label for="username" class="text-[#20407C]  lg:text-[18px] xxxs:text-[14px] font-[900]">Town / city <sup style="color:red;">*</sup></label>
            </div>
            <InputText type="text" v-model="value" class="my-4 w-full  min-h-[50px]" />
           </div>
         <div class="w-full max-w-[310px]">
            <div>
            <label for="username" class="text-[#20407C]  lg:text-[18px] xxxs:text-[14px] font-[900]">Postcode<sup style="color:red;">*</sup></label>
            </div>
            <InputText type="text" v-model="value" class="my-4 w-full max-w-[320px] min-h-[50px]" />
        </div>
        </div>
         <div class="py-1">
          <div>
            <label for="username" class="text-[#20407C]  lg:text-[18px] xxxs:text-[14px] font-[900]">Email address<sup style="color:red;">*</sup></label>
            </div>
            <InputText type="email" v-model="value" class="my-4 w-full max-w-[632px] min-h-[50px]" />
        </div>
     <div>
        <label class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-[900]" >Contact Number <sup style="color:red;">*</sup></label>
     </div>
         <InputText type="number" v-model="value" class="my-4 w-full max-w-[632px] min-h-[50px]" />
       </div>
      <button class="w-full max-w-[632px] bg-primary min-h-[50px] mt-7 rounded-md text-white">Submit</button>
</div>
</template>



<script setup>
 import { ref } from "vue";




</script>



<style scoped>
.p-inputtext{
     border:  0.16rem solid #20407C;
}
</style>