<template>
  <div>
    <!-- <h1>{{ $t("greeting") }}</h1>
      <p>{{ $t("content") }}</p> -->

    <!--  -->
    <div class="dropdown d-flex">
      <span class="spanicn">
        <i class="bi bi-globe"></i>
      </span>
      <button
        class="btndrop dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ locale }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" @click="changeLanguage('en')"> English</a>
        </li>
        <li>
          <a class="dropdown-item" @click="changeLanguage('fr')"> Français</a>
        </li>
      </ul>
    </div>
    <!--  -->
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (newLocale) => {
  locale.value = newLocale;
};
</script>

<style lang='scss' scoped>
.dropdown-toggle {
  text-transform: uppercase;
}
.btndrop {
  /* background: red; */
  background-color: #f5f5f5;
  border: none;
  padding: 5px 15px;
  color: #4995dd;
}
.dropdown-item{
    cursor: pointer;
}
.spanicn{
    padding: 5px;
}
</style>
