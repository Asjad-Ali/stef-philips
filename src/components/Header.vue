<template>
  <div>
    <div class="h-16 w-full bg-white shadow">
      <div class="max-w-5xl h-full mx-auto flex items-center justify-between">
        <a href="#">
          <img :src="logo" class="h-6" alt />
        </a>

        <div class="flex items-center gap-x-6">
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
                class="relative w-full cursor-default rounded-full bg-white py-1 ring-trisec pl-3 pr-20 text-left text-gray-800 shadow-sm ring-2 ring-inset   bg-blue-50 focus:outline-none focus:ring-2 focus:ring-second sm:text-sm sm:leading-6"
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
          <button
            type="button"
            class="bg-sky-600 py-2 px-8 text-sm font-normal text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >Contact</button>
        </div>
      </div>
    </div>
    <div class="h-16 w-full bg-gradient-to-r from-[#1E3055] to-trisec">
      <div class="max-w-5xl h-full mx-auto flex items-center justify-between px-8">
        <a class="text-white text-sm" href="#">About us</a>
        <a class="text-white text-sm" href="#">Your home</a>
        <a class="text-white text-sm" href="#">Help and Advice</a>
        <a class="text-white text-sm" href="#">Housing Parteners</a>
        <a class="text-white text-sm" href="#">Investors</a>
        <a class="text-white text-sm" href="#">Careers</a>
        <a class="text-white text-sm" href="#">Contact</a>
      </div>
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

const people = [
  { name: "circle-flags:uk", username: "English" },
  { name: "emojione:flag-for-france", username: "France" },
  { name: "emojione:flag-for-spain", username: "Spain" },
  { name: "emojione:flag-for-pakistan", username: "Urdu" }
];

const selected = ref(people[0]);
</script>

<style lang="scss" scoped>
</style>