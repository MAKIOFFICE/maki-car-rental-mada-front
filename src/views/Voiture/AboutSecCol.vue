<template>
    <div>
        <div class="text-white p-3">
        <div class="toutprice">
          <h1 class="h1-price">Tous les prix affichés ci-dessous <u>incluent déjà</u></h1>

          <!-- debut -->

          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
              <div class="col">
                <div>
                  <div class="card-body divcardbody text-center">
                    <h5 class="card-titleh5"><i class="bi bi-shield-check"></i></h5>
                    <p class="card-text paragVoit">Assurance tous risques</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div>
                  <div class="card-body divcardbody text-center">
                    <h5 class="card-titleh5"><i class="bi bi-truck-flatbed"></i></h5>
                    <p class="card-text paragVoit">Livraison au terminal</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div>
                  <div class="card-body divcardbody text-center">
                    <h5 class="card-titleh5"><i class="bi bi-speedometer"></i></h5>
                    <p class="card-text paragVoit">Kilométrage illimité</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div>
                  <div class="card-body divcardbody text-center">
                    <h5 class="card-titleh5"><i class="bi bi-geo-alt"></i></h5>
                    <p class="card-text paragVoit">GPS gratuit</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div>
                  <div class="card-body divcardbody text-center">
                    <h5 class="card-titleh5"><i class="bi bi-person-plus"></i></h5>
                    <p class="card-text paragVoit">Un conducteur additionel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- fin  -->

        </div>
        <div class="container containToas">
          <div  role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body d-flex">
              <span class="spanToasts"><i class="bi bi-exclamation-circle"></i></span>
              <p class="paraToas">L'offre qui s'affiche est un exemple de réservation sur les prochains 5 jours. Pour
                avoir une offre adaptée, veuillez remplir le formulaire adjacent, et cliquez sur le bouton 'Afficher les
                offres'</p>
              <span class="icnX"><i class="bi bi-x"></i></span>
            </div>
          </div>
        </div>

        <div>
          <!-- debut 1 -->
          <div class="container coloCont">
            <div class="row">
              <p class="paramM">Veuillez remplir le formulaire ci-dessus et cliquer sur «Afficher les offres» !</p>
              <div class="col-md-3 col-sm-6">
                <div>
                  <div class="divImg">
                    <img src="../../assets/image/HomeImg/photos4.jpg">
                    <span class="spaniconcam">
                      <i class="bi bi-camera-fill icncam" data-bs-toggle="modal" data-bs-target="#exampleModalOne"></i>
                    </span>
                  </div>
                </div>
              </div>


              <div class="modal fade" id="exampleModalOne" tabindex="-1" aria-labelledby="exampleModalLabelOne"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabelOne">name - moter</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"
                        data-bs-interval="false">
                        <div class="carousel-inner">
                          <div class="carousel-item active ">
                            <img class="modImage" src="../../assets/image/HomeImg/photos4.jpg" alt="image">
                          </div>
                          <div class="carousel-item">
                            <img class="modImage" src="../../assets/image/HomeImg/photos3.jpg" alt="image">
                          </div>
                          <div class="carousel-item ">
                            <img class="modImage" src="../../assets/image/HomeImg/photos2.webp" alt="image">
                          </div>
                          <div class="carousel-item ">
                            <img class="modImage" src="../../assets/image/HomeImg/photos1.jpg" alt="image">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button"
                          data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                          <span class="spnicons"><i class="bi bi-chevron-left"></i></span>
                        </button>
                        <button class="carousel-control-next" type="button"
                          data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                          <span class="spnicons"><i class="bi bi-chevron-right"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- modal fin -->
              <div class="col-md-3 col-sm-6">
                <div class="text-white">
                  <h6 class="h6Img">name</h6>
                  <div class="ulIm">
                    <div class="liImg liliIm">BOÎTE DE VITESSE</div>
                    <div class="liImg">vitesse</div>
                    <div class="liImg liliIm">PUISSANCE DU MOTEUR</div>
                    <div class="liImg">moter</div>
                    <div class="liImg liliIm">ÂGE MINIMUM</div>
                    <div class="liImg">21 ANS</div>
                    <div class="liImg">PERMIS D'AU MOINS UN AN</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="p-4 text-white">

                  <!--  -->

                  <div class="container">
                    <div class="row">
                      <div class="col-md-2 col-sm-4 text-center divisp">
                        <span class="span" title="Nombres de places assises"><i
                            class="bi bi-clipboard-fill"></i></span>
                        <p class="para">4</p>
                      </div>
                      <div class="col-md-2 col-sm-4 text-center divisp">
                        <span class="span" title="Volume du coffre"><i
                            class="bi bi-suitcase-lg"></i></span>
                        <p class="para">1</p>
                      </div>
                      <div class="col-md-2 col-sm-4 text-center divisp">
                        <span class="span" title="Nombre de porte"><i
                            class="bi bi-car-front"></i></span>
                        <p class="para">4</p>
                      </div>
                      <div class="col-md-2 col-sm-4 text-center divisp">
                        <span class="span" title="Climatisation"><i
                            class="bi bi-fan"></i></span>
                        <p class="para">AC</p>
                      </div>
                      <div class="col-md-2 col-sm-4 text-center divisp">
                        <span class="span" title="Radio avec lecteur MP3"><i
                            class="bi bi-music-note-beamed"></i></span>
                        <p class="para">MP3</p>
                      </div>
                      <div class="col-sm-12 divipric img-container">
                        <p class="ppric">5 JOURS</p>
                        <h1 class="h1pric">Price</h1>

                        <!-- span hover deb-->

                        <span class="img-title" data-title="TrustPilot">
                          <h5>name</h5>
                          <p>Price :prix - Moteur :
                            moteur</p>
                          <div class="d-flex">
                            <div>
                              <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                                <li>Lorem</li>
                              </ul>
                            </div>
                          </div>
                        </span>

                        <!-- span hover deb-->

                      </div>
                      <div class="divipric">
                        <p class="ppric">Pas de surcharge aéroport !</p>
                        <button class="btnpric" @click="reserveBtn">RESERVER !</button>
                      </div>
                    </div>
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
import { useRouter } from 'vue-router';
const router = useRouter();

const reserveBtn = () => {
    router.push('/reserve');
}</script>

<style lang='scss' scoped>
.spaniconcam {
    color: #fdb714;
    /* background-color: #899e27; */
    width: 100%;
    display: block;
    text-align: right;
    font-size: 1.5rem;
}

.icncam {
    cursor: pointer;
    /* background-color: #899e27; */
    padding: 5px;
}
.paragVoit {
    font-size: 14px;
    color: #2d3e52;
}

.card-titleh5 {
    font-size: 3.5em;
    color: #6dace6;
}

.divcardbody {
    color: black;
}

.h1-price {
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.651);
    width: 100%;
    margin: 10px auto;
    color: #fff;
    padding: 10px;
    text-align: center;
}

/* sttyle 2 */
.toutprice {
    background-color: #fff;
}

.paramM {
    color: black;
    font-size: 14px;
}

.divImg {
    width: 100%;
    height: auto;
    /* background-color: chartreuse; */
}

.divImg img {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-left: -10px;
}

.ulIm {
    width: 100%;
    /* background-color: darkred; */
}

.modImage {
    width: 100%;
    height: 500px;
    background-color: #899e27;
    text-align: center;
}

.h6Img {
    /* background-color: darkkhaki; */
    padding-top: 10px;
    padding-bottom: 10px;
    color: black;
}

.liImg {
    font-size: 12px;
    color: black;
}

.liliIm {
    color: #6dace6;
    padding-top: 5px;
}

.coloCont {
    color: black;
    padding-top: 10px;
    margin-top: 15px;
    background-color: #fff;
}

.divisp {
    color: rgba(0, 0, 0, 0.271);
}

.span {
    font-size: 30px;
}

.para {
    font-size: 12px;
    color: black;
}

.divipric {
    /* background-color: red; */
    width: 50%;
    margin-left: 150px;
    text-align: center;
    /* margin-top: 20px; */
}

.btnpric {
    width: 100%;
    height: 40px;
    background-color: #899e27;
    border: none;
    color: #fff;
    /* margin-top: 5px; */
    /* padding: 0px 5px; */
}

.ppric {
    font-size: 13px;
    /* background-color: darkgoldenrod; */
    /* margin-top: -5px; */
    margin: 8px;
    color: black;
}

.h1pric {
    /* background-color: #899e27; */
    font-size: 20px;
    color: #899e27;
}

/* toast */
.toast-header,
.containToas {
    background-color: #6dace6;
    margin-top: 20px;
    margin-bottom: 20px;
}

.icnX {
    font-size: 1.5rem;
    /* background-color: #899e27; */
    margin-top: -15px;
    cursor: pointer;
    padding: 5px;
}

.spanToasts {
    /* background-color: chartreuse; */
    font-size: 2em;
    padding-right: 10px;
    color: #fff;
    margin: 0px;
}



.paraToas {
    /* background-color: aqua; */
    font-size: 16px;
    color: #fff;
    text-align: justify;
    margin-top: 10px;
}

.btnToas {
    font-size: 1rem;
    color: #fff;
}

/* span hover */


.img-container {
    position: relative;
    /* display: inline-block; */
    /* background-color: #fdb714; */
}

.img-title {
    width: 250%;
    position: absolute;
    top: -110%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(178, 216, 178);
    color: rgba(0, 0, 0, 0.585);
    border: 2px solid rgb(60, 164, 60);
    padding: 5px;
    border-radius: 3px;
    font-size: 12px;
    display: none;
}

.img-container:hover .img-title {
    display: inline-block;
}

.spnicons {
    font-size: 3rem;
}
</style>