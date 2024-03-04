<template>
  <div>
    <div class="container divcont">
      <div class="content">
        <h2 class="title">{{ $t("pourquoi") }}</h2>
        <p class="text">
          Vous appréciez le professionnalisme, la transparence des prix, et les
          voitures modernes..
          <!-- mais vous hésitez toujours à dépenser une fortune
          chez de grands groupes internationaux comme Europcar, Sixt ou Avis.
          Dans ce cas, vous devriez faire appel à nos services de location de
          voiture. Nos tarifs sont toute taxe comprise, et incluent une
          assurance tous risques et les frais de livraison. -->
        </p>
      </div>
      <div class="row">
        <div class="col-md-4 mt-3">
          <!-- Contenu de la première colonne -->
          <div class="divcard">
            <div class="colorname">
              <h3 class="title-card">Exploration Facilitée de l'Île</h3>
              <p>
                Découvrez Madagascar à votre rythme avec une voiture de
                location, explorant des côtes impressionnantes et des
                destinations uniques, créant ainsi des souvenirs inoubliables.
              </p>
              <button @click="ContactBtn">
                Je veux réserver une voiture ⇨
              </button>
            </div>
            <div class="image">
              <img :src="Explore" alt="icon" />
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <!-- Contenu de la première colonne -->
          <div class="divcard">
            <div class="colorname">
              <h3 class="title-card">Exploration Personnalisée</h3>
              <p>
                Optez pour une location de voiture pour une exploration
                personnalisée, permettant la découverte de plages isolées et de
                sites d'intérêt uniques à Madagascar, adaptée à vos préférences.
              </p>
              <button @click="ContactBtn">
                Je veux réserver une voiture ⇨
              </button>
            </div>
            <div class="image">
              <img :src="Personlized" alt="icon" />
            </div>
          </div>
        </div>
        <div class="col-md-4 mt-3">
          <!-- Contenu de la première colonne -->
          <div class="divcard">
            <div class="colorname">
              <h3 class="title-card">Accès aux Lieux Authentiques</h3>
              <p>
                Utilisez votre voiture de location pour accéder à des magasins
                locaux, découvrant ainsi la vraie Madagascar avec une immersion
                dans la culture locale, tout en profitant de prix
                plus abordables.
              </p>
              <button @click="ContactBtn">
                Je veux réserver une voiture ⇨
              </button>
            </div>
            <div class="image">
              <img :src="Authentic" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Explore from "../../assets/icons/explore.svg";
import Personlized from "../../assets/icons/personlized.svg";
import Authentic from "../../assets/icons/authentic.svg";
import { useRouter } from "vue-router";

const router = useRouter();

const ContactBtn = () => {
  router.push("/contact");
};
</script>

<style lang="scss" scoped>
.divcont {
  margin-top: 80px;
  padding: 10px 50px;
}
img {
  width: 200px;
  height: 180px;
  // background-color: aqua;
}
.row {
  align-items: stretch;
}
.divcard {
  background-color: #fff;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0px 10px 34px 0px rgba(82, 67, 194, 0.30);
}
.colorname {
  // background-color: red;
  padding: 10px 20px;
}
.colorname h3 {
  font-size: 25px;
  // background-color: red;
  padding: 10px 0px;
}
.colorname p {
  text-align: justify;
}
.colorname button {
  border: none;
  font-weight: 600;
  color: #6fabdd;
  background-color: #fff;
}
.image {
  display: flex;
  justify-content: right;
}

.title-card {
  font-weight: 600;
}

.title {
  font-weight: 800;
}
.content {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 44px;
}
.text {
  text-align: center;
  font-size: 20px;
}
@media only screen and (max-width: 573px) {
  .title{
    text-align: center;
  }
  .divcont {
  padding: 20px;
}
}
</style>
