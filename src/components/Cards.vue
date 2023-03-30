<template>
  <div class="py-20 w-[70%] mx-auto">
    <div class=" text-center">
      <div
        role="list"
        class="mx-auto   flex gap-4"
      >
        <div v-for="person in people" :key="person.name" class="h-[460px] w-[304px] bg-sky-50 ">
          <img class="h-40 w-full object-cover" :src="person.imageUrl" alt />
       <div class="flex flex-col justify-between h-[288px]">
          <div class="py-4 px-6 ">
            <h3
              class=" mt-0 text-[20px] font-black-custom text-left text-trisec"
            >{{ person.name }}</h3>
            <p class="text-[18px] font-regular-custom  text-[#1D1D33] text-left mt-2">{{ person.role }}</p>
           
          </div>
          <div class=" text-left py-4 px-6">
              <button
                type="button"
                class="bg-[#2A8CFB] h-[50px] w-[164px]   font-xbold-custom text-[16px]  text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >{{person.btnName}}</button>
        </div>
      </div>
        </div>
   
      </div>
    </div>
  </div>
</template>

<script setup>
  const people = [
  {
    name: "Help in your home",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/ThreeCardFlexN.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more"
  },
  {
    name: "Quick report form",
    role: "Use our quick online form. The quickest way to report an issue and get it fixed.",
    imageUrl:
    new URL("../assets/Svg/ThreeCardFlexM.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report an issue"

  },
  {
    name: "Report repair or maintainance",
    role: "Short description excerpt here",
    imageUrl:
    new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName:"Report now"
  }
  // More people...
];
</script>