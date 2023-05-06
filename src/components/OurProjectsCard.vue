<template> 
    <div v-for="person in props.message" :key="person.name" class="bg-sky-50" :class="[person.height, person.width]" >
      <div class="projectImage h-[212px]">
        <img class="w-full h-full" :src="person.imageUrl" alt />
      </div>
      <div class="flex flex-col justify-between p-[30px]">
        <div class="mb-[60px]">
          <h3 class=" mt-0 text-[20px] font-black-custom text-left text-[#20407C]">{{ person.name }}</h3>
          <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">{{ person.role }}</p>
        </div>
        <div class="text-left">
          <button v-if="person.btnName"
            class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-regular-custom text-[16px} text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          > <img :src="person.btnIcon" alt=""> {{person.btnName}} </button>
        </div>
      </div>
    </div> 
</template>

<script setup>
 const props = defineProps(["message"]);
</script>