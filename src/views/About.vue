<template>
  <div>
    <div class="container">
  <div class="row">
    <!-- Première colonne plus petite (col-4) -->
    <div class="col-md-4">
      <div class="text-white p-3">
        <div>
          <ul class="list-unstyled">
            <a class="d-flex">
              <p class="pTwo">
                <i class="bi bi-search idivi"></i>
              </p>
              <p class="pOne"> <span>voitures disponibles</span> </p>
            </a>

            <a class="d-flex" data-bs-toggle="collapse" data-bs-target="#collapseExa"
              aria-expanded="false" aria-controls="collapseExample">
              <p class="pOne cursptrs" >Votre demande</p>
              <p class="pTwo cursptrs">
                <i class="bi {{ isIconChanged ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill' }} iconpluschange"></i>
              </p>
            </a>
            <div class="collapse show mb-3" id="collapseExa">
              <div class="card card-body colFont">
                <label for="exampleFormControlInput1" class="form-label form-l">LIEU DE DEPART</label>
                <div class="divisionseardate">
                  <select class="form-select form-select-sm formcont" aria-label="Default select example"
                    data-bs-toggle="modal" data-bs-target="#optionsModalOnes">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <span class="spandate"><i class="bi bi-caret-down-fill"></i></span>
                </div>
                <label for="exampleFormControlInput1" class="form-label form-l classmargin">LIEU DE RETOUR</label>
                <div class="divisionseardate">
                  <select class="form-select form-select-sm formcont" aria-label="Default select example"
                    data-bs-toggle="modal" data-bs-target="#optionsModalOnes">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <span class="spandate"><i class="bi bi-caret-down-fill"></i></span>
                </div>
                <label for="exampleFormControlInput1" class="form-label form-l classmargin">DATE ET HEURE DE
                  DEPART</label>
                <!--  -->
                <div class="divisionseardate">
                  <input type="datetime-local" class="form-control form-select-sm formcont" id="form-control"
                    value="2022-01-01T12:00">
                  <span class="spandate"><i class="bi bi-calendar2-week"></i></span>
                </div>
                <!--  -->
                <label for="exampleFormControlInput1" class="form-label form-l classmargin">DATE ET HEURE DE
                  RETOUR</label>
                <!--  -->
                <div class="divisionseardate">
                  <input type="datetime-local" class="form-control form-select-sm formcont" id="form-control"
                    value="2022-01-01T12:00">
                  <span class="spandate"><i class="bi bi-calendar2-week"></i></span>
                </div>
                <!--  -->
                <button class="bttnN">NOUVELLE RECHERCHE</button>
              </div>
            </div>

            <a class="d-flex" data-bs-toggle="collapse" href="#collapseExa1" role="button"
              aria-expanded="false" aria-controls="collapseExa1">
              <p class="pOne">Tarifs</p>
              <p class="pTwo">
                <i class="bi {{ isIconChanged1 ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill' }} iconpluschange"></i>
              </p>
            </a>
            <div class="collapse mb-3" id="collapseExa1">
              <div class="card card-body colFont">
                <input type="range" id="time" min="140" max="503">
                <ul class="d-flex ulT">
                  <li class="lisTner">140 $</li>
                  <li class="lisTner">503 $</li>
                </ul>
              </div>
            </div>


            <a class="d-flex"  data-bs-toggle="collapse" href="#collapseExa2" role="button"
              aria-expanded="false" aria-controls="collapseExa2">
              <p class="pOne">Type de véhicule</p>
              <p class="pTwo">
                <i class="bi {{ isIconChanged2 ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill' }} iconpluschange"></i>
              </p>
            </a>
            <div class="collapse mb-3" id="collapseExa2">
              <div class="card card-body colFont">
                <ul class="d-flex ulT1" >
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12">7 PLACES</li>
                  <li class="lisTner1">(1)</li>
                </ul>
                <ul class="d-flex ulT1">
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12">4 ROUES MOTRICES</li>
                  <li class="lisTner1">(1)</li>
                </ul>
              </div>
            </div>


            <a class="d-flex" data-bs-toggle="collapse" href="#collapseExa3" role="button"
              aria-expanded="false" aria-controls="collapseExa3">
              <p class="pOne">Boite de vitesse</p>
              <p class="pTwo">
                <i class="bi {{ isIconChanged3 ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill' }} iconpluschange"></i>
              </p>
            </a>
            <div class="collapse mb-3" id="collapseExa3">
              <div class="card card-body colFont">
                <ul class="d-flex ulT1" >
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12">AUTOMATIQUE</li>
                  <li class="lisTner1">(3)</li>
                </ul>
                <ul class="d-flex ulT1">
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12">MANUELLE</li>
                  <li class="lisTner1">(7)</li>
                </ul>
              </div>
            </div>


            <a class="d-flex" data-bs-toggle="collapse" href="#collapseExa4" role="button"
              aria-expanded="false" aria-controls="collapseExa4">
              <p class="pOne">Accessoires</p>
              <p class="pTwo">
                <i class="bi {{ isIconChanged4 ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill' }} iconpluschange"></i>
              </p>
            </a>
            <div class="collapse mb-3" id="collapseExa4">
              <div class="card card-body colFont">
                <ul class="d-flex ulT1">
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12">CLIMATISATION</li>
                  <li class="lisTner1">(7)</li>
                </ul>
                <ul class="d-flex ulT1">
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12 d-flex">
                    <div>GPS</div>
                    <div class="imgcontain">
                      <span><i class="bi bi-info-circle"></i></span>
                      <span class="imgtit" data-title="TrustPilot">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, esse.</p>
                      </span>
                    </div>
                  </li>
                  <li class="lisTner1">(7)</li>
                </ul>
                <ul class="d-flex ulT1">
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12 d-flex">
                    <div>SIEGE BEBE</div>
                    <div class="imgcontain">
                      <span><i class="bi bi-info-circle"></i></span>
                      <span class="imgtit" data-title="TrustPilot">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, esse.</p>
                      </span>
                    </div>
                  </li>
                  <li class="lisTner1">(7)</li>
                </ul>
                <ul class="d-flex ulT1">
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12 d-flex">
                    <div>REHAUSSEUR</div>
                    <div class="imgcontain">
                      <span><i class="bi bi-info-circle"></i></span>
                      <span class="imgtit" data-title="TrustPilot">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, esse.</p>
                      </span>
                    </div>
                  </li>
                  <li class="lisTner1">(7)</li>
                </ul>
                <ul class="d-flex ulT1">
                  <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                  <li class="lisTner12 d-flex">
                    <div>CONDUCTEUR</div>
                    <div class="imgcontain">
                      <span><i class="bi bi-info-circle"></i></span>
                      <span class="imgtit" data-title="TrustPilot">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, esse.</p>
                      </span>
                    </div>
                  </li>
                  <li class="lisTner1">(7)</li>
                </ul>
              </div>
            </div>

            <a class="d-flex adivi">
              <p class="pTwo">
                <i class="bi bi-megaphone idivi"></i>
              </p>
              <!-- Button trigger modal -->
              <p class="pOne" data-bs-toggle="modal" data-bs-target="#exampleModal">Envoyer à un ami
              </p>
            </a>

            <!-- Modal -->

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Envoyer ces offres à un ami</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Votre adresse email</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Sujet</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1"
                        value="Maki Car Rental: Voitures disponibles">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message (facultatif)</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>
                  <p class="paramA">Nous joignons automatiquement à votre message la liste des voitures disponibles.</p>
                  <div class="modal-footer">
                    <button type="button" class="btn envB">Envoyer</button>
                  </div>
                </div>
              </div>
            </div>

          </ul>
        </div>
        <div class="p-3 mt-3 divi2">
          <h1 class="horH1">Horaires d'ouverture de l'agence de location</h1>
          <p class="horP">Rolland Garros International Airport (RUN)</p>
          <p class="horP"> Lu:<span>06:30 – 21:00</span></p>
          <p class="horP"> Ma:<span>06:30 – 21:00</span></p>
          <p class="horP"> Me:<span>06:30 – 21:00</span></p>
          <p class="horP"> Je:<span>06:30 – 21:00</span></p>
          <p class="horP"> Ve:<span>06:30 – 21:00</span></p>
          <p class="horP"> Sa:<span>06:30 – 21:00</span></p>
          <p class="horP"> Di:<span>06:30 – 21:00</span></p>

        </div>
      </div>
    </div>

    <!-- Deuxième colonne plus grande (col-8) -->
    <div class="col-md-8 ">
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
                    <img src="../assets/image/HomeImg/photos4.jpg">
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
                            <img class="modImage" src="../assets/image/HomeImg/photos4.jpg" alt="image">
                          </div>
                          <div class="carousel-item">
                            <img class="modImage" src="../assets/image/HomeImg/photos3.jpg" alt="image">
                          </div>
                          <div class="carousel-item ">
                            <img class="modImage" src="../assets/image/HomeImg/photos2.webp" alt="image">
                          </div>
                          <div class="carousel-item ">
                            <img class="modImage" src="../assets/image/HomeImg/photos1.jpg" alt="image">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button"
                          data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                          <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                          <span class="spnicons"><i class="bi bi-chevron-left"></i></span>
                          <!-- <span class="visually-hidden">Previous</span> -->
                        </button>
                        <button class="carousel-control-next" type="button"
                          data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                          <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                          <span class="spnicons"><i class="bi bi-chevron-right"></i></span>
                          <!-- <span class="visually-hidden">Next</span> -->
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
  </div>
 
</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const reserveBtn = () => {
    router.push('/reserve');
}
</script>

<style lang='scss' scoped>
.list-unstyled .li {
    height: 50px;
    /* margin-top: 10px; */
    /* background-color: aqua; */
    /* padding: 15px; */
    /* padding-top: 5px; */
    font-size: 16px;
}

.pOne {
    width: 80%;
    padding: 10px;
    background-color: #fff;
    font-size: 16px;
    color: black;
}
.pOne:hover{
    color: #4995dd;
}
.cursptrs{
    cursor: pointer;
}
.pTwo {
    width: 20%;
    padding-left: 25px;
    padding-top: 8px;
    background-color: #fff;
    font-size: 20px;
}

#collapseExa {
    font-size: 12px;
    color: black;
    /* padding-top: 10px; */
}

.form-l {
    /* background-color: aquamarine; */
    margin-top: 10px;
    font-size: 12px !important;
    color: #2d3e52;
}

.bttnN {
    height: 30px;
    background-color: #899e27;
    border: none;
    /* margin-top: 15px; */
    margin-bottom: 10px;
    color: #fff;
}

li {
    list-style: none;
}

.ulT1,
.ulT {
    justify-content: space-between;
    padding-left: 0px;
    margin-top: 10px;
    /* color: rgba(0, 0, 0, 0.778); */
    color: #2d3e52;

}

.ulT1 {
    /* background-color: antiquewhite; */
    padding: 8px 10px;
    cursor: pointer;
}

.lisTner {
    width: 15%;
    color: black;
    font-size: 13px;
}

.lisTner1 {
    width: 15%;
    font-size: 13px;

}

.lisTner12 {
    width: 60%;
    font-size: 14px;
}
.lisTner12 span {
    font-size: 15px;
    /* background-color: ; */
    margin-left: 8px;
    color: chartreuse;
}
.bi-info-circle{
    color: #899e27;
}
.idivi {
    color: darkorange;
}

.custom-hover:hover {
    color: #6dace6;
}

/* modal */
.modal-title {
    font-size: 16px;
    color: black;
}

.form-control,
.form-label {
    font-size: 14px;
    color: black;
}

.paramA {
    font-size: 12px;
    padding-left: 15px;
    color: darkcyan;
}

.envB {
    background-color: #899e27;
    color: #fff;
}

.adivi {
    cursor: pointer;
}

/* style 2 */
.horH1 {
    font-size: 18px;
    /* background-color: #899e27; */
    margin-bottom: 20px;
    /* margin: 5px; */
    padding-left: 5px;
}

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

.horP {
    font-size: 13px;
    /* background-color: deeppink; */
    margin: 5px;
    color: #2d3e52;
}

.horP span {
    /* background-color: aquamarine; */
    padding: 5px 11px;
    font-weight: bold;
    font-size: 14px;
    color: #2d3e52;
}

.divi2 {
    background-color: #fff;
    /* color: black; */
    color: #2d3e52;
}

/*  */
.custom-card {
    margin-bottom: 20px;
}

/* Ajout d'une règle de média requise pour 1999px */

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

.iconpluschange {
    font-size: 1.2rem;
    /* background-color: #fdb714; */
    padding: 8px;
    color: #4995dd;
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

.colFont {
    padding-bottom: 25px;
}
/*  */
.divisionseardate {
    position: relative;
    margin: 15px 0px;
    top: -15px;
}

.spandate {
    font-size: 1rem;
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
.classmargin{
    /* background-color: #6dace6; */
    margin-top: -20px;
}

.imgcontain {
    position: relative;
    display: inline-block;
    /* background-color: #fdb714; */
}
.imgtit p{
    color: rgba(0, 0, 0, 0.585);
}
.imgtit {
    width: 850%;
    position: absolute;
    top: -210%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(178, 216, 178);
    border: 2px solid rgb(60, 164, 60);
    padding: 5px;
    border-radius: 3px;
    font-size: 12px;
    display: none;
}

.imgcontain:hover .imgtit {
    display: inline-block;
}
</style>