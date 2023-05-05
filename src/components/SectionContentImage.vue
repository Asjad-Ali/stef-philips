<template>
  <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[24px]">
    <!-- for content first use this last on img-section 'order-last' -->
    <div class="img-section" :class="{'order-last' : props.direction ==='image-last'}">
      <img src="../assets/housing-partner-1.png" alt=""/>
    </div>  
    <div class="content-section md:px-[40px]">
      <h1 class="px-8 font-light-custom text-[36px] text-trisec text-ellipsis leading-[40px]">
        Our full-service
        <span class="font-black-custom">end to end <br /> </span>
        offering overview
      </h1>
      <p class="text-[18px] font-regular-custom mt-4 px-8">
        Paragraph style fusce laoreet lorem id consequat rhoncus.
        Curabitur ultrices condimentum enim, id fringilla libero rutrum
        vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus
        odio. Quisque mauris nisi, cursus id dictum id, laoreet quis
        libero.
      </p>
      <button class="bg-[#2a8cfb] h-[50x] w-[205px] py-4 px-14 ml-8 text-[16px] mt-5 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
        Meet our team
      </button>
    </div>  
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
 const props = defineProps(["direction"]);

  onMounted(() => {
    // console.log(props)
  });
</script>