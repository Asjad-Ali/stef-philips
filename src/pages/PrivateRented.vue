
   <template>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center ">
    <nav class="w-[60%] h-full mx-auto flex items-center justify-start gap-3 inner  ">
      <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">Home</div>
      <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >Your home</div>
        <i class="pi pi-angle-right text-white"></i>
        <div active-class="active" class="text-white font-semibold text-sm font-bold-custom text-[14px]" >PRS</div>
    </nav>
  </div> 
<div class="w-full min-h-[400px] bgImg">
    <div class="max-w-[1440px] w-[60%] py-20 mx-auto p-3  flex flex-col justify-center">
        <h1 class="text-[42px] text-white font-light mt-16 ">Private rented sector<br>(PRS)</h1>
        <p class="text-[18px] text-white font-regular">Short introductory summary for the page <br> goes here like so</p>
    </div>
</div>
  <!-- component -->
  <CardsFlex />
  <!-- component -->
  <!-- step-3 -->
  <div class="min-h-[400px] w-full bg-[#1d1d33] lg:pt-72 xxxs:pt-40">
    <div class="w-[60%] max-w-5xl mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Your</span> responsibility
      </p>

      <Accordion :message="message" />
    </div>
  </div>

  <!-- step-4 -->
  <div class="w-full min-h-[400px] bg-[#20407C] lg:pt-72 xxxs:pt-40">
    <div class="w-[60%] max-w-5xl mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Stef & Philips’</span>
        responsibility
      </p>
      <Accordion :message="nmessage" />
    </div>
  </div>

  <!-- step 5 -->
  <div class="min-h-[400px] w-full bg-[#1d1d33] lg:pt-72 xxxs:pt-40">
    <div class="w-[60%] max-w-5xl mx-auto flex flex-wrap items-center">
      <p class="text-white text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">Your local council’s</span>
        responsibility
      </p>
      <Accordion :message="omessage" />
    </div>
  </div>
  <!-- step 6 -->
  <div class="min-h-[600px] w-full">
    <div class="max-w-5xl mx-auto w-[60%]">
      <div class="w-full flex  justify-center">
        <div class="lg:py-20  xxxs:py-10">
          <div class="grid md:grid-cols-2  grid-cols-1 gap-12">
            <div class="font-black  lg:px-6 lg:py-40">
              <h1 class="text-[36px] text-trisec">
                <span class="font-light">During </span>your stay
              </h1>
              <p class="text-[18]  font-regular mt-4 leading-loose tracking-wide">
                Paragraph style fusce laoreet lorem id consequat rhoncus.
                Curabitur ultrices condimentum enim, id fringilla libero rutrum
                vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus
                odio. Quisque mauris nisi, cursus id dictum id, laoreet quis
                libero.
              </p>
                <button
                type="button"
                class="bg-[#2A8CFB] py-4 px-11 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Report a repair</button>
               <button
                type="button"
                class="bg-[#20407C] ml-5 py-4 px-11 text-sm font-semibold mt-8 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Your team</button>
            </div>
            <div class="lg:py-20 xxxs:py-10 px-6">
              <!-- svg image -->
             <img   src="../assets/boyCard.png" alt="">
              <!-- svg image -->
             
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- step 7 -->
   <div class="min-h-[400px] w-full bg-[#EDEDEE] lg:pt-72 xxxs:pt-40">
    <div class="w-[60%] max-w-5xl mx-auto flex flex-wrap items-center">
      <p class="text-[#20407C] text-[30px] font-light pb-6">
        <span class="text-[30px] font-black">During your stay FAQs</span>
       
      </p>
      <Accordion :message="pmessage" />
    </div>
  </div>
  <!-- step 8 -->
   <div class="max-w-[1440px] w-[60%]  mx-auto py-14 flex flex-col justify-center">
    <HorizontalCardVue :message="card3"/>
    </div>
   
   <NeedHelp />

</template>





<script setup>
import Accordion from "../components/Accordion.vue";
import CardsFlex from "../components/CardsFlex.vue";
import HorizontalCardVue from '../components/HorizontalCard.vue';
import NeedHelp from '../components/NeedHelp.vue';

const card3={direction:'rtl', img:'src/assets/Background.png', header:'Was your tenancy', boldheader:' cancelled ?', bgclass:'bg-[#f0f7fe]',btn:['Find my concil'], paragraph:'(Look at wording), we have a clear process of managing your belongings, anything to do with the tenancy contact the council.'}

const message = [
  {
    index: 0,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Our Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];
const nmessage = [
  {
    index: 0,
    header: "Your Respondibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Your Respondibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];

const omessage = [
  {
    index: 0,
    header: "Council responsibility",
    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 1,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 2,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
    text2: "Report an issue (if not urgent)",
  },
  {
    index: 3,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
  {
    index: 4,
    header: "Council responsibility",

    text: " Paragraph style fusce laoreet lorem id consequat rhoncus. Curabitur ultrices condimentum enim, id fringilla libero rutrum vel. Sed efficitur risus eu imperdiet auctor. Mauris non dapibus odio. Quisque mauris nisi, cursus id dictum id, laoreet quis libero.",
  },
];
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
.bgImg {
  background-image: url("../assets/Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
