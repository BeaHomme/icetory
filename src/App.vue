<template>
  <div 
    :class="['overlay', { 'overlay--active': openedOverlay }]" 
    :style="store.haveSearchValue || store.mobileMenu ? { zIndex: 12 } : null"
    @click="closeOverlay()"
  ></div>
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
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import OrderModal from './components/OrderModal.vue';
import MenuList from './components/MenuList.vue';
import InstagramPhotos from './components/InstagramPhotos.vue';
import AboutUs from './components/AboutUs.vue';
import ReviewsCarousel from './components/ReviewsCarousel.vue';
import TheProcess from './components/TheProcess.vue';
import TheStories from './components/TheStories.vue';
import TheHero from './components/TheHero.vue';
import ProductCard from './components/ProductCard.vue';

import { computed, watchEffect } from 'vue';
import pinia from "./store";

const store = pinia();

const closeOverlay = () => {
  store.openedProduct = {};
  store.cartVisible = false;
  store.createOrder = false;
  store.mobileMenu = false;
};

const openedOverlay = computed(() => (
  store.openedProduct?.id || store.cartVisible || store.createOrder || store.haveSearchValue || store.mobileMenu
));

const body = document.querySelector('body');
watchEffect(() => {
  if (openedOverlay.value) {
    body.classList.add('page--disabled');
  } else {
    body.classList.remove('page--disabled');
  }
});

</script>

<style src="@/scss/style.scss"></style>
<style src="@/plugins/swiper/libs.min.css"></style>
