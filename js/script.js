'use strict';

const body = document.querySelector('body');
const cart = document.querySelector('.cart');
const cartBtn = document.querySelector('.header__cart');
const closeBtn = document.querySelector('.cart__close');
const toggleBtn = document.querySelector('.header__btn-mobile');
const headerNav = document.querySelector('.header__nav');
const footer = document.querySelector('.footer');
const overlay = document.querySelector('.overlay');
const navLink = document.querySelectorAll('.header__link');

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
  cart.classList.add('cart--visible');
  overlay.classList.add('overlay--active');
  body.classList.add('page--disabled');
  const closeCart = function () {
    cart.classList.remove('cart--visible');
    overlay.classList.remove('overlay--active');
    body.classList.remove('page--disabled');
  };
  overlay.addEventListener('click', closeCart);
  closeBtn.addEventListener('click', closeCart);
};

cartBtn.addEventListener('click', openCart);

toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.add('header__btn-mobile--active');
  overlay.classList.add('overlay--active');
  headerNav.classList.add('header__nav--visible');
  footer.classList.add('footer--visible');
  body.classList.add('page--disabled');
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
