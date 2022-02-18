<template>
  <section class="menu" id="menu">
    <div class="container">
      <h2 class="menu__title title">Меню</h2>
      <div class="menu__tabs tabs">
        <div class="tabs__wrapper">
          <div class="tabs__nav">
            <button 
              v-for="category in categories"
              :key="category.id"
              :class="['tabs__nav-item', { 'tabs__nav-item--active': activeCategoryId === category.id }]"
              @click="activeCategoryId = category.id"
            >
              {{ category.title }}
            </button>
          </div>
        </div>

        <div class="tabs__content tabs__content--active">
          <div 
            class="tabs__item"
            v-for="product in filteredProducts"
            :key="product.id"
            @click="store.openedProduct = product"
          >
            <span v-if="product.primary_category" class="tabs__tag">
              {{ reducedCategories[product.primary_category]?.title }}
            </span>
            <img
              class="tabs__img"
              :src="product.main_picture || placeholderImg"
              :alt="product.title"
            />
            <div class="tabs__name">{{ product.title }}</div>
            <div class="tabs__descr">{{ product.portion }}{{ product.portion_unit }}</div>
            
            <div 
              v-if="store.reducedProducts[product.id]"
              class="tabs__number"
            >
              <button class="tabs__remove" @click.stop="deleteFromCart(product.id)"></button>
              <input type="text" class="tabs__input" :value="store.reducedProducts[product.id]?.count" />
              <button class="tabs__add" @click.stop="addToCart(product)"></button>
            </div>
            <button 
              v-else
              :class="['tabs__price', { 'tabs__price--discount': product.discount_price }]"
              title="Добавить в корзину"
              @click.stop="addToCart(product)"
            >
              {{ product.discount_price || product.price }} ₽
              <span v-if="product.discount_price" class="tabs__price--old">{{ product.price }} ₽</span>
            </button>

          </div>
        </div>

        <div v-if="!filteredProducts.length" class="tabs__content">
          <div class="tabs__empty">
            В данной категории отсутствуют товары
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import pinia from '@/store.js';

import service from '@/service';
import placeholder from '@/assets/content/item-placeholder.svg';


export default {
  setup() {
    const placeholderImg = ref(placeholder);

    const store = pinia();
    const addToCart = store.addProduct;
    const deleteFromCart = store.deleteProducts;

    let activeCategoryId = ref();
    
    let categories = ref([]);
    const reducedCategories = ref({});
    const getCategories = () => {
      service.getCategories()
        .then(({ data }) => {
          categories.value = data;
          reducedCategories.value = data.reduce((arr, cat) => ({ [cat.id]: cat, ...arr }), {});
          if (data.length) {
            activeCategoryId.value = data[0].id;
          }
        });
    };
    getCategories();

    let products = ref([]);
    const getProducts = () => {
      service.getProducts()
        .then(({ data }) => {
          products.value = data;
          store.products = data;
        });
    };
    getProducts();

    const filteredProducts = computed(() => (
      products.value.filter((product) => (
        product.primary_category === activeCategoryId.value || product.secondary_categories.includes(activeCategoryId.value)
      ))
    ));

    return {
      categories,
      reducedCategories,
      filteredProducts,
      placeholderImg,

      activeCategoryId,

      store,
      addToCart,
      deleteFromCart,
    };
  }
}
</script>