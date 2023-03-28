<template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center">
        <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-3 inner ">
          <router-link exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom" to="/home">Home</router-link>
          <i class="pi pi-angle-right text-white"></i>
            <router-link active-class="active" class="text-white font-semibold text-sm font-bold-custom" to="/your-home">Your home</router-link>
            <i class="pi pi-angle-right text-white"></i>
            <router-link active-class="active" class="text-white font-semibold text-sm font-bold-custom" to="/repair-responsibilities">Repairs responsibilities</router-link>
        </nav>
      </div> 

    <!-- -->

    <div class="w-full flex justify-center">
        <div class="w-[60%]">
          <div class="py-20">
          <div class=" grid md:grid-cols-2 grid-cols-1 gap-20">
            <div class>
              <h1 class="text-4xl mt-16 text-[#20407C]">
                <span class="font-light">Repair and maintenance responsibilities</span>
              </h1>
              <p
                class="text-md mt-2 leading-loose tracking-wide"
              >Find out how to report a repair, how long it will take and whether it’s your responsibility or ours</p>
              <button
                type="button"
                class="bg-[#2A8CFB] py-4 px-12 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Report a repair</button>
            </div>
            <div class="flex justify-center ">
              <img src="../assets/Card Image.png">
            </div>
          </div>
        </div>
        </div>
        </div>

         <!-- -->

        <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
            <div class="w-[60%]">
            <h1   class="text-[30px] text-[#20407c] font-[900] pb-10">Your responsibilities</h1>
            <Accordion :activeIndex="2" >
            <AccordionTab header="Keeping your property clean" style="color:#20407c; font-size:18px; font-weight:900" color="white">
              <p class="text-[18px] font-[400] text-[#1d1d33]">
                  Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                </p>
            </AccordionTab>
            <AccordionTab header="Preventing mould">
              <p class="text-[18px] font-[400] text-[#1d1d33]">
                  Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                </p>
            </AccordionTab>
            <AccordionTab header="Another example">
                <p class="text-[18px] font-[400] text-[#1d1d33]">
                  Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                </p>
                <p class="text-[18px] font-[900] text-[#2a8cfb]">Link call to action</p>
            </AccordionTab>
            <AccordionTab header="Another example" style="color:#20407c; font-size:18px; font-weight:900" color="white">
                <p class="text-[18px] font-[400] text-[#1d1d33]">
                    Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                  </p>
              </AccordionTab>
          </Accordion>
            </div>
            </div>

             <!-- -->

            <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
                <div class="w-[60%]">
                <h1   class="text-[30px] text-[#20407c] font-[900] pb-10">Repair process</h1>
                <Accordion :activeIndex="2" >
                <AccordionTab header="Repair priorities" style="color:#20407c; font-size:18px; font-weight:900" color="white">
                  <p class="text-[18px] font-[400] text-[#1d1d33]">
                      Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                </AccordionTab>
                <AccordionTab header="Repair appointments">
                  <p class="text-[18px] font-[400] text-[#1d1d33]">
                      Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                </AccordionTab>
                <AccordionTab header="Timeslots">
                    <p class="text-[18px] font-[400] text-[#1d1d33]">
                      Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                    <p class="text-[18px] font-[900] text-[#2a8cfb]">Link call to action</p>
                </AccordionTab>
                <AccordionTab header="People who may enter your home" style="color:#20407c; font-size:18px; font-weight:900" color="white">
                    <p class="text-[18px] font-[400] text-[#1d1d33]">
                        Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                      </p>
                  </AccordionTab>
              </Accordion>
                </div>
                </div>

                 <!-- -->

                <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
                    <div class="w-[60%]">
                    <h1   class="text-[30px] text-[#20407c] font-[900] pb-10">Stef & Philips’ responsibilities</h1>
                    <Accordion :activeIndex="2" >
                    <AccordionTab header="Communal areas" style="color:#20407c; font-size:18px; font-weight:900" color="white">
                      <p class="text-[18px] font-[400] text-[#1d1d33]">
                          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Water and electricity safety">
                      <p class="text-[18px] font-[400] text-[#1d1d33]">
                          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Appliances">
                        <p class="text-[18px] font-[400] text-[#1d1d33]">
                          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                        <p class="text-[18px] font-[900] text-[#2a8cfb]">Link call to action</p>
                    </AccordionTab>
                    <AccordionTab header="Another example" style="color:#20407c; font-size:18px; font-weight:900" color="white">
                        <p class="text-[18px] font-[400] text-[#1d1d33]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                          </p>
                      </AccordionTab>
                  </Accordion>
                    </div>
                    </div>

                     <!-- -->

            <div class=" w-[60%] mx-auto px-8 py-20 bg-[#EC8B7E]/10 my-20">
                <div class="max-w-4xl mx-auto ">
                  <img src="../assets/pink.png"/>
                  <h1 class="block py-4 text-4xl text-second">
                    Need help
                    <span class="font-bold">with your home</span>
                  </h1>
                  <p
                    class="pb-4"
                  >Use our quick online form. The quickest way to report an issue and get it fixed.</p>
                  <div class="flex flex-wrap items-center gap-6">
                    <button
                      type="button"
                      class="bg-sky-600 py-4 px-8 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >Quick report</button>
                    <button
                      type="button"
                      class="bg-trisec py-4 px-8 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >Report a repair or maintainance</button>
                  </div>
                </div>
              </div>
</template>

<script setup>
import { ref } from "vue";
// import ContactCard from "../components/Contactcard2.vue";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<style >
.p-accordion-header-text{
  color:#20407c; font-size:18px; font-weight:900;
}
.p-accordion-toggle-icon{
  position: absolute; right: 0%;  padding: 2px; color:#20407c;
}
.p-accordion-header-link{
  background-color: white;
}
@media(max-width:500px){
.emergency{
  font-size: 26px;
  
}
.number{
  font-size:18px;
}
.btn{
  font-size:12px;

}

}
</style>