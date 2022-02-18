<template>
  <div :class="['overlay', { 'overlay--active': store.cartVisible }]" @click="store.cartVisible = false"></div>
  <div :class="['shopping-cart', 'cart', { 'cart--visible': store.cartVisible }]">
    <div class="cart__title">Корзина</div>
    <button class="cart__close" @click="store.cartVisible = false"></button>
    <div class="cart__items">
      <div v-if="!store.cartProducts.length" class="cart__empty-text">
        В корзине пока нет товаров
      </div>
      <div 
        v-for="product in store.cartProducts"
        :key="product.id"
        class="cart__item"
      >
        <img :src="product.main_picture" :alt="product.title" class="cart__img" />
        <div class="cart__info">
          <div class="cart__name">{{ product.title }}</div>
          <div class="cart__price">{{ product.discount_price || product.price }} ₽</div>
        </div>
        <div class="cart__number">
          <span class="cart__remove" @click="deleteFromCart(product.id)"></span>
          <input type="text" class="cart__input" :value="product.count" />
          <span class="cart__add" @click="addToCart(product)"></span>
        </div>
      </div>
    </div>
    <div class="cart__bottom">
      <div class="cart__amount">
        <div class="cart__amount-text">Сумма заказа</div>
        <div class="cart__amount-number">{{ store.totalSum }} ₽</div>
      </div>
      <div class="cart__error" style="display: none">
        Возникла ошибка, повторите позже
      </div>
      <button class="cart__btn" @click="openOrderModal()">Оформить</button>
    </div>
  </div>
</template>

<script>
import pinia from '@/store.js';

export default {
  setup() {
    const store = pinia();
    const addToCart = store.addProduct;
    const deleteFromCart = store.deleteProducts;

    const openOrderModal = () => {
      store.createOrder = true;
      store.cartVisible = false;
    };

    return {
      store,
      addToCart,
      deleteFromCart,

      openOrderModal,
    };
  },
}
</script>