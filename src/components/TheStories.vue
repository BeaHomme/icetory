<template>
  <section class="stories">
    <div class="container">
      <div class="stories__items stories__swiper">
        <div id="stories" class="stories__wrapper swiper-wrapper">

        </div>
      </div>

      <!-- <div class="stories__items stories__swiper2">
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
      </div> -->
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';
import Zuck from 'zuck.js';

import service from '@/service';

import stories1 from '@/assets/content/stories-1.svg';
import stories2 from '@/assets/content/stories-2.svg';
import stories3 from '@/assets/content/stories-3.svg';
import stories4 from '@/assets/content/stories-4.svg';
import stories5 from '@/assets/content/stories-5.svg';


export default {
  setup() {
    const slides = [
      { title: 'Инновационная заморозка', image: stories1 },
      { title: 'Технология приготовления', image: stories2 },
      { title: 'Готовое блюдо от шеф-повара', image: stories3 },
      { title: 'Время', image: stories4 },
      { title: 'Доставка и торговые точки', image: stories5 },
    ];

    const reducedItems = {}; 

    const markViewed = () => {
      const seenItems = JSON.parse(localStorage.getItem('zuck-stories-seenItems'));
      document.querySelectorAll('#stories .story').forEach((item) => {
        const id = item.dataset.id;
        if (!seenItems[id] && reducedItems[id / 10]) {
          item.classList.add('stories__item--active');
        } else {
          item.classList.remove('stories__item--active');
        }
      });
    };

    const initStories = (stories) => {
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

        stories: slides.map((story, index) => {
          const idx = index + 1;
          return {
            // хак, без которого плагин моросил
            id: idx * 10,
            photo: story.image,
            name: story.title,
            items: stories[idx],
          };
        }),

        callbacks: {
          onOpen (storyId, callback) {
            if (stories[storyId / 10]) {
              callback();
              document.body.classList.add('page--disabled');
            }
          },
          onClose (storyId, callback) {
            console.log(123);
            callback();
            markViewed();
            document.body.classList.remove('page--disabled');
          },
        },

        language: {
          unmute: 'Коснитесь для включения звука',
        },
      });

      document.querySelectorAll('#stories .story').forEach((item, index) => {
        item.classList.add('swiper-slide');
        item.classList.add('stories__item');
        item.classList.remove('seen');
        item.style.backgroundImage = `url(${item.dataset.photo})`;

        const text = item.querySelector('.info').innerText;
        item.querySelector('.info').remove();
        item.querySelector('.item-link .item-preview').innerHTML = `<h4 class="stories__title">${text}</h4>`;
      });
    };

    service.getStories().then(({ data }) => {
      data.forEach((item) => { 
        const slideItem = {
          id: item.url,
          type: 'video',
          length: item.duration,
          src: item.url,
        };
        if (reducedItems[item.predefined_id]) {
          reducedItems[item.predefined_id].push(slideItem);
        } else {
          reducedItems[item.predefined_id] = [slideItem];
        }
      });

      initStories(reducedItems);
      
      new Swiper('.stories__swiper', {
        slidesPerView: 'auto',
        freeMode: true,
      });

      markViewed();
    });
    
    return {
      slides,
    };
  },
}
</script>

<style lang="scss">

  .head {
    max-width: 99vw;

    .left {
      display: none !important;
    }
  }

</style>

<style lang="scss" scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.3.0/zuck.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.3.0/skins/snapgram.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.3.0/skins/facesnap.min.css';

  .stories.carousel {
    overflow: visible;
  }

</style>
