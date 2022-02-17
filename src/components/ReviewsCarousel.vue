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
                  :src="review.photo"
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
import { ref } from 'vue';
import service from '@/service';

export default {
  setup() {
    let reviews = ref([]);
    service.getReviews().then(({ data }) => { reviews.value = data; });
 
    return {
      reviews,
    };
  }
}
</script>