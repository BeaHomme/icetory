<template>
  <section class="feedback">
      <div class="container feedback__container">
        <h2 class="feedback__title title">Отзывы</h2>
        <div class="feedback__swiper">
          <div class="feedback__wrapper swiper-wrapper">
            <div 
              class="feedback__item swiper-slide"
              v-for="review in reviews"
              :key="review.id"
            >
              <div class="feedback__top">
                <img
                  :src="review.photo || placeholderImg"
                  :alt="review.first_name"
                  class="feedback__img"
                />
                <div class="feedback__author">
                  <div class="feedback__author-name">{{ review.first_name }}</div>
                  <div class="feedback__author-descr">{{ review.last_name }}</div>
                </div>
              </div>
              <p class="feedback__text">
                <span class="feedback__text-title">Очень вкусно!</span>
                {{ review.review }}
              </p>
            </div>
          </div>
          <div
            class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          ></div>
          <div class="feedback__prev"></div>
          <div class="feedback__next"></div>
        </div>
      </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import Swiper, { Navigation } from 'swiper';

import service from '@/service';

import placeholder from '@/assets/content/feedback-placeholder.svg';

export default {
  setup() {
    const placeholderImg = ref(placeholder);

    let reviews = ref([]);
    service.getReviews().then(({ data }) => { reviews.value = data; });

    onMounted(() => {
      Swiper.use([Navigation]);
      const swiperFeedback = new Swiper('.feedback__swiper', {
        slidesPerView: 1,
        slidePerGroup: 1,
        centeredSlides: true,
        initialSlide: 1,
        spaceBetween: 20,
        grabCursor: true,
        navigation: {
          nextEl: document.querySelector('.feedback__next'),
          prevEl: '.feedback__prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    });
 
    return {
      placeholderImg,
      reviews,
    };
  }
}
</script>
