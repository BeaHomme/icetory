<template>
  <!-- 
  <stories
    v-if="storyItems[0].slides?.length"
    :autoplay="false"   
    :duration="3000"
    :stories="storyItems"
    @ended="activeSlide = null"
    ref="stories_component"
  >
    <template v-slot:slide="{ story, slide }">
      <div class="slide" style="color: white">
        {{ slide.url }}
      </div>
    </template>
  </stories>
  -->

  <section class="stories">
      <div class="container">
        <div class="stories__items stories__swiper">
          <div class="stories__wrapper swiper-wrapper">
            <div
              v-for="(slide, idx) in slides"
              :key="idx"
              :class="['stories__item', 'swiper-slide', { 'stories__item--active' : activeSlide === idx + 1 }]"
              :style="{ backgroundImage: `url(${slide.image}` }"
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
import { ref, onMounted, computed } from 'vue';
import Swiper from 'swiper';
import Stories from "vue3-insta-stories";

import service from '@/service';

import stories1 from '@/assets/content/stories-1.svg';
import stories2 from '@/assets/content/stories-2.svg';
import stories3 from '@/assets/content/stories-3.svg';
import stories4 from '@/assets/content/stories-4.svg';
import stories5 from '@/assets/content/stories-5.svg';

export default {
  components: {
    Stories,
  },
  setup() {
    const slides = [
      { title: 'Инновационная заморозка', image: stories1 },
      { title: 'Технология приготовления', image: stories2 },
      { title: 'Готовое блюдо от шеф-повара', image: stories3 },
      { title: 'Время', image: stories4 },
      { title: 'Доставка и торговые точки', image: stories5 },
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

    const storyItems = computed(() => {
      const items = stories.value.filter(story => story.predefined_id === activeSlide.value);
      console.log();
      return [{
        slides: [...items, ...items],
      }];
    });
    
    return {
      slides,
      activeSlide,
      storyItems,
    };
  },
}
</script>

<style scoped lang="scss">

#stories_wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 15;
  width: 100vw;
  height: 100vh;
}

::v-deep #stories_slider {
  background-color: rgb(73, 73, 73);
}

</style>