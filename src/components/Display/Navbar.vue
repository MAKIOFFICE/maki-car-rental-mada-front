<template>
    <div>
        <!-- <h1>Nav</h1>
        <button @click="handleBtn">test</button> -->
        <div class="divlang">
  <div class="container">
    <div class="row">
      <div class="col-6">

        <!-- app.component.html -->

        <div class="dropdown">
          <button class="btn dropdown-toggle Lspa" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false">
            Français
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item">Français /
                French</a></li>
            <li><a class="dropdown-item">English</a>
            </li>
            <li><a class="dropdown-item">Chinese /
                中國人</a></li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <div class="divispaa">
          <p class="spanRes"><span>Booking</span></p>
        </div>
      </div>
    </div>
  </div>
</div>

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
          <a class="nav-link " @click="locationbtn">LOCATION DE VOITURES A MADAGASCAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="handleBtn">VOITURES ET TARIFS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="faqBtn">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="cvgBtn">CGV ET MENTIONS LEGALES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="contactBtn">CONTACTEZ-NOUS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';
import HomeService from '@/service/test';
import { ref } from 'vue';

const router = useRouter();

const locationbtn = () => {
    router.push('/');
}
const handleBtn = async () => {
    router.push('/about');
    try {
        const data = await HomeService.getHomeData();
        console.log(data);
    } catch (error) {

    }
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
a{
    cursor: pointer;
}
a:hover{
    color: #6dace6;
}
.divlang {
    width: 100%;
    background-color: #6dace6;
    display: inline-block;
}


.divispaa {
    width: 40%;
    background-color: aqua;
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
.dropdown-menu{
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

.navbar-light .navbar-nav .nav-link:hover{
    color: #6dace6;
}
</style>