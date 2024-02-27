<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light navbarcode">
      <div class="container-fluid navsticky">
        <a class="navbar-brand" @click="locationbtn"><img src="https://d12ittivwictyd.cloudfront.net/images/logo.png"
            alt="Maki Car Rental Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <!-- <span class="navbar-toggler-icon"></span> -->
          <i class="bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link " @click="locationbtn">{{ $t("location") }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="handleBtn">{{ $t("voiture") }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="faqBtn">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="cvgBtn">{{ $t("cvg") }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="contactBtn">{{ $t("contact") }}</a>
            </li>
          </ul>
        </div>
        <!-- <Dropdown>
          <div class="lang-dropdown">
            <img :src="lang" alt="langue" />
            <p>EN</p>
          </div>
        </Dropdown> -->
        
        <langage />
      </div>
    </nav>
  </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';
import Dropdown from '../Common/Dropdown.vue';
import lang from '../../assets/icons/lang.svg';
import langage from './langage.vue'
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const locationbtn = () => {
  router.push('/');
}
const handleBtn = async () => {
  store.commit("setpageLoad", "menu");
  router.push('/about');
}
const faqBtn = () => {
  router.push('/faq');
}
const cvgBtn = () => {
  router.push('/cvg');
}
const contactBtn = () => {
  router.push('/contact');
}
</script>
  
<style lang='scss' scoped>
.lang-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width : 480px) {
    width: 80px;
  }

  p {
    line-height: normal;
    margin-bottom: 0;
  }
}

a {
  cursor: pointer;
}

a:hover {
  color: #6dace6;
}

.divlang {
  width: 100%;
  background-color: #6dace6;
  display: inline-block;
}


.divispaa {
  padding: 8px;
}

.spanRes {
  display: block;
  background-color: #fdb714;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  margin: auto;
  cursor: pointer;
}

.Lspa {
  color: #fff;
}


.navbarcode {
  background-color: #fff;
  position: relative;
  z-index: 100;
  transition: top 0.3s;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar-brand {
  margin-left: 80px;
}

.dropdown-menu {
  position: relative;
  z-index: 500;
}

.dropdown-menu li {
  background-color: #6dace6;
  font-weight: bolder;
  cursor: pointer;
}

li {
  /* background-color: aqua; */
  margin: 10px;
  font-size: 13px;
}

.navbar-toggler {
  background-color: #6dace6;
  color: #fff;
  font-size: 2rem;
}

.navbar-nav {
  /* background-color: aquamarine; */
  padding: 0px;
  width: 100%;
  justify-content: center;
}

.nav-item {
  /* background-color: #fdb714; */
  padding: 0px 5px;
}

.nav-link {
  font-weight: 600;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #6dace6;
}
</style>