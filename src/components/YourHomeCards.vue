<template>
  <div
    v-for="person in props.data"
    :key="person"
    :class="[card.height, card.width, card.color]"
  >
    <img class="h-50 w-full object-cover" :src="person.attributes.image.data?.attributes.url" alt />
    <div class="flex flex-col justify-between h-[288px]">
      <div class="py-4 px-6">
        <h3
          class="mt-0 lg:text-[20px] font-black-custom text-left text-[#20407C]"
        >
        {{ person.attributes.title }}
        </h3>
        <p
          class="text-[18px] font-regular-custom custom-text-color text-left mt-2"
        >
        {{ person.attributes.description }}
        </p>
      </div>
      <div class="text-left py-4 px-6" :class="card.buttonPadding">
        <button
          type="button"
          class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 lg:h-[50px] xxs:h-[30px] lg-w-[164px] xxs:w-[140px] text-[16px} text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {{ card.btnName }} <img :src="card.btnIcon" alt="" />
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
        <li v-for="card in props.message" :key="card.name" class="bg-sky-50 ">
          <img class="h-40 w-full object-cover" :src="card.imageUrl" alt />
          <div class="py-4 px-6">
            <h3
              class="h-20 mt-0 text-[20px] font-black-custom leading-7 tracking-tight text-left text-trisec"
            >{{ card.name }}</h3>
            <p class="text-[18px] font-regular-custom leading-6 text-gray-700 text-left">{{ card.role }}</p>
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
const props = defineProps(["data"]);
const card = {
    name: "National helplines",
    role: "Short description excerpt here",
    imageUrl: new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-sky-50",
    buttonPadding: "pb-[2rem]",
  }
</script>
<style scoped>
.custom-text-color {
  color: #1d1d33 !important;
}
</style>
