<template>
  <div>
    <HomeBanner/>
    <!-- <div class="banner">
      <div class="header-text">
        <p>
          <span class=""> Bienvenue chez Maki Car Rental Madagascar !</span>
          <br />
          <span class="animated">
            Choisissez le modèle précis que vous souhaitez, profitez d'un prix
            tout compris et découvrez des voitures récentes et de très bonne
            qualité.
          </span>
        </p>
      </div>
      <SearchForm />
    </div> -->
    <!--fin division 1  -->
    <div
      class="modal fade"
      id="optionsModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Options</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Barre de Recherche -->
            <div class="input-group mb-3">
              <div class="divisionsear">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount"
                  placeholder="Faite votre recherche ici"
                />
                <span class="spanserch"><i class="bi bi-search"></i></span>
              </div>
            </div>

            <!-- Options de la Modal (à remplacer par vos options) -->
            <ul class="list-group m-2">
              <li class="list-group-item">
                Praslin Island – Domestic airport (PRI)
              </li>
              <li class="list-group-item">Praslin Island – Anse Boudin</li>
              <li class="list-group-item">
                Praslin Island – Ferry terminal from Mahé
              </li>
            </ul>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>

    <!-- modal Ones -->
    <div
      class="modal fade"
      id="optionsModalOnes"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Options</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Barre de Recherche -->
            <div class="input-group mb-3">
              <div class="divisionsear">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount"
                  placeholder="Faite votre recherche ici"
                />
                <span class="spanserch"><i class="bi bi-search"></i></span>
              </div>
            </div>

            <!-- Options de la Modal (à remplacer par vos options) -->
            <ul class="list-group m-2">
              <li class="list-group-item">
                Praslin Island – Domestic airport (PRI)
              </li>
              <li class="list-group-item">Praslin Island – Anse Boudin</li>
              <li class="list-group-item">
                Praslin Island – Ferry terminal from Mahé
              </li>
            </ul>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HomeBanner from "./HomeBanner.vue";
const dynamicText = ref(null);
const currentText = ref("");
const isAppearing = ref(true);
const isDisappearing = ref(false);

const strings = [
  "Réservez le modèle précis que vous souhaitez, parmi des voitures récentes et de très bonne qualité.",
  "Annulation gratuite jusqu'à 48h avant, prix tout compris et sans frais cachés.",
  "Pas de surprise, pas de frais supplémentaire pour les voitures automatiques.",
];
let currentIndex = 0;

const updateText = async () => {
  isAppearing.value = true;
  isDisappearing.value = false;

  const currentString = strings[currentIndex];
  currentText.value = "";

  // Faire apparaître le texte
  for (let i = 0; i < currentString.length; i++) {
    currentText.value += currentString[i];
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  isAppearing.value = false;

  // Attendre avant de faire disparaître le texte
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Faire disparaître le texte
  for (let i = currentString.length; i >= 0; i--) {
    currentText.value = currentString.slice(0, i);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  currentIndex = (currentIndex + 1) % strings.length;
  updateText();
};

onMounted(() => {
  updateText();
});
</script>

<style lang="scss" scoped>
// .banner {
//   background-image: url("../../assets/image/HomeImg/banner-bg.png");
//   height: 700px;
//   background-position: center top;
//   width: 100%;
//   background-repeat: no-repeat;
//   background-size: cover;
//   padding: 44px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: end;
// }

.header-text {
  height: 282px;
  p {
    font-size: 52px;
    color: white;
    text-align: center;
    font-weight: bold;
  }
}

.formulaires {
  margin-top: 40px;
  background-color: #fff;
  padding-bottom: 15px;
}

.welcome {
  width: 103.8%;
  background-color: #fdb714;
  display: flex;
  margin-left: -12px;
  padding-left: 10px;
}

.colFont {
  text-align: justify;
}

.one {
  width: 70%;
  height: auto;
  color: #fff;
  padding-top: 10px;
}

.two {
  width: 30%;
  height: 80px;
  text-align: center;
}

.two i {
  font-size: 3.5em;
  margin-top: -15px;
  color: #fff;
}

.one h1 {
  width: 100%;
  padding: 5px;
  font-size: 20px;
  padding-left: 20px;
  padding-top: 10px;
  font-weight: bolder;
}

.one p {
  width: 100%;
  height: auto;
  font-size: 13px;
  padding-left: 20px;
  margin-top: -8px;
  white-space: nowrap;
  /* background-color: red; */
}

.right,
.left {
  width: 50%;
  height: 330px;
  padding-left: 20px;
  padding-top: 15px;
}

.right {
  padding-right: 20px;
  padding-left: 10px;
}

input {
  width: 100%;
  height: 40px;
  padding-left: 10px;
}

h5 {
  width: 100%;
  height: 20px;
}

h5 span {
  width: 100%;
  height: 20px;
}

.h5vide {
  width: 100%;
  height: 20px;
  /* background-color: rgb(153, 93, 14); */
}

.h5videspan {
  width: 100%;
  height: 21px;
  /* background-color: darkorange; */
}

label {
  font-size: 12px;
  width: 100%;
  white-space: nowrap;
  /* height: 20px; */
  /* background-color: #6dace6; */
}

.boutton {
  width: 100%;
  height: 50px;
  margin-top: 40px;
  padding: 0px 20px;
}

.boutton button {
  width: 100%;
  height: 35px;
  border: none;
  background-color: #899e27;
  font-size: 12px;
  color: #fff;
}

.boutton button:hover {
  background-color: #74881c;
}

.divisionseardate {
  position: relative;
  margin: 15px 0px;
  top: -15px;
  bottom: 0px;
}

.spandate {
  font-size: 1.2rem;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 85%;
  width: 15%;
  height: 100%;
  background-color: #fdb714;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.formcont::-webkit-calendar-picker-indicator {
  position: relative;
  z-index: 20;
  cursor: pointer;
  opacity: 0;
}

.divisionsear {
  position: relative;
  width: 100%;
}

.spanserch {
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 85%;
  width: 15%;
  height: 100%;
  background-color: #899e27;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.iconpluschange {
  font-size: 1.2rem;
  /* background-color: #fdb714; */
  padding: 8px;
  color: #4995dd;
}

// Dynamic text style
.text-gradient {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(111, 171, 221, 1),
    rgba(111, 171, 221, 0.5)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animated {
//   animation-duration: 0.5s;
//   animation-fill-mode: both;
  font-size: medium;
  font-weight: normal;
  color: rgb(226, 223, 223);
}

.typewriter-in {
  animation-name: typewriter-in;
}

.typewriter-out {
  animation-name: typewriter-out;
}

@keyframes typewriter-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes typewriter-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
