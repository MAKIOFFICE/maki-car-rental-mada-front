<template>
  <div>
    <div class="banner">
      <div class="container">
        <div class="header text-center">
          <h1>{{ $t("welcome") }}</h1>
          <p>
            Choisissez le modèle précis que vous souhaitez, profitez d'un prix
            tout compris et découvrez des voitures récentes et de très bonne
            qualité.
          </p>
        </div>
      </div>
      <div class="container">
        <div class="container div-form">
          <h3>
            {{ $t("formulaireHome") }}
          </h3>
          <hr />
          <!--  -->
          <div class="container mt-4">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <!-- Colonne 1 -->
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Lieu de depart</label
                  >
                  <div class="divisionseardate">
                    <select
                      class="form-select formcont"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>
              </div>

              <!-- Colonne 2 -->
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Lieu de retour</label
                  >
                  <div class="divisionseardate">
                    <select
                    class="form-select formcont"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <span class="spandate"
                      ><i class="bi bi-caret-down-fill"></i
                    ></span>
                  </div>
                </div>
              </div>

              <!-- Colonne 3 -->
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Date et heure de depart</label
                  >
                  <div class="divisionseardate">
                    <input
                      type="datetime-local"
                      class="form-control formcont"
                      value="2022-01-01T12:00"
                    />
                    <span class="spandate"><i class="bi bi-clock"></i></span>
                  </div>
                </div>
              </div>

              <!-- Colonne 4 -->
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Date et heure de retour</label
                  >
                  <div class="divisionseardate">
                    <input
                      type="datetime-local"
                      class="form-control formcont"
                      value="2022-01-01T12:00"
                    />
                    <span class="spandate"><i class="bi bi-clock"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div class="ms-auto">
                <button class="button" @click="VoitureBtn">Afficher les offres ⇨</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <div class="divisionseardate">
                  <input
                    type="text"
                    class="form-control formcont"
                    placeholder="Faite votre recherche ici"
                  />
                  <span class="spandate"><i class="bi bi-search"></i></span>
                </div>
              </div>
              <div class="mb-3">
                <ul class="list-group">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                  <li class="list-group-item">A fourth item</li>
                  <li class="list-group-item">And a fifth one</li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- modal fin -->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const VoitureBtn = () => {
  router.push("/about");
};
</script>

<style scoped>
.divcont {
  padding: 10px 50px;
}
.banner {
  width: 100%;
  padding: 80px 0px;
  background: url("../../assets/image/HomeImg/banner-bg.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  min-height: 90vh;
}

h1 {
  font-size: 52px;
  color: white;
  text-align: center;
  font-weight: bold;
  /* background: red; */
  padding: 20px 0;
}
p {
  color: #e2dfdf;
  font-size: 16px;
  /* background: grey; */
  padding: 20px 0;
}
.div-form {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  margin-top: 5rem;
}
h3 {
  color: #212529;
  font-size: 18px;
  margin: 0px 0px 8px;
}
.button {
  color: #fff;
  background-color: #8da044;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 8px;
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
  left: 80%;
  width: 20%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #b4b0b0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fdb714;
  border-radius: 8px;
  cursor: pointer;
}
.formcont {
  border-radius: 8px;
  height: 50px;
}
.formcont::-webkit-calendar-picker-indicator {
  position: relative;
  z-index: 20;
  cursor: pointer;
  opacity: 0;
}
label {
  font-weight: 500;
}
</style>
