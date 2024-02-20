<template>
  <div>
    <div class="container divcont">
      <div class="head">
        <div class="btndiv">
          <h1>
            Encore plus d'avantages
          </h1>
        </div>
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <i class="bi bi-stopwatch-fill"></i>
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>Aucun frais d'annulation jusqu'à 48 heures avant la date de livraison</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <i class="bi bi-check-square"></i>
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>Vous pouvez réserver un modèle précis, pas juste une catégorie</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <i class="bi bi-hand-thumbs-up"></i>
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>Uniquement des voitures récentes et de très bonne qualité</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <i class="bi bi-truck"></i>
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>Pas de frais supplémentaire pour les voitures automatiques</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <i class="bi bi-cash-coin"></i>
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>Prix tout compris, aucun frais caché adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 p-2">
              <div class="listAv">
                <div class="divicn">
                  <span>
                    <i class="bi bi-cart-check-fill"></i>
                  </span>
                </div>
                <div class="divtitle">
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.divcont{
  // background-color: #74881c;
  padding: 20px 50px;
  margin-top: 80px;
}
.listAv{
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 15px;
  height: 100%;
}
.btndiv{
  // background-color: coral;
  text-align: center;
  padding: 10px 50px;
}
.btndiv h1{
  font-size: 2.5rem;
  color: #333;
}
.divtitle h1{
  // background-color: burlywood;
  font-size: 25px;
  padding: 5px 0px;
}
.divicn span{
  font-size: 3rem;
  color: #fdb714;
}
.row {
  align-items: stretch;
}
</style>
