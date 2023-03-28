<template>
<div class=" w-[60%] mx-auto py-16">
<h1  class="lg:text-[30px]  xxxs:text-[25px] text-[#20407c] lg:font-[800] xxxs:font-[600]">Please select one</h1> 
<div>
<p class="lg:text-[18px]  xxxs:text-[14px] text-[#20407C] font-[900] mt-11">Have you received comms from U/CT dept.?</p>
  <div class="card flex justify-content-center">
        <div class="flex gap-3 w-full mt-5">
            <div class="radio flex py-3 px-3 align-items-center w-full max-w-[310px] min-h-[50px] ">
                <RadioButton v-model="option" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="option1" class="ml-2">Yes</label>
            </div>
            <div class="radio flex   py-3 px-3 align-items-center  w-full max-w-[310px] min-h-[50px] ">
                <RadioButton v-model="option" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="option2" class="ml-2">No</label>
            </div>
    </div>
</div>
</div>
<div>
<p class="lg:text-[18px]  xxxs:text-[14px] text-[#20407C] font-[900] mt-11">Would you like to talk to someone about U/CT?</p>
  <div class="card flex justify-content-center">
        <div class="flex  gap-2 w-full mt-5">
            <div class=" radio flex   py-3 px-3 align-items-center  w-full max-w-[310px] min-h-[50px] ">
                <RadioButton v-model="noption"   />
                <label for="noption1" class="ml-2">Yes</label>
            </div>
            <div class="  radio flex  py-3 px-3 align-items-center  w-full max-w-[310px] min-h-[50px] ">
                <RadioButton v-model="noption"  />
                <label for="noption2" class="ml-2">No</label>
            </div>
    </div>
</div>
</div>
</div>
</template>



<script setup>
import { ref } from "vue";



const  option= ref('');
const noption=ref('');
</script>

<style >
.radio{
       border:  0.16rem solid #20407C;
       background:#E1EFFF;
       border-radius: 4px;
       color: #20407C;
       font-size: 15px;
}
</style>