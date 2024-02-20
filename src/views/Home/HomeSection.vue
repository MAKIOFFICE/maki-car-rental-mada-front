<template>
  <div>
    <div class="container divcont">
      <div class="row">
        <div class="col-md-4">
          <!-- Contenu de la première colonne -->
          <div class="divcard">
            <div class="colorname">
              <h3>Pourquoi conduire une voiture?</h3>
              <p>
                Le fait d'avoir une voiture de location à votre disposition en
                arrivant à Mahé va vous faciliter la vie et vous permettra de
                découvrir les beautés de l'île.
              </p>
              <button @click="ContactBtn">Vers page contact ⇨</button>
            </div>
            <div class="image">
              <img :src="Explore" alt="icon" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <!-- Contenu de la première colonne -->
          <div class="divcard">
            <div class="colorname">
              <h3>Pourquoi conduire une voiture?</h3>
              <p>
                L'excursion vers Sans Souci à travers les plantations de thé, et
                la visite de la capitale, Victoria, sont également des trajets
                qui valent le détour.
              </p>
              <button @click="ContactBtn">Vers page contact ⇨</button>
            </div>
            <div class="image">
              <img :src="Personlized" alt="icon" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <!-- Contenu de la première colonne -->
          <div class="divcard">
            <div class="colorname">
              <h3>Pourquoi conduire une voiture?</h3>
              <p>
                Si vous avez opté pour un bed, ou un logement indépendant, la
                meilleure façon d'aller faire les courses est d'utiliser une
                voiture.Cela vous permettra également d'accéder aux magasins
              </p>
              <button @click="ContactBtn">Vers page contact ⇨</button>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const ContactBtn = () => {
    router.push('/contact');
}
</script>

<style lang="scss" scoped>
.divcont {
  margin-top: 20px;
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
  font-weight: 500;
  color: blueviolet;
  background-color: #fff;
}
.image {
  display: flex;
  justify-content: right;
}
</style>
