<style scoped>
.submenu-sec {
    padding: 25px 0 0;
    position: absolute;
    margin-top: 0;
}

.dropdown-content.subInner {
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  margin: 0;
  box-shadow: 0px 4px 12px 0px rgba(29, 29, 51, 10%);
  background: #F0F7FE;
  bottom: 0;
}

.dropdown-content.subInner:after {
  content: none
}

.sub-inner-menu:hover .dropdown-content.subInner{
  display: block
 }

.navbar-menu .nav-link .dropdown-content a {
  color: #333;
  padding: 6px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  white-space: nowrap
}

.navbar-menu .nav-link .dropdown-content .sub-inner-menu:hover {
  background-color: #F0F7FE
}

.navbar-menu .nav-link .dropdown-content a.router-link-active {
  color: #2A8CFB
}

.shiftx-enter-active,
.shiftx-leave-active {
  transition: all 2s ease-in-out;
}
.shiftx-enter,
.shiftx-leave-to {
  transform: translateX(100px);
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-menu .nav-link a {
  display: inline-block;
  padding: 2rem 0;
}

header {
  position: relative;
  z-index: 99
}

.search-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 100%;
  bottom: 0;
  background: #fff;
  padding: 30px 20px;
  box-shadow: 0 4px 12px 0 rgba(29,29,51,0.1);
  transition: 0.15s all ease-in
}

.search-box .search-btn {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%)
}

.search-box.active {
  top: 70px
}

.submenu-sec {
  display: none
}
@media(min-width: 767px) {
  .dropdown-content {
    position: relative;
    background-color: #fff;
    min-width: 150px;
    box-shadow: 0px 4px 12px 0px rgba(29, 29, 51, 10%);
    z-index: 1;
    padding: 6px 0;
  }
  .nav-link:hover .submenu-sec:not(.subInner) {
    display: block;
  }
  .sub-dropdown:hover .dropdown-content {
    display: block;
    opacity: 1
  }
  .mobile-back {
    display: none;
  }

  .nav-link a{
    border-bottom: 2px solid transparent;
  }
  .nav-link a.active, .nav-link a.exact-active {
    border-bottom-color: whitesmoke;
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
  .navbar-menu .nav-link:not(:last-child) {
    margin-right: 8px;
  }

  .navbar-menu .nav-link:not(:first-child) {
    margin-left: 8px;
  }
  .mobile-arrow {
    display: none;
  }
  .burger-container {
    display: none;
  }
  .mobile-search-icon {
    display: none
  }
}

@media (min-width: 1199px) {
  .navbar-menu .nav-link:not(:last-child) {
    margin-right: 22px;
  }

  .navbar-menu .nav-link:not(:first-child) {
    margin-left: 22px;
  }
}

@media(max-width: 767px) {
  .burger-container {
    display: inline-block;
    height: 40px;
    max-width: 40px;
    flex: 0 0 40px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: 10px;
    margin-right: 35px;
    background: #2a8cfb;
  }
  .burger-container .burger {
    height: 100%;
    position: relative;
    display: block;
    top: 0;
    width: 100%;
    margin: 0 auto;
    max-width: 24px;
  }
  .burger-container .burger .bar {
    width: 100%;
    height: 2px;
    display: block;
    position: relative;
    background: #fff;
    -webkit-transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
  .burger-container .burger .bar.topBar {
    -webkit-transform: translateY(0px) rotate(0deg);
    transform: translateY(0px) rotate(0deg);
    top: -6px
  }
  .burger-container .burger .bar.btmBar {
    bottom: -6px;
  }
  .burger-container .burger:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    z-index: 1;
    background: #fff;
  }
  .burger-container.active .burger .bar {
    transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition-delay: 0.2s;
  }
  .burger-container.active .burger .bar.topBar {
    -webkit-transform: translateY(7px) rotate(45deg);
    transform: translateY(7px) rotate(45deg);
  }
  .burger-container.active .burger .bar.btmBar {
    top: 0;
    -webkit-transform: translateY(-1px) rotate(-45deg);
    transform: translateY(-1px) rotate(-45deg);
  }
  .burger-container.active .burger:before {
    opacity: 0;
  }
  .mobile-search-icon {
    flex: 0 0 38px;
    padding: 7px 10px
  }
  .main-menu {
    height: calc(100svh - 70px);
    position: absolute;
    right: 100%;
    z-index: 9;
    transition: 0.25s all ease-in
  }
  .main-menu.active {
    right: 0
  }
  .navbar-menu {
    flex-direction: column;
    padding: 20px 0;
  }

  .navbar-menu .nav-link .dropdown-content a {
    color: #fff !important;
    font-size: 18px;
    padding: 20px 16px !important;
    font-weight: 400;
    opacity: 1;
    border-left: 4px solid transparent
  }

  .navbar-menu .nav-link {
    width: 100%;
    margin: 0;
    position: relative
  }
  .navbar-menu .submenu-sec {
    display: block !important;
    height: calc(100svh - 70px);
    width: 100%;
    position: fixed;
    left: 100%;
    width: 100%;
    margin: 0 !important;
    top: 70px !important;
    z-index: 10;
    box-shadow: none;
    background: #20407C;
    color: #fff;
    padding: 20px 0;
  }

  .mobile-back {
    padding-left: 20px;
    padding-right: 20px;
  }

  .navbar-menu .dropdown-content.subInner {
    z-index: 11;
    display: block;
    left: 110%;
    height: calc(100svh - 70px);
    width: 100%;
    position: fixed;
    width: 100%;
    margin: 0 !important;
    top: 70px !important;    
    box-shadow: none;
    background: #20407C;
    padding: 20px 0;
  }

  .navbar-menu .dropdown-content.subInner.active{
    left: 0
  }

  .navbar-menu .submenu-sec.active {
    left: 0;
  }

  .navbar-menu .nav-link a {
    padding: 20px 0;
    display: block;
  }

  .navbar-menu .nav-link a span {
    display: block;
    position: relative;
  }
  .mobile-arrow {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 9;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    color: #fff
  }
  .navbar-menu .nav-link .dropdown-content a.router-link-active {
    background: #1D1D33;
    border-color: #fff
  }
  .bannerContent {
   padding: 110px 16px 45px 30px 
  }
  .sub-inner-menu {
    position: relative
  }
  .submenu-sec.active {
    display: block
  }
}


</style>

<template>
  <header ref="main">
    <div class="w-full flex justify-center upper-nav">
      <div class="container h-[6.25rem] nav">
        <div class="h-full flex items-center justify-between wrap">
          <router-link class="nav-link" to="/home"> <img class="LogoM" src="../assets/Svg/HeaderLogo.svg" alt="HeaderLogoM" /> <img class="LogoN" src="../assets/Svg/MobileHeaderLogo.svg" alt="HeaderLogoN" /> </router-link>
          <div class="flex items-center gap-x-6 search">
            <div class="header-search h-[44px] w-[44px] rounded-full ring-2 bg-blue-50 flex text-trisec items-center ring-trisec justify-center"> 
              <span class="text-[28px]">
                <Icon class="" icon="ic:round-search" />
              </span> 
            </div>
            <button class="mobile-search-icon" @click="openSearchbar">
              <img src="../assets/Svg/MobileSearchIcon.svg" alt="" />
            </button>
            <div class="burger-container" :class="{active: state.menuActive}">
              <button class="burger" @click="openMainMenu">
                <span class="bar topBar"></span>
                <span class="bar btmBar"></span>
              </button>
            </div>
            <!-- <img class="burger" src="../assets/Svg/HeaderBurger.svg" alt="" /> -->
            <div class="listbox hidden md:inline-block">
              <Listbox as="div" v-model="selected">
                <div class="relative">
                  <ListboxButton class="relative w-[220px] h-[44px]cursor-default rounded-full pt-2 ring-trisec pr-20 text-left text-gray-800 shadow-sm ring-2 ring-inset bg-blue-50 focus:outline-none focus:ring-2 focus:ring-second sm:text-[18px] sm:leading-6"> 
                    <span class="inline-flex w-full items-center pl-3 truncate">
                      <span class="truncate">
                        <Icon class="w-[25px] h-[25px]" :icon="selected.name" />
                      </span> 
                      <span class="ml-2 truncate font-xbold-custom text-[14px]">
                        {{ selected.username }}
                      </span> 
                    </span> 
                    <span class="text-[25px] pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <Icon icon="material-symbols:keyboard-arrow-down-rounded"/>
                    </span>
                  </ListboxButton>
                  <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <ListboxOptions class="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-[18px]">
                      <ListboxOption as="template" v-for="person in people" :key="person.username" :value="person" class="w-[222px] h-[44px]" v-slot="{ active, selected }">
                        <li :class="[active ? 'bg-sky-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9',]">
                          <div class="flex items-center"> 
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'truncate',]">
                              <Icon :icon="person.name" />
                            </span>
                            <span :class="[active ? 'text-sky-200' : 'text-gray-500', 'ml-2 truncate',]">{{ person.username }}</span>
                          </div>
                          <span v-if="selected" :class="[ active ? 'text-white' : 'text-sky-600', 'absolute inset-y-0 right-0 flex items-center pr-4',]">
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
              <button type="button" class="contact-btn w-[140px] h-[44px] bg-[#2A8CFB] py-2 px-8 font-xbold-custom text-[14px] text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"> Contact </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="search-box" :class="{active: state.isSearchbar}">
      <form>
        <div class="searchbar relative">
          <input type="text" class="form-input px-4 py-3 pr-[50px] border-2 rounded-full w-full border-[#22427A]">
          <button class="search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18.496" height="18.496" viewBox="0 0 18.496 18.496">
              <g id="Search" transform="translate(-246.202 -25.459)">
                <path id="Path_1" data-name="Path 1" d="M18.795,11.647A7.147,7.147,0,1,1,11.647,4.5a7.147,7.147,0,0,1,7.147,7.147Z" transform="translate(242.702 21.959)" fill="none" stroke="#22427A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path id="Path_2" data-name="Path 2" d="M28.861,28.861l-3.886-3.886" transform="translate(234.423 13.679)" fill="none" stroke="#22427A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div> 
		<div class="w-full bg-gradient-to-r from-[#20407c] to-[#20407c] main-menu flex flex-col" :class="{active: state.menuActive}">
			<nav class="container">
				<div class="navbar-menu">
					<div class="nav-link">
						<router-link active-class="active" class="text-white text-[18px] dropdown font-Medium-custom" to="/about-us"> 
              About us
            </router-link>
            <div class="mobile-arrow" @click="openSubMenu('aboutUs')">
              <i class="pi pi-chevron-right"></i>
            </div>
            
            <div class="submenu-sec" :class="{active: state.activeId == 'aboutUs'}">
              <nav class="dropdown-content">
                <button class="py-[16px] w-full text-left mobile-back font-Medium-custom text-[18px]" @click="openSubMenu">
                  <i class="pi pi-chevron-left"></i>
                  About Us
                </button>
                <router-link class="font-Medium-custom text-[18px]" to="/community">Community</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/meet-the-team" >Meet The Team</router-link>
                <div class="sub-inner-menu">
                  <router-link class="sub-dropdown font-Medium-custom text-[18px]" to="/news" >
                    <span class="font-Medium-custom flex items-center justify-between">
                      News
                      <i class="pi pi-chevron-right hidden md:inline-block"></i>
                    </span>  
                  </router-link>
                  <div class="mobile-arrow" @click="openInnerSubMenu('news')">
                    <i class="pi pi-chevron-right"></i>
                  </div>
                  <nav class="dropdown-content subInner" :class="{active: state.innerActiveId == 'news'}">
                    <button class="py-[16px] block w-full text-left mobile-back font-regular text-[18px]" @click="openInnerSubMenu">
                      <i class="pi pi-chevron-left"></i>
                      News
                    </button>
                    <router-link class="font-Medium-custom text-[18px]" to="/news-article" >News Article</router-link>
                  </nav>
                </div>
              </nav>
            </div>  
					</div>

          <div class="nav-link">
						<router-link exact-active-class="exact-active" class="font-Medium-custom text-white text-[18px] dropdown lg:text-[18px] sm:text-[16px]" to="/your-home"> 
              Your home
            </router-link>
            <div class="mobile-arrow" @click="openSubMenu('yourhome')">
              <i class="pi pi-chevron-right"></i>
            </div>
            <div class="submenu-sec" :class="{active: state.activeId == 'yourhome'}">
              <nav class="dropdown-content">
                <button class="py-[16px] w-full text-left mobile-back font-Medium-custom text-[18px]" @click="openSubMenu">
                  <i class="pi pi-chevron-left"></i>
                  Your home
                </button>
                <router-link class="font-Medium-custom text-[18px]" to="/repair-and-maintenance" >Repair & maintenance</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/anti-social-behaviour">Anti-social behaviour</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/other-issues" >Other issues</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/tax-council" >Council tax and utilities</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/hours-emergency" >Out of hours emergencies</router-link>
                <div class="sub-inner-menu">
                  <router-link class="font-Medium-custom text-[18px] sub-dropdown" to="tenant-services">
                    <span class="font-Medium-custom flex items-center justify-between">
                      Tenant services
                      <i class="pi pi-chevron-right hidden md:inline-block"></i>
                    </span>
                  </router-link>
                  <div class="mobile-arrow" @click="openInnerSubMenu('tenantservice')">
                    <i class="pi pi-chevron-right"></i>
                  </div>
                  <nav class="subInner dropdown-content" :class="{active: state.innerActiveId == 'tenantservice'}">
                    <button class="py-[16px] block w-full text-left mobile-back font-Medium-custom text-[18px]" @click="openInnerSubMenu">
                      <i class="pi pi-chevron-left"></i>
                      Tenant services
                    </button>
                    <router-link class="font-Medium-custom text-[18px]" to="/temporary-accomodation" >Temporary accomodation</router-link>
                    <router-link class="font-Medium-custom text-[18px]" to="prs">PRS</router-link>
                  </nav>
                </div>
                <router-link class="font-Medium-custom text-[18px]" to="home-meetTheTeam">Meet your team</router-link>
              </nav>
            </div>
					</div>
					<div class="nav-link">
						<router-link active-class="active" class="font-Medium-custom text-white text-[18px] font-x-bold lg:text-[18px] sm:text-[16px] dropdown" to="/help-and-advice"> 
              Help & advice
            </router-link>
            <div class="mobile-arrow" @click="openSubMenu('helpAdvice')">
              <i class="pi pi-chevron-right"></i>
            </div>
            <div class="submenu-sec" :class="{active: state.activeId == 'helpAdvice'}">
              <nav class="dropdown-content">
                <button class="py-[16px] w-full text-left mobile-back font-Medium-custom text-[18px]" @click="openSubMenu">
                  <i class="pi pi-chevron-left"></i>
                  Help & advice
                </button>
                <router-link class="font-Medium-custom text-[18px]" to="/national-helplines">National helplines</router-link>
              </nav>
            </div>
					</div>
					<div class="nav-link">
						<router-link active-class="active" class="font-Medium-custom text-white text-[18px] font-x-bold lg:text-[18px] sm:text-[16px] dropdown" to="/housing-partners"> 
              Housing partners
            </router-link>
            <div class="mobile-arrow" @click="openSubMenu('housingpartner')">
              <i class="pi pi-chevron-right"></i>
            </div>
            <div class="submenu-sec" :class="{active: state.activeId == 'housingpartner'}">
              <nav class="dropdown-content">
                <button class="py-[16px] w-full text-left mobile-back font-Medium-custom text-[18px]" @click="openSubMenu">
                  <i class="pi pi-chevron-left"></i>
                  Housing partners
                </button>
                <router-link class="font-Medium-custom text-[18px]" to="/temporary-accommodation">Temporary accommodation</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/housing-partners-prs">PRS</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/accommodation-types">Accommodation types</router-link>
                <div class="sub-inner-menu">
                  <router-link class="sub-dropdown font-Medium-custom text-[18px]" to="our-projects">
                    <span class="font-Medium-custom flex items-center justify-between">
                      Our Projects
                      <i class="pi pi-chevron-right hidden md:inline-block"></i>
                    </span>
                    <div class="mobile-arrow" @click="openInnerSubMenu('ourProjects')">
                      <i class="pi pi-chevron-right"></i>
                    </div>
                    <nav class="subInner dropdown-content" :class="{active: state.innerActiveId == 'ourProjects'}">
                      <button class="py-[16px] block w-full text-left mobile-back font-Medium-custom text-[18px]" @click="openInnerSubMenu">
                        <i class="pi pi-chevron-left"></i>
                        Our Projects
                      </button>
                      <router-link active-class="active" class="font-Medium-custom text-[18px]" to="project-template" >Project Template</router-link>
                      <router-link active-class="active" class="font-Medium-custom text-[18px]" to="where-we-operate">Where we Operate</router-link>
                    </nav>
                  </router-link>
                </div>
              </nav>
            </div>
					</div>
					<div class="nav-link">
						<router-link active-class="active" class="font-Medium-custom text-white text-[18px] lg:text-[18px] sm:text-[16px] dropdown" to="/investors"> 
              Investors
            </router-link>
            <div class="mobile-arrow" @click="openSubMenu('investors')">
              <i class="pi pi-chevron-right"></i>
            </div>
            <div class="submenu-sec" :class="{active: state.activeId == 'investors'}">
              <nav class="dropdown-content">
                <button class="py-[16px] w-full text-left mobile-back font-Medium-custom text-[18px]" @click="openSubMenu">
                  <i class="pi pi-chevron-left"></i>
                  Investors
                </button>
                <router-link class="font-Medium-custom text-[18px]" to="/corporate-investors">Corporate investors</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/private-investors">Private Investor</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/landlords">Landlords</router-link>
              </nav>
            </div>
					</div>
					<div class="nav-link">
						<router-link active-class="active" class="text-white text-[18px] lg:text-[18px] sm:text-[16px] font-Medium-custom" to="careers">Careers </router-link>
					</div>
					<div class="nav-link">
						<router-link active-class="active" class="font-Medium-custom text-white text-[18px] lg:text-[18px] sm:text-[16px] dropdown" to="/contact"> 
              Contact
            </router-link>
            <div class="mobile-arrow" @click="openSubMenu('contacts')">
              <i class="pi pi-chevron-right"></i>
            </div>
            <div class="submenu-sec" :class="{active: state.activeId == 'contacts'}">
              <nav class="dropdown-content">
                <button class="py-[16px] w-full text-left mobile-back font-Medium-custom text-[18px]" @click="openSubMenu">
                  <i class="pi pi-chevron-left"></i>
                  Contact
                </button>
                <router-link class="font-Medium-custom text-[18px]" to="/faqs">FAQs</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/press-&-media">Press & media</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/contact-community">Community</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/contact-housing-partners">Housing partners</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/investors">Investors</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/general">General</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/lettings-valuation" >Lettings valuation</router-link>
                <router-link class="font-Medium-custom text-[18px]" to="/contact-submitted">Submitted</router-link>
              </nav>
            </div>
					</div>
					
				</div>
			</nav>
      <div class="md:hidden flex-auto bg-[#1D1D33]">
        <div class="listbox px-[16px] py-[30px]">
          <Listbox as="div" v-model="selected">
            <div class="relative">
              <ListboxButton class="relative w-full h-[44px]cursor-default pt-2 ring-[#1D1D33] pr-20 text-left text-white ring-2 sm:text-[16px] sm:leading-6"> 
                <span class="inline-flex w-full items-center pl-3 truncate">
                  <span class="truncate">
                    <Icon class="w-[25px] h-[25px]" :icon="selected.name" />
                  </span> 
                  <span class="ml-2 truncate font-xbold-custom text-[14px]">
                    {{ selected.username }}
                  </span> 
                </span> 
                <span class="text-[25px] pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <Icon icon="material-symbols:keyboard-arrow-down-rounded"/>
                </span>
              </ListboxButton>
              <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-[18px]">
                  <ListboxOption as="template" v-for="person in people" :key="person.username" :value="person" class="w-full h-[44px]" v-slot="{ active, selected }">
                    <li :class="[active ? 'bg-sky-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9',]">
                      <div class="flex items-center"> 
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'truncate',]">
                          <Icon :icon="person.name" />
                        </span>
                        <span :class="[active ? 'text-sky-200' : 'text-gray-500', 'ml-2 truncate',]">{{ person.username }}</span>
                      </div>
                      <span v-if="selected" :class="[ active ? 'text-white' : 'text-sky-600', 'absolute inset-y-0 right-0 flex items-center pr-4',]">
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span> 
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
      </div>
		</div>
	</header>
</template>

<script setup>
import logo from "../assets/logo.png";
import { ref, watch } from "vue";
import { Icon } from "@iconify/vue";

import {Listbox,ListboxButton,ListboxLabel,ListboxOption,ListboxOptions,} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { useAppStore } from "../store/index";
import { useRoute } from "vue-router"

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

const state = ref({
  activeId: null,
  innerActiveId: null,
  menuActive: false,
  isSearchbar: false,
})
const wrapper = ref(null);
const openSubMenu = (linkId) => {
  state.value.activeId = state.value.activeId === linkId ? null : linkId
};
const openInnerSubMenu = (linkId) => {
  state.value.innerActiveId = state.value.innerActiveId === linkId ? null : linkId
};
const openMainMenu = () => {
  state.value.activeId = null
  state.value.innerActiveId = null
  if(!state.value.menuActive) {
    state.value.menuActive = true
    document.body.classList.add('menu-active')
  } else {
    state.value.menuActive = false
    document.body.classList.remove('menu-active')
  }
};

const openSearchbar =() => {
  if(!state.value.isSearchbar) {
    state.value.isSearchbar = true
    document.body.classList.add('menu-active')
  } else {
    state.value.isSearchbar = false
    document.body.classList.remove('menu-active')
  }
};


const route = useRoute()
watch(route, (newTo, oldTo) => {
  if(state.value.menuActive) {
    openMainMenu()
  }
})

</script>

<style scoped>
label #open,
#cancel {
  float: right;
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
.LogoN {
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
  .LogoN {
    display: inline-block;
  }
  .LogoM {
    display: none;
  }
  .upper-nav {
    background: #1d1d33 !important;
    height: 5.5rem;
  }
  
  .header-search {
    display: none;
  }
  .burger {
    display: inline;
    margin-bottom: 5px;
  }
  .contact-btn {
    display: none;
  }
  .dropdown-h:hover .home-dropdown {
    display: block;
    margin-top: 27px;
  }
}
@media (max-width: 723px) {
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
  
  .burger {
    margin-bottom: 5px;
  }
}

@media (max-width: 565px) {
  .upper-nav {
    height: 5rem;
  }
  .burger {
    margin-bottom: 5px;
  }
}
@media (max-width: 550px) {
  .inner a {
    font-size: 12px;
  }
}

@media (max-width: 500px) {
  .upper-nav {
    height: 5rem;
  }
  .burger {
    margin-bottom: 5px;
  }
}
@media (max-width: 460px) {
  .search {
    gap: 1rem;
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
/* .container{
   margin-left:auto;
   margin-right:auto;
   position:relative;
} */
@media (min-width: 1200px) {
  .nav-large-screen {
    /* background-color: red; */
    /* max-width: 1060px !important; */
    /* justify-content: space-evenly; */
    /* max-width: 1065px !important; */
  }
  .lg\:w-\[70\%\] {
    max-width: 1140px;
  }
}
</style>
