<template>
  <div class="wrapper">
    <Header />
    <BreadCrumbs />
     <router-view></router-view>
     <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import BreadCrumbs from './components/BreadCrumbs.vue';

</script>

<style lang="scss" scoped>

</style>