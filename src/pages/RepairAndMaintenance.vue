<template>
  <div
    class="h-[40px] w-full breadCrum-bg bl flex justify-center nav-bar-tranparent"
  >
    <nav
      class="lg:w-[70%] xxxs:w-[80%] sm:w-[93%] h-full mx-auto flex items-center justify-start gap-3 inner lg:pl-[15px]"
    >
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[grey]"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="your-home">Your Home</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[grey]"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="repairs-and-maintenance"
          >Repairs & maintenance</router-link
        >
      </div>
    </nav>
  </div>
  <!-- -->
  <div class="w-full leading-snug lg:mt-[10rem] sm:mt-[8rem] xxs:mt-[5rem]">
    <div class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] min-h-[100px] mx-auto">
      <h1
        class="lg:text-[42px] xxs:text-[20px] text-[#20407c] font-black-custom mt-16"
      >
        Repairs & maintenance
      </h1>
      <p
        class="pt-4 lg:text-[18px] xxs:text-[16px] font-custom-color font-regular-custom font-custom-color"
      >
        Need to report a repair or maintenance issue? Simply click on the
        relevant picture below <br />
        and complete the form underneath – it’s the fastest way to get things
        fixed.
      </p>
    </div>
  </div>

  <!-- -->

  <div class="w-full mx-auto flex justify-center">
    <div class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] flex flex-col">
      <div class="flex">
        <h1
          class="font-black-custom lg:text-[30px] xxs:text-[20px] mt-12 text-[#20407C]"
        >
          Please click on the relevant picture
        </h1>
      </div>
      <div class="pt-2">
        <span class="p-input-icon-right">
          <InputText
            class="p-inputtext lg:text-[18px] xxs:text-[14px]"
            v-model="value1"
            placeholder="What is the issue?"
          />
          <i class="pi pi-search custom-search" />
        </span>
      </div>
      <div class="flex justify-start gap-5 flex-wrap py-10">
        <div
          class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8"
        >
          <ContactCard :message="message" />
        </div>
      </div>
    </div>
  </div>

  <!-- -->
  <MoreInfo />

  <!-- -->
  <YourDetails />

  <!-- -->
  <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
    <div class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%]">
      <h1
        class="lg:text-[30px] xxs:text-[20px] text-[#20407c] font-black-custom pb-10"
      >
        Other ways to report
      </h1>
      <!-- :activeIndex="2" for active accordion -->
      <Accordion>
        <AccordionTab
          header="Call us"
          class="font-black-custom text-[18px] text-[#20407c]"
          color="white"
        >
          <p class="text-[18px] font-regular-custom font-custom-color">
            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur
            ultrices condimentum enim, id fringilla libero rutrum vel. Sed
            efficitur risus eu imperdiet auctor. Mauris non dapibus odio.
            Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
          </p>
        </AccordionTab>
        <AccordionTab
          header="Emergency out of hours repairs"
          class="font-black-custom text-[18px] text-[#20407c]"
        >
          <p class="text-[18px] font-regular-custom font-custom-color">
            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur
            ultrices condimentum enim, id fringilla libero rutrum vel. Sed
            efficitur risus eu imperdiet auctor. Mauris non dapibus odio.
            Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
          </p>
        </AccordionTab>
        <AccordionTab
          header="Repair responsibilities"
          class="font-black-custom text-[18px] text-[#20407c]"
        >
          <p class="text-[18px] font-regular-custom font-custom-color">
            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur
            ultrices condimentum enim, id fringilla libero rutrum vel. Sed
            efficitur risus eu imperdiet auctor. Mauris non dapibus odio.
            Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
          </p>
          <p class="text-[18px] font-black-custom text-[#2a8cfb] py-8">
            Link call to action
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>
<script setup>
import ContactCard from "../components/ContactCard.vue";
import MoreInfo from "../components/MoreInfo.vue";
import YourDetails from "../components/YourDetails.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import InputText from "primevue/inputtext";
import { ref } from "vue";
const value1 = ref(null);
const message = [
  {
    text: "Bathroom and toilet",
    img: new URL("../assets/Svg/ToiletIcon.svg", import.meta.url).href,
  },
  {
    text: "Kitchen",
    img: new URL("../assets/Svg/KitchenIcon.svg", import.meta.url).href,
  },
  {
    text: "Heating and boiler",
    img: new URL("../assets/Svg/HeatingIcon.svg", import.meta.url).href,
  },
  {
    text: "Water and leaks",
    img: new URL("../assets/Svg/WaterIcon.svg", import.meta.url).href,
  },
  {
    text: "Doors, garages and locks",
    img: new URL("../assets/Svg/DoorsIcon.svg", import.meta.url).href,
  },
  {
    text: "Internal floors, walls and ceilings",
    img: new URL("../assets/Svg/InternalFloorIcon.svg", import.meta.url).href,
  },
  {
    text: "Lighting",
    img: new URL("../assets/Svg/LightingIcon.svg", import.meta.url).href,
  },
  {
    text: "Window",
    img: new URL("../assets/Svg/WindowIcon.svg", import.meta.url).href,
  },
  {
    text: "Exterior and garden",
    img: new URL("../assets/Svg/ExteriorIcon.svg", import.meta.url).href,
  },
  {
    text: "Furniture",
    img: new URL("../assets/Svg/SofaIcon.svg", import.meta.url).href,
  },
  {
    text: "Communal / shared facilities",
    img: new URL("../assets/Svg/ComunelIcon.svg", import.meta.url).href,
  },
  {
    text: "Other",
    img: new URL("../assets/Svg/OtherIcon.svg", import.meta.url).href,
  },
];
</script>
<style>
.p-accordion .p-accordion-content {
  padding-left: 2rem !important;
}
.custom-search {
  color: #2a3441 !important;
}
.font-custom-color {
  color: #1d1d33 !important;
}

.breadCrum-bg {
  background-color: #1d1d33 !important;
}
.nav-bar-tranparent {
  position: absolute;
  opacity: 1.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.p-inputtext {
  background-color: #f0f7fe;
  border: 2px;
  border-color: rgba(34, 66, 122, 0.8);
  border-radius: 25px;
  padding-left: 10px;
}
.p-inputtext::placeholder {
  font-size: 18px;
  font-weight: normal;
  /* line-height: 26px; */
  /* font-style: normal; */
  /* text-align: left; */
  color: rgb(185, 176, 176) !important;
  /* color: red !important; */
}
.pi::before {
  padding-right: 8px;
}
.p-accordion-header-text {
  color: #20407c;
  font-size: 18px;
  font-weight: 900;
}
.p-accordion-toggle-icon {
  position: absolute;
  right: 0%;
  padding: 2px;
  color: #20407c;
}
.p-accordion-header-link {
  background-color: white;
}
.p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link {
  margin-top: 8px;
}
@media (min-width: 1200px) {
  .lg\:w-\[70\%\] {
    max-width: 1140px;
  }
}
@media (max-width: 500px) {
  .emergency {
    font-size: 26px;
  }
  .number {
    font-size: 18px;
  }
  .btn {
    font-size: 12px;
  }
}
</style>
