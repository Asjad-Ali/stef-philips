<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent">
        <nav class="w-[70%] mx-auto flex items-center justify-start gap-3 inner  ">
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="home">Home</router-link>
          </div>
          <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="about-us">About us</router-link>
          </div>
          <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="news">News</router-link> 
          </div>
        </nav>
      </div> 

    <!-- -->

      <div class="w-full mx-auto py-20">
        <div class="w-[70%] mx-auto">
            <h2 class="font-light-custom text-[42px] text-[#20407C]">News</h2>
        <h1 class="pt-4 font-regular-custom text-[18px] text-[#1D1D33]">
            Short introductory summary for the page goes here like so
        </h1>
       <div class="flex flex-row flex-wrap justify-between items-start py-20 gap-8">
        <div class="flex flex-col flex-wrap items-start gap-4">
         <div class="flex gap-2"> 
            <button
            type="button"
            class="bg-[#2A8CFB] hover:bg-[#71aff5] xxs:py-3 md:py-4 xxs:px-4 md:px-8 border-2 border-[#22427A] rounded-full lg:text-[14px] xxs:text-[12px] font-xbold-custom text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Show all</button>
          <button
            type="button"
            class="bg-[#E1EFFE] hover:bg-[#b7daff] xxs:py-3 md:py-4 xxs:px-4 md:px-8 border-2 border-[#22427A] rounded-full lg:text-[14px] xxs:text-[12px] font-xbold-custom text-[#1D1D33] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Tag here</button>
        </div>
          <div class="flex gap-2">
            <button
            type="button"
            class="bg-[#E1EFFE] hover:bg-[#b7daff] xxs:py-3 md:py-4 xxs:px-5 md:px-9 border-2 border-[#22427A] rounded-full lg:text-[14px] xxs:text-[12px] font-xbold-custom text-[#1D1D33] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Tag roll</button>
          <button 
            type="button"
            class="bg-[#E1EFFE] hover:bg-[#b7daff] xxs:py-3 md:py-4 xxs:px-5 md:px-9 border-2 border-[#22427A] rounded-full lg:text-[14px] xxs:text-[12px] font-xbold-custom text-[#1D1D33] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Tag live</button>
          </div>
          <button
            type="button"
            class="bg-[#E1EFFE] hover:bg-[#b7daff] xxs:py-3 md:py-4 xxs:px-4 md:px-8 border-2 border-[#22427A] rounded-full tlg:text-[14px] xxs:text-[12px] font-xbold-custom text-[#1D1D33] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Tag here</button>
    
        </div>
       <div class="flex flex-col gap-8">
        <div class="flex flex-wrap gap-5">
            <div>
                <img class="pb-6" src="../assets/Card-Image.png">
                <button
                type="button"
                class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-[12px] font-black-custom text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
                >Category</button>
                <h2 class="pt-6 text-[24px] font-black-custom text-[#2A8CFB]">Media title here</h2>
                <h1 class="pt-3 text-[18px] font-regular-custom text-[#1D1D33]">
                Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
                </h1>
            </div>
            <div>
              <img class="pb-6" src="../assets/Card-Image.png">
              <button
              type="button"
              class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-[12px] font-black-custom text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
              >Category</button>
              <h2 class="pt-6 text-[24px] font-black-custom text-[#2A8CFB]">Media title here</h2>
              <h1 class="pt-3 text-[18px] font-regular-custom text-[#1D1D33]">
              Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
              </h1>
          </div>
        </div>
        <div class="flex flex-wrap gap-5">
          <div>
            <img class="pb-6" src="../assets/Card-Image.png">
            <button
            type="button"
            class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-[12px] font-black-custom text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
            >Category</button>
            <h2 class="pt-6 text-[24px] font-black-custom text-[#2A8CFB]">Media title here</h2>
            <h1 class="pt-3 text-[18px] font-regular-custom text-[#1D1D33]">
            Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
            </h1>
        </div>
        <div>
          <img class="pb-6" src="../assets/Card-Image.png">
          <button
          type="button"
          class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-[12px] font-black-custom text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Category</button>
          <h2 class="pt-6 text-[24px] font-black-custom text-[#2A8CFB]">Media title here</h2>
          <h1 class="pt-3 text-[18px] font-regular-custom text-[#1D1D33]">
          Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
          </h1>
      </div>
        </div>
        <div class="flex flex-wrap gap-5">
          <div>
            <img class="pb-6" src="../assets/Card-Image.png">
            <button
            type="button"
            class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-[12px] font-black-custom text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
            >Category</button>
            <h2 class="pt-6 text-[24px] font-black-custom text-[#2A8CFB]">Media title here</h2>
            <h1 class="pt-3 text-[18px] font-regular-custom text-[#1D1D33]">
            Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
            </h1>
        </div>
        <div>
          <img class="pb-6" src="../assets/Card-Image.png">
          <button
          type="button"
          class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-[12px] font-black-custom text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Category</button>
          <h2 class="pt-6 text-[24px] font-black-custom text-[#2A8CFB]">Media title here</h2>
          <h1 class="pt-3 text-[18px] font-regular-custom text-[#1D1D33]">
          Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
          </h1>
      </div>
        </div>
        <div class="pt-10">
            <button
        type="button"
        class="bg-[#20407C] hover:bg-[#4172ce] py-4 border-1 border-[#151927] px-10 font-xbold-custom lg:text-[16px] xxs:text-[12px] text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
        >Show more</button>
        </div>
       </div>
       </div>
        </div>
    </div>
</template>
<script></script>
<style>

.nav-bar-tranparent{
  position: absolute;
  opacity: 0.50;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}

</style>