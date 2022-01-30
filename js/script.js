'use strict';

const swiperStories = new Swiper('.stories__swiper', {
  slidesPerView: 4,
  freeMode: true,
});
const swiperFeedback = new Swiper('.feedback__swiper', {
  slidesPerView: 1,
  slidePerGroup: 1,
  centeredSlides: true,
  // loop: true,
  initialSlide: 1,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: '.feedback__next',
    prevEl: '.feedback__prev',
  },
});
