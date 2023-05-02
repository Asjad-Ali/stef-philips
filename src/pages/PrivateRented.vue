<template>
  <!-- breadCrum -->
  <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
    <nav
      class="container h-full mx-auto flex items-center justify-start gap-3 inner lg:pl-[15px]"
    >
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="home">Home</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[dark-grey]"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="your-home">Your Home</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[dark-grey]"></i>
      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="tenant-services">Tenant services</router-link>
      </div>
      <i class="pi pi-angle-right font-bold text-[dark-grey]"></i>

      <div
        exact-active-class="exact-active"
        class="text-white font-bold text-sm font-bold-custom text-[14px]"
      >
        <router-link to="prs">PRS</router-link>
      </div>
    </nav>
  </div>
  <!-- breadCrum end -->
  <!-- bg-image with card -->
  <div class="w-full min-h-[460px] bgImg">
    <div class="container lg:h-[500px] xxs:h-[500px] mx-auto flex items-center">
      <!-- mx-auto p-3 -->
      <div
        class="lg:w-[480px] xxs:w-[250px] h-[auto] lg:ml-[14px] xxs:ml-[35px] sm:ml-[7px] lg:p-[2rem] sm:p-[2rem] xxs:p-[2rem] contentImg"
      >
        <h1 class="lg:text-[36px] xxs:text-[18px] text-white font-[300]">
          <span class="font-black-custom lg:text-[36px] xxs:text-[18px]"
            >Private rented sector (PRS)
          </span>
          accommodation
        </h1>
        <p class="text-[18px] text-white font-[400]">
          Affordable, long-term housing solutions covering a wide range of
          needs.
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
    <div class="mx-auto container">
      <div class="lg:py-20 xxxs:py-10">
        <div class="lg:w-[63%] xxxs:w-[100%] sm:w-[75%] md:w-[75%]">
          <h1
            class="mt-12 mb-6 text-trisec leading-[50px] font-semibold text-left"
          >
            <span
              class="font-light-custom lg:text-[36px] xxxs:text-[23px] sm:text-[30px]"
              >Stef & Philips’
            </span>
            <span
              class="font-black-custom lg:text-[36px] xxxs:text-[23px] sm:text-[30px]"
              >responsibilities
            </span>
          </h1>
        </div>
        <div class="min-h-[300px] text-white w-full">
          <div class="mx-auto w-full lg:py-10">
            <div
              class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"
            >
              <ThreeCard :message="PrsSection1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- three cards without bg-image end-->

  <!-- bg-image-with-threeCard -->
  <div class="bg-image-update min-h-[450px] w-full">
    <div class="mx-auto container">
      <div class="lg:py-20 xxxs:py-10">
        <div class="container">
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
              <ThreeCard :message="PrsSection2" />
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
    <div class="container mx-auto flex flex-wrap items-center">
      <p
        class="text-[#20407C] lg:text-[30px] font-black-custom pb-6 font-x-bold"
      >
        <span class="text-[30px] font-black-custom font-bold-[900]"
          >During your stay FAQs</span
        >
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

const PrsSection1 = [
  {
    name: "Coordinating referrals, viewings and signing the lease",
    role: "Housing partners refer PRS tenants to Stef & Philips, who will then manage the viewings and organise the signing of the lease.",
    imageUrl: new URL(
      "../assets/YourHome/PrsThreeCardImg1.png",
      import.meta.url
    ).href,
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
  },
  {
    name: "Ongoing maintenance of properties",
    role: "Stef & Philips’ highly-skilled maintenance team handles emergency repairs and ongoing routine work as quickly as possible. Emergencies are resolved within 72 hours, routine work within 5 working days, and planned work within 5-10 days.",
    imageUrl: new URL(
      "../assets/YourHome/PrsThreeCardImg2.png",
      import.meta.url
    ).href,
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
  },
  {
    name: "Providing information, advice and support",
    role: "The team at Stef & Philips offers ongoing support and advice to help PRS tenants continue to thrive in their new homes. This includes offering advice on council tax, universal credit and housing benefit support.",
    imageUrl: new URL(
      "../assets/YourHome/PrsThreeCardImg3.png",
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
const PrsSection2 = [
  {
    name: "Local council support",
    role: "Short description goes here like so in this featured icon element lore ipsum.",
    imageUrl: new URL(
      "../assets/YourHome/PrsThreeCardImg3.png",
      import.meta.url
    ).href,
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
  },
  {
    name: "Local council support",
    role: "Short description goes here like so in this featured icon element lore ipsum.",
    imageUrl: new URL(
      "../assets/YourHome/PrsThreeCardImg3.png",
      import.meta.url
    ).href,
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
  },
  {
    name: "Local council support",
    role: "Short description goes here like so in this featured icon element lore ipsum.",
    imageUrl: new URL(
      "../assets/YourHome/PrsThreeCardImg3.png",
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
  header: "What is a",
  boldheader: "PRS tenant?",
  img: new URL("../assets/YourHome/PrsCardImg1.png", import.meta.url).href,
  paragraph:
    " PRS accommodation is affordable housing leased on an assured shorthold tenancy agreement, giving tenants the stability of knowing they will be living there for a longer period of time.",
};
const card2 = {
  direction: "rtl",
  header: "Moving into",
  boldheader: "PRS accommodation",
  questionMark: true,
  img: new URL("../assets/YourHome/PrsCardImg2.png", import.meta.url).href,
  paragraph:
    "The team at Stef & Philips is here to make your move as easy as possible. Once your housing partner has found you your new home, we’ll manage your lease arrangement, show you around the property and make sure you understand where everything is and how it works – paying particular attention to important matters, such as the smoke alarms and where you can find fire blankets in the event of an emergency. We’ll also make sure you understand your responsibilities and provide additional support and advice when you need it.",
};
const card3 = {
  header: "What is a",
  boldheader: "housing partner?",
  img: new URL("../assets/YourHome/PrsCardImg3.png", import.meta.url).href,
  paragraph:
    "This is the organisation responsible for finding you your accommodation; a housing partner could be your local authority, a housing association or a charity.",
  btn: ["Report a repair"],
  btn2: ["Your team"],
};
const sectionFourCard1 = {
  header: "Managing your ",
  boldheader: " utility bills",
  img: new URL("../assets/YourHome/PrsCardImg4.png", import.meta.url).href,
  paragraph:
    " You should set up accounts with all utility providers and pay your bills in full. If you need help understanding your utility bills, the Stef & Philips team is on hand to help.",
};
const sectionFourCard2 = {
  direction: "rtl",
  header: "Paying your",
  boldheader: "  council tax",
  img: new URL("../assets/YourHome/PrsCardImg5.png", import.meta.url).href,
  paragraph:
    "You are responsible for paying council tax. If you need help understanding your council tax bill, or would like some advice on applying for discounts, the Stef & Philips team is on hand to help.",
};
const sectionFourCard3 = {
  header: "Paying your",
  boldheader: " rent",
  img: new URL("../assets/YourHome/PrsCardImg6.png", import.meta.url).href,
  paragraph:
    "You are responsible for paying the rent, as agreed with your housing partner and outlined in the terms of your lease.",
};
const card4 = {
  direction: "rtl",
  img: new URL("../assets/YourHome/headicPerson.png", import.meta.url).href,
  header: "?Was your tenancy",
  boldheader: " cancelled ",
  bgclass: "bg-[#f0f7fe]",
  btn: ["Find my concil"],
  paragraph:
    "(Look at wording), we have a clear process of managing your belongings, anything to do with the tenancy contact the council.",
  btnimg: "src/assets/Svg/Path51.svg",
  buttonIcon: true,
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
.font-x-bold {
  font-family: "Black", sans-serif;
  /* font-family: "aktiv-grotesk-std", sans-serif;
  src: url("./assets/Aktiv Grotesk/TTF/AktivGrotesk-XBold.ttf"); */
  /* font-size: 18px; */
}
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
  background: #1d1d33;
  background: linear-gradient(161deg, #1d1d33 0%, rgba(29, 29, 51, 0.44) 100%);
}
.bgImg {
  background-image: url("../assets/YourHome/PrsBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.nav-bar-tranparent {
  position: absolute;
  opacity: 1.5;
  background: #1d1d33;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
/* .bgImg {
  background-image: url("../assets/YourHome/tenantkid.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} */
@media (min-width: 1200px) {
  .lg\:w-\[70\%\] {
    max-width: 1140px;
  }
}
</style>
