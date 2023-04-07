<template>
    <div class="h-[40px] w-full bg-[#1D1D33] opacity-50 bl flex justify-center ">
        <nav class="w-[70%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
            <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
                Home</div>
            <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Your home</div>
            <i class="pi pi-angle-right text-white"></i>
            <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Tenant services
            </div>
        </nav>
    </div>
    <!-- section 1 -->
    <div class="w-full min-h-[460px] bg-[url('src/assets/Svg/Image2.svg')] bg-cover bg-center bg-no-repeat  ">
        <div class="w-full px-8 h-full py-40 mx-auto flex justify-center items-center">
            <!-- <div class="contentImg">
                <div class=" w-full h-[600px] flex justify-center items-center">
                    <h1 class="text-[42px] text-white font-[300] mt-16">Tenant services</h1>
                    <p class="text-[18px] text-white font-[400]">Short introductory summary for the page <br> goes here like
                        so</p>
                </div>
            </div> -->
            <div class="contentImg">
      <div class="w-full h-[600px] flex justify-center items-center">
        <div class="mx-auto w-[70%] mb-8">
          <h1 class="text-white w-[100%]">
            <div class="font-light-custom text-[32px]">Tenant <strong>Services</strong></div>
          </h1>
          <p class="text-white font-regular-custom text-[18px] ">
            Short introductory summary for the page goes here like
                        so
          </p>
        </div>
      </div>
    </div>
        </div>
    </div>
    <!-- section 2 -->
    <div class="w-full min-h-[400px] p-3">
        <div class=" w-[70%]  mx-auto py-14 flex flex-col justify-center">
            <div class="card flex items-start justify-content-between gap-5 w-full ">
                <Card :message="card1" style="background-color:white;" />
            </div>
        </div>
        <div class=" w-[70%]  mx-auto py-14 flex flex-col justify-center">
            <div class="card flex items-start justify-start mx-auto flex-wrap gap-2 w-full ">
                <TenantCard :message="card2" />
            </div>
        </div>


        <HorizontalCardVue :message="card3" />



        <NeedHelp />

    </div>
</template>
<script setup>
import Card from '../components/VerticalGreyCard.vue'
import NeedHelp from "../components/NeedHelp.vue";
import TenantCard from '../components/TenantCard.vue';
import HorizontalCardVue from '../components/HorizontalCard.vue';
const card1 = [{ heading: 'Temporary accommodation', img: 'src/assets/CardImage2.png', bgclass: 'bg-[#ededee]' }, { heading: 'Private rented sector', img: 'src/assets/Svg/CardImage2.svg', bgclass: 'bg-[#ededee]' }]
const card2 = [{ header: 'Managing your ', bold: 'utility bills', img: 'src/assets/Icon3.png' }, { header: 'Paying your ', bold: 'concil tax', img: 'src/assets/Icon4.png' }, { header: 'Paying your ', bold: 'rent', img: 'src/assets/Icon5.png' }]
const card3 = { direction: 'rtl', img: 'src/assets/Svg/CardImage4.svg', header: 'Was your tenancy', boldheader: ' ? cancelled ', bgclass: 'bg-[#f0f7fe]', btn: ['Find my concil'], paragraph: '(Look at wording), we have a clear process of managing your belongings, anything to do with the tenancy contact the council.', btnimg: 'src/assets/Svg/Path51.svg', b: true, flex: 'items-end' }
</script>
<style>
@media(max-width:750px) {
    .card {
        flex-wrap: wrap;
    }
}

.contentImg {
    background-image: url("../assets/outline-house@4.png");
    background-repeat: no-repeat;

    background-size: cover;
    /* background-position: center; */
    /* Path 543 */

    /* position: absolute; */
    width: 434px;
    height: 452px;
    margin-left: -40%;
    /* margin-top: 5%; */
    opacity: 90%;
}
</style>
Footer
© 2023 GitHub, Inc.
