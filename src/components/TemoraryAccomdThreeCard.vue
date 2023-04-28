<template>
  <div
    v-for="person in props.message"
    :key="person.name"
    :class="[person.height, person.width, person.color]"
  >
    <img
      class="xxxs:w-[70px] sm:w-[90px] lg:w-[100px] h-auto py-4 px-6 mt-6"
      :src="person.imageUrl"
      alt
    />
    <div class="flex flex-col justify-between">
      <div class="py-4 px-6">
        <h3
          class="mt-0 lg:text-[18px] font-black-custom text-left text-[#20407C]"
        >
          {{ person.name }}
        </h3>
        <p
          class="text-[18px] font-regular-custom text-[#20407C] text-left mt-2"
        >
          {{ person.role }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["message"]);
</script>
