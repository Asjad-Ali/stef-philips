<template>
    <div class="h-[40px] w-full bg-[#1D1D33] opacity-50 bl flex justify-center nav-bar-tranparent">
      <nav class="w-[70%] h-full mx-auto flex items-center justify-start gap-3 inner ">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="home">Home</router-link>
          </div>
        <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="your-home">Your home</router-link>
          </div>

          <i class="pi pi-angle-right text-white"></i>
          <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
            <router-link to="repair-responsibilities">Repairs responsibilities</router-link>
          </div>
        </nav>
    </div> 

    <!-- -->

    <div class="w-full flex justify-center">
      
        <HorizontalCardVue :message="card"/>
        </div>

         <!-- -->

        <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
            <div class="w-[70%]">
            <h1   class="text-[30px] text-[#20407c] font-[900] pb-10">Your responsibilities</h1>
            <Accordion :activeIndex="2" >
            <AccordionTab header="Keeping your property clean" class="font-black-custom text-[18px] text-[#20407c]" color="white">
              <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                  Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                </p>
            </AccordionTab>
            <AccordionTab header="Preventing mould"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
              <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                  Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                </p>
            </AccordionTab>
            <AccordionTab header="Another example"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                  Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                </p>
                <p class="font-black-custom text-[18px] text-[#2a8cfb] py-8">Link call to action</p>
            </AccordionTab>
            <AccordionTab header="Another example"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                    Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                  </p>
              </AccordionTab>
          </Accordion>
            </div>
            </div>

             <!-- -->

            <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
                <div class="w-[70%]">
                <h1   class="text-[30px] text-[#20407c] font-[900] pb-10">Repair process</h1>
                <Accordion :activeIndex="2" class="h-[488px]" >
                <AccordionTab header="Repair priorities"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                  <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                      Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                </AccordionTab>
                <AccordionTab header="Repair appointments"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                  <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                      Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                </AccordionTab>
                <AccordionTab header="Timeslots"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                    <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                      Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                    </p>
                    <p class="font-black-custom text-[18px] text-[#2a8cfb] py-8">Link call to action</p>
                </AccordionTab>
                <AccordionTab header="People who may enter your home"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                    <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                        Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                      </p>
                  </AccordionTab>
              </Accordion>
                </div>
                </div>

                 <!-- -->

                <div class="w-full flex justify-center mx-auto py-20 bg-[#ededee]">
                    <div class="w-[70%]">
                    <h1   class="text-[30px] text-[#20407c] font-[900] pb-10">Stef & Philips’ responsibilities</h1>
                    <Accordion :activeIndex="2" >
                    <AccordionTab header="Communal areas" class="font-black-custom text-[18px] text-[#20407c]" color="white">
                      <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Water and electricity safety"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                      <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                    </AccordionTab>
                    <AccordionTab header="Appliances"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                        <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                        </p>
                        <p class="font-black-custom text-[18px] text-[#2a8cfb] py-8">Link call to action</p>
                    </AccordionTab>
                    <AccordionTab header="Another example"  class="font-black-custom text-[18px] text-[#20407c]" color="white">
                        <p class="text-[18px] font-regular-custom text-[#1d1d33]">
                            Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
                          </p>
                      </AccordionTab>
                  </Accordion>
                    </div>
                    </div>

                     <!-- -->

                     <NeedHelp/>
</template>

<script setup>
import { ref } from "vue";
import HorizontalCardVue from '../components/HorizontalCard.vue';
import AccordionTab from 'primevue/accordiontab';
import Accordion from 'primevue/accordion';
import NeedHelp from "../components/NeedHelp.vue";
const card= { header:'Repair and maintenance responsibilities', img:'src/assets/Svg/CardImage6.svg', paragraph:'Find out how to report a repair, how long it will take and whether it’s your responsibility or ours', btn:['Report a repair']}


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