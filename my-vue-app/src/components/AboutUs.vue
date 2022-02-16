<template>
  <section class="about" id="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__left">
            <div class="about__title title">О нас</div>
            <p class="about__text">
              Формирование удобной привычки покупать готовую еду ресторанного
              качества, которая долго хранится дома и быстро готовится.
              Дополнительный комфорт и удобство для миллионов людей.
              Освободить для женщин еще больше свободного от готовки времени
              для их более полной самореализации в другом.
            </p>
          </div>
          <div class="about__right">
            <form class="about__form form">
              <h3 class="form__title">Напишите нам</h3>
              <input class="form__input" type="text" placeholder="Имя" />
              <input
                class="form__input"
                type="tel"
                placeholder="Номер телефона"
              />
              <textarea
                class="form__textarea"
                placeholder="Ваше сообщение"
              ></textarea>
              <button class="form__btn">Отправить</button>
            </form>
          </div>
          <div
            class="about__right about__right--send send"
            style="display: none"
          >
            <img
              src="@/assets/icons/check.svg"
              alt="Спасибо, Ваше сообщение отправлено!"
              class="send__img"
            />
            <div class="send__title">Спасибо, Ваше сообщение отправлено!</div>
            <button class="form__btn send__btn">Написать еще</button>
          </div>
        </div>
      </div>
    </section>
</template>