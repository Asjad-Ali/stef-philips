<template>
  <div v-if="Banner" class="hero-banner">
    <div class="bannerBg">
      <img :src="Banner?.image_c1?.data?.attributes.url" alt="banner" />
    </div>
    <div class="container h-[600px] mx-auto flex items-center banner-content">
      <div class="grid md:grid-cols-2"> 
        <div class="contentImg">
          <div class="groupImg md:px-14 px-5">
            <h1 class="font-light-custom text-[40px] leading-none text-white content">
              <div class="font-light-custom text-[42px]">
                <strong class="font-black-custom">{{ Banner.title_c1 ? Banner.title_c1 : Banner.title }}</strong>
              </div>
            </h1>
            <p class="text-white mt-4 font-regular-custom text-[18px] content2"> {{ Banner.desc_c1 }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const apiUrl = import.meta.env.VITE_APP_API_URL;
const props = defineProps(['Banner'])

</script>

