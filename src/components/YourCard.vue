<template>
  <div class="py-20 w-[70%] mx-auto">
    <div class="mx-auto  text-center  h-full">
      <ul
        role="list"
        class="mx-auto grid l grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none justify-items-center lg:gap-8"
      >
        <li v-for="person in people" :key="person.name" class="bg-white ">
          <img class=" w-full object-cover" :src="person.imageUrl" alt />
          <div class="py-4 px-6">
            <h3
              class=" mt-0 text-[20px] font-black-custom leading-7 tracking-tight text-left text-trisec"
            >{{ person.name }}</h3>
            <p class="pt-3 text-[18px] font-regular-custom leading-6 text-[#20407C] text-left">{{ person.role }}</p>
            <div class="w-full pt-6 flex">
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
const people = [
  {
    name: "Temporary accommodation",
    role: "Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:
      new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
  
  },
  {
    name: "Private rented sector",
    role: "Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:
       new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
   
  },
  // More people...
];
</script>