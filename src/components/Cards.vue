<template>


  <div v-for="Card in props.Cards" :key="Card"  :class="[person.height, person.width, person.color]" class="bg-[#F0F7FE]">
    <div class="card-img h-[170px]">
      <img class="h-full w-full object-cover" :src="Card.attributes.image.data.attributes.url" alt />
    </div>
    <div class="flex flex-col justify-between min-h-[288px] p-[30px]">
      <div class="pb-[30px]">
        <h3 class=" mt-0 text-[18px] font-black-custom text-left text-[#20407C]" >{{ Card.attributes.title }}</h3>
        <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">{{ Card.attributes.description }}</p>
      </div>
      <div class="text-left" :class="person.buttonPadding">
        <button type="button" class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] text-[16px} text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
          <router-link :to="person.button_url">{{person.btnName}}</router-link>
          <img :src="person.btnIcon" alt=""> 
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="py-20 w-[70%]  h-[440px] mt-[3rem] mb-[12rem]">
      <div class="md:grid-cols-2 grid-cols-2">
        <div class="" > </div>
        <div class="w-[145%] flex items-center justify-center ">
          <div role="list" class="mx-auto flex lg:flex-nowrap flex-wrap gap-8">
        <div v-for="person in props.message" :key="person.name" class="h-auto w-[334px] bg-sky-50 ml-2">
          <img class="h-40 w-full object-cover" :src="person.imageUrl" alt />
          <div class="flex flex-col justify-between h-auto">
            <div class="py-4 px-6 ">
              <h3 class=" mt-0 text-[20px] font-black-custom text-left text-[#20407C]">{{ person.name }}</h3>
              <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">{{ person.role }}</p>
            </div>
            <div class="text-left py-4 px-6 mt-[5rem] mb-5">
              <button type="button" class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-xbold-custom text-[16px] text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                <router-link :to="person.button_url">{{person.btnName}}</router-link>
                <img :src="person.btnIcon" alt="">
              </button>
            </div>
          </div>
        </div>   
      </div>
        </div>
      </div>
    </div> -->
    
    <!-- <div class="pb-10 pt-20 w-[70%] mx-auto">
    <div class=" text-center">
      <div role="list" class="mx-auto flex lg:flex-nowrap flex-wrap md:gap-8 xl:gap-[20rem]">
        <div v-for="person in props.message" :key="person.name" class="h-auto w-[334px] bg-sky-50 ml-2">
          <img class="h-40 w-full object-cover" :src="person.imageUrl" alt />
          <div class="flex flex-col justify-between h-auto">
            <div class="py-4 px-6 ">
              <h3 class=" mt-0 text-[20px] font-black-custom text-left text-[#20407C]">{{ person.name }}</h3>
              <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">{{ person.role }}</p>
            </div>
            <div class="text-left py-4 px-6 mt-[5rem] mb-5">
              <button type="button" class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 h-[50px] w-[164px] font-xbold-custom text-[16px] text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                <router-link :to="person.button_url">{{person.btnName}}</router-link>
                <img :src="person.btnIcon" alt="">
              </button>
            </div>
          </div>
        </div>   
      </div>
    </div>
  </div> -->
</template>

<script setup>
const props = defineProps(["Cards"]);
const person = {
    name: "Our projects",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/projects.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnIcon: "",
    button_url: "",
    btnName: "Find out more",
  }
</script>