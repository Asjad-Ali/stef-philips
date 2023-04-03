<template>
  <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[70%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Your home</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Temporary accomodation</div>
    </nav>
  </div> 
  <div class="lg:w-full min-h-[600px] bg-red-400 bgImg">
    <div class="w-full h-[600px] flex justify-center items-center">
 <div class="mx-auto w-[70%] ">
        <h1 class="lg:text-[42px] xxxs:text-[28px] text-white font-light mt-16 ">Temporary or emergency<br>accommodation</h1>
        <p class="lg:text-[18px] text-white font-regular">Short introductory summary for the page <br> goes here like so</p>
    </div>
    </div>
</div>
  <!-- component --> 
  <HorizontalCardVue :message="card"/>
  <HorizontalCardVue :message="card2"/>
  <!-- component -->
  <!-- step-3 -->
  <div class="min-h-[400px] w-full bg-[#1d1d33] lg:py-28 xxxs:py-16">
    <div class="w-[70%]  mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Your</span> responsibility
      </p>

      <Accordion :message="message" />
    </div>
  </div>

  <!-- step-4 -->
  <div class="w-full min-h-[400px] bg-[#20407C] lg:py-28 xxxs:py-16">
    <div class="w-[70%]  mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Stef & Philips’</span>
        responsibility
      </p>
      <Accordion :message="nmessage" />
    </div>
  </div>

  <!-- step 5 -->
  <div class="min-h-[400px] w-full bg-[#1d1d33] lg:pt-28 xxxs:py-16">
    <div class="w-[70%]  mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Your local council’s</span>
        responsibility
      </p>
      <Accordion :message="omessage" />
    </div>
  </div>
  <!-- step 6 -->
  <div class="min-h-[600px] w-full">
    <div class=" mx-auto w-[70%]">
      <div class="w-full flex  justify-center">
        <div class="lg:py-20  xxxs:py-10">
          <div class="grid md:grid-cols-2  grid-cols-1 gap-12">
            <div class="font-black  lg:px-6 lg:py-40">
              <h1 class="text-[36px] text-trisec">
                <span class="font-light">During </span>your stay
              </h1>
              <p class="text-[18]  font-regular mt-4 leading-loose tracking-wide">
                Paragraph style fusce laoreet lorem id consequat rhoncus.
                Curabitur ultrices condimentum enim, id fringilla libero rutrum
                vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus
                odio. Quisque mauris nisi, cursus id dictum id, laoreet quis
                libero.
              </p>
               <div class="w-full">
                <button
                type="button"
                class="bg-[#2A8CFB] py-4 lg:px-11  xxxs:px-2 sm:px-1 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Report a repair</button>
               <button
                type="button"
                class="bg-[#20407C] ml-5 py-4 px-11 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Your team</button>
               </div>
            </div>
            <div class="lg:py-20 xxxs:py-10 px-6">
              <!-- svg image -->
             <img   src="../assets/Svg/ManHouseCard.svg" alt="">
              <!-- svg image -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- step 7 -->
   <div class="min-h-[400px] w-full bg-[#EDEDEE] lg:pt-28 xxxs:py-16">
    <div class="w-[70%] mx-auto flex flex-wrap items-center">
      <p class="text-[#20407C] lg:text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">During your stay FAQs</span>
      </p>
      <Accordion :message="pmessage" />
    </div>
  </div>
  <!-- step 8 -->
    <HorizontalCardVue :message="card3"/>
  
    
   <NeedHelp />
 
</template>





<script setup>
import Accordion from "../components/Accordion.vue";
import NeedHelp from '../components/NeedHelp.vue';


import HorizontalCardVue from '../components/HorizontalCard.vue';
const card2= {
  direction:'rtl',
   header:'Moving in or out of',
    boldheader:' temporary accommodation',
    
    img:new URL('../assets/Svg/LeftUpCard.svg', import.meta.url).href, paragraph:' Everyone deserves to have a safe place to call home. Yet, the UK’shousing crisis is getting worse: homelessness in England is forecast to continue to grow – and almost double – over the next 25 years.'}

// const card3={direction:'rtl', img:new URL('../assets/Background.png', import.meta.url).href, header:'Was your tenancy', boldheader:' cancelled ?', bgclass:'bg-[#f0f7fe]',btn:['Find my concil'], paragraph:'(Look at wording), we have a clear process of managing your belongings, anything to do with the tenancy contact the council.'}
const card3={direction:'rtl',img:new URL('../assets/Svg/CardImage4.svg', import.meta.url).href , header:'Was your tenancy', boldheader:' ? cancelled ', bgclass:'bg-[#f0f7fe]',btn:['Find my concil'], paragraph:'(Look at wording), we have a clear process of managing your belongings, anything to do with the tenancy contact the council.', btnimg:'src/assets/Svg/Path51.svg', b:true, flex:'items-end'}

const card= { 
header:'What is',
boldheader:' temporary / emergency accommodation', img:new URL('../assets/Svg/RightUpCard.svg', import.meta.url).href, 
paragraph:' Everyone deserves to have a safe place to call home. Yet, the UK’shousing crisis is getting worse: homelessness in England is forecast to continue to grow – and almost double – over the next 25 years.'}
const message = [
  {
    index: 0,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];
const nmessage = [
  {
    index: 0,
    header: "Your Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];

const omessage = [
  {
    index: 0,
    header: "Council responsibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];
const pmessage = [
  {
    index: 0,
    header: "Frequently asked question goes here?",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
   header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
   header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header:"Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];
</script>



<style scoped>
.bgImg {
  background-image: url("../assets/Svg/HeaderBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>