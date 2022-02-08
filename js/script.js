'use strict';

const body = document.querySelector('body');
const cartBtn = document.querySelector('.header__cart');

const swiperStories = new Swiper('.stories__swiper', {
  slidesPerView: 'auto',
  freeMode: true,
});
const swiperFeedback = new Swiper('.feedback__swiper', {
  slidesPerView: 1,
  slidePerGroup: 1,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: '.feedback__next',
    prevEl: '.feedback__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const openCart = function () {
  const cart = `
  <div class="cart">
  <div class="cart__title">Корзина</div>
  <div class="cart__items">
    <div class="cart__item">
      <img src="/images/content/cart-1.jpg" alt="" class="cart__img" />
      <div class="cart__info">
        <div class="cart__name">Пицца из печи</div>
        <div class="cart__price">600 ₽</div>
        <div class="cart__weight">800 г</div>
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
      <div class="cart__amount-number">600 ₽</div>
    </div>
    <button class="cart__btn">Оформить</button>
  </div>
</div>
<div class="overlay"></div>
  `;
  body.insertAdjacentHTML('afterbegin', cart);
  const overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', function () {
    const cartWrapper = document.querySelector('.cart');
    cartWrapper.remove();
    overlay.remove();
  });
};

cartBtn.addEventListener('click', openCart);

const toggleBtn = document.querySelector('.header__btn-mobile');
const headerNav = document.querySelector('.header__nav');
const footer = document.querySelector('.footer');
const overlay = document.querySelector('.overlay');
const navLink = document.querySelectorAll('.header__link');

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.toggle('header__btn-mobile--active');
  overlay.classList.toggle('overlay--active');
  headerNav.classList.toggle('header__nav--visible');
  footer.classList.toggle('footer--visible');
  body.classList.toggle('page--disabled');
});

const closeMenu = function () {
  toggleBtn.classList.remove('header__btn-mobile--active');
  overlay.classList.remove('overlay--active');
  headerNav.classList.remove('header__nav--visible');
  footer.classList.remove('footer--visible');
  body.classList.remove('page--disabled');
};

navLink.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

overlay.addEventListener('click', closeMenu);
