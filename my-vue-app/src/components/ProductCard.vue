<template>
  <div class="product-card card" style="display: none;">
    <div class="card__wrapper">
      <div class="card__top">
        <div class="card__title">Тар-тар из говядины</div>
        <span class="card__tag">Блюдо дня</span>
        <button class="card__close-btn"></button>
      </div>
      <div class="card__info">
        <div class="card__images">
          <div class="card__mobile-tag">Блюдо дня</div>
          <img
            class="card__image"
            src="@/assets/content/cart-1.jpg"
            alt="Тар-тар из говядины"
          />
          <div class="card__thumbs">
            <img
              src="@/assets/content/cart-1.jpg"
              alt="Тар-тар из говядины"
              class="card__thumbs-img card__thumbs-img--active"
            />
            <img
              src="@/assets/content/cart-1.jpg"
              alt="Тар-тар из говядины"
              class="card__thumbs-img"
            />
          </div>
        </div>
        <div class="card__text text">
          <div class="text__title">Состав</div>
          <div class="text__description">
            Курица маринованная, помидоры свежие, морковь свежая, фасоль
            стручковая, салат айсберг, салат ромейн, соус тайский, масло
            растительное, соус тар-тар, арахис соленый, зелень кинзы свежая.
          </div>
          <table class="card__table table">
            <tr class="table__row">
              <th class="table__title">Вес</th>
              <th class="table__title">Калорийность</th>
              <th class="table__title">Белки</th>
              <th class="table__title">Жиры</th>
              <th class="table__title">Углеводы</th>
            </tr>
            <tr class="table__row">
              <td class="table__data">101 г</td>
              <td class="table__data">250 ккал</td>
              <td class="table__data">10 г</td>
              <td class="table__data">17, 3 г</td>
              <td class="table__data">13, 9 г</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="card__bottom">
        <div class="card__price">450 ₽</div>
        <!-- <button class="card__btn">Добавить</button> -->
        <div class="tabs__number card__number">
          <button class="tabs__remove card__remove"></button>
          <input type="text" class="tabs__input card__input" value="1" />
          <button class="tabs__add card__remove"></button>
        </div>
      </div>
    </div>
  </div>
</template>