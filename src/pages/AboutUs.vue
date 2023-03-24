<template>
 <div class>
     <div class="w-full min-h-[600px] bg-red-400 bgImg">
      <div class="w-full h-[600px] flex justify-center items-center">
        <div class="w-[60%]">
          <h1 class="text-5xl text-white font-normal tracking-wide w-[50%] leading-snug">
            <span>Our Story</span>
          </h1>
          <p
            class="text-white mt-4 tracking-wide leading-snug font-semibold w-[50%]"
          >Short Introductory summary for the page<br>goes here lilke so</p>
        </div>
      </div>
    </div>

    <!-- Step 2 -->
  <div class="w-full flex justify-center">
    <div class="w-[60%]">
    
      <div class="py-40">
      <div class="max-w-5xl  grid md:grid-cols-2 grid-cols-1 h-[540px] gap-12">
        <div class>
          <h1 class="text-4xl mt-12 text-trisec leading-[50px] font-semibold">
            <span class="font-light">Working towards a world</span>
            <span> without homelessness</span>
          </h1>
          <p
            class="text-md mt-8 leading-loose tracking-wide"
          >At Stef & Philips, we strive to make the lives of vulnerable people safer and more secure. We do this by delivering safe, suitable homes and vital services for tenants, authorities and partners, while providing secure investments for private and corporate investors.</p>
        </div>
        <div class="flex justify-center ">
          <img src="../assets/HeroSection.png" alt >
        </div>
      </div>
    </div>
    <Cards />

    <!-- step-2 -->
    <div class=" py-22">
      <div class="grid videoBg md:grid-cols-2 grid-cols-1 max-w-5xl mx-auto">
        <div class="flex items-center justify-center">
          <div class="w-4/5 mt-3 md:mt-0 ">
           <div class="relative">
  <iframe class=" w-max  aspect-video lg:aspect-square   ml-48" src="https://www.youtube-nocookie.com/embed/FMrtSHAAPhM" ></iframe>
</div>
          </div>
        </div>
      </div>
    </div>    
    </div>
  </div>
<!-- image -->
    <div class="happyG w-full h-[600px] relative overflow-hidden py-40 ">
      <div class="absolute top-0 w-full h-full flex items-center  flex-wrap justify-center left-0 happyS">
        <div class="max-w-5xl w-full mx-auto grid grid-cols-1 ">
            <div class="flex">
              <div
                class="mt-4 flex-auto px-8  text-white md:font-semibold "
              >Since first opening our doors in 2006, Stef & Philips has evolved from a traditional estate agency into a leading provider of accommodation services around the UK. We work closely with local authorities, housing associations, charitable organisations and investors to provide safe, suitable and secure accommodation to those who really need it..</div>
              <div  class="mt-4  px-8 flex-auto  text-white md:font-semibold ">We construct and manage fit-for-purpose properties in areas of high demand, providing tangible solutions to the current housing crisis and giving vulnerable people a lifeline and an opportunity to get back on their feet. Our care reaches beyond bricks and mortar, to include specialised accommodation and services for mothers and babies, tenants with disabilities, and young adults living on their own for the first time.</div>

            </div>
                
          </div>
     
      </div>
    </div>
 </div>
</template>

<style >
.bgImg {
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.videoBg{
  background-image: url("../assets/videoBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.happyG {
  background-image: url("../assets/girlTeaBg.png");
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