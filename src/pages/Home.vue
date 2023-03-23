<template>
  <div class>
    <div class="w-full min-h-[600px] bg-red-400 bgImg">
      <div class="max-w-5xl px-8 h-full py-40 mx-auto flex items-center">
        <div class="max-w-sm">
          <h1 class="text-5xl text-white font-normal tracking-wide leading-snug">
            <span>Foundations for</span>
            <br />
            <span class="font-semibold">better lives</span>
          </h1>
          <p
            class="text-white mt-4 tracking-wide leading-snug font-semibold"
          >Safe, suitable homes and vital services for tenants, authorities and partners, backed by investors who care.</p>
        </div>
      </div>
    </div>

    <!-- Step 2 -->

    <div class="py-40">
      <div class="mx-auto max-w-5xl px-8 grid md:grid-cols-2 grid-cols-1 gap-12">
        <div class>
          <h1 class="text-4xl mt-12 text-trisec leading-[50px] font-semibold">
            <span class="font-light">Working towards a world</span>
            <span> without homelessness</span>
          </h1>
          <p
            class="text-md mt-8 leading-loose tracking-wide"
          >At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.</p>
          <button
            type="button"
            class="bg-trisec py-4 px-12 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >About us</button>
        </div>
        <div class="relative">
          <img src="../assets/pic.png" class="absolute -z-10 -bottom-16 -right-16" alt />
          <img src="../assets/card.png" class="z-50" alt />
        </div>
      </div>
    </div>
    <Cards />

    <!--  -->
    <div class="py-44">
      <div class="grid bg-second md:grid-cols-2 grid-cols-1 max-w-5xl mx-auto">
        <div class>
          <img src="../assets/bg.png" class="z-50 h-full w-full md:w-0 object-cover" alt />
        </div>
        <div class="flex items-center justify-center">
          <div class="w-4/5 mt-6 md:mt-0 ">
            <span class="text-2xl    text-primary">
              <Icon icon="ooui:quotes-ltr" />
            </span>
            <h1
              class="text-xl text-white mt-5 leading-snug"
            >Stef & Philips have been short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this featured element element lore ipsum short quote goes here like so in this.</h1>
            <div class="my-5">
              <h1 class="text-xl text-white">Name here</h1>
              <h1 class="text-xl text-white">Title here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- image -->
    <div class="happyG w-full h-[600px] relative overflow-hidden">
      <div class="absolute top-0 w-full h-full flex items-center justify-center left-0 happyS">
        <div class="max-w-5xl w-full mx-auto grid md:grid-cols-2">
          <div class>
            <div class="max-w-sm   mx-auto md:mx-0">
              <h1 class="text-4xl leading-snug text-white">
                Striving to make the lives of vulnerable people
                <span class="font-bold">safer</span> and
                <span class="font-bold">more secure</span>
              </h1>

              <p
                class="mt-4 text-white font-semibold"
              >We construct and manage fit-for-purpose properties in areas of high demand, providing tangible solutions to the current housing crisis and giving vulnerable people a lifeline and an opportunity to get back on their feet.</p>
            </div>

            <div class="flex items-center justify-center md:justify-start   gap-8">
              <button
                type="button"
                class="bg-transparent whitespace-nowrap w-52 ring-2 ring-white py-3.5 mt-32 px-8 text-sm font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >For housing parteners</button>
              <button
                type="button"
                class="bg-transparent w-52 ring-2 ring-white py-3.5 mt-32 px-8 text-sm font-semibold mt-8 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >For Investors</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-second py-48">
      <div class="max-w-5xl mx-auto px-8">
        <h1 class="text-white text-4xl">Key S&P stats e.g. broad</h1>
        <div class="grid md:grid-cols-3 gap-12 grid-cols-1 sm:grid-cols-2 mt-16">
          <div class>
            <img src="../assets/shapeg.png" alt />
            <h1 class="py-4 text-white font-bold text-2xl">17 years experience</h1>
            <p
              class="text-white font-semibold text-md"
            >Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class>
            <img src="../assets/shapef.png" alt />
            <h1 class="py-4 text-white font-bold text-2xl">Properties Managed</h1>
            <p
              class="text-white font-semibold text-md"
            >Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class>
            <img src="../assets/shapei.png" alt />
            <h1 class="py-4 text-white font-bold text-2xl">Housing Experience</h1>
            <p
              class="text-white font-semibold text-md"
            >Description goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <!--  -->

    <div class="max-w-5xl mx-auto px-8 py-28 bg-[#EC8B7E]/10 my-32">
      <div class="max-w-4xl mx-auto">
        <img src="../assets/pink.png" alt />
        <h1 class="block py-4 text-4xl text-second">
          Need help
          <span class="font-bold">with your home</span>
        </h1>
        <p
          class="pb-4"
        >Use our quick online form. The quickest way to report an issue and get it fixed.</p>
        <div class="flex items-center gap-6">
          <button
            type="button"
            class="bg-sky-600 py-4 mt-32 px-8 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >Quick report</button>
          <button
            type="button"
            class="bg-trisec py-4 mt-32 px-8 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >Report a repair or maintainance</button>
        </div>
      </div>
    </div>

    <Cards />

  </div>
</template>

<script setup>
import Cards from "../components/Cards.vue";
import { Icon } from "@iconify/vue";
</script>

<style  scoped>
.bgImg {
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyG {
  background-image: url("../assets/girl.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.happyS {
  background-image: url("../assets/bggray.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>