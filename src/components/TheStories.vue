<template>
  <section class="stories">
      <div class="container">
        <div class="stories__items stories__swiper">
          <div class="stories__wrapper swiper-wrapper">
            <div
              v-for="(slide, idx) in slides"
              :key="idx"
              :class="['stories__item', 'swiper-slide', { 'stories__item--active' : activeSlide === idx + 1 }]"
              :style="{ backgroundImage: `url('src/assets/content/stories-${idx + 1}.svg'` }"
              @click="activeSlide = idx + 1"
            >
              <h4 class="stories__title">{{ slide.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';

import service from '@/service';

export default {
  setup() {
    const slides = [
      { title: 'Инновационная заморозка' },
      { title: 'Технология приготовления' },
      { title: 'Готовое блюдо от шеф-повара' },
      { title: 'Время' },
      { title: 'Доставка и торговые точки' },
    ];
    const activeSlide = ref();
    const stories = ref([]);

    service.getStories().then(({ data }) => {
      stories.value = data;
    });

    onMounted(() => {
      const swiperStories = new Swiper('.stories__swiper', {
        slidesPerView: 'auto',
        freeMode: true,
      });
    });

    return {
      slides,
      activeSlide,
      stories,
    };
  },
}
</script>