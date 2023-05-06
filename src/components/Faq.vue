<template>
  <div class="container">
    <h1 class="text-[30px] text-[#20407c] font-black-custom mb-[28px]">Corporate investors FAQs</h1>
    <Accordion :activeIndex="2" >
      <AccordionTab header="Frequently asked question goes here?" class="font-black-custom text-[18px] text-[#20407c]" color="white">
        <p class="text-[18px] font-regular-custom text-[#1d1d33]">
          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
        </p>
      </AccordionTab>
      <AccordionTab header="Frequently asked question goes here?" class="font-black-custom text-[18px] text-[#20407c]">
        <p class="text-[18px] font-regular-custom text-[#1d1d33]">
          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
        </p>
      </AccordionTab>
      <AccordionTab header="Frequently asked question goes here?" class="font-black-custom text-[18px] text-[#20407c]">
        <p class="text-[18px] font-regular-custom text-[#1d1d33]">
          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
        </p>
        <p class="text-[18px] font-black-custom text-[#2a8cfb] py-8">Link call to action</p>
      </AccordionTab>
      <AccordionTab header="Frequently asked question goes here?" class="font-black-custom text-[18px] text-[#20407c]">
        <p class="text-[18px] font-regular-custom text-[#1d1d33]">
          Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.
        </p> 
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>