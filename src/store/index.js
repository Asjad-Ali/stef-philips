import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    hover: false,
    aboutUs : false,
  }),
  actions: {
    async updateState() {
        this.hover = !this.hover;
    },
    async updateAbout() {
        this.aboutUs = !this.aboutUs;
    },
  },

});
