<template>
  <div class="footer">
    <div
      class="elfsight-app-3f56ca84-0676-4116-b0f2-c122e5a57342"
      data-elfsight-app-lazy
    ></div>
    <div class="container divcont">
      <div class="row rowones">
        <!-- Colonne principale (contenu principal) -->
        <h2 class="titlebur">Notre bureau est situé à</h2>
        <div class="col-md-6">
          <ul class="ulident">
            <li>Maki Car Rental Madagascar</li>
            <li>Royal Road 363</li>
            <li>Pointe aux Canonniers</li>
            <li>(near Grand Baie)</li>
            <li>GPS: S20°0'30.24" E57°33'34.9194"</li>
          </ul>
        </div>

        <!-- Colonne latérale (contenu secondaire) -->
        <div class="col-md-6">
          <ul class="ulident ultwo">
            <li>Téléphone local: +230 5250 1260</li>
            <li>
              (Ceci n'est pas un numéro d'urgence. Merci de l'utiliser seulement
              si vous nous appelez depuis l'île Maurice ! Le numéro de téléphone
              d'urgence vous sera envoyé avec votre confirmation de
              réservation.)
            </li>
            <li>
              Merci de nous appeler avant de venir nous voir, afin d'être sûrs
              que quelqu'un sera là pour vous recevoir.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="container divcont mt-5">
      <div class="row">
        <div class="col-md-3">
          <h5>
            <img
              routerLink=""
              src="https://d12ittivwictyd.cloudfront.net/images/logo.png"
              alt="Maki Car Rental Logo"
            />
          </h5>
          <div>
            <h2 class="titleapp">
              Nos coupons sont aussi disponibles sur l'application Wallet
              d'Apple ou sur l'application WalletPasses d'Android.
            </h2>
            <div class="imgapp">
              <img
                alt="Wallet"
                src="https://d12ittivwictyd.cloudfront.net/images/passbook_hand.png"
              />
            </div>
          </div>
          <div class="divyears">
            <p>© Maki Car Rental Madagascar {{ currentYear }}</p>
          </div>
        </div>

        <div class="col-md-3">
          <h5>MENU</h5>
          <ul class="ulident">
            <li><a class="topage" @click="locationbtn">LOCATION DE VOITURES A MADAGASCAR</a></li>
            <li><a class="topage" @click="handleBtn">VOITURES ET TARIFS</a></li>
            <li><a class="topage" @click="faqBtn">FAQ</a></li>
            <li><a class="topage" @click="cvgBtn">CGV ET MENTIONS LEGALES</a></li>
            <li><a class="topage" @click="contactBtn">CONTACTEZ-NOUS</a></li>
          </ul>
        </div>

        <div class="col-md-3">
          <h5>PAYEMENT</h5>
          <div class="divyears">
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>

        <div class="col-md-3">
          <h5>Contactez-nous</h5>
          <p>Retrouvez nos offres et bénéficiez de conseils d'experts</p>
          <ul class="ulident">
            <li class="d-flex iconCont">
              <span><i class="bi bi-telephone"></i></span
              ><a href="#">+49-931-663984-98</a>
            </li>
            <li class="d-flex iconCont">
              <span><i class="bi bi-envelope-fill"></i></span
              ><a href="#">+248-2603261</a>
            </li>
          </ul>
          <div class="iconfooter">
            <span><i class="bi bi-linkedin"></i></span>
            <span><i class="bi bi-facebook"></i></span>
            <span><i class="bi bi-instagram"></i></span>
            <span><i class="bi bi-twitter"></i></span>
          </div>
          <div>
            <a @click="scrollToTop" class="icncent">
              <i class="bi bi-arrow-up-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  // Mettre à jour l'année toutes les secondes
  setInterval(() => {
    currentYear.value = new Date().getFullYear();
  }, 1000);
});
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

import { useRouter } from 'vue-router';
const router = useRouter();

const locationbtn = () => {
  router.push('/');
}
const handleBtn = async () => {
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

<style lang="scss" scoped>
.footer {
  background-color: #333;
  padding: 20px 0px;
  // margin-top: 50px;
}
.divcont {
  padding: 10px 50px;
}
.titlebur {
  // background-color: deeppink;
  padding: 10px;
  font-size: 2rem;
  color: #fdb714;
}
.ulident {
  // background-color: brown;
  padding: 0px;
  color: #fff;
}
.ulident li {
  // background-color: aquamarine;
  margin-bottom: 5px;
  padding: 10px 0px;
}
li {
  color: #f5f5f5;
}
.divyears {
  // background-color: chartreuse;
  padding: 20px 0px;
}
.iconfooter {
  // background-color: aqua;
  display: flex;
  position: relative;
  justify-content: space-around;
}
.iconfooter span {
  border: 1px solid #fff;
  font-size: 1.2rem;
  padding: 8px 13px;
  border-radius: 50%;
  color: #fff;
}
a {
  color: #f5f5f5;
}
.topage{
  cursor: pointer;
}
h5 {
  color: #fff;
}
p {
  color: #fff;
}
.iconCont span {
  font-size: 1.2rem;
  // background: red;
  padding: 0px 10px;
}
.rowones {
  padding: 20px 30px;
  border: 2px solid grey;
}
.icncent {
  text-align: center;
  font-size: 2.5rem;
  padding: 10px;
  display: flex;
  color: #6dace6;
  justify-content: right;
  cursor: pointer;
}
.titleapp{
    // background-color: #6dace6;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
}
.imgapp{
  margin-top: 15px;
}
</style>
