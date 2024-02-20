<template>
  <div class="divparent">
    <div class="container divcont mt-4">
      <div class="row gpsoffert">
        <div class="col-md-6 imagegps">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active btnrondstyle"
                aria-label="Slide 1"
              ></button>
              <button
                class="btnrondstyle"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                class="btnrondstyle"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                class="btnrondstyle"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                class="btnrondstyle"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://d12ittivwictyd.cloudfront.net/images/gps/9fr1.jpg"
                  class="img-fluid"
                  alt="GPS Image"
                  draggable="false"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://d12ittivwictyd.cloudfront.net/images/gps/1fr2.jpg"
                  draggable="false"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://d12ittivwictyd.cloudfront.net/images/gps/1fr3.jpg"
                  draggable="false"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://d12ittivwictyd.cloudfront.net/images/gps/1fr4.jpg"
                  draggable="false"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://d12ittivwictyd.cloudfront.net/images/gps/1fr5.jpg"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 parOffert">
          <h1 class="mb-4">GPS offert pour toute location de voiture</h1>
          <div>
            <h5 class="d-flex">
              <span class="spanicn"><i class="bi bi-hand-thumbs-up"></i></span
              ><span class="spantitle"
                >Avantages des locations de voitures a Madagascar</span
              >
            </h5>
            <p class="paramavtg">
              Aux Madagascar, toutes les locations de voitures effectuées via
              notre site incluent un GPS gratuit. Cette inclusion offre aux
              voyageurs un avantage pratique pour explorer l'île en toute
              facilité.
            </p>
          </div>
          <div>
            <h5 class="d-flex">
              <span class="spanicn"><i class="bi bi-gear-fill"></i></span
              ><span class="spantitle"
                >Conseils locaux sur l'utilisation du GPS</span
              >
            </h5>
            <p class="paramavtg">
              Malgré les avis de certains locaux et habitués affirmant qu'un GPS n'est pas nécessaire aux Madagascar, il peut néanmoins s'avérer précieux, en particulier pour les nouveaux visiteurs.
            </p>
          </div>
          <div>
            <h5 class="d-flex">
              <span class="spanicn"><i class="bi bi-wallet2"></i></span
              ><span class="spantitle"
                >Utilité du GPS pour les nouveaux arrivants</span
              >
            </h5>
            <p class="paramavtg">
              Pour ceux découvrant l'île pour la première fois, un GPS peut se révéler particulièrement utile. En effet, lors de votre arrivée, avoir un moyen fiable de navigation peut simplifier le trajet de l'aéroport à votre lieu de séjour.
            </p>
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
}
.divparent{
  width: 100%;
  height: auto;
  margin-top: 50px;
  padding-top: 20px;
  padding-bottom: 30px;
  background-color: #fff;
}

.parOffert{
  padding: 0px 20px;
  // background-color: #fdb714;
  // padding-left: 60px;
}
.parOffert h1 {
  // background-color: red;
  font-size: 30px;
}
.spanicn {
  // background-color: blue;
  font-size: 1.5rem;
  padding: 5px 8px;
  color: #fdb714;
}
.spantitle {
  // background-color: aqua;
  padding: 5px;
}
.paramavtg {
  // background-color: red;
  padding-left: 48px;
  text-align: justify;
}
.carousel-item img{
  width: 100%;
  height: auto;
}
.btnrondstyle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #333;
}
.active {
    background-color: #fdb714;
}
</style>
