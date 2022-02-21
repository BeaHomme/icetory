<template>
  <div 
    :class="['overlay', { 'overlay--active': openedOverlay }]" 
    :style="store.haveSearchValue || store.mobileMenu ? { zIndex: 12 } : null"
    @click="closeOverlay()"
  ></div>

  <shopping-cart />
  <order-modal></order-modal>
  <product-card />

  <the-header v-model:is-menu-page="isMenuPage"></the-header>

  <main :class="['main', { 'main__menu': isMenuPage }]">
    <page-menu v-if="isMenuPage"></page-menu>
    <page-main v-else></page-main>
  </main>

  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import OrderModal from './components/OrderModal.vue';
import ProductCard from './components/ProductCard.vue';

import PageMain from './pages/PageMain.vue';
import PageMenu from './pages/PageMenu.vue';

import { ref, computed, watchEffect, watch } from 'vue';
import pinia from "./store";

const store = pinia();


const mobileVersion = ref(false); 
const getMobileVersion = () => {
  const width = document.querySelector('body').offsetWidth;
  mobileVersion.value = width < 991;
};
window.addEventListener('resize', getMobileVersion);


const closeOverlay = () => {
  store.openedProduct = {};
  store.cartVisible = false;
  store.createOrder = false;
  store.mobileMenu = false;
};
const openedOverlay = computed(() => (
  (store.openedProduct?.id && !mobileVersion.value) || store.cartVisible || store.createOrder || store.haveSearchValue || store.mobileMenu
));
const body = document.querySelector('body');
watchEffect(() => {
  if (openedOverlay.value) {
    body.classList.add('page--disabled');
  } else {
    body.classList.remove('page--disabled');
  }
});

// router
const getMenuPageState = () => window.location.pathname === '/menu';
const isMenuPage = ref(getMenuPageState());
window.addEventListener('popstate', () => {
    isMenuPage.value = getMenuPageState();
});

</script>

<style src="@/scss/style.scss"></style>
<style src="@/plugins/swiper/libs.min.css"></style>
