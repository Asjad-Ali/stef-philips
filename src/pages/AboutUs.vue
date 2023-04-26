<template>
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav
      class="w-[70%] h-full mx-auto flex items-center justify-start gap-3 inner"
    >
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right text-white"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-semibold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="about-us">About us</router-link>
      </div>
    </nav>
  </div>

  <div class="w-full min-h-[600px] bgImg">
    <div class="w-[70%] h-[600px] mx-auto flex items-center">
      <div class="contentImg">
        <!-- <div class="w-full h-[600px] flex justify-center items-center"> -->
        <div class="max-w-sm groupImg">
          <h1
            class="font-light-custom text-[40px] leading-none text-white content px-14"
          >
            <div class="font-light-custom text-[42px]">
              Our <strong>story</strong>
            </div>
          </h1>
          <p
            class="text-white mt-4 font-regular-custom text-[18px] content2 px-14"
          >
            “We are really proud to have become a leading provider of safe,
            secure accommodation for those who need it the most.”
          </p>
          <p
            class="text-white mt-[1rem] font-regular-custom text-[18px] content2 px-14"
          >
            <strong>- Philip Philippou, Chairman</strong>
          </p>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>

  <!-- Step 2 -->
  <div class="w-full flex justify-center">
    <div class="w-[70%]">
      <div class="py-20">
        <div
          class="flex gap-20 md:flex-nowrap flex-wrap items-center justify-center"
        >
          <div class="md:w-[37%] w-full">
            <h1 class="leading-none text-trisec">
              <span class="font-light-custom text-[36px]"
                >Creating impact on <br />multiple levels,
                <span class="font-black-custom text-[36px]"
                  >every<br />single day</span
                ></span
              >
            </h1>
            <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
              We believe everyone deserves to have a safe place to call home.
              Yet, the UK’s housing crisis is getting worse: homelessness in
              England is forecast to continue to grow – and almost double – over
              the next 25 years.
            </p>
            <p class="mt-8 font-regular-custom lg:text-[18px] text-[12px]">
              At Stef & Philips, we strive to make the lives of vulnerable
              people safer and more secure. We do this by going above and beyond
              to construct and manage safe, suitable and secure accommodation
              for the families and individuals who need it the most.
            </p>
          </div>
          <div class="flex justify-center md:w-[55%] w-full">
            <img src="../assets/Card_Image.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full flex justify-center">
    <div class="w-[70%]">
      <div class="py-20">
        <div
          class="flex gap-20 md:flex-nowrap flex-wrap items-center justify-center"
        >
          <div class="flex justify-center md:w-[50%] w-full">
            <img src="../assets/ContentSide.png" alt />
          </div>
          <div class="md:w-[50%] w-full">
            <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
              From temporary to permanent tenants, our care reaches beyond
              bricks and mortar to include specialised accommodation and
              services for mother and baby, tenants with disabilities and young
              adults living on their own for the first time
            </p>
            <p class="mt-8 font-regular-custom lg:text-[18px] text-[12px]">
              Our aim is to have a positive impact in everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto w-[70%]">
    <div class="w-full flex justify-center">
      <img src="../assets/Svg/BlueVedio.svg" alt="video" />
    </div>
  </div>
  <!-- image -->
  <div
    class="happyG w-full min-h-[700px] relative overflow-hidden pt-32 lg:mt-36"
  >
    <div
      class="absolute top-0 w-full h-full flex items-center flex-wrap justify-center left-0 happyS"
    >
      <div class="w-full flex justify-center py-10">
        <div class="lg:w-[70%]">
          <div class="w-full mx-auto grid">
            <div class="lg:flex font-regular-custom text-[18px] gap-5">
              <div class="mt-4 flex-auto px-8 text-white">
                <p class="mt-6 font-regular-custom xl:text-[18px] text-[15px]">
                  For over a decade, Stef & Philips has been working with local
                  authorities, housing associations and charitable organisations
                  to help people all around the country get the housing help
                  they need.
                </p>
                <p class="mt-6 font-regular-custom xl:text-[18px] text-[15px]">
                  Much has changed since we first opened our doors in 2006 –
                  back then we were a traditional estate agency; we are now a
                  leading provider of accommodation services around the UK.
                </p>
              </div>
              <div class="mt-4 px-8 flex-auto text-white">
                <p class="mt-6 font-regular-custom xl:text-[18px] text-[15px]">
                  We construct and manage fit-for-purpose properties in areas of
                  high demand, providing tangible solutions to the current
                  housing crisis and giving vulnerable people a lifeline and an
                  opportunity to get back on their feet.
                </p>
                <p class="mt-6 font-regular-custom xl:text-[18px] text-[15px]">
                  Everyone who works here shares the same mission: to make the
                  lives of vulnerable people safer and more secure. Watch the
                  interview with Philip to find out more about why we do what we
                  do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- step 4 -->
  <div class="w-full flex justify-center">
    <div class="w-[70%]">
      <div class="py-20">
        <div
          class="flex gap-20 md:flex-nowrap flex-wrap items-center justify-center"
        >
          <div class="flex justify-center md:w-[50%] w-full">
            <img src="../assets/HouseFlexM.png" alt />
          </div>
          <div class="md:w-[35%] w-full">
            <h1 class="leading-none text-trisec">
              <span class="font-light-custom text-[36px]">The</span>
              <span class="font-black-custom text-[36px]">
                unacceptable <br />
              </span>
              <span class="font-light-custom text-[36px]"
                >scale of homelessness</span
              >
            </h1>
            <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
              More and more accommodation is being deemed unsuitable for housing
              the homeless and vulnerable. The National Housing Federation says,
              “England alone needs 340,000 new homes built a year, including
              145,000 social and affordable homes but we are not achieving
              targets.” In London alone, 60,000 homes are currently needed; by
              2041, this will have risen to 184,400.
            </p>
          </div>
        </div>
      </div>

      <div class="py-20">
        <div
          class="flex gap-20 md:flex-nowrap flex-wrap items-center justify-center"
        >
          <div class="md:w-[35%] w-full">
            <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
              We construct and manage fit-for-purpose properties in areas of
              high demand, providing tangible solutions to the current housing
              crisis and giving vulnerable people a lifeline and an opportunity
              to get back on their feet.
            </p>
            <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
              Stef & Philips’ unique approach to bridging the housing gap is
              helping create positive change across the UK.
            </p>
          </div>
          <div class="flex justify-center md:w-[50%] w-full">
            <img src="../assets/HouseFlexN.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-image-update min-h-[450px] w-full">
    <div class="mx-auto w-[70%]">
      <div class="lg:py-20 xxxs:py-10">
        <div class="lg:w-full ml-10">
          <h1
            class="px-4 text-[32px] lg:font-[400] xxxs:font-[200] text-white leading-[40px]"
          >
            Our <span class="font-black-custom text-[32px]">values </span>
          </h1>
          <p
            class="text-[18px] text-white font-regular-custom mt-4 px-5 pr-[8rem]"
          >
            At Stef & Philips, our values are central to our ethos. They<br />guide
            everything we do
          </p>
        </div>
        <div class="min-h-[300px] text-white w-full">
          <div class="mx-auto w-full lg:py-10">
            <div class="card">
              <Carousel
                :value="getsevenstepprocess"
                :numVisible="6"
                :numScroll="6"
                :responsiveOptions="responsiveOptions"
              >
                <template #item="slotProps">
                  <div
                    class="m-2 px-10 lg:w-[22.5rem] lg:h-[320px] bg-[#00A8A8]"
                  >
                    <div>
                      <img
                        class="w-[55px] py-5 pt-[3rem]"
                        :src="slotProps.data.image"
                        alt
                      />
                      <h4 class="mb-3 font-black-custom">
                        {{ slotProps.data.name }}
                      </h4>
                      <h6 class="mt-0 mb-3">
                        {{ slotProps.data.description }}
                      </h6>
                    </div>
                  </div>
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- step 6 -->
  <div class="py-20 w-[70%] h-[230px] mt-[3rem] mb-[12rem]">
    <div class="md:grid-cols-2 grid-cols-2">
      <div class=""></div>
      <div class="w-[145%] flex items-center justify-center">
        <div class="">
          <img src="../assets/unique-approach-icon.png" />
          <h1
            class="block py-4 font-light-custom lg:text-[36px] xxxs:text-[30px] font-light text-[#00A8A8]"
          >
            A
            <span class="font-black-custom lg:text-[36px] xxs:text-[30px]"
              >unique approach</span
            >
          </h1>
          <p class="pb-4 lg:text-[18px] xxxs:text-[16px] font-regular-custom">
            We are the only company with a truly full-service offering. We
            identify investment<br />opportunities; source and purchase suitable
            properties; construct and renovate properties to<br />ensure all
            accommodation is fit-for-purpose; run the entire lettings and
            management<br />process; and undertake all ongoing management,
            service and maintenance duties.
          </p>
          <p class="pb-4 lg:text-[18px] xxxs:text-[16px] font-regular-custom">
            At all stages of this process, we put our tenants’ needs at the
            heart of everything we do.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="py-20 w-[70%] mx-auto">
    <div class="grid bg-second md:grid-cols-2 grid-cols-1 mx-auto">
      <div class>
        <img
          src="../assets/Background8.png"
          class="z-50 h-full w-full object-cover"
          alt
        />
      </div>
      <div class="flex items-center justify-center py-10">
        <div class="w-4/5 mt-6 md:mt-0">
          <span class="text-2xl text-primary">
            <Icon icon="ooui:quotes-ltr" />
          </span>
          <h1 class="font-light-custom text-[20px] text-white mt-5">
            Stef & Philips have been short quote goes here like so in this
            featured element element lore ipsum short quote goes here like so in
            this featured element element lore ipsum short quote goes here like
            so in this.
          </h1>
          <div class="my-5">
            <h1 class="font-regular-custom text-[18px] text-white">
              Name here
            </h1>
            <h1 class="font-black-custom text-[18px] text-white">Title here</h1>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full flex justify-center">
    <div class="w-[70%]">
      <div class="py-20">
        <div
          class="flex gap-20 md:flex-nowrap flex-wrap items-center justify-center"
        >
          <div class="md:w-[35%] w-full">
            <h1 class="leading-none text-trisec">
              <span class="font-light-custom text-[32px]"
                >Life at
                <span class="font-black-custom text-[32px]"
                  >Stef & Philips</span
                ></span
              >
            </h1>
            <p class="mt-4 font-regular-custom lg:text-[18px] text-[12px]">
              Everyone working at Stef & Philips has the same mission: to make
              the lives of vulnerable people safer and more secure. Does this
              sound like you?
            </p>
            <button
              type="button"
              class="bg-[#2A8CFB] h-[50x] w-[154px] py-4 px-5 font-[400] text-[16px] mt-5 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <router-link to="/about-us">Find out more</router-link>
            </button>
          </div>
          <div class="flex justify-center md:w-[55%] w-full contentImgnew">
            <img class="houseflex-img" src="../assets/HouseFlexV.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- slider -->
  <div class="bg-second min-h-[600px] text-white w-full">
    <div class="mx-auto w-[60%] lg:py-20">
      <div class="flex">
        <h1 class="pl-14 py-8 text-white font-light-custom text-[36px]">
          Our Senior Team
        </h1>
        <button
          type="button"
          class="justify-right h-[50px] md:px-8 ml-[25.2rem] mt-10 ring-2 ring-white shadow-sm text-[16px] text-white xxs:px-4 xxs:py-3"
        >
          Meet the full team
        </button>
      </div>
      <div class="card">
        <Carousel
          :value="products"
          :numVisible="6"
          :numScroll="6"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            <div
              class="border-1surface-border border border-round m-[0.6rem] text-center text-black py-20 px-10 lg:w-[18.5rem] lg:h-[15rem] bg-slate-200"
            >
              <div class="">
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
              </div>
            </div>
            <div class="font-black-custom text-[18px] m-[0.6rem]">
              First Name Last Name
            </div>
            <div class="font-regular-custom text-[18px] m-[0.6rem]">
              Job title goes here
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
  <div class="py-20 w-[70%] mx-auto">
    <div class="grid bg-second md:grid-cols-2 grid-cols-1 mx-auto">
      <div class>
        <img
          src="../assets/Background8.png"
          class="z-50 h-full w-full object-cover"
          alt
        />
      </div>
      <div class="flex items-center justify-center">
        <div class="w-4/5 mt-6 md:mt-0">
          <span class="text-2xl text-primary">
            <Icon icon="ooui:quotes-ltr" />
          </span>
          <h1 class="font-light-custom text-[20px] text-white mt-5">
            Stef & Philips have been short quote goes here like so in this
            featured element element lore ipsum short quote goes here like so in
            this featured element element lore ipsum short quote goes here like
            so in this.
          </h1>
          <div class="my-5">
            <h1 class="font-regular-custom text-[18px] text-white">
              Name here
            </h1>
            <h1 class="font-black-custom text-[18px] text-white">Title here</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from "../Service/ProductService";
import { Icon } from "@iconify/vue";
import { useAppStore } from "../store/index";
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});

onMounted(() => {
  ProductService.getProductsSmall().then(
    (data) => (products.value = data.slice(0, 9))
  );
  ProductService.getsevenstepprocess().then(
    (data) => (getsevenstepprocess.value = data.slice(0, 9))
  );
});

const products = ref();
const getsevenstepprocess = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>

<style scoped>
.dropdown {
  float: left;
  overflow: hidden;
}

/* .bcrumbs{
  background-color: rgba(29, 29, 51, 0.5)
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 6.3rem ;
  left:0;
  background-color: rgba(29, 29, 51, 0.5);
  height: 3rem;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
} */

.bgImg {
  background-image: url("../assets/overlay-about-us.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyG {
  background-image: url("../assets/mediaos.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* .bg-secon{
  background-image: url("../assets/step-5.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} */

.bg-third {
  background: #20407c;
}

.blueBg {
  background-image: url("../assets/blueBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.tiltGirlBg {
  background-image: url("../assets/Svg/RightUpBg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.contentImg {
  background-image: url("../assets/outline-house@4.png");
  background-repeat: no-repeat;

  background-size: cover;
  background-position: center;
  /* Path 543 */

  /* position: absolute; */
  width: 418px;
  height: 437px;
  margin-left: 11%;
  /* margin-top: 5%; */
  opacity: 90%;
}

.contentImgnew {
  background-image: url("../assets/Shape-Green.png");
  background-repeat: no-repeat;

  background-size: cover;
  background-position: center;
  /* Path 543 */

  /* position: absolute; */
  width: 394px;
  height: 437px;
  margin-left: 11%;
  /* margin-top: 5%; */
  opacity: 90%;
}

.top-margin {
  margin-top: 30%;
}

.left-margin {
  margin-left: 15%;
}

.text-margin {
  margin-left: 11%;
}

.find-btn {
  margin-left: 5%;
}

.houseflex-n {
  position: absolute;
  width: 430.9px;
  height: 480px;
  margin-right: 3%;
  margin-bottom: 5%;
}

.nav-bar-tranparent {
  position: absolute;
  opacity: 0.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}

.content {
  margin-top: 35%;
}

.groupImg {
  background-image: url("../assets/Group\ 96.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  margin-left: 0.5rem;
  margin-top: 2rem;
}
.max-w-sm {
  max-width: 29rem;
}

.bg-image-update {
  background-image: url("../assets/our-values.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.houseflex-img {
  margin-right: 5rem;
  margin-top: -23px;
  margin-bottom: 35px;
}
</style>
