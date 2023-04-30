<template>
  <div
    v-for="person in props.message"
    :key="person.name"
    :class="[person.height, person.width, person.color]"
  >
    <img class="h-50 w-full object-cover" :src="person.imageUrl" alt />
    <div class="flex flex-col justify-between h-[288px]">
      <div class="py-4 px-6">
        <h3
          class="mt-0 lg:text-[20px] font-black-custom text-left text-[#20407C]"
        >
          {{ person.name }}
        </h3>
        <p
          class="text-[18px] font-regular-custom custom-text-color text-left mt-2"
        >
          {{ person.role }}
        </p>
      </div>
      <div class="text-left py-4 px-6" :class="person.buttonPadding">
        <button
          type="button"
          class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 lg:h-[50px] xxs:h-[30px] lg-w-[164px] xxs:w-[140px] text-[16px} text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {{ person.btnName }} <img :src="person.btnIcon" alt="" />
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="py-20 w-[70%] mx-auto">
    <div class="mx-auto  text-center">
      <ul
        role="list"
        class="mx-auto xxl:flex  grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 justify-items-center lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <li v-for="person in props.message" :key="person.name" class="bg-sky-50 ">
          <img class="h-40 w-full object-cover" :src="person.imageUrl" alt />
          <div class="py-4 px-6">
            <h3
              class="h-20 mt-0 text-[20px] font-black-custom leading-7 tracking-tight text-left text-trisec"
            >{{ person.name }}</h3>
            <p class="text-[18px] font-regular-custom leading-6 text-gray-700 text-left">{{ person.role }}</p>
            <div class="w-full lg:pt-20 xxxs:pt-10 flex">
              <button
                type="button"
                class="bg-[#2A8CFB] xxs:py-3 md:py-3 xxs:px-4 md:px-8 text-[16px] font-xbold-custom mt-8 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Report Now</button>
            </div> 
          </div>
        </li>
      </ul>
    </div>
  </div> -->
</template>

<script setup>
const props = defineProps(["message"]);
</script>
<style scoped>
.custom-text-color {
  color: #1d1d33 !important;
}
</style>
