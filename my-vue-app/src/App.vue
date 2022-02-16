<template>
  <div class="shopping-cart cart">
    <div class="cart__title">Корзина</div>
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

  <header class="header">
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
            <input type="text" class="header__input" placeholder="Поиск" />
          </form>
          <div class="search">
            <div class="search__item">
              <img
                src="@/assets/content/cart-1.jpg"
                alt=""
                class="search__item-img"
              />
              <div class="search__item-name">Тар-тар из говядины</div>
              <div class="search__item-price">800 ₽</div>
            </div>
            <div class="search__item">
              <img
                src="@/assets/content/cart-1.jpg"
                alt=""
                class="search__item-img"
              />
              <div class="search__item-name">
                ОООоооооооооооооооочень длинное название
              </div>
              <div class="search__item-price">800 ₽</div>
            </div>
          </div>
          <button
            class="header__cart header__cart--visible header__cart--filled"
          >
            <span class="header__cart-name">Корзина</span>
            <span class="header__cart-amount">255 ₽</span>
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
  <main class="main">
    <the-hero></the-hero>
    <the-stories></the-stories>
    <the-process></the-process>
    <menu-list></menu-list>
    <feed-back></feed-back>
    <instagram-photos></instagram-photos>
    <about-us></about-us>
  </main>

  <the-footer></the-footer>

</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheFooter from './components/TheFooter.vue'
import MenuList from './components/MenuList.vue'
import InstagramPhotos from './components/InstagramPhotos.vue'
import AboutUs from './components/AboutUs.vue'
import FeedBack from './components/FeedBack.vue'
import TheProcess from './components/TheProcess.vue'
import TheStories from './components/TheStories.vue'
import TheHero from './components/TheHero.vue'

import { onMounted } from 'vue';

onMounted(() => {});
</script>


<style src="@/scss/style.scss"></style>
<style src="@/plugins/swiper/libs.min.css"></style>
