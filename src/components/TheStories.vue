<template>
  <!-- <video src="@/assets/video/video.mp4" width="480" height="270" autoplay></video> -->
  <!-- 
  <stories
    v-if="storyItems[0].slides?.length"
    :autoplay="true"   
    :duration="5000"
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

  <div id="stories" v-show="storyItems.length"></div>

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
import { ref, onMounted, computed, watch } from 'vue';
import Swiper from 'swiper';
import Stories from "vue3-insta-stories";
import Zuck from 'zuck.js';

import service from '@/service';

import stories1 from '@/assets/content/stories-1.svg';
import stories2 from '@/assets/content/stories-2.svg';
import stories3 from '@/assets/content/stories-3.svg';
import stories4 from '@/assets/content/stories-4.svg';
import stories5 from '@/assets/content/stories-5.svg';

import video from '@/assets/video/video.mp4';


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

    const storyItems = computed(() => stories.value.filter(story => story.predefined_id === activeSlide.value));

    onMounted(() => {
      const swiperStories = new Swiper('.stories__swiper', {
        slidesPerView: 'auto',
        freeMode: true,
      });

      // document.querySelector("video").addEventListener('loadedmetadata', function() {
      //   console.log(document.querySelector("video").duration);
      // });
    });

    watch(
      () => activeSlide.value,
      () => {
        console.log(storyItems.value);
        new Zuck('stories', {
          skin: 'snapgram',      // container class
          avatars: true,         // shows user photo instead of last story item preview
          list: false,           // displays a timeline instead of carousel
          openEffect: true,      // enables effect when opening story
          cubeEffect: false,     // enables the 3d cube effect when sliding story
          autoFullScreen: false, // enables fullscreen on mobile browsers
          backButton: true,      // adds a back button to close the story viewer
          backNative: false,     // uses window history to enable back button on browsers/android
          previousTap: true,     // use 1/3 of the screen to navigate to previous item when tap the story
          localStorage: true,    // set true to save "seen" position. Element must have a id to save properly.
          reactive: false,        // set true if you use frameworks like React to control the timeline (see react.sample.html)

          stories: [{
            id: 2,
            seen: false,
            items: [
              {
                id: '1',
                type: 'stories1',
                length: 30,
                src: video,
                preview: stories1,
                seen: true,
                customKey: "1",
                anotherCustomKey: "2"
              }
            ]
          }]
        }); 
      },
    );
    
    return {
      slides,
      activeSlide,
      storyItems,
    };
  },
}
</script>

<style scoped lang="scss">

  #stories {
    position: fixed;
    left: 0;
    top: -90px;
    width: 100vw;
    height: 100vh;
    z-index: 17;
    background-color: rgba(0, 0, 0, .95);
    display: flex;
    justify-content: center;
    align-items: center;

    ::v-deep .story {
      height: 100%;
      .items, li, a, img {
        height: 100%;
      }
    }
  }

</style>