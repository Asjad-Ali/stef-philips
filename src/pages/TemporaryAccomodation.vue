<template>
  <!-- breadCrum -->
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
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
        <router-link to="tenant-services">Tenant services</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[grey]"></i>

      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="temporary-accomodation"
          >Temporary accomodation</router-link
        >
      </div>
    </nav>
  </div>
  <!-- breadCrum end -->
  <!-- bg-image with card -->
  <div class="w-full min-h-[460px] bgImg">
    <div
      class="lg:w-[70%] xxs:w-[95%] sm:w-[75%] md:w-[94%] lg:h-[500px] xxs:h-[500px] mx-auto flex items-center"
    >
      <!-- mx-auto p-3 -->
      <div
        class="lg:w-[480px] xxs:w-[250px] h-[auto] lg:ml-[14px] xxs:ml-[35px] sm:ml-[7px] lg:p-[2rem] sm:p-[2rem] xxs:p-[2rem] contentImg"
      >
        <h1 class="lg:text-[38px] xxs:text-[18px] text-white font-[300]">
          <span class="font-black-custom lg:text-[38px] xxs:text-[18px]"
            >Temporary and emergency
          </span>
          accommodation
        </h1>
        <p class="text-[18px] text-white font-[400]">
          Quality short-term accommodation for singles and families
        </p>
      </div>
    </div>
  </div>
  <!-- bg-image with card end -->

  <!-- component left right image section-->
  <div class="w-full min-h-[400px] p-3">
    <ImageCard :message="card" />
    <ImageCard :message="card2" />
    <ImageCard :message="card3" />
  </div>
  <!-- component left right image section end-->

  <!-- three cards without bg-image -->
  <div class="min-h-[450px] w-full">
    <div class="mx-auto lg:w-[70%] sm:w-[90%] xxxs:w-[75%]">
      <div class="lg:py-20 xxxs:py-10">
        <div class="lg:w-[63%] xxxs:w-[100%] sm:w-[75%] md:w-[75%]">
          <h1
            class="mt-12 mb-6 text-trisec leading-[50px] font-semibold text-left"
          >
            <span
              class="font-black-custom lg:text-[36px] xxxs:text-[23px] sm:text-[30px]"
              >Your responsibilities
            </span>
            <span
              class="font-light-custom lg:text-[36px] xxxs:text-[23px] sm:text-[30px]"
              >as a service user</span
            >
          </h1>
        </div>
        <div class="min-h-[300px] text-white w-full">
          <div class="mx-auto w-full lg:py-10">
            <div
              class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"
            >
              <ThreeCard :message="ResponCard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- three cards without bg-image end-->

  <!-- bg-image-with-threeCard -->
  <div class="bg-image-update min-h-[450px] w-full">
    <div class="mx-auto lg:w-[70%] sm:w-[90%] xxxs:w-[75%]">
      <div class="lg:py-20 xxxs:py-10">
        <div class="lg:w-[63%] xxxs:w-[100%] sm:w-[75%] md:w-[75%]">
          <h1
            class="mt-12 mb-6 text-white leading-[50px] font-semibold text-left"
          >
            <span
              class="font-light-custom lg:text-[36px] xxxs:text-[23px] sm:text-[30px]"
              >Support provided by your
            </span>
            <span
              class="font-black-custom lg:text-[36px] xxxs:text-[23px] sm:text-[30px]"
              >housing partner
            </span>
          </h1>
        </div>
        <div class="min-h-[300px] text-white w-full">
          <div class="mx-auto w-full lg:py-10">
            <div
              class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"
            >
              <ThreeCard :message="ResponCard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- bg-image-with-threeCard end -->

  <!-- component left right image section-->

  <div class="w-full min-h-[400px] p-3">
    <ImageCard :message="sectionFourCard1" />
    <ImageCard :message="sectionFourCard2" />
    <ImageCard :message="sectionFourCard3" />
  </div>
  <!-- component left right image section end-->

  <NeedHelp />
  <!-- faq -->
  <div class="min-h-[400px] w-full bg-[#EDEDEE] lg:pt-28 xxxs:py-16">
    <div
      class="lg:w-[70%] xxxs:w-[90%] sm:w-[93%] mx-auto flex flex-wrap items-center"
    >
      <p class="text-[#20407C] lg:text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">During your stay FAQs</span>
      </p>
      <Accordion :message="pmessage" />
    </div>
  </div>
  <!-- faq end -->
  <div class="w-full bg-custom">
    <HorizontalCardVue :message="card4" />
  </div>
</template>

<script setup>
import Accordion from "../components/Accordion.vue";
import ThreeCard from "../components/TemoraryAccomdThreeCard.vue";
import NeedHelp from "../components/NeedHelp.vue";
import ImageCard from "../components/ImageCardTempAccom.vue";
import HorizontalCardVue from "../components/HorizontalCard.vue";

const ResponCard = [
  {
    name: "Paying council tax",
    role: "Some service users are responsible for paying council tax, for the duration of time they spend in temporary or emergency accommodation. If this applies to you, the team at Stef & Philips can help advise you on how to pay your council tax bill and any discounts you may be eligible for.",
    imageUrl: new URL(
      "../assets/YourHome/YourResponsCard1.png",
      import.meta.url
    ).href,
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
  },
  {
    name: "Paying utility bills",
    role: "Service users may be responsible for paying for utilities such as gas, water and electricity bills while staying in temporary or emergency accommodation. However, this varies depending on the property. When you move in, the Stef & Philips team will explain what your responsibilities are.",
    imageUrl: new URL(
      "../assets/YourHome/YourResponsCard2.png",
      import.meta.url
    ).href,
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
  },
  {
    name: "Paying rent",
    role: "Service users may be responsible for paying for utilities such as gas, water and electricity bills while staying in temporary or emergency accommodation. However, this varies depending on the property. When you move in, the Stef & Philips team will explain what your responsibilities are.",
    imageUrl: new URL(
      "../assets/YourHome/YourResponsCard3.png",
      import.meta.url
    ).href,
    btnName: "Find out more",
    height: "h-auto",
    width: "w-auto",
    button_url: "",
    color: "bg-[#F0F7FE]",
    buttonPadding: "pb-[2rem]",
  },
  // More people...
];
const card = {
  header: "What is",
  boldheader: "temporary and emergency accommodation?",
  img: new URL("../assets/YourHome/TempAcdCard1.png", import.meta.url).href,
  paragraph:
    " If you have become homeless or urgently need somewhere to live, you may be offered the opportunity to stay in temporary or emergency accommodation.",
};
const card2 = {
  direction: "rtl",
  header: "Moving in or out of",
  boldheader: " temporary accommodation",
  img: new URL("../assets/YourHome/TempAcdCard2.png", import.meta.url).href,
  paragraph:
    "The team at Stef & Philips is there to make your move as easy as possible. Once your housing partner has allocated a place for you, we’ll show you around the property and make sure you understand where everything is and how it works: Paying particular attention to important matters, such as the smoke alarms and where you can find fire blankets in the event of an emergency. We’ll also explain your responsibilities as a service user.",
};
const card3 = {
  header: "What is a",
  boldheader: "housing partner?",
  img: new URL("../assets/YourHome/TempAcdCard3.png", import.meta.url).href,
  paragraph:
    "This is the organisation responsible for finding you your accommodation; a housing partner could be your local authority/council, a housing association or a charity.",
  btn: ["Report a repair"],
  btn2: ["Your team"],
};
const sectionFourCard1 = {
  header2: "and maintaining the property",
  boldheader2: " Upkeeping",
  img: new URL("../assets/YourHome/sectionFourImg1.png", import.meta.url).href,
  paragraph:
    " Stef & Philips’ team ensures properties are kept in good order. This includes fortnightly cleaning of communal areas inside properties, monthly upkeep of communal gardens, and annual gas and electrical safety checks.",
};
const sectionFourCard2 = {
  direction: "rtl",
  header2: "at the properties",
  boldheader2: " Fixing issues",
  img: new URL("../assets/YourHome/sectionFourImg2.png", import.meta.url).href,
  paragraph:
    "Our experienced maintenance team is always on hand to respond to emergency repairs and ongoing work. Issues will be fixed within 72 hours, routine work within 5 working days, and planned work within 5-10 days.",
};
const sectionFourCard3 = {
  header: "Regular",
  boldheader: " occupancy checks",
  img: new URL("../assets/YourHome/sectionFourImg3.png", import.meta.url).href,
  paragraph:
    "This is the organisation responsible for finding you your accommodation; a housing partner could be your local authority/council, a housing association or a charity.",
};
const card4 = {
  direction: "rtl",
  img: new URL("../assets/YourHome/headicPerson.png", import.meta.url).href,
  header: "Was your tenancy",
  boldheader: " ? cancelled ",
  bgclass: "bg-[#f0f7fe]",
  btn: ["Find my concil"],
  paragraph:
    "(Look at wording), we have a clear process of managing your belongings, anything to do with the tenancy contact the council.",
  btnimg: "src/assets/Svg/Path51.svg",
  // b: true,
  flex: "items-end",
};
const pmessage = [
  {
    index: 0,
    header: "Frequently asked question goes here?",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Frequently asked question goes here?",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];
</script>

<style scoped>
.bg-custom {
  background-color: #f0f7fe;
}
.bg-image-update {
  background-image: url("../assets/YourHome/housingPartnerBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.contentImg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 100%;
  /* background: #1d1d33;
  background: linear-gradient(161deg, #1d1d33 0%, rgba(29, 29, 51, 0.44) 100%); */
  border-color: #000000;
  /* border-width: 1px; */
  /* border-style: dashed; */

  background: #1d1d33;
  background: linear-gradient(161deg, #1d1d33 0%, rgba(29, 29, 51, 0.44) 100%);
}
/* .bgImg {
  background-image: url("../assets/Svg/HeaderBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} */

.nav-bar-tranparent {
  position: absolute;
  opacity: 1.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.bgImg {
  background-image: url("../assets/YourHome/tenantkid.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
@media (min-width: 1200px) {
  .lg\:w-\[70\%\] {
    max-width: 1140px;
  }
}
</style>
