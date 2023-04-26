<template>
     <div class="w-full flex justify-center">
    <HorizontalCardVue :message="card"/>
  </div>
   <!-- image -->
  <div class="happyG w-full min-h-[700px] relative overflow-hidden pt-32 lg:mt-36">
    <div
      class="absolute top-0 w-full h-full flex items-center flex-wrap justify-center left-0 happyS"
    >
      <div class="w-full flex justify-center py-10">
        <div class="lg:w-[70%]">
            <div class=" font-regular-custom text-[18px] gap-5">
              <p class="text-[36px]  font-light-custom text-white">Overview of what their job<br>
              entails, perhaps with some <br>key info</p>
              <div class="mt-4 text-[18px] font-Regular text-white ">
               We construct and manage fit-for-purpose propertie
               s in<br> areas of high demand, providing tangible 
               solutions to the<br>current housing crisis and giving
                vulnerable people a lifeline<br> and an opportunity 
                to get back on their feet.
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- image -->

  <!-- House Icon div -->
    <div class="flex justify-center py-48">
      <div class="w-[70%]">
        <h1 class="text-[#20407C] font-light-custom text-[36px]">Reason they may  need to <span class="font-black-custom">enter your home</span></h1>
        <div class="grid md:grid-cols-3 gap-12 grid-cols-1 sm:grid-cols-2 mt-10">
          <div class>
            <!-- <img src="../assets/Svg/pinkHouseM.svg" alt /> -->
            <h1 class="py-4 text-[#20407C] font-black-custom text-[20px]">Icon feature</h1>
            <p
              class="text-[#1D1D33] font-regular-custom text-[18px]"
            >Description goes in here like so<br>
            lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.</p>
          </div>
          <div class>
            <img src="../assets/Svg/PinkHouseN.svg" alt />
            <h1 class="py-4 text-[#20407C] font-black-custom text-[20px]">Icon feature</h1>
             <p
              class="text-[#1D1D33] font-regular-custom text-[18px]"
            >Description goes in here like so<br>
            lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.</p>
         
          </div>
          <div class>
            <!-- <img src="../assets/Svg/PinkHouseM.svg" alt /> -->
            <h1 class="py-4 text-[#20407C] font-black-custom text-[20px]">Icon feature</h1>
             <p
              class="text-[#1D1D33] font-regular-custom text-[18px]"
            >Description goes in here like so<br>
            lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.</p>
         
          </div>
        </div>
      </div>
    </div>
  <!-- House Icon div -->

  <!-- vedio -->
    <div class="mx-auto mb-10">
      <div class=" flex justify-center items-center ">
         <div class="flex items-center justify-center ">
          <img src=""  alt="video">
         </div>
       </div>
      </div>
  <!-- vedio -->

  <div class="bg-[#1D1D33] py-28 min-h-[400px]">
    <div class=" mx-auto w-[70%]">
      <p class="text-white lg:text-[35px]  xxxs:text-[20px] font-light-custom">
       Others who may need to enter your home from time to time 
      </p>
    </div>
    <YourCard :message="people2" />
  </div>

</template>





<script setup>
import HorizontalCardVue from "../components/HorizontalCard.vue"
import YourCard from "../components/YourCard.vue"

    const card= { header:'The role of a',boldheader:'Field Worker', 
    img:new URL('../assets/Svg/RectangularFlex.svg', import.meta.url).href,
    paragraph:`Find out how to report a repair, how long it will`,
    paragraph2:"take and whether its your resposibility or ours"}


const people2 = [
  {
    name: "Housing officer",
    role: "Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:
      new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    btn:"Find out more",
    
  
  },
  {
    name: "Maintenance worker",
    role: "Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:
       new URL("../assets/Svg/RectangularFlex.svg", import.meta.url).href,
    btn:"Find out more",
   
  },
  // More people...
];


</script>



<style scoped>
.happyG {
  background-image: url("../assets/Svg/LeftUpBg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}


</style>