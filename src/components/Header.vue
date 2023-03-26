<template>
  <div>
  <div class="w-full flex justify-center upper-nav">
    <div class="h-16 w-[60%] nav">
      <div class="max-w-5xl h-full mx-auto flex items-center justify-between gap-4 wrap">
        <a href="#">
          <img :src="logo" class="h-auto" alt />
        </a>

        <div class="flex items-center gap-x-6 search">
          <div
            class="h-8 w-8 rounded-full ring-2 bg-blue-50 flex text-trisec items-center ring-trisec justify-center"
          >
            <span class="text-xl">
              <Icon icon="ic:round-search" />
            </span>
          </div>
          <Listbox as="div" v-model="selected">
            <div class="relative">
              <ListboxButton
                class="relative w-full cursor-default rounded-full py-1 ring-trisec pl-3 pr-20 text-left text-gray-800 shadow-sm ring-2 ring-inset bg-blue-50 focus:outline-none focus:ring-2 focus:ring-second sm:text-sm sm:leading-6"
              >
                <span class="inline-flex w-full items-center truncate">
                  <span class="truncate">
                    <Icon :icon="selected.name" />
                  </span>
                  <span class="ml-2 truncate text-gray-500">{{ selected.username }}</span>
                </span>
                <span
                  class="pointer-events-none text-gray-500 text-xl absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    as="template"
                    v-for="person in people"
                    :key="person.username"
                    :value="person"
                    v-slot="{ active, selected }"
                  >
                    <li
                      :class="[active ? 'bg-sky-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']"
                    >
                      <div class="flex">
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'truncate']">
                          <Icon :icon="person.name" />
                        </span>
                        <span
                          :class="[active ? 'text-sky-200' : 'text-gray-500', 'ml-2 truncate']"
                        >{{ person.username }}</span>
                      </div>

                      <span
                        v-if="selected"
                        :class="[active ? 'text-white' : 'text-sky-600', 'absolute inset-y-0 right-0 flex items-center pr-4']"
                      >
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
          <router-link to="/contact">
          <button
            type="button"
            class="btn bg-sky-600 py-2 px-8 text-sm font-normal text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >Contact</button>
        </router-link>
        </div>
      </div>
    </div>
  
  </div>
  <div class="h-12 w-full   bg-gradient-to-r from-[#1D1D33] to-[#2A8CFB] bl ">
      <nav class="w-[60%] h-full mx-auto flex items-center justify-between gap-4 inner p-3 ">
        <router-link active-class="active" class="text-white text-sm" to="/about-us"><span @mouseover="stateHandler">About us</span></router-link> 
        <router-link exact-active-class="exact-active" class="text-white text-sm" to="/home" > <span @mouseover="stateHandler">Your home</span></router-link>
        <router-link active-class="active" class="text-white text-sm" to="/help-and-advice">Help and Advice</router-link>
        <router-link active-class="active" class="text-white text-sm" to="/housing-partners">Housing Partners</router-link>
        <router-link active-class="active" class="text-white text-sm" to="investors">Investors</router-link>
        <router-link active-class="active" class="text-white text-sm" to="careers">Careers</router-link>
        <router-link active-class="active" class="text-white text-sm" to="/contact"><span @mouseover="stateHandler">Contact</span></router-link>
      </nav>
    </div> 
  </div>
</template>

<script setup>
import logo from "../assets/logo.png";
import { ref } from "vue";
import { Icon } from "@iconify/vue";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import {useAppStore} from "../store/index"
import { computed } from "vue";

const hover = useAppStore();
const state = computed(() => {
  return hover.hover;
});
function stateHandler(){
  console.log(state.value)
hover.hover = !state.value;
}

const people = [
  { name: "circle-flags:uk", username: "English" },
  { name: "emojione:flag-for-france", username: "France" },
  { name: "emojione:flag-for-spain", username: "Spain" },
  { name: "emojione:flag-for-pakistan", username: "Urdu" }
];

const selected = ref(people[0]);
</script>

<style  scoped>
.exact-active{
  border-bottom: 2px solid whitesmoke;
  padding-bottom: 3px;
}
.active{
  border-bottom: 2px solid whitesmoke;
  padding-bottom: 3px;
}
@media(max-width:800px){
.nav{
  width:100%;
  padding:20px  
}
.inner{
    width:100%;
  }
}
@media (max-width:660px){
  .wrap{
    flex-wrap: wrap;
  }
  .upper-nav{
    height: 120px;
  }
}


@media(max-width:550px){
.nav{
  width:100%;

}

}
@media(max-width:500px){
.nav{
  width:100%;
}


}
@media(max-width:460px){
.search{
  gap:1rem;
}

}
@media(max-width:435px){
.search{
  gap:0.4rem;
}
.inner a {
  font-size:12px;
}
}
@media(max-width:400px){

.inner a {
  font-size:10px;
}
}
</style>