<template>
  <shopping-cart />
  <order-modal></order-modal>

  <product-card />

  <the-header></the-header>
  <main class="main">
    <the-hero></the-hero>
    <the-stories></the-stories>
    <the-process></the-process>
    <menu-list></menu-list>
    <reviews-carousel />
    <!-- <instagram-photos></instagram-photos> -->
    <about-us></about-us>
  </main>

  <the-footer></the-footer>

</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import OrderModal from './components/OrderModal.vue'
import MenuList from './components/MenuList.vue'
import InstagramPhotos from './components/InstagramPhotos.vue'
import AboutUs from './components/AboutUs.vue'
import ReviewsCarousel from './components/ReviewsCarousel.vue'
import TheProcess from './components/TheProcess.vue'
import TheStories from './components/TheStories.vue'
import TheHero from './components/TheHero.vue'
import ProductCard from './components/ProductCard.vue';

import { ref } from 'vue';

const cartVisible = ref(false);

</script>


<style src="@/scss/style.scss"></style>
<style src="@/plugins/swiper/libs.min.css"></style>
