<template>
    <div class="h-12 w-full bg-[#707070] bl ">
        <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-4 inner p-3 ">
          <router-link exact-active-class="exact-active" class="text-white font-semibold text-sm" to="/home">Home</router-link>
          <i class="pi pi-angle-right text-white"></i>
          <router-link active-class="active" class="text-white font-semibold text-sm" to="/about-us">About us</router-link>
          <i class="pi pi-angle-right text-white"></i>
          <router-link active-class="active" class="text-white font-semibold text-sm" to="/news">News</router-link>
          <i class="pi pi-angle-right text-white"></i>
          <router-link active-class="active" class="text-white font-semibold text-sm" to="/news-article">News article</router-link>
        </nav>
      </div> 
</template>

<script setup>
</script>