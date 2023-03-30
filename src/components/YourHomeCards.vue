<template>
  <div class="py-20 w-[70%] mx-auto">
    <div class="mx-auto  text-center">
      <ul
        role="list"
        class="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 justify-items-center lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <li v-for="person in props.message" :key="person.name" class="bg-sky-50 ">
          <img class=" w-full object-cover" :src="person.imageUrl" alt />
          <div class="py-4 px-6">
            <h3
              class="py-5 mt-0 text-[20px] font-black-custom leading-7 tracking-tight text-left text-trisec"
            >{{ person.name }}</h3>
            <p class="text-[18px] font-regular-custom leading-6 text-gray-700 text-left">{{ person.role }}</p>
            <div class="w-full  lg:pt-20 flex">
              <button
                type="button"
                class="bg-[#2A8CFB] xxs:py-3 md:py-3 xxs:px-4 md:px-8 text-[16px] font-xbold-custom mt-8 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Report Now</button>
            </div> 
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["message"]);
</script>
