<template>
    <div>
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
                    <i class="bi bi-plus-circle-fill iconpluschange"></i>
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
                    <i class="bi bi-plus-circle-fill iconpluschange"></i>
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
                    <i class="bi bi-plus-circle-fill iconpluschange"></i>
                  </p>
                </a>
                <div class="collapse mb-3" id="collapseExa2">
                  <div class="card card-body colFont">
                    <ul class="d-flex ulT1" @click="changeStyleColor(1)" :style="{ backgroundColor: button1Color, color: button1TextColor }">
                      <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                      <li class="lisTner12">7 PLACES</li>
                      <li class="lisTner1">(1)</li>
                    </ul>
                    <ul class="d-flex ulT1" @click="changeStyleColor(2)" :style="{ backgroundColor: button2Color, color: button2TextColor }">
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
                    <i class="bi bi-plus-circle-fill iconpluschange"></i>
                  </p>
                </a>
                <div class="collapse mb-3" id="collapseExa3">
                  <div class="card card-body colFont">
                    <ul class="d-flex ulT1" @click="changeStyleColor(3)" :style="{ backgroundColor: button3Color, color: button3TextColor }">
                      <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                      <li class="lisTner12">AUTOMATIQUE</li>
                      <li class="lisTner1">(3)</li>
                    </ul>
                    <ul class="d-flex ulT1" @click="changeStyleColor(4)" :style="{ backgroundColor: button4Color, color: button4TextColor }">
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
                    <i class="bi bi-plus-circle-fill iconpluschange"></i>
                  </p>
                </a>
                <div class="collapse mb-3" id="collapseExa4">
                  <div class="card card-body colFont">
                    <ul class="d-flex ulT1" @click="changeStyleColor(5)" :style="{ backgroundColor: button5Color, color: button5TextColor }">
                      <li class="lisTner1"><i class="bi bi-check-square-fill"></i></li>
                      <li class="lisTner12">CLIMATISATION</li>
                      <li class="lisTner1">(7)</li>
                    </ul>
                    <ul class="d-flex ulT1" @click="changeStyleColor(6)" :style="{ backgroundColor: button6Color, color: button6TextColor }">
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
                    <ul class="d-flex ulT1" @click="changeStyleColor(7)" :style="{ backgroundColor: button7Color, color: button7TextColor }">
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
                    <ul class="d-flex ulT1" @click="changeStyleColor(8)" :style="{ backgroundColor: button8Color, color: button8TextColor }">
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
                    <ul class="d-flex ulT1" @click="changeStyleColor(9)" :style="{ backgroundColor: button9Color, color: button9TextColor }">
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
</template>

<script setup>
import { ref } from 'vue';
  
const colors = ['#f5f5f5', '#4995dd'];
const textColors = ["black", "white"];
  
const button1Color = ref(colors[0]);
const button1TextColor = ref(textColors[0]);
  
const button2Color = ref(colors[0]);
const button2TextColor = ref(textColors[0]);

const button3Color = ref(colors[0]);
const button3TextColor = ref(textColors[0]);

const button4Color = ref(colors[0]);
const button4TextColor = ref(textColors[0]);

const button5Color = ref(colors[0]);
const button5TextColor = ref(textColors[0]);

const button6Color = ref(colors[0]);
const button6TextColor = ref(textColors[0]);

const button7Color = ref(colors[0]);
const button7TextColor = ref(textColors[0]);

const button8Color = ref(colors[0]);
const button8TextColor = ref(textColors[0]);

const button9Color = ref(colors[0]);
const button9TextColor = ref(textColors[0]);
  
const changeStyleColor = (buttonNumber) => {
const currentColor = eval(`button${buttonNumber}Color`);
const currentTextColor = eval(`button${buttonNumber}TextColor`);
  
const colorIndex = colors.indexOf(currentColor.value);
const nextColorIndex = (colorIndex + 1) % colors.length;
currentColor.value = colors[nextColorIndex];
  
const textColorIndex = textColors.indexOf(currentTextColor.value);
const nextTextColorIndex = (textColorIndex + 1) % textColors.length;
currentTextColor.value = textColors[nextTextColorIndex];
  };

</script>
<style lang='scss' scoped>
.pTwo {
    width: 20%;
    padding-left: 25px;
    padding-top: 8px;
    background-color: #fff;
    font-size: 20px;
}
.list-unstyled .li {
    height: 50px;
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
.idivi {
    color: darkorange;
}
.cursptrs{
    cursor: pointer;
}
.iconpluschange {
    font-size: 1.2rem;
    /* background-color: #fdb714; */
    padding: 8px;
    color: #4995dd;
}
.colFont {
    padding-bottom: 25px;
}
.divisionseardate {
    position: relative;
    margin: 15px 0px;
    top: -15px;
}
.formcont::-webkit-calendar-picker-indicator {
    position: relative;
    z-index: 20;
    cursor: pointer;
    opacity: 0;
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
.ulT1,
.ulT {
    justify-content: space-between;
    padding-left: 0px;
    margin-top: 10px;
    /* color: rgba(0, 0, 0, 0.778); */
    color: #2d3e52;

}

.ulT1 {
    background-color: #f5f5f5; 
    padding: 8px 10px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.778),
}
.classmargin{
    // background-color: #6dace6; 
    margin-top: -20px!important;
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
.bi-info-circle{
    color: #899e27;
}
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
.horH1 {
    font-size: 18px;
    /* background-color: #899e27; */
    margin-bottom: 20px;
    /* margin: 5px; */
    padding-left: 5px;
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