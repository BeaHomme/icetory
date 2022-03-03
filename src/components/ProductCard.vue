<template>
  <div v-if="store.openedProduct.id" class="product-card card">
    <div class="card__wrapper">
      <div class="card__top">
        <div class="card__title">{{ store.openedProduct.title }}</div>
        <span 
          v-if="store.reducedCategories[store.openedProduct.primary_category]" 
          class="card__tag"
        >{{ store.reducedCategories[store.openedProduct.primary_category].title }}
        </span>
        <button 
          class="card__close-btn" 
          title="Закрыть окно"
          @click="store.openedProduct = {}"
        ></button>
      </div>
      <div class="card__info">
        <div class="card__images">
          <div 
            v-if="store.reducedCategories[store.openedProduct.primary_category]" 
            class="card__mobile-tag"
          >{{ store.reducedCategories[store.openedProduct.primary_category].title }}</div>
          <img
            class="card__image"
            :src="store.openedProduct[activeImage] || placeholderImg"
            :alt="store.openedProduct.title"
            :key="activeImage"
          />
          <div class="card__thumbs">
            <img
              v-if="store.openedProduct.main_picture"
              :src="store.openedProduct.main_picture"
              :alt="store.openedProduct.title"
              :class="['card__thumbs-img', { 'card__thumbs-img--active': activeImage === 'main_picture' }]"
              @click="activeImage = 'main_picture'"
            />
            <img
              v-if="store.openedProduct.extra_picture"
              :src="store.openedProduct.extra_picture"
              :alt="store.openedProduct.title"
              :class="['card__thumbs-img', { 'card__thumbs-img--active': activeImage === 'extra_picture' }]"
              @click="activeImage = 'extra_picture'"
            />
          </div>
        </div>
        <div class="card__title--mobile">{{ store.openedProduct.title }}</div>
        <div class="card__text text">
          <div class="text__title">Состав</div>
          <div class="text__description">{{ store.openedProduct.description }}</div>
          <table class="card__table table">
            <tr class="table__row">
              <th class="table__title">Вес</th>
              <th class="table__title">Калорийность</th>
              <th class="table__title">Белки</th>
              <th class="table__title">Жиры</th>
              <th class="table__title">Углеводы</th>
            </tr>
            <tr class="table__row">
              <td class="table__data">{{ store.openedProduct.portion }} {{ store.openedProduct.portion_unit }}</td>
              <td class="table__data">{{ store.openedProduct.calories }} ккал</td>
              <td class="table__data">{{ store.openedProduct.proteins }} г</td>
              <td class="table__data">{{ store.openedProduct.fats }} г</td>
              <td class="table__data">{{ store.openedProduct.carbs }} г</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="card__bottom">
        <div v-if="store.openedProduct.discount_price" class="card__price card__price--discount">
          <span>{{ store.openedProduct.price }} ₽</span>
          {{ store.openedProduct.discount_price }} ₽ 
        </div>
        <div v-else class="card__price">{{ store.openedProduct.price }} ₽</div>

        <div 
          v-if="store.reducedProducts[store.openedProduct.id]" 
          class="tabs__number card__number"
        >
          <button class="tabs__remove card__remove" @click="deleteFromCart(store.openedProduct.id)"></button>
          <input 
            type="text" 
            class="tabs__input card__input" 
            :value="store.reducedProducts[store.openedProduct.id]?.count" 
          />
          <button class="tabs__add card__remove" @click="addToCart(store.openedProduct)"></button>
        </div>
        <button v-else class="card__btn" @click="addToCart(store.openedProduct)">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import pinia from '@/store.js';

import placeholder from '@/assets/content/item-placeholder.svg';

export default {
  setup() {
    const placeholderImg = ref(placeholder);
    const activeImage = ref('main_picture');

    const store = pinia();
    const addToCart = store.addProduct;
    const deleteFromCart = store.deleteProducts;

    watch(
      () => store.openedProduct,
      (val) => {
        if (val.main_picture) {
          activeImage.value = 'main_picture';
        } else if (val.extra_picture) {
          activeImage.value = 'extra_picture';
        }
      }
    );

    return {
      activeImage,
      placeholderImg,

      store,
      addToCart,
      deleteFromCart,
    };
  },
}
</script>