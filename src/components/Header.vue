<style scoped>
.dropdown-content {
  display: none; /*Hides the content*/
  position: absolute;
  background-color: #fff;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5); /*Adds a drop shadow*/
  z-index: 1;
  border-radius: 2%;
}

.dropdown-content:after {
  content: ""; /* Required to display content */
  position: absolute; /* Sets the position absolute to the top div */
  top: 0;
  left: 30%; /* position the little arrow */
  margin-left: -15px;
  margin-top: -15px; /* Set margin equal to border px */
  width: 0;
  z-index: 1;
  height: 0;
  border-bottom: solid 15.5px #fff; /* Creates the arrow pointing up, to change to a notch instead user border-top */
  border-left: solid 15px transparent; /* Creates triangle effect */
  border-right: solid 15px transparent; /* Creates triangle effect */
}

.dropdown-content a {
  float: none;
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  opacity: 0.6;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.shiftx-enter-active,
.shiftx-leave-active {
  transition: all 2s ease-in-out;
}
.shiftx-enter,
.shiftx-leave-to {
  transform: translateX(100px);
}
</style>

<template>
  <div>
    <div class="w-full flex justify-center upper-nav">
      <div class="h-[6.25rem] lg:w-[70%] xxs:w-[95%] sm:w-[75%] md:w-[94%] nav">
        <div class="h-full flex items-center justify-between wrap">
          <router-link class="nav-link" to="/home">
            <img
              class="LogoM"
              src="../assets/Svg/HeaderLogo.svg"
              alt="HeaderLogoM"
            />
            <img
              class="LogoN"
              src="../assets/Svg/MobileHeaderLogo.svg"
              alt="HeaderLogoN"
            />
          </router-link>

          <div class="flex items-center gap-x-6 search">
            <div
              class="header-search h-[44px] w-[44px] rounded-full ring-2 bg-blue-50 flex text-trisec items-center ring-trisec justify-center"
            >
              <span class="text-[28px]">
                <Icon class="" icon="ic:round-search" />
              </span>
            </div>
            <img
              class="mobile-search-icon"
              src="../assets/Svg/MobileSearchIcon.svg"
              alt=""
            />
            <div></div>
            <!-- <input type="checkbox"> -->
            <!-- <label for="check" class="w-full"> -->
            <!-- <img id="open" class="burger" src="../assets/Svg/HeaderBurger.svg" alt=""> -->
            <!-- <img  id="cancel" class="mobile-search-icon" src="../assets/Svg/CancelButton.svg" alt=""> -->
            <!-- </label> -->
            <img class="burger" src="../assets/Svg/HeaderBurger.svg" alt="" />

            <div class="listbox">
              <Listbox as="div" v-model="selected">
                <div class="relative">
                  <ListboxButton
                    class="relative w-[220px] h-[44px]cursor-default rounded-full pt-2 ring-trisec pr-20 text-left text-gray-800 shadow-sm ring-2 ring-inset bg-blue-50 focus:outline-none focus:ring-2 focus:ring-second sm:text-sm sm:leading-6"
                  >
                    <span class="inline-flex w-full items-center pl-3 truncate">
                      <span class="truncate">
                        <Icon class="w-[25px] h-[25px]" :icon="selected.name" />
                      </span>
                      <span class="ml-2 truncate font-xbold-custom text-[14px]">
                        {{ selected.username }}
                      </span>
                    </span>
                    <span
                      class="text-[25px] pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <Icon
                        icon="material-symbols:keyboard-arrow-down-rounded"
                      />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        as="template"
                        v-for="person in people"
                        :key="person.username"
                        :value="person"
                        class="w-[222px] h-[44px]"
                        v-slot="{ active, selected }"
                      >
                        <li
                          :class="[
                            active ? 'bg-sky-600 text-white' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9',
                          ]"
                        >
                          <div class="flex items-center">
                            <span
                              :class="[
                                selected ? 'font-semibold' : 'font-normal',
                                'truncate',
                              ]"
                            >
                              <Icon :icon="person.name" />
                            </span>
                            <span
                              :class="[
                                active ? 'text-sky-200' : 'text-gray-500',
                                'ml-2 truncate',
                              ]"
                              >{{ person.username }}</span
                            >
                          </div>

                          <span
                            v-if="selected"
                            :class="[
                              active ? 'text-white' : 'text-sky-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            ]"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>

            <router-link to="/contact">
              <button
                type="button"
                class="contact-btn w-[140px] h-[44px] bg-[#2A8CFB] py-2 px-8 font-xbold-custom text-[14px] text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Contact
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-[5rem] w-full bg-gradient-to-r from-[#20407c] to-[#20407c] bl"
    >
      <nav
        class="lg:w-[70%] xxxs:w-[98%] sm:w-[96%] h-full mx-auto flex items-center justify-right inner"
      >
        <router-link
          active-class="active"
          class="lg:ml-[0px] lg:mr-[10px] sm:ml-[10px] sm:mr-[8px] xxxs:ml-[7px] xxxs:mr-[7px] text-white text-sm font-x-bold dropdown h-full flex justify-center items-center"
          to="/about-us"
        >
          <span>
            About us
            <nav class="about-dropdown dropdown-content">
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/community"
                >Community</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/meet-the-team"
                >Meet The Team
              </router-link>
              <div class="dropdown-1 p-splitbutton cutom">
                <router-link
                  class="p-button-label font-semibold text-sm"
                  to="/news"
                  >News</router-link
                >
                <div class="pi pi-chevron-right">
                  <nav class="news-dropdown">
                    <router-link
                      active-class="active"
                      class="font-semibold text-sm"
                      to="/news-article"
                      >News Article
                    </router-link>
                  </nav>
                </div>
              </div>
            </nav>
          </span>
        </router-link>

        <router-link
          exact-active-class="exact-active"
          class="lg:mx-[15px] sm:mx-[8px] xxxs:mx-[3px] text-white text-sm dropdown-h h-full flex justify-center items-center font-x-bold"
          to="/your-home"
        >
          <span
            >Your home
            <nav class="home-dropdown dropdown-content">
              <!-- <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/quick-report"
                >Quick report</router-link
              > -->
              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/repair-and-maintenance"
                >Repair & maintenance</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/anti-social-behaviour"
                >Anti-social behaviour</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/other-issues"
                >Other issues</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/tax-council"
                >Council tax and utilities</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/submitted-issue"
                >Submitted</router-link
              >

              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/hours-emergency"
                >Out of hours emergencies</router-link
              >
              <div class="dropdown-1 p-splitbutton cutom">
                <router-link
                  active-class="active"
                  class="p-button-label font-semibold text-sm"
                  to="tenant-services"
                  >Tenant services</router-link
                >
                <div class="pi pi-chevron-right dropdown-1">
                  <nav class="news-dropdown">
                    <div class="dropdown-2 p-splitbutton cutom">
                      <router-link
                        active-class="active"
                        class="p-button-label font-semibold text-sm"
                        to="/temporary-accomodation"
                        >Temporary accomodation</router-link
                      >
                    </div>
                    <router-link
                      active-class="active"
                      class="font-semibold text-sm"
                      to="prs"
                      >PRS</router-link
                    >
                  </nav>
                </div>
              </div>
              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="home-meetTheTeam"
                >Meet your team</router-link
              >
            </nav>
          </span>
        </router-link>
        <router-link
          active-class="active"
          class="lg:mx-[15px] sm:mx-[8px] xxxs:mx-[3px] text-white text-sm font-x-bold dropdown h-full flex justify-center items-center"
          to="/help-and-advice"
        >
          <span
            >Help & advice
            <nav class="about-dropdown help-dropdown dropdown-content">
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/national-helplines"
                >National helplines</router-link
              >
            </nav>
          </span>
        </router-link>

        <router-link
          active-class="active"
          class="lg:mx-[15px] sm:mx-[8px] xxxs:mx-[3px] text-white text-sm font-x-bold dropdown h-full flex justify-center items-center"
          to="/housing-partners"
        >
          <span
            >Housing partners
            <nav class="about-dropdown housing-dropdown dropdown-content">
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/temporary-accommodation"
                >Temporary accommodation</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/housing-partners-prs"
                >PRS</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/accommodation-types"
                >Accommodation types</router-link
              >
              <div class="dropdown-1 p-splitbutton cutom">
                <router-link
                  active-class="active"
                  class="p-button-label font-semibold text-sm"
                  to="our-projects"
                  >Our Projects</router-link
                >
                <div class="pi pi-chevron-right dropdown-1">
                  <nav class="news-dropdown">
                    <router-link
                      active-class="active"
                      class="font-semibold text-sm"
                      to="project-template"
                      >Project Template</router-link
                    >
                    <router-link
                      active-class="active"
                      class="font-semibold text-sm"
                      to="where-we-operate"
                      >Where we Operate</router-link
                    >
                  </nav>
                </div>
              </div>
            </nav>
          </span>
        </router-link>

        <router-link
          active-class="active"
          class="lg:mx-[15px] sm:mx-[8px] xxxs:mx-[3px] text-white text-sm font-x-bold dropdown h-full flex justify-center items-center"
          to="/investors"
        >
          <span
            >Investors
            <nav class="about-dropdown investor-dropdown dropdown-content">
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/corporate-investors"
                >Corporate investors
              </router-link>
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/private-investors"
                >Private Investor</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/landlords"
                >Landlords
              </router-link>
            </nav>
          </span>
        </router-link>

        <router-link
          active-class="active"
          class="lg:mx-[15px] sm:mx-[8px] xxxs:mx-[3px] text-white text-sm font-x-bold"
          to="careers"
          >Careers</router-link
        >

        <router-link
          active-class="active"
          class="lg:mx-[15px] sm:mx-[5px] text-white text-sm font-x-bold dropdown h-full flex justify-center items-center"
          to="/contact"
        >
          <span
            >Contact
            <nav class="about-dropdown contact-dropdown dropdown-content">
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/faqs"
                >FAQs</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm"
                to="/press-&-media"
                >Press & media</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/contact-community"
                >Community</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/contact-housing-partners"
                >Housing partners</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/investors"
                >Investors</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/general"
                >General</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/lettings-valuation"
                >Lettings valuation</router-link
              >
              <router-link
                active-class="active"
                class="font-semibold text-sm text-[20px]"
                to="/contact-submitted"
                >Submitted</router-link
              >
            </nav>
          </span>
        </router-link>
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
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { useAppStore } from "../store/index";

function stateHandler() {
  console.log(state.value);
  hover.hover = !state.value;
}

const people = [
  {
    name: "circle-flags:uk",
    username: "English",
  },
  {
    name: "emojione:flag-for-france",
    username: "France",
  },
  {
    name: "emojione:flag-for-spain",
    username: "Spain",
  },
  {
    name: "emojione:flag-for-pakistan",
    username: "Urdu",
  },
];

const selected = ref(people[0]);
</script>

<style scoped>
label #open,
#cancel {
  float: right;
}

.font-x-bold {
  font-family: "aktiv-grotesk-std", sans-serif;
  src: url("./assets/Aktiv Grotesk/TTF/AktivGrotesk-XBold.ttf");
  font-size: 18px;
}
.dropdown-h:hover .home-dropdown {
  display: block;
  margin-top: 27px;
  animation-name: fade;
  animation-duration: 0.5s;
  /* animation-iteration-count: infinite; */
}
.home-dropdown {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.home-dropdown a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.home-dropdown a:hover {
  background-color: #f1f1f1;
}

/* ////////////////////////////// */

.p-splitbutton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
}
.p-button-label {
  color: black;
}

.dropdown-1:hover .news-dropdown {
  display: block;
  margin-left: 22px;
  margin-top: -28px;
}
.news-dropdown {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0);
  z-index: 1;
}
.news-dropdown a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.news-dropdown a:hover {
  background-color: #f1f1f1;
}
.cutom:hover {
  background-color: #f1f1f1;
}
/* ////////////////////////////// */

.dropdown-2:hover .accomodation-dropdown {
  display: block;
  margin-left: 22px;
  margin-top: -28px;
}
.accomodation-dropdown {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0);
  z-index: 1;
}
.accomodation-dropdown a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.accomodation-dropdown a:hover {
  background-color: #f1f1f1;
}

/* ////////////////////////////// */

/* .dropdown:hover .about-dropdown {
  display: block;
  margin-top: 26px;
  background-color: red;
} */
.dropdown:hover .about-dropdown {
  margin-top: 26px;
  display: block;
  animation-name: fade;
  animation-duration: 0.5s;
  /* animation-iteration-count: infinite; */
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  /* 50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  } */
}

.about-dropdown {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.about-dropdown a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.about-dropdown a:hover {
  background-color: #f1f1f1;
}
/* ///////////////////// */
.exact-active {
  border-bottom: 2px solid whitesmoke;
}
.active {
  border-bottom: 2px solid whitesmoke;
}
.LogoN {
  display: none;
}
.mobile-search-icon {
  display: none;
}
.burger {
  display: none;
}

@media (max-width: 1198px) {
  .dropdown:hover .about-dropdown {
    display: block;
    margin-top: 19px;
  }
  .dropdown-h:hover .home-dropdown {
    display: block;
    margin-top: 19px;
  }
}
@media (max-width: 800px) {
  .nav {
    width: 100%;
    padding: 5px;
  }
  .LogoN {
    display: inline-block;
    margin-left: 20px;
  }
  .LogoM {
    display: none;
  }
  .upper-nav {
    background: #1d1d33;
    height: 5.5rem;
  }
  .mobile-search-icon {
    display: inline;
    margin-bottom: 5px;
    margin-right: -22px;
  }
  .header-search {
    display: none;
  }
  .burger {
    display: inline;
    margin-bottom: 5px;
  }
  .listbox {
    display: none;
  }
  .contact-btn {
    display: none;
  }
  .dropdown:hover .about-dropdown {
    display: block;
    margin-top: 27px;
  }
  .dropdown-h:hover .home-dropdown {
    display: block;
    margin-top: 27px;
  }
}
@media (max-width: 723px) {
  .dropdown:hover .about-dropdown {
    display: block;
    margin-top: 18px;
  }
  .dropdown-h:hover .home-dropdown {
    display: block;
    margin-top: 18px;
  }
}
@media (max-width: 660px) {
  .wrap {
    flex-wrap: wrap;
  }
  .upper-nav {
    height: 5rem;
  }
  .mobile-search-icon {
    margin-bottom: 5px;
    margin-right: -16px;
  }
  .burger {
    margin-bottom: 5px;
  }
}

@media (max-width: 565px) {
  .upper-nav {
    height: 5rem;
  }
  .mobile-search-icon {
    margin-bottom: 5px;
    margin-right: 3px;
  }
  .burger {
    margin-bottom: 5px;
  }
}
@media (max-width: 550px) {
  /* .nav {
    width: 100%;
  } */
  .inner a {
    font-size: 12px;
  }
}

@media (max-width: 500px) {
  .nav {
    width: 100%;
  }
  .upper-nav {
    height: 5rem;
  }
  .mobile-search-icon {
    margin-bottom: 5px;
    margin-right: -20px;
  }
  .burger {
    margin-bottom: 5px;
  }
}
@media (max-width: 460px) {
  .search {
    gap: 1rem;
  }
  .mobile-search-icon {
    margin-bottom: 5px;
    margin-right: 1px;
  }
  .burger {
    margin-bottom: 5px;
  }
}
@media (max-width: 435px) {
  .search {
    gap: 0.4rem;
  }
}
@media (max-width: 400px) {
  .inner a {
    font-size: 9px;
  }
}
</style>
