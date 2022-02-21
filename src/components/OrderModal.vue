<template>
  <div v-if="store.createOrder" class="order__modal">
    <form v-if="!success" class="order" @submit.prevent="submit">
      <div class="order__wrapper">
        <div class="order__title">Оформление заказа</div>
        <button class="order__close" @click="store.createOrder = false"></button>
        <div class="order__personal personal">
          <div class="personal__title">Личные данные</div>
          <div class="personal__form">
            <input
              v-model="form.name"
              type="text"
              class="personal__input input"
              placeholder="Имя"
              required
            />
            <input
              v-model="form.phone"
              type="phone"
              class="personal__input input"
              placeholder="Телефон"
              required
              inputmode="tel"
            />
            <input
              v-model="form.email"
              type="email"
              class="personal__input input"
              placeholder="E-mail для отправки чека"
              required
              inputmode="email"
            />
          </div>
        </div>
        <div class="order__address address">
          <div class="address__title">Адрес доставки</div>
          <div class="address__form">
            <input
              v-model="form.address"
              type="text"
              class="address__input address__street input"
              placeholder="Улица, номер дома"
              required
            />
            <input
              v-model="form.entrance"
              type="text"
              class="address__input input"
              placeholder="Подъезд"
              inputmode="numeric"
            />
            <input
              v-model="form.apartment"
              type="text"
              class="address__input input"
              placeholder="Кв/офис"
              inputmode="numeric"
              required
            />
            <input
              v-model="form.floor"
              type="text"
              class="address__input input"
              placeholder="Этаж"
              inputmode="numeric"
              required
            />
            <input
              v-model="form.intercom"
              type="text"
              class="address__input input"
              placeholder="Домофон"
            />
            <input
              v-model="form.comment"
              type="text"
              class="address__input address__comment input"
              placeholder="Комментарий"
            />
          </div>
        </div>
        <div class="order__date date">
          <div class="date__title">Дата и интервал доставки</div>
          <div class="date__form">
            <datepicker
              v-model="form.day"
              :locale="locale"
              :lowerLimit="new Date()"
              class="date__calendar"
            />
            <div class="date__intervals">
              <input
                v-model="form.delivery_time"
                type="radio"
                name="interval"
                id="8-11"
                class="date__input"
                value="8-11"
              />
              <label for="8-11" class="date__label">8:00 – 11:00</label>
              <input
                v-model="form.delivery_time"
                type="radio"
                name="interval"
                class="date__input"
                id="11-14"
                value="11-14"
              />
              <label for="11-14" class="date__label">11:00 – 14:00</label>
              <input
                v-model="form.delivery_time"
                type="radio"
                name="interval"
                id="14-17"
                class="date__input"
                value="14-17"
              />
              <label for="14-17" class="date__label">14:00 – 17:00</label>
              <input
                v-model="form.delivery_time"
                type="radio"
                name="interval"
                id="17-20"
                class="date__input"
                value="17-20"
              />
              <label for="17-20" class="date__label">17:00 – 20:00</label>
            </div>
          </div>
        </div>
        <div class="order__pay pay">
          <div class="pay__title">Способ оплаты</div>
          <div class="pay__methods">
            <input
              v-model="form.payment_type"
              type="radio"
              name="payment_type"
              class="pay__input"
              id="card-online"
              value="card-online"
            />
            <label for="card-online" class="pay__label">Картой онлайн</label>
            <input
              v-model="form.payment_type"
              type="radio"
              name="payment_type"
              id="cash"
              class="pay__input"
              value="cash"
            />
            <label for="cash" class="pay__label">Наличными</label>
            <input
              v-model="form.payment_type"
              type="radio"
              name="payment_type"
              id="card-offline"
              class="pay__input"
              value="card-offline"
            />
            <label for="card-offline" class="pay__label">Картой курьеру</label>
          </div>
        </div>
        <div class="order__bottom">
          <div class="order__title">Ваш заказ</div>
          <div class="order__summ">
            <div class="order__name">Товары</div>
            <div class="order__price">{{ store.totalSum }} ₽</div>
          </div>
          <div class="order__delivery">
            <div class="order__name">Доставка</div>
            <div class="order__price">{{ deliverySum }} ₽</div>
          </div>
          <div class="order__amount">
            <div class="order__title">Итого</div>
            <div class="order__amount-price">{{ store.totalSum + deliverySum }} ₽</div>
          </div>
          <button class="order__btn" type="submit">Оформить</button>
        </div>
      </div>
    </form>

    <div v-if="success" class="order order--success success">
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
import { ref, watch } from 'vue';
import datepicker from 'vue3-datepicker';
import ru from 'date-fns/locale/ru';
import format from 'date-fns/format';
import pinia from '@/store.js';

import service from '@/service';

export default {
  components: {
    datepicker,
  },
  setup() {
    const store = pinia();

    const deliverySum = ref(99);
    const form = ref({ day: new Date() });
    const success = ref(false);

    const submit = () => {
      if (!form.value.delivery_time) {
        alert('Выберите интервал доставки');
      } else if (!form.value.payment_type) {
        alert('Выберите способ оплаты');
      } else {
        const params = {
          ...form.value,
          cart: store.cartProducts.map(product => ({
            product_id: product.id,
            amount: product.count,
          })),
          day: format(form.value.day, 'yyyy-MM-dd'),
        }
        service.createOrder(params)
          .then(({ data }) => {
            if (form.value.payment_type === 'card-online') {
              window.open(data.url, "pay", "width=600,height=700");
            }

            success.value = true;
            form.value = {};
            store.cartProducts = [];
          })
        .catch((error) => {
          if (error.response.status === 400) {
            let message = '';
            for(let key in error.response.data) {
              message += `${error.response.data[key]} `;
            }
            alert(message);
          } else {
            alert(error.message);
          }
        });
      }
    };

    watch(
      () => store.createOrder, 
      () => {
        success.value = false;
      }
    );

    return {
      store,
      form,

      submit,
      success,
      deliverySum,
      locale: ru,
    };
  },
}
</script>