<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <ul class="footer__links">
          <!-- <li class="footer__item">
            <a class="footer__link" href="#">Лицензионное соглашение</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">Правовая информация</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">Публичная оферта</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="#">Сертификаты</a>
          </li> -->
          <li class="footer__item">Icetory©{{ currentYear }}</li>
        </ul>
        <ul class="footer__social">
          <li class="footer__social-item">
            <a class="footer__social-link" href="https://www.instagram.com/ice.tory_/" target="_blank">
              <img
                class="footer__social-img"
                src="@/assets/icons/social-icon-1.svg"
                alt="Instagram"
              />
            </a>
          </li>
          <!-- <li class="footer__social-item">
            <a class="footer__social-link" href="#" target="_blank">
              <img
                class="footer__social-img"
                src="@/assets/icons/social-icon-2.svg"
                alt="Facebook"
              />
            </a>
          </li> -->
        </ul>
        <div class="footer__mobile">Icetory©{{ currentYear }}</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear());
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
