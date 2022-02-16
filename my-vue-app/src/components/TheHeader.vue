<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <img
          src="@/assets/icons/logo.svg"
          alt="Icetory"
          class="header__logo"
        />
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <a href="#menu" class="header__link">Меню</a>
            </li>
            <li class="header__item">
              <a href="#process" class="header__link">Как это?</a>
            </li>
            <li class="header__item">
              <a href="#about" class="header__link">О нас</a>
            </li>
            <li class="header__item">
              <a
                href="tel:+78005553535"
                class="header__link header__link--phone"
                >+7 (800) 555-35-35</a
              >
            </li>
          </ul>
        </nav>
        <div class="header__right">
          <form class="header__search">
            <input type="text" class="header__input" placeholder="Поиск" />
          </form>
          <div class="search">
            <div class="search__item">
              <img
                src="@/assets/content/cart-1.jpg"
                alt=""
                class="search__item-img"
              />
              <div class="search__item-name">Тар-тар из говядины</div>
              <div class="search__item-price">800 ₽</div>
            </div>
            <div class="search__item">
              <img
                src="@/assets/content/cart-1.jpg"
                alt=""
                class="search__item-img"
              />
              <div class="search__item-name">
                ОООоооооооооооооооочень длинное название
              </div>
              <div class="search__item-price">800 ₽</div>
            </div>
          </div>
          <button
            class="header__cart header__cart--visible header__cart--filled"
          >
            <span class="header__cart-name">Корзина</span>
            <span class="header__cart-amount">255 ₽</span>
          </button>
        </div>
        <div class="header__btn-mobile">
          <div class="header__line"></div>
          <div class="header__line"></div>
          <div class="header__line"></div>
        </div>
      </div>
    </div>
  </header>
</template>