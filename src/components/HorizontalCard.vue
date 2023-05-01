<template>
  <div
    class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] mx-auto py-14 flex flex-col justify-center"
  >
    <div class="w-full flex justify-end flex-row-reverse">
      <div class="py-20">
        <div
          class="grid lg:grid-cols-2 xxxs:grid-cols-1 gap-12 min-h-[441px]"
          :dir="props.message.direction"
          :class="props.message.bgclass"
        >
          <div
            class="p-8 flex flex-col justify-center"
            :class="props.message.flex"
          >
            <h1
              class="mt-12 text-trisec leading-[50px] font-semibold text-left"
              v-if="props.message.header"
            >
              <span
                class="font-light-custom lg:text-[24px] xxxs:text-[18px] sm:text-[20px]"
                >{{ props.message.header }}</span
              >
              <br v-if="props.message.b == true" />
              <span
                class="font-black-custom lg:text-[24px] xxxs:text-[18px] sm:text-[20px]"
                >{{ props.message.boldheader }}</span
              >
            </h1>
            <p class="mt-6 font-regular-custom text-[18px] text-left">
              {{ props.message.paragraph }}<br />{{ props.message.paragraph2 }}
            </p>
            <!-- v-if="props.message.btn" -->
            <!-- <p>fareeeeeeeeeeed{{ props.message }}</p> -->
            <button
              class="float-left w-[180px] h-[50px] p-2 my-6 bg-[#2a8cfb] text-white text-[16px] font-[400] flex justify-evenly items-center flex-row-reverse"
              v-for="items in props.message.btn"
              :key="items.name"
            >
              <i
                v-if="props.message.buttonIcon == true"
                class="pi pi-arrow-up-right font-bold text-[dark-grey]"
              ></i>

              <img :src="props.message.btnimg" alt="" />
              {{ items }}
            </button>
          </div>
          <div class="flex justify-end">
            <img class="w-full h-full object-cover" :src="props.message.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["message"]);
</script>
