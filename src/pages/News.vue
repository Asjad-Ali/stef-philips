<template>
    <div class="h-12 w-full bg-[#707070] bl ">
        <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-4 inner p-3 ">
          <router-link exact-active-class="exact-active" class="text-white font-semibold text-sm" to="/home">Home</router-link>
          <i class="pi pi-angle-right text-white"></i>
            <router-link active-class="active" class="text-white font-semibold text-sm dropbtn" to="/about-us">About us</router-link>
            <i class="pi pi-angle-right text-white"></i>
            <router-link active-class="active" class="text-white font-semibold text-sm" to="/news">News</router-link>
        </nav>
      </div> 

    <!-- -->

      <div class="w-full mx-auto py-20">
        <div class="w-[60%] mx-auto">
            <h2 class="text-4xl text-[#20407C]">News</h2>
        <h1 class="pt-4 text-2xl text-[#1D1D33]">
            Short introductory summary for the page goes here like so
        </h1>
       <div class="flex flex-row flex-wrap justify-between items-start py-20 gap-8">
        <div class="flex flex-col flex-wrap items-start gap-4">
         <div class="flex gap-2"> 
            <button
            type="button"
            class="bg-[#2A8CFB] hover:bg-[#71aff5] py-3 px-7 border-2 border-[#22427A] rounded-full text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Show all</button>
          <button
            type="button"
            class="bg-[#E1EFFE] hover:bg-[#b7daff] py-3 px-7 border-2 border-[#22427A] rounded-full text-sm font-semibold text-[#1D1D33] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Tag here</button>
        </div>
          <div class="flex gap-2">
            <button
            type="button"
            class="bg-[#E1EFFE] hover:bg-[#b7daff] py-3 px-8 border-2 border-[#22427A] rounded-full text-sm font-semibold text-[#1D1D33] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Tag roll</button>
          <button 
            type="button"
            class="bg-[#E1EFFE] hover:bg-[#b7daff] py-3 px-8 border-2 border-[#22427A] rounded-full text-sm font-semibold text-[#1D1D33] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Tag live</button>
          </div>
          <button
            type="button"
            class="bg-[#E1EFFE] hover:bg-[#b7daff] py-3 px-8 border-2 border-[#22427A] rounded-full text-sm font-semibold text-[#1D1D33] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
          >Tag here</button>
    
        </div>
       <div class="flex flex-col gap-8">
        <div class="flex flex-wrap gap-5">
            <div>
                <img class="pb-6" src="../assets/Card-Image.png">
                <button
                type="button"
                class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-sm font-semibold text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
                >Category</button>
                <h2 class="pt-6 font-semibold text-2xl text-[#2A8CFB]">Media title here</h2>
                <h1 class="pt-3 text-lg text-[#1D1D33]">
                Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
                </h1>
            </div>
            <div>
                <img class="pb-6" src="../assets/Card-Image.png">
                <button
                type="button"
                class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-sm font-semibold text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
                >Category</button>
                <h2 class="pt-6 font-semibold text-2xl text-[#2A8CFB]">Media title here</h2>
                <h1 class="pt-3 text-lg text-[#1D1D33]">
                Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
                </h1>
            </div>
        </div>
        <div class="flex flex-wrap gap-5">
            <div>
                <img class="pb-6" src="../assets/Card-Image.png">
                <button
                type="button"
                class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-sm font-semibold text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
                >Category</button>
                <h2 class="pt-6 font-semibold text-2xl text-[#2A8CFB]">Media title here</h2>
                <h1 class="pt-3 text-lg text-[#1D1D33]">
                Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
                </h1>
            </div>
            <div>
                <img class="pb-6" src="../assets/Card-Image.png">
                <button
                type="button"
                class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-sm font-semibold text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
                >Category</button>
                <h2 class="pt-6 font-semibold text-2xl text-[#2A8CFB]">Media title here</h2>
                <h1 class="pt-3 text-lg text-[#1D1D33]">
                Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
                </h1>
            </div>
        </div>
        <div class="flex flex-wrap gap-5">
            <div>
                <img class="pb-6" src="../assets/Card-Image.png">
                <button
                type="button"
                class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-sm font-semibold text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
                >Category</button>
                <h2 class="pt-6 font-semibold text-2xl text-[#2A8CFB]">Media title here</h2>
                <h1 class="pt-3 text-lg text-[#1D1D33]">
                Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
                </h1>
            </div>
            <div>
                <img class="pb-6" src="../assets/Card-Image.png">
                <button
                type="button"
                class="bg-[#ebe4f9] hover:bg-[#DDD1FA] py-3 px-6 text-sm font-semibold text-[#886BFF] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
                >Category</button>
                <h2 class="pt-6 font-semibold text-2xl text-[#2A8CFB]">Media title here</h2>
                <h1 class="pt-3 text-lg text-[#1D1D33]">
                Description goes in here like so lorem<br>ipsum dolor sit amet, consecte tur<br> adipiscing elit.
                </h1>
            </div>
        </div>
        <div class="pt-10">
            <button
        type="button"
        class="bg-[#20407C] hover:bg-[#4172ce] py-4 border-1 border-[#151927] px-10 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDD1FA]"
        >Show more</button>
        </div>
       </div>
       </div>
        </div>
    </div>
</template>
<script></script>
<style></style>