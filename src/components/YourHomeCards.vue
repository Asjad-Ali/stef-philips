<template>
  <div class="py-20 w-[60%] mx-auto">
    <div class="mx-auto max-w-5xl text-center">
      <ul
        role="list"
        class="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <li v-for="person in people" :key="person.name" class="bg-sky-50 ">
          <img class="h-40 w-full object-cover" :src="person.imageUrl" alt />
          <div class="py-4 px-6">
            <h3
              class="h-20 mt-0 text-[20px] font-black-custom leading-7 tracking-tight text-left text-trisec"
            >{{ person.name }}</h3>
            <p class="text-[18px] font-regular-custom leading-6 text-gray-700 text-left">{{ person.role }}</p>
            <div class="w-full h-full flex">
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
    name: "Report a repair or maintenance",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/ThreeCardFlexN.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Report Anti-social Behavior",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/ThreeCardFlexM.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Concil text or utilitie",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#"
  }
  // More people...
];
</script>