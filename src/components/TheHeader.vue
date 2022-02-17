<template>
  <header class="header">
    <div 
      v-if="searchValue.length > 1"
      class="overlay overlay--active"
      @click="searchValue = ''"
      style="z-index: -1"
    ></div>

    <div class="container">
      <div class="header__inner">
        <img
          src="@/assets/icons/logo.svg"
          alt="Icetory"
          class="header__logo"
        />
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <a href="#menu" class="header__link">Меню</a>
            </li>
            <li class="header__item">
              <a href="#process" class="header__link">Как это?</a>
            </li>
            <li class="header__item">
              <a href="#about" class="header__link">О нас</a>
            </li>
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
        <div class="header__btn-mobile">
          <div class="header__line"></div>
          <div class="header__line"></div>
          <div class="header__line"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed } from 'vue';
import pinia from '@/store.js';

export default {
  setup() {
    const store = pinia();

    const searchValue = ref('');

    const searchProducts = computed(() => {
      if (searchValue) {
        return store.products.filter(product => product.title.toLowerCase().includes(searchValue.value.toLowerCase()));
      }
      return [];
    });

    const openProduct = (product) => {
      store.openedProduct = product;
      searchValue.value = '';
    };

    return {
      store,
      searchValue,
      searchProducts,
      openProduct,
    };
  },
}
</script>