<template>
  <div class="pt-11 pb-24 lg:w-[70%] xxxs:w-[90%] sm:w-[93%] mx-auto">
    <h1
      class="lg:text-[30px] xxxs:text-[25px] text-[#20407c] font-black-custom mb-5"
    >
      Your details
    </h1>
    <div class="w-full">
      <div class="pt-5">
        <div>
          <label
            for="username"
            class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom"
            >Your full name
            <sup
              style="
                color: red;
                position: inherit;
                margin-left: 3px;
                font-size: 18px;
              "
              >*</sup
            ></label
          >
        </div>
        <InputText
          type="text"
          v-model="value"
          class="my-4 w-full max-w-[632px] min-h-[50px]"
        />
      </div>
      <div class="pt-1">
        <div>
          <label
            for="username"
            class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom"
            >Property address line 1<sup
              style="
                color: red;
                position: inherit;
                margin-left: 3px;
                font-size: 18px;
              "
              >*</sup
            ></label
          >
        </div>
        <InputText
          type="text"
          v-model="value"
          class="my-4 w-full max-w-[632px] min-h-[50px]"
        />
      </div>
      <div class="pt-1">
        <div>
          <label
            for="username"
            class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom"
            >Property address line 2
            <sup
              style="
                color: red;
                position: inherit;
                margin-left: 3px;
                font-size: 18px;
              "
              >*</sup
            ></label
          >
        </div>
        <InputText
          type="text"
          v-model="value"
          class="my-4 w-full max-w-[632px] min-h-[50px]"
        />
      </div>
      <div class="flex py-1 gap-2 w-full">
        <div class="w-full max-w-[290px]" style="margin-right: 36px">
          <div>
            <label
              for="username"
              class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom"
              >Town / city
              <sup
                style="
                  color: red;
                  position: inherit;
                  margin-left: 3px;
                  font-size: 18px;
                "
                >*</sup
              ></label
            >
          </div>
          <InputText
            type="text"
            v-model="value"
            class="my-4 w-full min-h-[50px]"
          />
        </div>
        <div class="w-full max-w-[310px]">
          <div>
            <label
              for="username"
              class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom"
              >Postcode<sup
                style="
                  color: red;
                  position: inherit;
                  margin-left: 3px;
                  font-size: 18px;
                "
                >*</sup
              ></label
            >
          </div>
          <InputText
            type="text"
            v-model="value"
            class="my-4 w-full max-w-[320px] min-h-[50px]"
          />
        </div>
      </div>
      <div class="py-1">
        <div>
          <label
            for="username"
            class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom"
            >Email address<sup
              style="
                color: red;
                position: inherit;
                margin-left: 3px;
                font-size: 18px;
              "
              >*</sup
            ></label
          >
        </div>
        <InputText
          type="email"
          v-model="value"
          class="my-4 w-full max-w-[632px] min-h-[50px]"
        />
      </div>
      <div>
        <label
          class="text-[#20407C] lg:text-[18px] xxxs:text-[14px] font-black-custom"
          >Contact Number
          <sup
            style="
              color: red;
              position: inherit;
              margin-left: 3px;
              font-size: 18px;
            "
            >*</sup
          ></label
        >
      </div>
      <InputText
        type="number"
        v-model="value"
        class="my-4 w-full max-w-[632px] min-h-[50px]"
      />
    </div>
    <button
      class="w-full font-xbold-custom text-[16px] max-w-[632px] bg-[#2A8CFB] min-h-[50px] mt-7 rounded-xs text-white"
    >
      Submit
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.p-inputtext {
  border: 0.16rem solid #20407c;
}
</style>
