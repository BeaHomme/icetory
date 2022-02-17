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
          <div v-if="!isSend" class="about__right">
            <form class="about__form form" @submit.prevent="sendMessage">
              <h3 class="form__title">Напишите нам</h3>
              <input 
                v-model="form.name"
                class="form__input" 
                type="text" 
                placeholder="Имя" 
                required
              />
              <input
                class="form__input"
                type="tel"
                placeholder="Номер телефона"
                v-model="form.phone"
                required
              />
              <textarea
                class="form__textarea"
                placeholder="Ваше сообщение"
                v-model="form.message"
                required
              ></textarea>
              <button class="form__btn">Отправить</button>
            </form>
          </div>
          <div
            v-if="isSend"
            class="about__right about__right--send send"
          >
            <img
              src="@/assets/icons/check.svg"
              alt="Спасибо, Ваше сообщение отправлено!"
              class="send__img"
            />
            <div class="send__title">Спасибо, Ваше сообщение отправлено!</div>
            <button class="form__btn send__btn" @click="isSend = false">Написать еще</button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import service from '@/service';
import { ref } from 'vue';

export default {
  setup() {
    const isSend = ref(false);

    const form = ref({});

    const sendMessage = () => {
      service.sendFeedback(form.value)
        .then(() => {
          isSend.value = true;
          form.value = {};
        })
        .catch((e) => { 
          alert(e.message);
        });
    }

    return {
      isSend,
      form,

      sendMessage,
    };
  }
}
</script>