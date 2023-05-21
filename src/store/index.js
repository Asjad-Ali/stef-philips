import { defineStore } from "pinia";
import API from "../Service/API";
import useToast from '../helper/useToast'

export const useAppStore = defineStore("store", {
  state: () => ({
    hover: false,
    aboutUs : false,
    loader: false,
    help_and_advices: {},
    national_helplines: {},
    housing_partners: {},
    temporary_accommodations: {},
  }),
  actions: {
    async helpAndAdvices(){
      this.loader = true
      const response = await API.get("api/help-and-advice-emergencies?populate=deep,4")
      this.loader = false
      if(response.status == 200)
        this.help_and_advices = response.data.data[0].attributes.help_and_advice.data.attributes
    },
    async nationalHelplines(){
      this.loader = true
      const response = await API.get("api/national-helplines?populate=deep,3")
      this.loader = false
      if(response.status == 200)
        this.national_helplines = response.data.data[0].attributes
    },
    async housingPartners(){
      this.loader = true
      const response = await API.get("api/housing-partners?populate=deep,3")
      this.loader = false
      if(response.status == 200)
        this.housing_partners = response.data.data[0].attributes
    },
    async temporaryAccommodations(){
      this.loader = true
      const response = await API.get("api/temporary-accoms?populate=deep,3")
      this.loader = false
      if(response.status == 200)
        this.temporary_accommodations = response.data.data[0].attributes
    },








    async updateState() {
        this.hover = !this.hover;
    },
    async updateAbout() {
        this.aboutUs = !this.aboutUs;
    },
  },

});
