<template>
  <div>
    <div class="container divcont">
      <div class="head">
        <div class="btndiv">
          <h1>Encore plus d'avantages</h1>
        </div>
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <img :src="icone2" alt="icon" />
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Flexibilité Assurée</h1>
                  <p>
                    Aucun frais d'annulation jusqu'à 48 heures avant la date de
                    livraison
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <img :src="icone3" alt="icon" />
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Choix Personnalisé</h1>
                  <p>
                    Vous pouvez réserver un modèle précis, pas juste une
                    catégorie
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <img :src="icone4" alt="icon" />
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Exclusivité et Excellence</h1>
                  <p>
                    Uniquement des voitures récentes et de très bonne qualité
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <img :src="icone5" alt="icon" />
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Conduite Sans Surprise</h1>
                  <p>
                    Pas de frais supplémentaire pour les voitures automatiques
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <img :src="icone6" alt="icon" />
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Transparence Totale </h1>
                  <p>Prix tout compris, aucun frais caché adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <img :src="icone7" alt="icon" />
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Lorem ipsum dolor</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import icone2 from "../../assets/icons/Frame2.svg";
import icone3 from "../../assets/icons/Frame3.svg";
import icone4 from "../../assets/icons/Frame4.svg";
import icone5 from "../../assets/icons/Frame5.svg";
import icone6 from "../../assets/icons/Frame6.svg";
import icone7 from "../../assets/icons/Frame7.svg";
</script>

<style lang="scss" scoped>
.divcont {
  // background-color: #74881c;
  padding: 20px 50px;
  margin-top: 80px;
}
.listAv {
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 15px;
  height: 100%;
}
.btndiv {
  // background-color: coral;
  text-align: center;
  padding: 10px 50px;
}
.btndiv h1 {
  font-size: 2.5rem;
  color: #333;
}
.divtitle h1 {
  // background-color: burlywood;
  font-size: 25px;
  padding: 5px 0px;
}
img{
  width: 100px;
}
.row {
  align-items: stretch;
}
@media only screen and (max-width: 573px) {
  .divcont {
  padding: 10px;
}
}
</style>
