<template>
  <div class="container mb-[200px]">
    <div class="flex justify-between gap-5">
        <div class="max-w-[630px] w-full">
            <h1  class="lg:text-[30px] xxxs:text-[25px] text-[#20407c] font-black-custom">How would you best describe yourself?</h1> 
            <div>
                <p class="lg:text-[18px] xxxs:text-[14px] text-[#20407C] font-black-custom mt-11">Please select one</p>
                <div class="card flex justify-content-center">
                    <div class="flex gap-3 w-full mt-5">
                        <div class="radio flex py-3 px-3 align-items-center w-full max-w-[310px] min-h-[50px] ">
                            <RadioButton v-model="option" inputId="ingredient1" name="pizza" value="Cheese" />
                            <label for="option1" class="ml-2">Corporate investor</label>
                        </div>
                        <div class="radio flex py-3 px-3 align-items-center  w-full max-w-[310px] min-h-[50px] ">
                            <RadioButton v-model="option" inputId="ingredient2" name="pizza" value="Mushroom" />
                            <label for="option2" class="ml-2">Private investor</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card flex justify-content-center">
                    <div class="flex  gap-2 w-full mt-5">
                        <div class=" radio flex   py-3 px-3 align-items-center  w-full max-w-[310px] min-h-[50px] ">
                            <RadioButton v-model="noption"   />
                            <label for="noption1" class="ml-2">Landlord</label>
                        </div>
                        <div class="  radio flex  py-3 px-3 align-items-center  w-full max-w-[310px] min-h-[50px] ">
                            <RadioButton v-model="noption"  />
                            <label for="noption2" class="ml-2">None of above</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#1D1D33] p-9 w-[210px] h-[300px]">
            <img src="../assets/prefer-Icon.png" alt="ariticle">
            <h1  class="text-[18px] font-black-custom py-2 text-white leading-snug mt-2">Prefer to call?</h1>
            <p   class="text-[16px] text-white font-regular-custom mt-2"> Office hours<br>08:00 - 18:00 </p>
            <p   class="text-[18px] text-white font-regular-custom mt-8">020 000 000 000 </p>
        </div>
    </div>
    
    <h1  class="text-[30px] text-[#20407c] font-black-custom mt-[100px] mb-[20px]">How can we help?</h1>   
    <Dropdown v-model="selectedOption"  inputId="dd-city" :options="cities" optionLabel="name" placeholder="select..." 
    class="w-full lg:max-w-[632px] min-h-[50px]" />
    
    
    <p class="text-[18px] text-[#20407C] font-black-custom mt-[60px] mb-[20px]">Add your message</p>
    <Textarea v-model="value" rows="5" cols="30" class="lg:mt-2 xxxs:mt-4 w-full max-w-[632px] min-h-[180px]" />
    


    <h1  class="text-[30px] text-[#20407c] font-black-custom mt-[100px]">Your details</h1> 
    <div class="w-full">       
        <div class="pt-5">
            <div>
                <label for="username" class="text-[#20407C]  lg:text-[18px] xxxs:text-[14px] font-black-custom">Your full name <sup style="color:red;">*</sup></label>
            </div>
            <InputText type="text" v-model="value" class="my-4 w-full max-w-[632px] min-h-[50px]" />
        </div>
        <div class="py-1">
            <div>
                <label for="username" class="text-[#20407C]  lg:text-[18px] xxxs:text-[14px] font-black-custom">Email address<sup style="color:red;">*</sup></label>
            </div>
            <InputText type="email" v-model="value" class="my-4 w-full max-w-[632px] min-h-[50px]" />
        </div>
        <div class="py-1">
            <div>
                <label class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom" >Contact Number <sup style="color:red;">*</sup></label>
            </div>
            <InputText type="number" v-model="value" class="my-4 w-full max-w-[632px] min-h-[50px]" />
        </div>
        <button class="w-full font-xbold-custom text-[16px] max-w-[632px] bg-[#2A8CFB] min-h-[50px] mt-7 rounded-xs text-white">Submit</button>
    </div>
  </div>
</template>
    
    
    
    <script setup>
    import { ref } from "vue"; 
    
    
    
const  option= ref('');
const noption=ref(''); 
const value = ref('');
const selectedOption = ref('');
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]); 

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


<style >
  .radio{
    border: 2px solid #4B6594;
    background: #F0F7FE;
    border-radius: 4px;
    color: #20407C;
    font-size: 18px;
    font-family: "XBold",sans-serif;
  }

  .p-dropdown {
    border: 2px solid #F0F7FE;
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
    background:#F0F7FE;
    font-size: 18px;
    font-family: "Black",sans-serif;
  }
  .p-inputtext{
    border:  0.16rem solid #20407C;
    background:#F0F7FE;
  }
  .p-button.p-fileupload-choose .pi{
  display: none;
  }
</style>