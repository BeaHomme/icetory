<template>
  <section class="menu" id="menu">
      <div class="container">
        <h2 class="menu__title title">Меню</h2>
        <div class="menu__tabs tabs">
          <div class="tabs__wrapper">
            <div class="tabs__nav">
              <button 
                v-for="category in categories"
                :key="category.id"
                :class="['tabs__nav-item', { 'tabs__nav-item--active': activeCategory === category }]"
                @click="activeCategory = category"
              >
                {{ category.name }}
              </button>

              <button class="tabs__nav-item tabs__nav-item--active">
                Скидки
              </button>
              <button class="tabs__nav-item" data-tab="snacks">
                Салаты/закуски
              </button>
              <button class="tabs__nav-item" data-tab="starters">
                Первые блюда
              </button>
              <button class="tabs__nav-item" data-tab="main">
                Вторые блюда
              </button>
              <button class="tabs__nav-item" data-tab="desserts">
                Десерты
              </button>

              <button class="tabs__nav-item" data-tab="pizza">Пицца</button>
              <button class="tabs__nav-item" data-tab="combo">
                Комбо-обеды
              </button>
              <button class="tabs__nav-item" data-tab="sets">
                Гастроконструкторы
              </button>
              <button class="tabs__nav-item" data-tab="drinks">
                Напитки
              </button>
            </div>
          </div>

          <div class="tabs__content tabs__content--active">
            <div 
              class="tabs__item"
              v-for="product in products"
              :key="product.id"
            >
              <span class="tabs__tag">Блюдо дня</span>
              <img
                class="tabs__img"
                :src="product.extra_pictures || placeholderImg"
                :alt="product.title"
              />
              <div class="tabs__name">{{ product.title }}</div>
              <div class="tabs__descr">{{ product.portion }}{{ product.portion_unit }}</div>
              <button 
                :class="['tabs__price', { 'tabs__price--discount': product.discount_price }]"
              >
                {{ product.price }} &#8381;
                <span v-if="product.discount_price" class="tabs__price--old">{{ product.discount_price }} &#8381;</span>
              </button>
            </div>

            <div class="tabs__item">
              <span class="tabs__tag">Блюдо дня</span>
              <img
                class="tabs__img"
                src="@/assets/content/item-placeholder.svg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
            <div class="tabs__item">
              <span class="tabs__tag">Обед</span>
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-2.jpg"
                alt=""
              />
              <div class="tabs__name">
                ОООоооооооооооооооочень длинное название
              </div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price" style="display: none">
                123 &#8381;
              </button>
              <div class="tabs__number">
                <button class="tabs__remove"></button>
                <input type="text" class="tabs__input" value="1" />
                <button class="tabs__add"></button>
              </div>
            </div>
            <div class="tabs__item">
              <span class="tabs__tag">Завтрак</span>
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-3.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price tabs__price--discount">
                123 &#8381;<span class="tabs__price--old">123 &#8381;</span>
              </button>
            </div>
            <div class="tabs__item">
              <span class="tabs__tag">Бестселлер</span>
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-4.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
            <div class="tabs__item">
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-5.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
            <div class="tabs__item">
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-6.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
            <div class="tabs__item">
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-7.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
            <div class="tabs__item">
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-8.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
            <div class="tabs__item">
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-9.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
            <div class="tabs__item">
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-10.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
            <div class="tabs__item">
              <img
                class="tabs__img"
                src="@/assets/content/menu-item-11.jpg"
                alt=""
              />
              <div class="tabs__name">Салат Оливье</div>
              <div class="tabs__descr">250г</div>
              <button class="tabs__price">123 &#8381;</button>
            </div>
          </div>
          <div class="tabs__content" data-tab="snacks">
            <div class="tabs__empty">
              В данной категории отсутствуют товары
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import service from '@/service';
import { ref } from 'vue';
import placeholder from '@/assets/content/item-placeholder.svg';

export default {
  setup() {
    const placeholderImg = ref(placeholder);

    let activeCategory = ref();
    
    let categories = ref([]);
    const getCategories = () => {
      service.getCategories()
        .then(items => {
          console.log(items);
          categories.value = items;
          if (items.length) {
            activeCategory = items[0];
          }
        });
    };

    let products = ref([]);
    const getProducts = () => {
      service.getProducts()
        .then(items => {
          console.log(items);
          products.value = items;
        });
    };

    getCategories();
    getProducts();

    return {
      categories,
      products,
      placeholderImg,
      activeCategory,
    };
  }
}
</script>