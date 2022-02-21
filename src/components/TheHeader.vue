<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <img
          src="@/assets/icons/logo.svg"
          alt="Icetory"
          class="header__logo"
        />
        <nav :class="['header__nav', { 'header__nav--visible': store.mobileMenu }]">
          <ul class="header__list">
            <li v-if="isMenuPage" class="header__item">
              <a 
                href="#" 
                class="header__link"
                @click.prevent="goToMain()"
              >Главная</a>
            </li>
            <template v-else>
              <li 
                class="header__item"
                v-for="link in links"
                :key="link.value"
              >
                <a 
                  :href="`#${link.value}`" 
                  class="header__link" 
                  @click.prevent="goToSection(link.value)"
                >{{ link.text }}</a>
              </li>
            </template>
            <li class="header__item">
              <a
                href="tel:+78005553535"
                class="header__link header__link--phone"
                >+7 (800) 555-35-35</a
              >
            </li>
          </ul>
        </nav>
        <div class="header__right">
          <form class="header__search">
            <input v-model="searchValue" type="text" class="header__input" placeholder="Поиск" />
          </form>
          <div v-show="searchValue.length > 1" class="search search--visible">
            <div v-if="!searchProducts.length">Не найдено подходящего блюда</div>
            <div 
              v-for="product in searchProducts"
              :key="product.id"
              class="search__item"
              @click="openProduct(product)"
            >
              <img
                :src="product.main_picture"
                :alt="product.title"
                class="search__item-img"
              />
              <div class="search__item-name">{{ product.title }}</div>
              <div class="search__item-price">{{ product.discount_price || product.price }} ₽</div>
            </div>
          </div>
          <button
            :class="['header__cart', 'header__cart--visible', { 'header__cart--filled': store.totalSum }]"
            @click="store.cartVisible = true"
          >
            <span class="header__cart-name">Корзина</span>
            <span class="header__cart-amount">{{ store.totalSum }} ₽</span>
          </button>
        </div>
        <div 
          :class="['header__btn-mobile', { 'header__btn-mobile--active': store.mobileMenu }]" 
          @click="toggleMobileMenu"
        >
          <div class="header__line"></div>
          <div class="header__line"></div>
          <div class="header__line"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed, watch, toRefs } from 'vue';
import pinia from '@/store.js';

export default {
  props: {
    isMenuPage: Boolean,
  },
  emits: ['update:isMenuPage'],
  setup(props, context) {
    const store = pinia();

    const links = [
      { value: 'menu', text: 'Меню' },
      { value: 'process', text: 'Как это?' },
      { value: 'about', text: 'О нас' },
    ];

    const searchValue = ref('');

    const searchProducts = computed(() => {
      if (searchValue) {
        return store.products.filter(product => product.title.toLowerCase().includes(searchValue.value.toLowerCase()));
      }
      return [];
    });

    watch(
      () => searchValue.value,
      (val) => {
        store.haveSearchValue = Boolean(val && val.length > 1);
      },
    );

    const openProduct = (product) => {
      store.openedProduct = product;
      searchValue.value = '';
    };

    const toggleMobileMenu = () => {
      if (store.mobileMenu) {
        store.mobileMenu = false;
      } else {
        store.mobileMenu = true;
      }
    };

    const goToSection = (section) => {
      store.openedProduct = {};
      store.mobileMenu = false;
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

    const goToMain = () => {
      window.history.pushState('main', 'Icetory', '/');
      context.emit('update:isMenuPage', false);
    };

    return {
      store,
      links,
      searchValue,
      searchProducts,
      openProduct,
      toggleMobileMenu,
      goToSection,
      goToMain,
    };
  },
}
</script>