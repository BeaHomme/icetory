<template>
  <section class="stories">
      <div class="container">
        <div class="stories__items stories__swiper">
          <div class="stories__wrapper swiper-wrapper">
            <div
              class="stories__item stories__item--active swiper-slide"
              style="background-image: url('src/assets/content/stories-1.svg')"
            >
              <h4 class="stories__title">Инновационная заморозка</h4>
            </div>
            <div
              class="stories__item swiper-slide"
              style="background-image: url('src/assets/content/stories-2.svg')"
            >
              <h4 class="stories__title">Технология приготовления</h4>
            </div>
            <div
              class="stories__item swiper-slide"
              style="background-image: url('src/assets/content/stories-3.svg')"
            >
              <h4 class="stories__title">Готовое блюдо от шеф-повара</h4>
            </div>
            <div
              class="stories__item swiper-slide"
              style="background-image: url('src/assets/content/stories-4.svg')"
            >
              <h4 class="stories__title">Время</h4>
            </div>
            <div
              class="stories__item swiper-slide"
              style="background-image: url('src/assets/content/stories-5.svg')"
            >
              <h4 class="stories__title">Доставка и торговые точки</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { onMounted } from 'vue';
import Swiper from 'swiper';

export default {
  setup() {
    onMounted(() => {
      const swiperStories = new Swiper('.stories__swiper', {
        slidesPerView: 'auto',
        freeMode: true,
      });
    });
  },
}
</script>