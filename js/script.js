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
const searchInput = document.querySelector('.header__input');
const searchAnswer = document.querySelector('.search');

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
  cartBtn.classList.remove('header__cart--visible');
  const closeCart = function () {
    cart.classList.remove('cart--visible');
    overlay.classList.remove('overlay--active');
    body.classList.remove('page--disabled');
    cartBtn.classList.add('header__cart--visible');
  };
  overlay.addEventListener('click', closeCart);
  closeBtn.addEventListener('click', closeCart);
};

const closeMenu = function () {
  toggleBtn.classList.remove('header__btn-mobile--active');
  overlay.classList.remove('overlay--active');
  headerNav.classList.remove('header__nav--visible');
  footer.classList.remove('footer--visible');
  body.classList.remove('page--disabled');
};

cartBtn.addEventListener('click', openCart);

toggleBtn.addEventListener('click', function () {
  cartBtn.classList.toggle('header__cart--visible');
  toggleBtn.classList.toggle('header__btn-mobile--active');
  overlay.classList.toggle('overlay--active');
  headerNav.classList.toggle('header__nav--visible');
  footer.classList.toggle('footer--visible');
  body.classList.toggle('page--disabled');
  navLink.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
  overlay.addEventListener('click', closeMenu);
});

searchInput.addEventListener('keyup', function () {
  const closeSearch = function () {
    searchAnswer.classList.remove('search--visible');
    overlay.classList.remove('overlay--active');
  };
  if (searchInput.value.length >= 2) {
    searchAnswer.classList.add('search--visible');
    overlay.classList.add('overlay--active');
  } else {
    closeSearch();
  }
  overlay.addEventListener('click', function () {
    closeSearch();
    searchInput.value = '';
    searchInput.blur();
  });
});
