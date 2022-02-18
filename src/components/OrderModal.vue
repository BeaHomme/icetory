<template>
  <div v-if="store.createOrder">
    <div class="overlay overlay--active"></div>

    <div class="order">
      <div class="order__wrapper">
        <div class="order__title">Оформление заказа</div>
        <button class="order__close" @click="store.createOrder = false"></button>
        <div class="order__personal personal">
          <div class="personal__title">Личные данные</div>
          <form class="personal__form">
            <input
              type="text"
              class="personal__input input"
              placeholder="Имя"
              required
            />
            <input
              type="phone"
              class="personal__input input"
              placeholder="Телефон"
              required
            />
            <input
              type="email"
              class="personal__input input"
              placeholder="E-mail для отправки чека"
              required
            />
          </form>
        </div>
        <div class="order__address address">
          <div class="address__title">Адрес доставки</div>
          <form class="address__form">
            <input
              type="text"
              class="address__input address__street input"
              placeholder="Улица, номер дома"
            />
            <input
              type="text"
              class="address__input input"
              placeholder="Кв/офис"
            /><input
              type="text"
              class="address__input input"
              placeholder="Подъезд"
            /><input
              type="text"
              class="address__input input"
              placeholder="Этаж"
            />
            <input
              type="text"
              class="address__input input"
              placeholder="Домофон"
            />
            <input
              type="text"
              class="address__input address__comment input"
              placeholder="Комментарий"
            />
          </form>
        </div>
        <div class="order__date date">
          <div class="date__title">Дата и интервал доставки</div>
          <form class="date__form">
            <input type="date" class="date__calendar" />
            <div class="date__intervals">
              <input
                type="radio"
                name="interval"
                id="8-11"
                class="date__input"
                required
              />
              <label for="8-11" class="date__label">8:00 – 11:00</label>
              <input
                type="radio"
                name="interval"
                class="date__input"
                id="11-14"
                required
              />
              <label for="11-14" class="date__label">11:00 – 14:00</label>
              <input
                type="radio"
                name="interval"
                id="14-17"
                class="date__input"
                required
              />
              <label for="14-17" class="date__label">14:00 – 17:00</label>
              <input
                type="radio"
                name="interval"
                id="17-20"
                class="date__input"
                required
              />
              <label for="17-20" class="date__label">17:00 – 20:00</label>
            </div>
          </form>
        </div>
        <div class="order__pay pay">
          <div class="pay__title">Способ оплаты</div>
          <div class="pay__methods">
            <input
              type="radio"
              name="interval"
              class="pay__input"
              id="card-online"
              required
            />
            <label for="card-online" class="pay__label">Картой онлайн</label>
            <input
              type="radio"
              name="interval"
              id="cash"
              class="pay__input"
              required
            />
            <label for="cash" class="pay__label">Наличными</label>
            <input
              type="radio"
              name="interval"
              id="card-offline"
              class="pay__input"
              required
            />
            <label for="card-offline" class="pay__label">Картой курьеру</label>
          </div>
        </div>
        <div class="order__bottom">
          <div class="order__title">Ваш заказ</div>
          <div class="order__summ">
            <div class="order__name">Товары</div>
            <div class="order__price">5000 ₽</div>
          </div>
          <div class="order__delivery">
            <div class="order__name">Доставка</div>
            <div class="order__price">99 ₽</div>
          </div>
          <div class="order__amount">
            <div class="order__title">Итого</div>
            <div class="order__amount-price">5099 ₽</div>
          </div>
          <button class="order__btn">Оформить</button>
        </div>
      </div>
    </div>

    <div class="order order--success success" style="display: none">
      <div class="order__wrapper order__wrapper--success">
        <button class="order__close" @click="store.createOrder = false"></button>
        <div class="success__title">Ваш заказ принят</div>
        <p class="success__text">
          Ожидайте нашего курьера в указанное время. В случае отсутствия
          какого-либо товара в наличии, с вами свяжется менеджер для уточнения
          состава заказа.
        </p>
        <div class="success__thanks">
          Спасибо за заказ в Icetory! <br />Приятного аппетита!
        </div>
        <a class="success__back-btn" @click="store.createOrder = false">Вернуться на сайт</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import pinia from '@/store.js';

import service from '@/service';

export default {
  setup() {
    const store = pinia();

    const form = ref({});
    const success = ref(false);

    const submit = () => {
      service.createOrder(form.value).then(() => {
        console.log(123);
        success.value = true;
      });
    };

    return {
      store,
      form,
      submit,
    };
  }
}
</script>