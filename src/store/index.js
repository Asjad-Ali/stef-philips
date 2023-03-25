import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    hover: false,
  }),
  actions: {
    async updateState() {
        this.hover = !this.hover;
    },
  },

});
