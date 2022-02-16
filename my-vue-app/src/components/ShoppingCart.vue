<template>
  <div class="shopping-cart cart">
    <div class="cart__title">Корзина - {{ value }}</div>
    <button class="cart__close"></button>
    <div class="cart__items">
      <div class="cart__item">
        <img src="@/assets/content/cart-1.jpg" alt="" class="cart__img" />
        <div class="cart__info">
          <div class="cart__name">Тар-тар из говядины</div>
          <div class="cart__price">800 ₽</div>
        </div>
        <div class="cart__number">
          <span class="cart__remove"></span>
          <input type="text" class="cart__input" value="1" />
          <span class="cart__add"></span>
        </div>
      </div>
    </div>
    <div class="cart__bottom">
      <div class="cart__amount">
        <div class="cart__amount-text">Сумма заказа</div>
        <div class="cart__amount-number">800 ₽</div>
      </div>
      <div class="cart__error" style="display: none">
        Возникла ошибка, повторите позже
      </div>
      <button class="cart__btn">Оформить</button>
    </div>
  </div>
  <!-- <div class="shopping-cart cart cart--empty">
    <div class="cart__title">Корзина</div>
    <button class="cart__close"></button>
    <div class="cart__empty-text">В корзине пока нет товаров</div>
  </div> -->
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
}
</script>