<template>
  <div
    v-for="person in props.message"
    :key="person.name"
    :class="[person.height, person.width, person.color]"
  >
    <img class="h-50 w-full object-cover" :src="person.imageUrl" alt />
    <div class="flex flex-col justify-between h-[200px]">
      <div class="py-4 px-6">
        <h3
          class="mt-0 lg:text-[20px] font-black-custom text-left text-[#20407C]"
        >
          {{ person.name }}
        </h3>
        <p
          class="text-[18px] font-regular-custom text-custom-color text-left mt-2"
        >
          {{ person.role }}
        </p>
      </div>
      <div class="text-left py-4 px-6" :class="person.buttonPadding">
        <button
          type="button"
          class="bg-[#2A8CFB] flex justify-center align-center items-center gap-2 lg:h-[50px] xxs:h-[30px] lg-w-[164px] xxs:w-[140px] text-[16px} text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {{ person.btnName }} <img :src="person.btnIcon" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["message"]);
</script>
<style scoped>
.text-custom-color {
  color: #1d1d33 !important;
}
</style>
